import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Slider from "react-slick"

class SliderTest extends React.Component<React.Props<{}>, {}> {

  render() {
    let settings = {
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      draggable: false,
      infinite: false,
      prevArrow: <a href="#">link</a>
    };

    return (
      <div>
        <Slider {...settings} >
          <div><h1>Slide1</h1></div>
          <div><h1>Slide2</h1></div>
        </Slider>
      </div>
    )
  }
}

ReactDOM.render(<SliderTest />, document.body);
