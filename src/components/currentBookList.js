import React, {Component} from 'react';
import {Link} from "react-router-dom";
import backgroundImg from "../images/book wallpaper 114 - 4750x3000.jpg";

const Books = props => (
    <div className={"card w-25"}>
        <div className={"card-body"}>
            <img src={props.book.book_image} width={"250"} height={"250"} className={"img-fluid max-width"}/>
            <h4>{props.book.title}</h4>
            <p>{props.book.description}</p>
            <h5>Author : {props.book.author}</h5>
            <a href={ props.book.amazon_product_url}  target={"_blank"} rel={"noopener noreferrer"}>BUY</a><br/>
            <Link to={"/details/" +props.book.author} >More Info</Link>

        </div>

    </div>
);

class CurrentBookList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=8QEC1WAliC0qHXAleLvZYAEzAhpedJlg')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    books: data.results.books
                })
            })
    }

    bookList(){
        return this.state.books.map(currentBook => {
            return <Books book={currentBook} key={currentBook.author}/>;
        })
    }

    render() {
            let {books} = this.state;
        return(
            <div className={"container"}>

                <h4 align={"center"} style={{fontWeight: 'bold'}}>Current Book List</h4>
                <br/>
                <div className={"row"}>
                    {this.bookList()}
                </div>


            </div>
        );
    }
}

export default CurrentBookList;
