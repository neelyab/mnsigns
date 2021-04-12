import React, {Component} from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="image-carousel">
                <ImageCarousel/>
                </div>
                <div className="about-container">
                    <div className="about">
                        <h2>About</h2>
                        <p>
                            We were established in 1989. We provide contemporary design, state of the art production and quality fabrication. All of our materials are of the highest quality available.
                            Our customers say we are friendly, courteous, and attentive to detail. We are a local company that cares about your job.
                        </p>
                    </div>
                    <div className="gradient-border-bottom"></div>
                </div>
                <section className="products-services-section">
                    <h2>Products and Services</h2>
                <div className="products">
                    <button className="products-button">Products and Services</button>
                </div>

                </section>
            </div>
        )
    }
}

export default Home;