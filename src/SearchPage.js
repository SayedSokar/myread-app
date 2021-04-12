// import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { useState } from 'react'

// //-------------- back button logic-------------------//
//    history = useHistory();
//    routeChange = () =>{ 
//     let path = ``; 
//     history.push(path);

//   }

const SearchPage = ({ books, ShelfChange }) => {

  
  const [booksFound, setBooksFound] = useState ([])
  const [Loading, setLoading] = useState (false)
  const [query, setQuery] = useState ('')
    
  //----------------------------------------------------------//

  //-------------- updateQuery to get the Search Result-------//
  const updateQuery = (query) => {
    setQuery(query)
    setLoading(true)

    if (!query) { // in case of empty query, return nothing []
      setBooksFound([])
      setLoading(false)
      return; // nothing []
    }

    BooksAPI.search(query).then(res => { // get the search result from BookAPI
      // console.log(res)

      if (res) {  // if there is res
        if (res.error) { // in case rse is error
          setBooksFound([])

        } else {
          setBooksFound(res)
          mergeBothSearchAndBooks(res, books)
          // console.log('these are the searched books==',res, 'these are the books in shelves ==== ', books)
          setLoading(false)
        }
      }
    })
  } 
  //----------------------- End of updateQuery Function------------//

  //---------------- mergeBothSearchAndBooks function---------//

  const mergeBothSearchAndBooks = (res, books) => {
    // console.log('this is the Result = ',res)
    return res.map(response => {
      const book = books.find(foundbook => response.id === foundbook.id);

      if (book) response.shelf = book.shelf;
      // console.log('this is the response === ', response)
      return response;
      
    })
  }
//----------------------mergeBothSearchAndBooks ends--------------------//




 

    
    return (
  
        
        
        <div className="search-books">
          <div className="search-books-bar">
          {/* <button className="close-search" onClick={routeChange}>GoBack</button> */}
          <Link className="close-search" to="/">Close</Link>

            <div className="search-books-input-wrapper">
              <DebounceInput
                debounceTimeout={300}
                type="text"
                placeholder="Search for title or author"
                value={query}
                onChange={event => updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              
              {!Loading &&
                (booksFound.length === 0 ? (
                  <li className="message">No books found! Try again.</li>
                ) : (
                  booksFound.map(book => (
                    <li key={book.id}>
                      <Book book={book} ShelfChange={ ShelfChange } />
                    </li>
                  ))
                ))}
            </ol>
          </div>
        </div>
      
    )
  
   
}

export default SearchPage
