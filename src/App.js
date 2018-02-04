import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SePage from './sePage'
import MainPage from './mainPage'

class BooksApp extends React.Component {
    state = {
        books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
        }

    componentDidMount(){
        BooksAPI.getAll().then((books)=>{
            this.setState({ books });
            console.log(books);
        })
    }

  render() {
    return (
        <div className="app">
            <Route exact path='/' render={()=>(
                <MainPage
                    />
            )}/>
            <Route  path="/search" render={()=>(
                <SePage
                    books={this.state.books}
                    />
            )}/>
                 </div>
    )
  }
}

export default BooksApp
