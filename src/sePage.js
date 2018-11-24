import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Components/Book.js'

class SePage extends Component{
        static propTypes={
            books:PropTypes.array.isRequired
}
    state={
        query:''
    }

    updateQuery = (query)=>{
        this.setState({query:query.trimLeft().trimRight()})
    }


render(){
    const { books } = this.props;
    const {query}=this.state;
    console.log(books);

    let showBooks
    if(query){
        const match =new RegExp(escapeRegExp(query),'i')
        showBooks=books.filter((book)=>match.test(book.title))
    }else{
        showBooks=[]
    }

    showBooks.sort(sortBy('title'))

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
                    <input type="text"
                           placeholder="search by title or author"
                           value={this.state.query.value}
                           onChange={(event)=>this.updateQuery(event.target.value)}
                    />

                 </div>
             </div>
             <div className="search-books-results">
                 <ol className="books-gird">
                     {showBooks.map((book)=>
                          <Book book={book} />
                     )}
                 </ol>
             </div>
        </div>
     )
  }
}

export default SePage
