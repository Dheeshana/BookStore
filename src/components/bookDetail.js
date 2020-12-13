import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BookDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books: []

        }
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/books/v3/reviews.json?api-key=8QEC1WAliC0qHXAleLvZYAEzAhpedJlg&author='+this.props.match.params.id)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    books : data.results
                })
                console.log(this.state.author);
            })
    }

    render() {

        let {books} = this.state;
        return(
            <div className={"container"}>
                <h4 align={"center"} style={{fontWeight: 'bold'}}>Books of the Author and Reviews</h4>
                <br/>
                <table className={"table table-success table-striped table-bordered"}>
                    <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Information</th>
                        <th>Published</th>
                        <th>Post</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map(item => (
                        <tr>
                            <td>{item.book_title}</td>
                            <td>{item.summary}</td>
                            <td>{item.publication_dt}</td>
                            <a href={item.url}  target={"_blank"} rel={"noopener noreferrer"}>Go To Post</a><br/>
                        </tr>

                    ))}
                    </tbody>

                </table>

            </div>
        );
    }
}

export default BookDetail;
