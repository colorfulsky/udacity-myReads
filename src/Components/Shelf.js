import React, {Component} from 'react'
import Book from './Book.js'

class Shelf extends Component{
    constructor(props){
        super(props);
        this.bookNameRefine = this.bookNameRefine.bind(this);
    }

    bookNameRefine(book){
        switch(book.shelf){
            case "currentlyReading":
                return "Currently Reading";
            case "wantToRead":
                return "Want To Read";
            case "read":
                return "Read";
            case "none":
                return "None";
            default:
                return "None";
        }
    }

    render(){
        const {typeBooks,fetchBooks} = this.props;
        console.log(typeBooks);

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{typeBooks.map(x=>x.shelf)[0]}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                       {typeBooks.map((book)=> <Book book={book} key={book.id} fetchBooks={fetchBooks}/>)}
                    </ol>
                </div>
            </div>
        )
    }
}


export default Shelf
