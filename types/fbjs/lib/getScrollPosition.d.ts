import { DOMWindow } from 'jsdom';

/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are bounded. This means that if the scroll position is
 * negative or exceeds the element boundaries (which is possible using inertial
 * scrolling), you will get zero or the maximum scroll position, respectively.
 *
 * If you need the unbound scroll position, use `getUnboundedScrollPosition`.
 */
declare function getScrollPosition(scrollable: HTMLElement | DOMWindow): { x: number; y: number };

declare namespace getScrollPosition {}

export = getScrollPosition;
