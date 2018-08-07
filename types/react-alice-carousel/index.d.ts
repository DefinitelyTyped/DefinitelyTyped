// Type definitions for react-alice-carousel 1.7
// Project: https://github.com/maxmarinich/react-alice-carousel
// Definitions by: endigo <https://github.com/endigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface EventObject {
	item: number;
	slide: number;
}

export interface Props {
	/**
	 * Fired when the event object is changing / returns event object
	 */
	onSlideChange?: (e: EventObject) => void;
	/**
	 * Fired when the event object was changed / returns event object
	 */
	onSlideChanged?: (e: EventObject) => void;
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
	 * Number of items in the slide.
	 *
	 * Default: {}.
	 */
	responsive?: {};
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
	 * The offset of the alert from the page border, can be any number.
	 *
	 * Default: 14.
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
	autoPlayActionDisabled?: boolean;
}

export default class Carousel extends React.PureComponent<Props> {}
