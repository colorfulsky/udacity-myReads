import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Components/Shelf.js'

class MainPage extends Component{



    render(){
        const {allBooks,fetchBooks} = this.props;
        //console.log(allBooks);
        const shelf_CurReading = allBooks.filter((x)=>x.shelf === 'currentlyReading');
        const shelf_WantToRead = allBooks.filter((x)=> x.shelf === 'wantToRead');
        const shelf_read = allBooks.filter((x)=>x.shelf === 'read');

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                       {[shelf_CurReading,shelf_WantToRead,shelf_read].map((typeBooks)=> <Shelf typeBooks={typeBooks} fetchBooks={fetchBooks}/>)}
                    </div>
                </div>
                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>


        )
    }
}

export default MainPage
