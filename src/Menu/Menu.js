import React, { Component } from "react";
import "./Menu.css";
import logo from "../../src/signs4less.jpg";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState,
    });
  };
  render() {
    if (this.state.active === true) {
      const navLinks = document.querySelectorAll("ul.menu li");
      // animates the links
      navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 2
        }s`;
      });
    }
    return (
      <header>
        <div className="top-menu">
          <div className="logo">
            <Link to="/">
              <img alt="mikes signs for less logo" src={logo} />
            </Link>
          </div>

          <div className="phone-number">
            <p className="number">(540) 548-2940</p>
          </div>

          <Link to="/request-quote">
            <button className="quote-button">Request A Quote</button>
          </Link>
        </div>

        <div className="bottom-menu">
          <ul
            className={this.state.active ? "nav-active menu" : "menu"}
            onClick={this.toggleClass}
          >
            <Link to="/products">
              <li>Products and Services</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/request-quote">
              <li>Request a Quote</li>
            </Link>
          </ul>
          <div className="burger" onClick={this.toggleClass}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
