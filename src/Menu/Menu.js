import React, {Component} from 'react';
import './Menu.css';
import logo from '../../src/signs4less.jpg'

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }
    toggleClass = () => {
        const currentState = this.state.active;
        this.setState(
            {
                active: !currentState
            }
            );
    }
    render(){
        return(
            <header>
                <div className="top-menu">
                    <div className="logo">
                        <img alt="mikes signs for less logo" src={logo}/>
                    </div>

                    <div className="phone-number">
                        <p>555-5555</p>
                    </div>

                    <a href="./quote.html"><button>Quote
                    </button>
                    </a>
                </div>

                <div className='bottom-menu'>
                    <ul className={this.state.active ? 'nav-active menu' : 'menu'}>
                        <li><a href="/">Home</a></li>
                        <li><a href="./products.html">Products</a></li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>Portfolio</li>
                    </ul>
                    <div className='burger'
                        onClick={this.toggleClass} >
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>

            </header>

        )
    }
}

export default Menu;
