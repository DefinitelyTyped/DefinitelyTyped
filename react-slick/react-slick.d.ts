// Type definitions for react-slick
// Project: https://github.com/akiran/react-slick
// Definitions by: Andrey Balokha <https://github.com/andrewBalekha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

interface __config {
  className?: string
  adaptiveHeight?: boolean
  arrows?: boolean
  autoplay?: boolean
  autoplaySpeed?: number // integer
  centerMode?: boolean
  centerPadding?: string | any
  cssEase?: string | any
  dots?: boolean
  dotsClass?: string
  draggable?: boolean
  easing?: string
  fade?: boolean
  focusOnSelect?: boolean
  infinite?: boolean //   should the gallery wrap around it's contents
  initialSlide?: number // int
  lazyLoad?: boolean
  rtl?: boolean
  slide?: string
  slidesToShow?: number // int
  slidesToScroll?: number //  int
  speed?: number //int
  swipe?: boolean
  swipeToSlide?: boolean
  touchMove?: boolean
  touchThreshold?: number // int
  variableWidth?: boolean
  useCSS?: boolean
  vertical?: boolean
  afterChange?: (() => void)
  beforeChange?: (() => void)
  slickGoTo?: number // int
}

interface Slider extends __config {
  responsive?: { breakpoint: number; settings: __config}[]
}

declare module "react-slick" {
  var Slider: __React.ClassicComponentClass<Slider>;
  export = Slider;
}
