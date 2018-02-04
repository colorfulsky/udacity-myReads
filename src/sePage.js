import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SePage extends Component{
        static propTypes={
            books:PropTypes.array.isRequired
}

render(){
    const { books } = this.props

    return(
        
        <div className="search-books">
            <div className="search-books-bar">
                <Link   to='/' className="close-search" >close</Link>
                <div className="search-books-input-wrapper">
                    {/*
                        notes: the search from booksapi is limited to a particular set of search terms.
                        you can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/search_terms.md
                        however, remember that the booksapi.search method does search by title or author. so, don't worry if
                        you don't find a specific author or title. every search is limited by search terms.  */}
                    <input type="text" placeholder="search by title or author"/>

                 </div>
             </div>
<div className="search-books-results">
<ol className="books-grid">
{books.map((book)=>(
    <li key={book.id}>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select>
                        <option value="none" disabled>move to...</option>
                        <option value="currentlyreading">currently reading</option>
                        <option value="wanttoread">want to read</option>
                        <option value="read">read</option>
                        <option value="none">none</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            {/* <div className="book-authors">{book.imageLinks.thumbnail}</div> */}
        </div>
    </li>
    
))}
</ol>
</div>
    </div>
     
     )
}
}

export default SePage
