import './App.css';
import Headbar from './Headbar';
import MainList from './MainList';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { useState, useEffect } from 'react'

function App() {

// states:
  const [books, setBooks] = useState(null)
  const [currentlyReading, setCurrent] = useState(null)
  const [wantToRead, setWant] = useState(null)
  const [read, setRead] = useState(null)
  const [Needrend, setNeedrend] = useState(false)

  useEffect(() => {
    BooksAPI.getAll()
            .then(data => {
                  // update categories
              setBooks(data)
              
              let Current = Object.values(data).filter(book => book.shelf === 'currentlyReading')
              setCurrent(Current)
              
              
              let WantToRead = Object.values(data).filter(book => book.shelf === 'wantToRead')
              setWant(WantToRead)


              let Read = Object.values(data).filter(book => book.shelf === 'read')
              setRead(Read)

              setNeedrend(false) // disable indication
              
            })
    
                             
                .catch((err) => {
                    console.log(err.message)
                    })
  }, [Needrend]) // used only once at App loadded


  //----------- updateShelf Function------------------//
  const updateShelf = (book, shelf) => {

    BooksAPI.update(book, shelf)
      .then((data) => {
        setNeedrend(true) // set indication to update the book list
    })
  }

  const searchBooks = (query) => BooksAPI.search(query).then((data) => {
    setBooks(data)
    // console.log(books)
    
    
        
    })

 


  return (
    
    <Router>
      
    <div className="App">
        < Headbar />
        <div className="content">
          <Switch>
              <Route exact path='/'>
              {books && < MainList  currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} ShelfChange={ updateShelf }/>}
              </Route>
            <Route exact path='/search'>
              
              < SearchPage
                onSearch={searchBooks}
                books={books}
                ShelfChange={updateShelf} />
              
              </Route>
          </Switch>   
        </div>  
    </div>
    </Router>
  );
}

export default App;
