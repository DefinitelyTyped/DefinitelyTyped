// Type definitions for perfect-scrollbar v0.7.1
// Project: https://github.com/noraesae/perfect-scrollbar
// Definitions by: Kombu <https://github.com/aicest>
//                 Cyrus <https://github.com/CarbonAtom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface HTMLElementEventMap {
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
    'ps-x-reach-end': CustomEvent
}

/**
 * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/default-setting.js#L3
 * @see https://github.com/noraesae/perfect-scrollbar#optional-parameters
 */
interface PerfectScrollbarSettings {

    /**
     * It is a list of handlers to use to scroll the element.
     * @see https://github.com/noraesae/perfect-scrollbar#handlers
     * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/initialize.js#L9
     * @default ['click-rail', 'drag-scrollbar', 'keyboard', 'wheel', 'touch']
     */
    handlers?: ('click-rail' |
            'drag-scrollbar' |
            'keyboard' |
            'wheel' |
            'touch' |
            'selection')[];

    /**
     * When set to an integer value, the thumb part of the scrollbar will not expand over that number of pixels.
     * @see https://github.com/noraesae/perfect-scrollbar#maxscrollbarlength
     * @default null
     */
    maxScrollbarLength?: number;

    /**
     * When set to an integer value, the thumb part of the scrollbar will not shrink below that number of pixels.
     * @see https://github.com/noraesae/perfect-scrollbar#minscrollbarlength
     * @default null
     */
    minScrollbarLength?: number;

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
    swipeEasing?:boolean;

    /**
     * When set to true, and only one (vertical or horizontal) scrollbar is visible then both vertical and horizontal scrolling will affect the scrollbar.
     * @see https://github.com/noraesae/perfect-scrollbar#usebothwheelaxes
     * @default false
     */
    useBothWheelAxes?: boolean;

    /**
     * If this option is true, when the scroll reaches the end of the side, mousewheel event will be propagated to parent element.
     * @see https://github.com/noraesae/perfect-scrollbar#wheelpropagation
     * @default false
     */
    wheelPropagation?: boolean;

    /**
     * The scroll speed applied to mousewheel event.
     * @see https://github.com/noraesae/perfect-scrollbar#wheelspeed
     * @default 1
     */
    wheelSpeed?: number;

    /**
     * A string.
     * It's a class name added to the container element.
     * The class name is prepended with `ps-theme-`.
     * So default theme class name is `ps-theme-default`.
     * In order to create custom themes with scss use `ps-container($theme)` mixin, where `$theme` is a scss map.
     * @see https://github.com/noraesae/perfect-scrollbar#theme
     * @default 'default'
     */
    theme?: string;
}

interface PerfectScrollbar {
    /**
     * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/initialize.js#L19
     */
    initialize(element: HTMLElement, settings?: PerfectScrollbarSettings): void;

    /**
     * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/update.js#L9
     */
    update(element: HTMLElement): void;

    /**
     * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/destroy.js#L7
     */
    destroy(element: HTMLElement): void;
}

declare const Ps: PerfectScrollbar;

declare module 'perfect-scrollbar' {
    export = Ps;
}

interface JQuery {

    /**
     * @see https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/adaptor/jquery.js#L6
     */
    perfectScrollbar(settingOrCommand?: PerfectScrollbarSettings | 'update' | 'destroy'): JQuery;
}

declare module 'perfect-scrollbar/jquery' {
    function mountJQuery(jQuery: JQueryStatic): void;
    export = mountJQuery;
}
