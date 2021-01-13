import { DOMWindow } from 'jsdom';

/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 */
declare function getUnboundedScrollPosition(scrollable: HTMLElement | DOMWindow): { x: number; y: number };

declare namespace getUnboundedScrollPosition {}

export = getUnboundedScrollPosition;
