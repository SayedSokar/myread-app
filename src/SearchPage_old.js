import { useHistory } from "react-router-dom";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input';
import BooksGrid from './BooksGrid'
import { useState } from 'react'

const SearchPage = ({onSearch, booksInShelf, ShelfChange}) => {

  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
      
  console.log('this is the data back from query', 'type of books ===', typeof (books))
  console.log('this is the data back from query', 'type of queryyy ===', typeof (query))
  
// back button logic
  const history = useHistory();
  const routeChange = () =>{ 
    let path = ``; 
    history.push(path);
  }
  

  //---------------------------//
  const updateQuery = (query) => {
    
    setQuery({ query })
    // prevent ajax call if search box is empty
    if (!query) {
      setBooks([])
      return
    }
    onSearch(query).then(res => {
      if (res) {
        if (res.error) {
          setBooks([])
        } else {
          setBooks(res)
          
        }
      }
    })
  }
  //----------------------------//

  const booksWithShelf = books.map(book => {

    const bookInShelf = booksInShelf.find(p => p.id === book.id)
    
    return Object.assign({}, bookInShelf, book)
    
    })
  
  return (
    <div className="search-books">
      
        <div className="search-books-bar">
             <button className="close-search" onClick={routeChange}>GoBack</button>
        
          <div className="search-books-input-wrapper">
                <DebounceInput
              type="text"
              placeholder="Search by title or author"
              debounceTimeout={300}
              onChange={e => updateQuery(e.target.value)}/>
          </div>
        </div>
      
        <div className="search-books-results">
          
          <BooksGrid books={booksWithShelf} ShelfChange={ShelfChange} />
          
        </div>
    </div>
     );
}
 
export default SearchPage;