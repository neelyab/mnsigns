import React, {Component} from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './Home.css';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Custom Signs, Banners, Vehicle Wraps | Mikes Signs 4 Less | Fredericksburg VA </title>
                    <meta
                    name="description"
                    content="Sign shop located in Fredericksburg, VA specializing in sign restoration, refacing, directories, banners, yard signs, vehicle wraps, car magnets, and custom apparel."
                    />
                </Helmet>
                <div className="image-carousel">
                <ImageCarousel/>
                </div>
                <div className="about-container">
                    <div className="about">
                        <h2>About</h2>
                        <p>
                            We were established in 1989. We provide contemporary design, state of the art production and quality fabrication. All of our materials are of the highest quality available.
                            Our customers say we are friendly, courteous, and attentive to detail. We are a local company located in Fredericksburg, VA that cares about your job.
                        </p>
                    </div>
                    <div className="gradient-border-bottom"></div>
                </div>
                <section className="products-services-section">
                    <h2>Products and Services</h2>
                <div className="products">
                    <Link to="/products"><button className="products-button">Products and Services</button></Link>
                </div>

                </section>
            </div>
        )
    }
}

export default Home;