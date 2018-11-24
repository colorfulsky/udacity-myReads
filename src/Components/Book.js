import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'


class Book extends Component{
    constructor(props){
        super(props);
        this.state={
            input:'',
            testVal:['test']
        };
        this.changeShelf=this.changeShelf.bind(this);
    }

    changeShelf(book,value){
        BooksAPI.update(book,value);
        //this.setState({input:''});
        //console.log(this.props.fetchBooks);
        this.props.fetchBooks();
    }

    testValue = e => {
        this.setState({
            testVal:this.state.testVal.concat(e.target.value)
        });
        console.log(this.state.testVal)
    }

    render(){
        //const  book  = this.props.book;
        const  {fetchBooks,book} = this.props;
        return (
            <li key={book.id}>
                         <div className="book">
                             <div className="book-top">
                                 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                 <div className="book-shelf-changer">
                                     <select  onChange={(event)=>this.changeShelf(book,event.target.value)} value={book.shelf}>
                                         <option value="none" disabled>move to...</option>
                                         <option value="currentlyReading">currently reading</option>
                                         <option value="wantToRead">want to read</option>
                                         <option value="read">read</option>

                                     </select>
                                 </div>
                             </div>
                             <div className="book-title">{book.title}</div>
                             <div className="book-authors">{book.authors}</div>
                             {/* <div className="book-authors">{book.imageLinks.thumbnail}</div> */}
                         </div>
                     </li>
                 )}

        
    }




export default Book
