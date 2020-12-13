import React, {Component} from 'react';
import booksH from '../images/book wallpaper 114 - 4750x3000.jpg';


class Header extends Component{
    render() {
        return(
            <div>
                <img src={booksH} className={"img-fluid max-width"} width={'100%'} alt={""}/>

            </div>
        );
    }
}

export default Header;
