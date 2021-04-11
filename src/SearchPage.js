import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import * as BooksAPI from './BooksAPI'


import Book from './Book'
import BooksGrid from './BooksGrid'

class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      Loading: false,
      booksFound: []
    };
    
  }
  //-------------- updateQuery to get the Search Result-------//
  updateQuery = (query) => {

    this.setState(() => ({ query, Loading: true }));

    if (!query) { // if no result return nothing []
      this.setState(() => ({ booksFound: [], Loading: false }))
      return; // nothing []
    }

    BooksAPI.search(query).then(books => { // get the search result from BookAPI
      this.setState(prevState => ({
        booksFound:
          
          !prevState.query || !books || books.error === "empty query"
            ? []

            : this.mergeBothSearchAndBooks(books),
        
        Loading: false
      }))
    })
  } 
  //----------------------- End of updateQuery Function------------//

  //---------------- mergeBothSearchAndBooks function---------//

  mergeBothSearchAndBooks = (Results, props) => {
    return Results.map(response => {
      const book = this.props.books.find(foundbook => response.id === foundbook.id);

      if (book) response.shelf = book.shelf;
      return response;
    })
  }
//----------------------mergeBothSearchAndBooks ends--------------------//



  render() {
    const { booksFound, Loading } = this.state
    return (
  
        
        
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>

            <div className="search-books-input-wrapper">
              <DebounceInput
                debounceTimeout={250}
                type="text"
                placeholder="Search for title or author"
                value={this.state.query}
                onChange={event => this.updateQuery(event.target.value)}
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
                      <Book book={book} ShelfChange={this.props.ShelfChange} />
                    </li>
                  ))
                ))}
            </ol>
          </div>
        </div>
      
    )
  }
}

export default SearchPage
