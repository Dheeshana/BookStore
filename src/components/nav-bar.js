import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component{
    render() {
        return(
            <nav className={"navbar navbar-light bg-info navbar-expand-lg"}>
                <Link to={"/"} className={"navbar-brand"} style={{color: "white"}}>Home</Link>



            </nav>
        );
    }
}

export default NavBar;
