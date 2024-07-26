import React, { Component } from "react";
import "./ImageCarousel.css";
import { ImageData } from "./ImageData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.sliderInterval = null;
  }
  prevSlide = () => {
    // proceed to previous slide
    const length = ImageData.length;

    if (this.state.current === 0) {
      this.setState({
        current: length - 1,
      });
    } else {
      this.setState({
        current: this.state.current - 1,
      });
    }
  };
  nextSlide = () => {
    // proceed to next slide
    const length = ImageData.length;

    if (this.state.current === length - 1) {
      this.setState({
        current: 0,
      });
    } else {
      this.setState({
        current: this.state.current + 1,
      });
    }
  };
  componentDidMount = () => {
    // interval for image carousel
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  };
  componentWillUnmount() {
    clearInterval(this.sliderInterval);
  }
  render() {
    // retrieve urls for each image
    const carouselImage = ImageData.map((im, index) => {
      const imageUrl = Object.values(im.image)[0];
      return (
        <div
          className={index === this.state.current ? "slide active" : "slide"}
          key={index}
        >
          {index === this.state.current && (
            <img src={imageUrl} alt="sign" className="image" />
          )}
        </div>
      );
    });
    return (
      <div className="">
        <FaArrowAltCircleLeft className="left-arrow" onClick={this.prevSlide} />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={this.nextSlide}
        />

        {carouselImage}
      </div>
    );
  }
}

export default ImageCarousel;
