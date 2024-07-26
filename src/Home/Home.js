import React, { Component } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./Home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="hidden-home-title"> Mikes Signs For Less </h1>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Custom Signs, Banners, Vehicle Wraps | Mikes Signs 4 Less |
            Fredericksburg VA{" "}
          </title>
          <meta
            name="description"
            content="Sign shop located in Fredericksburg, VA specializing in sign restoration, refacing, directories, banners, yard signs, vehicle wraps, car magnets, and custom apparel."
          />
        </Helmet>
        <div className="image-carousel">
          <ImageCarousel />
        </div>
        <div className="about-container">
          <div className="about">
            <h2>Est. 1989</h2>
            <p>
              We provide contemporary design, state of the art production and
              quality fabrication. All of our materials are of the highest
              quality available. Our customers say we are friendly, courteous,
              and attentive to detail. We are a local company located in
              Fredericksburg, VA that cares about your job.
            </p>
          </div>
          <div className="gradient-border-bottom"></div>
        </div>
        <section className="products-services-section">
          <h2 className="products-and-services">Products and Services</h2>
          <div className="products"></div>
          <div>
            <Link to="/products">
              <button className="products-button">View All</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
