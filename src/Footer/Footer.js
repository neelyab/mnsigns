import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="footer-container">
                <div className="address-info"> 
                <address>
                    <p>6307 Old Plank Rd,</p> 
                    <p>Fredericksburg, VA </p>
                    <p>22407</p>
                </address>
                <div class="social-icons">

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