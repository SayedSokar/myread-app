import Book from './Book'

const BooksGrid = ({ books, ShelfChange }) => {
  
    return (
      <ol className="books-grid">

        {/* add every book on the list */}
        {books.map(book => (

          <li key={book.id}>

            <Book book={book} ShelfChange={ShelfChange} />
            
          </li>
        ))}
      </ol>
    )
}
 



export default BooksGrid
