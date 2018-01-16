// Type definitions for react-slick 0.15
// Project: https://github.com/akiran/react-slick
// Definitions by: Andrey Balokha <https://github.com/andrewBalekha>
//                 Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
//                 Andrew Makarov <https://github.com/r3nya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

type ComponentConstructor<TProps> = React.ComponentClass<TProps> | React.StatelessComponent<TProps>;

export interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<any>;
  currentSlide?: number;
  slideCount?: number;
}

export interface ResponsiveObject {
  breakpoint: number;
  settings: "unslick" | Settings;
}

export type SwipeDirection = "left" | "down" | "right" | "up" | string;

export interface Settings {
  accessibility?: boolean;
  className?: string;
  adaptiveHeight?: boolean;
  arrows?: boolean;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
  autoplay?: boolean;
  autoplaySpeed?: number;
  centerMode?: boolean;
  centerPadding?: string;
  cssEase?: string;
  customPaging?(index: number): JSX.Element;
  dots?: boolean;
  dotsClass?: string;
  draggable?: boolean;
  easing?: string;
  fade?: boolean;
  focusOnSelect?: boolean;
  infinite?: boolean;
  initialSlide?: number;
  lazyLoad?: boolean;
  pauseOnHover?: boolean;
  responsive?: ResponsiveObject[];
  rtl?: boolean;
  slide?: string;
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  swipe?: boolean;
  swipeToSlide?: boolean;
  touchMove?: boolean;
  touchThreshold?: number;
  variableWidth?: boolean;
  useCSS?: boolean;
  vertical?: boolean;
  afterChange?(currentSlide: number): void;
  beforeChange?(currentSlide: number, nextSlide: number): void;
  slickGoTo?: number;
  edgeFriction?: number;
  waitForAnimate?: boolean;
  edgeEvent?(swipeDirection: SwipeDirection): void;
  swipeEvent?(swipeDirection: SwipeDirection): void;
  init?(): void;
}

declare class Slider extends React.Component<Settings, never> {
  slickNext(): void;
  slickPrev(): void;
  slickGoTo(slideNumber: number): void;
}

export default Slider;
