import React, {Component} from 'react';
import './Menu.css';
import logo from '../../src/signs4less.jpg'

class Menu extends Component {
    render(){
        return(
            <header>
                <div className="top-menu">
                    <div class="logo">
                        <img alt="mikes signs for less logo" src={logo}/>
                    </div>

                    <div className="phone-number">
                        <p>555-5555</p>
                    </div>

                    <a href="./quote.html"><button>Quote
                    </button>
                    </a>
                </div>

                <div className="bottom-menu">
                    <ul className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="./products.html">Products</a></li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Portfolio</li>
                    </ul>
                </div>

            </header>

        )
    }
}

export default Menu;
