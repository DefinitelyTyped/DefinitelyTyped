import * as React from "react";
import { default as Slider, Settings, CustomArrowProps } from "react-slick";

class LeftNavArrow extends React.Component<CustomArrowProps> {
  render() {
    return <button onClick={this.props.onClick}>Next</button>;
  }
}

function RightNavArrow(props: CustomArrowProps): JSX.Element {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

const defaultSettings: Settings = {
  className: "",
  accessibility: true,
  adaptiveHeight: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false,
  centerPadding: "50px",
  cssEase: "ease",
  customPaging: (i: number) => {
    return <button>{i + 1}</button>;
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: "progressive",
  pauseOnHover: true,
  responsive: [{ breakpoint: 1000, settings: "unslick" }, { breakpoint: 2000, settings: { arrows: false } }],
  rtl: false,
  slide: "div",
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  swipe: true,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  variableWidth: false,
  vertical: false,
  verticalSwiping: false,
  waitForAnimate: true,
  afterChange: (currentSlide: number) => { },
  beforeChange: (currentSlide: number, nextSlide: number) => { },
  onEdge: (swipeDirection: string) => { },
  onInit: () => { },
  swipeEvent: (swipeDirection: string) => { },
  nextArrow: <LeftNavArrow />,
  prevArrow: <RightNavArrow />
};

class SliderTest extends React.Component {
  private slider: Slider | null = null;

  componentDidMount() {
    const slides = this.slider?.innerSlider?.list?.querySelectorAll(".slick-slide");
    slides?.forEach((slide, index) => {
      const dataIndex = slide.getAttribute("data-test") || index.toString();
      slide.setAttribute("data-test", dataIndex);
    });
  }

  render() {
    return <div>
      <Slider
        {...defaultSettings}
        ref={(component: Slider | null) => { this.slider = component; }}
      >
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={(event) => { this.slider!.slickPrev(); }}>Previous</button>
        <button className="button" onClick={(event) => { this.slider!.slickNext(); }}>Next</button>
        <button className="button" onClick={(event) => { this.slider!.slickGoTo(1); }}>First</button>
      </div>
    </div>;
  }
}
