import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

const BookShelf = ({title, books, ShelfChange}) => {
  return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={books} ShelfChange={ShelfChange}/>
        </div>
      </div>
    )
}
 


export default BookShelf
