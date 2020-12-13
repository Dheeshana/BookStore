import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=8QEC1WAliC0qHXAleLvZYAEzAhpedJlg')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    books: data.results
                })
            })
    }

    render() {

        let {books} = this.state;
        return(
            <div className={"container"}>
                <h4 align={"center"} style={{fontWeight: 'bold'}}>Book List</h4>
                <br/>
                <table className={"table table-success table-striped table-bordered"}>
                    <thead>
                        <tr>
                            <th>Book Title</th>
                            <th>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                    {books.map(item => (
                        <tr>
                            <td>{item.title}</td>
                            <td>
                                <Link className={""}>More Info</Link>
                            </td>
                        </tr>

                    ))}
                    </tbody>

                </table>

            </div>
        );
    }
}

export default Home;
