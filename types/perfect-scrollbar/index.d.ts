// Type definitions for perfect-scrollbar v1.1.0
// Project: https://github.com/noraesae/perfect-scrollbar
// Definitions by: Kombu <https://github.com/aicest>
//                 Cyrus <https://github.com/CarbonAtom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface HTMLPerfectScrollbarElementEventMap extends HTMLElementEventMap {
    /**
     * This event fires when the y-axis is scrolled in either direction.
     */
    'ps-scroll-y': CustomEvent,
    /**
     * This event fires when the x-axis is scrolled in either direction.
     */
    'ps-scroll-x': CustomEvent,
    /**
     * This event fires when scrolling upwards.
     */
    'ps-scroll-up': CustomEvent,
    /**
     * This event fires when scrolling downwards.
     */
    'ps-scroll-down': CustomEvent,
    /**
     * This event fires when scrolling to the left.
     */
    'ps-scroll-left': CustomEvent,
    /**
     * This event fires when scrolling to the right.
     */
    'ps-scroll-right': CustomEvent,
    /**
     * This event fires when scrolling reaches the start of the y-axis.
     */
    'ps-y-reach-start': CustomEvent,
    /**
     * This event fires when scrolling reaches the end of the y-axis (useful for infinite scroll).
     */
    'ps-y-reach-end': CustomEvent,
    /**
     * This event fires when scrolling reaches the start of the x-axis.
     */
    'ps-x-reach-start': CustomEvent,
    /**
     * This event fires when scrolling reaches the end of the x-axis.
     */
    'ps-x-reach-end': CustomEvent,
}

interface HTMLPerfectScrollbarElement extends HTMLElement {
    addEventListener<K extends keyof HTMLPerfectScrollbarElementEventMap>(type: K, listener: (this: HTMLPerfectScrollbarElement, ev: HTMLPerfectScrollbarElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLPerfectScrollbarElement: {
    prototype: HTMLPerfectScrollbarElement;
    new(): HTMLPerfectScrollbarElement;
};

declare namespace PerfectScrollbar {
    /**
     * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/default-setting.js#L3
     * @see https://github.com/noraesae/perfect-scrollbar#optional-parameters
     */
    export interface Options {
        /**
         * It is a list of handlers to use to scroll the element.
         * @see https://github.com/noraesae/perfect-scrollbar#handlers
         * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/initialize.js#L9
         * @default ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch']
         */
        handlers?: ('click-rail' |
            'drag-thumb' |
            'keyboard' |
            'wheel' |
            'touch' |
            'selection')[];

        /**
         * The scroll speed applied to mousewheel event.
         * @see https://github.com/noraesae/perfect-scrollbar#wheelspeed
         * @default 1
         */
        wheelSpeed?: number;

        /**
         * If this option is true, when the scroll reaches the end of the side, mousewheel event will be propagated to parent element.
         * @see https://github.com/noraesae/perfect-scrollbar#wheelpropagation
         * @default false
         */
        wheelPropagation?: boolean;

        /**
         * If this option is true, when the scroll reaches the end of the side, touch scrolling will be propagated to parent element.
         * @see https://github.com/noraesae/perfect-scrollbar#swipepropagation
         * @default true
         */
        swipePropagation?: boolean;

        /**
         * If this option is true, swipe scrolling will be eased.
         * @see https://github.com/noraesae/perfect-scrollbar#swipeeasing
         * @default true
         */
        swipeEasing?: boolean;

        /**
         * When set to an integer value, the thumb part of the scrollbar will not shrink below that number of pixels.
         * @see https://github.com/noraesae/perfect-scrollbar#minscrollbarlength
         * @default null
         */
        minScrollbarLength?: number;

        /**
         * When set to an integer value, the thumb part of the scrollbar will not expand over that number of pixels.
         * @see https://github.com/noraesae/perfect-scrollbar#maxscrollbarlength
         * @default null
         */
        maxScrollbarLength?: number;

        /**
         * This sets threshold for ps--scrolling-x and ps--scrolling-y classes to remain. In the default CSS, they make scrollbars shown regardless of hover state. The unit is millisecond.
         * @see https://github.com/utatti/perfect-scrollbar#scrollingthreshold-number
         * @default 1000
         */
        scrollingThreshold?: number;

        /**
         * When set to true, and only one (vertical or horizontal) scrollbar is visible then both vertical and horizontal scrolling will affect the scrollbar.
         * @see https://github.com/noraesae/perfect-scrollbar#usebothwheelaxes
         * @default false
         */
        useBothWheelAxes?: boolean;

        /**
         * When set to true, the scroll bar in X axis will not be available, regardless of the content width.
         * @see https://github.com/noraesae/perfect-scrollbar#suppressscrollx
         * @default false
         */
        suppressScrollX?: boolean;

        /**
         * When set to true, the scroll bar in Y axis will not be available, regardless of the content height.
         * @see https://github.com/noraesae/perfect-scrollbar#suppressscrolly
         * @default false
         */
        suppressScrollY?: boolean;

        /**
         * The number of pixels the content width can surpass the container width without enabling the X axis scroll bar.
         * Allows some "wiggle room" or "offset break", so that X axis scroll bar is not enabled just because of a few pixels.
         * @see https://github.com/noraesae/perfect-scrollbar#scrollxmarginoffset
         * @default 0
         */
        scrollXMarginOffset?: number;

        /**
         * The number of pixels the content height can surpass the container height without enabling the Y axis scroll bar.
         * Allows some "wiggle room" or "offset break", so that Y axis scroll bar is not enabled just because of a few pixels.
         * @see https://github.com/noraesae/perfect-scrollbar#scrollymarginoffset
         * @default 0
         */
        scrollYMarginOffset?: number;
    }

    export type Dimension = 'start' | 'end' | null;

    export type Dimensions = {
        readonly x: Dimension;
        readonly y: Dimension;
    }
}

declare class PerfectScrollbar {
    readonly reach: PerfectScrollbar.Dimensions;

    constructor(element: string | HTMLElement, options?: PerfectScrollbar.Options);

    destroy(): void;
    update(): void;
}

declare module 'perfect-scrollbar' {
    export default PerfectScrollbar;
}
