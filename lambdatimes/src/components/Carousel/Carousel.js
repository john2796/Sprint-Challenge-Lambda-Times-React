import React, { Component } from "react";
import { carouselData } from "../../data";
import styled from "styled-components";
// Complete this Carousel

const CarouselStyle = styled.div`
  .slide {
    display: none;
  }
  .active {
    display: block;
  }
`;

export default class Carousel extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
      activeIndex: 0
    };
  }
  componentDidMount() {
    this.setState({ carousel: carouselData });
    this._isMounted = true;
    if (this._isMounted) {
      this.interval = window.setInterval(() => {
        this.rightClick();
      }, 3500);
    }
  }

  componentWillUnmount = () => {
    this._isMounted = false;
    clearInterval(this.interval);
  };

  leftClick = () => {
    const prev =
      this.state.activeIndex === 0
        ? this.state.carousel.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: prev });
  };

  rightClick = () => {
    const next =
      this.state.activeIndex === this.state.carousel.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: next });
  };

  selectedImage = () => {
    return <img src="" style={{ display: "block" }} />;
  };

  render() {
    const { carousel, activeIndex } = this.state;
    const slides = carousel.map((images, index) => {
      let computedStyle = index === activeIndex ? "slide active" : "slide";
      return (
        <img src={images} alt="images" key={index} className={computedStyle} />
      );
    });
    console.log(carousel);

    return (
      <CarouselStyle className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {/* <div>{slides}</div> */}
        {slides}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </CarouselStyle>
    );
  }
}
