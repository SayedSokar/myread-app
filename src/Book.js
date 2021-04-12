import BookShelfChanger from './BookShelfChanger'

const Book = ({ book, ShelfChange }) => {
const bookCover = { width: 128, height: 193 }
    
    if (book.imageLinks && book.imageLinks.thumbnail) {
        bookCover.backgroundImage = `url(${book.imageLinks.thumbnail})`
            }


    return (
      <div className="book">

        <div className="book-top">
          <div className="book-cover" style={bookCover}></div>
          <BookShelfChanger shelf={book.shelf} ShelfChange={shelf => ShelfChange(book, shelf)}/>
        </div>

        <div className="book-title">{book.title}</div>

{/* // in case of more than one Auther */}
        {book.authors && (  <div className="book-authors">
              {book.authors.map(author => ( <p key={author}>{author}</p>
              ))}
            </div>
          )
        }
      </div>
    )
  }

 
export default Book;