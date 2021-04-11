import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BooksGrid = ({ books, ShelfChange }) => {
  
    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} ShelfChange={ShelfChange}/>
          </li>
        ))}
      </ol>
    )
}
 



export default BooksGrid
