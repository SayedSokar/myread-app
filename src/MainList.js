import BooksShelf from './BooksShelf';
import Footer from './Footer';

import React, { Component } from 'react'

// functions


const MainList = ({ ShelfChange, currentlyReading, wantToRead, read  }) => {

  

    

  
  return (

    <div>
    
        
      <div>
        {currentlyReading && <BooksShelf title="Currently Reading" books={currentlyReading} ShelfChange={ShelfChange} />}
        
        {wantToRead && <BooksShelf title="Want to Read" books={wantToRead} ShelfChange={ShelfChange} />}
        
        {read && <BooksShelf title="Read" books={read} ShelfChange={ShelfChange} />}
        
      </div>

    <Footer />
  
    
</div>
  )}
    
export default MainList;