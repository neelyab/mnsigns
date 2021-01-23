import React, {Component} from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="image-carousel">
                <ImageCarousel/>
                </div>
                <div class="about">
                    <h2>About</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et mi accumsan, accumsan erat hendrerit, vestibulum leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In bibendum dolor sit amet vehicula facilisis. Duis eget neque ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt elit vitae tortor congue, non pretium neque tempus. Vestibulum accumsan, libero et tempor scelerisque, felis turpis ornare libero, id vestibulum libero risus id magna. Duis quis sem urna. Sed sodales ultrices posuere. Morbi et tellus id sapien condimentum sollicitudin nec at metus.
                    </p>
                </div>

                <div class="products">
                    <button>Explore Products</button>
                </div>

                <div class="services">
                    <button>Explore Services</button>
                </div>
            </div>
        )
    }
}

export default Home;