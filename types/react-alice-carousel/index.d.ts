// Type definitions for react-alice-carousel 1.15
// Project: https://github.com/maxmarinich/react-alice-carousel
// Definitions by: endigo <https://github.com/endigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface EventObject {
  item: number;
  slide: number;
  itemsInSlide: number;
}

export interface Props {
  /**
   * Gallery items, preferable to use this property instead of children
   *
   * Default: [].
   */
  items?: Array<{}>;
  /**
   * Number of items in the slide.
   *
   * Default: {}.
   */
  responsive?: {};
  /**
   * Padding left and right on the stage
   *
   * Default: {}.
   */
  stagePadding?: {};
  /**
   * Disable keys controls (left, right, space)
   *
   * Default: false.
   */
  keysControlDisabled?: boolean;
  /**
   * Disable play/pause button
   *
   * Default: false.
   */
  playButtonEnabled?: boolean;
  /**
   * Disable buttons control
   *
   * Default: false.
   */
  buttonsDisabled?: boolean;
  /**
   * Disable dots navigation
   *
   * Default: false.
   */
  dotsDisabled?: boolean;
  /**
   * Disable swipe handlers
   *
   * Default: false.
   */
  swipeDisabled?: boolean;
  /**
   * Duration of slides transition (milliseconds)
   *
   * Default: 250.
   */
  duration?: number;
  /**
   * The starting index of the carousel
   *
   * Default: 0.
   */
  startIndex?: number;
  /**
   * Sets the carousel at the specified position
   *
   * Default: 0.
   */
  slideToIndex?: number;
  /**
   *  Set auto play mode
   *
   * Default: false.
   */
  autoPlay?: boolean;
  /**
   * Disable infinite mode
   *
   * Default: true.
   */
  infinite?: boolean;
  /**
   * Enable mouse drag animation
   *
   * Default: false.
   */
  mouseDragEnabled?: boolean;
  /**
   * Enable fadeout animation. Fired when 1 item is in the slide
   *
   * Default: false.
   */
  fadeOutAnimation?: boolean;
  /**
   * Interval of auto play animation (milliseconds). If specified, a larger value will be taken from comparing this property and the duration one
   *
   * Default: 250.
   */
  autoPlayInterval?: number;
  /**
   * To run auto play in the left direction specify rtl value
   *
   * Default: 'ltr'.
   */
  autoPlayDirection?: string;
  /**
   * If this property is identified as true auto play animation will be stopped after clicking user on any gallery button
   *
   * Default: false.
   */
  disableAutoPlayOnAction?: boolean;
  /**
   * If this property is identified as true auto play animation will be stopped after clicking user on any gallery button
   *
   * Default: false.
   */
  autoPlayActionDisabled?: boolean;
  /**
   * If this property is identified as false auto play animation won't stopped on hover
   *
   * Default: true.
   */
  stopAutoPlayOnHover?: boolean;
  /**
   * Show slide info
   *
   * Default: false.
   */
  showSlideInfo?: boolean;
  /**
   * Prevent the browser's touchmove event when carousel is swiping
   *
   * Default: false.
   */
  preventEventOnTouchMove?: boolean;
  /**
   * Set auto height for the stage
   *
   * Default: false.
   */
  autoHeight?: boolean;
  /**
   * Fired when the event object is changing / returns event object
   */
  onSlideChange?: (e: EventObject) => void;
  /**
   * Fired when the event object was changed / returns event object
   */
  onSlideChanged?: (e: EventObject) => void;
  /**
   * Fired when the gallery was initialized / returns event object
   */
  onInitialized?: (e: EventObject) => void;
  /**
   * Fired when the gallery was resized / returns event object
   */
  onResized?: (e: EventObject) => void;
  /**
   * Fired during resize event to determine whether the event handler should be called / return boolean
   */
  shouldHandleResizeEvent?: (e: any) => boolean;
}

export default class ReactAliceCarousel extends React.PureComponent<Props> {}
