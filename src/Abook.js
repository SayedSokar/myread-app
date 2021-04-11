import BookChanger from "./BookChanger"


const Abook = () => {
    
    const BookCover ='url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")'
    const BookTitle = '1776'
    const BookAuth = 'David McCullough'

    return (
        <div className="book">
                      <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: BookCover }}></div>
                        <BookChanger />
                      </div>
            <div className="book-title">{ BookTitle }</div>
            <div className="book-authors">{ BookAuth }</div>
                    </div>
     );
}
 
export default Abook;