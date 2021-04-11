


const BookShelfChanger = ({ shelf, ShelfChange }) => {
  return (
    <div className="book-shelf-changer">
        <select value={shelf || 'none'} onChange={(e) => ShelfChange(e.target.value)}>
          <option value="moveTo" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
    </div>
  );
}
 

export default BookShelfChanger
