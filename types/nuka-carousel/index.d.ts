// Type definitions for nuka-carousel 4.3
// Project: https://github.com/FormidableLabs/nuka-carousel
// Definitions by: Roman Charugin <https://github.com/Romic>, Alex Smith <https://github.com/altaudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export default class Carousel extends React.Component<CarouselProps, CarouselState> {}

export type CarouselCellAlignProp = 'left' | 'center' | 'right';

export type CarouselHeightModeProp = 'first' | 'current' | 'max';

export type CarouselSlidesToScrollProp = number | 'auto';

export type CarouselSlideWidthProp = string | number;

export interface CarouselSlideRenderControlProps {
  /**
   * Current slide index
   */
  currentSlide: number;
  /**
   * Total amount of slides
   */
  slideCount: number;
  /**
   * Current frame width (px)
   */
  frameWidth: number;
  /**
   * Current slide width (px)
   */
  slideWidth: number;
  /**
   * Slides to scroll at once
   */
  slidesToScroll: number;
  /**
   * Space between slides, as an integer, but reflected as px
   */
  cellSpacing: number;
  /**
   * Slides to show at once
   */
  slidesToShow: number;
  /**
   * Infinite mode enabled
   */
  wrapAround: boolean;
  /**
   * Go to the next slide method
   */
  nextSlide: () => void;
  /**
   * Go to the previous slide method
   */
  previousSlide: () => void;
  /**
   * Go to X slide method
   * @param index Slide's index to go
   */
  goToSlide: (index: number) => void;
}

export type CarouselRenderControl = (props: CarouselSlideRenderControlProps) => JSX.Element;

export interface CarouselProps {
  /**
   * Hook to be called after a slide is changed
   * @param prevSlide Index of the previous slide
   */
  afterSlide?: (prevSlide: number) => void;
  /**
   * Autoplay mode active
   * @default false
   */
  autoplay?: boolean;
  /**
   * Interval for autoplay iteration (ms)
   * @default 3000
   */
  autoplayInterval?: number;
  /**
   * Hook to be called before a slide is changed
   * @param currentSlide Index of the current slide
   * @param endSlide Index of the last slide
   */
  beforeSlide?: (currentSlide: number, endSlide: number) => void;
  /**
   * When displaying more than one slide,
   * sets which position to anchor the current slide to
   */
  cellAlign?: CarouselCellAlignProp;
  /**
   * Space between slides, as an integer, but reflected as px
   */
  cellSpacing?: number;
  /**
   * Additional className
   */
  className?: string;
  /**
   * Enable mouse swipe/dragging
   */
  dragging?: boolean;
  /**
   * Animation easing function
   * @see https://github.com/d3/d3-ease
   */
  easing?: string;
  /**
   * Animation easing function when swipe exceeds edge
   * @see https://github.com/d3/d3-ease
   */
  edgeEasing?: string;
  /**
   * Used to set overflow style property on slider frame
   * @default 'hidden'
   */
  frameOverflow?: string;
  /**
   * Used to set the margin of the slider frame.
   * Accepts any string dimension value such as "0px 20px" or "500px"
   * @example '0px 20px'
   * @example '500px'
   */
  framePadding?: string;
  /**
   * Change the height of the slides based either on the first slide,
   * the current slide, or the maximum height of all slides.
   */
  heightMode?: CarouselHeightModeProp;
  /**
   * Initial height of the slides (px)
   */
  initialSlideHeight?: number;
  /**
   * Initial width of the slides (px)
   */
  initialSlideWidth?: number;
  /**
   * Window onResize callback
   */
  onResize?: () => void;
  /**
   * Function for rendering top left control
   */
  renderTopLeftControls?: CarouselRenderControl;
  /**
   * Function for rendering top center control
   */
  renderTopCenterControls?: CarouselRenderControl;
  /**
   * Function for rendering top right control
   */
  renderTopRightControls?: CarouselRenderControl;
  /**
   * Function for rendering center left control
   */
  renderCenterLeftControls?: CarouselRenderControl;
  /**
   * Function for rendering center center control
   */
  renderCenterCenterControls?: CarouselRenderControl;
  /**
   * Function for rendering center right control
   */
  renderCenterRightControls?: CarouselRenderControl;
  /**
   * Function for rendering bottom left control
   */
  renderBottomLeftControls?: CarouselRenderControl;
  /**
   * Function for rendering bottom center control
   */
  renderBottomCenterControls?: CarouselRenderControl;
  /**
   * Function for rendering bottom right control
   */
  renderBottomRightControls?: CarouselRenderControl;
  /**
   * Manually set the index of the slide to be shown
   */
  slideIndex?: number;
  /**
   * Slides to scroll at once. Set to "auto"
   * to always scroll the current number of visible slides
   */
  slidesToScroll?: CarouselSlidesToScrollProp;
  /**
   * Slides to show at once
   */
  slidesToShow?: number;
  /**
   * Manually set slideWidth
   * @example '20px'
   * @example 0.8
   */
  slideWidth?: CarouselSlideWidthProp;
  /**
   * Animation duration
   */
  speed?: number;
  /**
   * Enable touch swipe/dragging
   */
  swiping?: boolean;
  /**
   * Enable the slides to transition vertically
   */
  vertical?: boolean;
  /**
   * Used to hardcode the slider width
   * @example '80%'
   * @example '500px'
   */
  width?: string;
  /**
   * Sets infinite wrapAround mode
   * @default false
   */
  wrapAround?: boolean;
  /**
   * Used to remove all controls at once. Overwrites the render[Top, Right, Bottom, Left]CenterControls()
   * @default false
   */
  withoutControls?: boolean;
}

export interface CarouselState {
  /**
   * Current slide index
   */
  currentSlide: number;
  /**
   * Is dragging enabled
   */
  dragging: boolean;
  /**
   * Current frame width
   */
  frameWidth: number;
  /**
   * Current left value
   */
  left: number;
  /**
   * Total amount of slides
   */
  slideCount: number;
  /**
   * Slides to scroll at once
   */
  slidesToScroll: number;
  /**
   * Current slide width
   */
  slideWidth: CarouselSlideWidthProp;
  /**
   * Current top value
   */
  top: number;
  /**
   * Easing function name
   */
  easing: string;
  /**
   * Is infinite mode enabled
   */
  isWrappingAround: boolean;
  wrapToIndex: boolean;
  resetWrapAroundPosition: boolean;
}
