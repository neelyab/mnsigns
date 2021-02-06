import React, {Component} from 'react';
import './Footer.css';
import { FaFacebook} from "react-icons/fa";
import {BsFillEnvelopeFill} from "react-icons/bs";
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="footer-container">
                <div className="address-info"> 
                <address>
                    <p>Located At:</p>
                    <p>6307 Old Plank Rd,</p> 
                    <p>Fredericksburg, VA </p>
                    <p>22407</p>
                </address>
                <div className="social-icons">
                    <a href="https://www.facebook.com/mikessigns4less" target = "_blank">
                        <FaFacebook size ="2em" color="white"/>
                    </a>
                    <a href = "mailto:mnsigns@msn.com">
                    <BsFillEnvelopeFill size = "2em" color="white"/>
                    </a>
                </div>
                </div>
                <div className="links">
                <p>Contact Us</p>
                <p>Request A Quote</p>
                </div>
                <div className="popular-products">
                    <h4>Popular Products</h4>
                    <p>Sign Wraps</p>
                    <p>Custom Signs</p>
                    <p>T-shirts</p>
                </div>
                </div>
            </footer>
        )
    }
}
export default Footer;