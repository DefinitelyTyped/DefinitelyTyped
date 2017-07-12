// Type definitions for perfect-scrollbar v0.6.12
// Project: https://github.com/noraesae/perfect-scrollbar
// Definitions by: Kombu <https://github.com/aicest>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

/**
 * https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/default-setting.js#L3
 * https://github.com/noraesae/perfect-scrollbar#optional-parameters
 */
interface PerfectScrollbarSettings {

    /**
     * It is a list of handlers to use to scroll the element.
     * https://github.com/noraesae/perfect-scrollbar#handlers
     * https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/initialize.js#L9
     */
    handlers?: ('click-rail' |
            'drag-scrollbar' |
            'keyboard' |
            'wheel' |
            'touch' |
            'selection')[];

    /**
     * When set to an integer value, the thumb part of the scrollbar will not expand over that number of pixels.
     * https://github.com/noraesae/perfect-scrollbar#maxscrollbarlength
     */
    maxScrollbarLength?: number;

    /**
     * When set to an integer value, the thumb part of the scrollbar will not shrink below that number of pixels.
     * https://github.com/noraesae/perfect-scrollbar#minscrollbarlength
     */
    minScrollbarLength?: number;

    /**
     * The number of pixels the content width can surpass the container width without enabling the X axis scroll bar.
     * Allows some "wiggle room" or "offset break", so that X axis scroll bar is not enabled just because of a few pixels.
     * https://github.com/noraesae/perfect-scrollbar#scrollxmarginoffset
     */
    scrollXMarginOffset?: number;

    /**
     * The number of pixels the content height can surpass the container height without enabling the Y axis scroll bar.
     * Allows some "wiggle room" or "offset break", so that Y axis scroll bar is not enabled just because of a few pixels.
     * https://github.com/noraesae/perfect-scrollbar#scrollymarginoffset
     */
    scrollYMarginOffset?: number;

    /**
     * When set to false, when clicking on a rail, the click event will be allowed to propagate.
     * https://github.com/noraesae/perfect-scrollbar#stoppropagationonclick
     */
    stopPropagationOnClick?: boolean;

    /**
     * When set to true, the scroll bar in X axis will not be available, regardless of the content width.
     * https://github.com/noraesae/perfect-scrollbar#suppressscrollx
     */
    suppressScrollX?: boolean;

    /**
     * When set to true, the scroll bar in Y axis will not be available, regardless of the content height.
     * https://github.com/noraesae/perfect-scrollbar#suppressscrolly
     */
    suppressScrollY?: boolean;

    /**
     * If this option is true, when the scroll reaches the end of the side, touch scrolling will be propagated to parent element.
     * https://github.com/noraesae/perfect-scrollbar#swipepropagation
     */
    swipePropagation?: boolean;

    /**
     * When set to true, and only one (vertical or horizontal) scrollbar is visible then both vertical and horizontal scrolling will affect the scrollbar.
     * https://github.com/noraesae/perfect-scrollbar#usebothwheelaxes
     */
    useBothWheelAxes?: boolean;

    /**
     * If this option is true, when the scroll reaches the end of the side, mousewheel event will be propagated to parent element.
     * https://github.com/noraesae/perfect-scrollbar#wheelpropagation
     */
    wheelPropagation?: boolean;

    /**
     * The scroll speed applied to mousewheel event.
     * https://github.com/noraesae/perfect-scrollbar#wheelspeed
     */
    wheelSpeed?: number;

    /**
     * A string.
     * It's a class name added to the container element.
     * The class name is prepended with `ps-theme-`.
     * So default theme class name is `ps-theme-default`.
     * In order to create custom themes with scss use `ps-container($theme)` mixin, where `$theme` is a scss map.
     * https://github.com/noraesae/perfect-scrollbar#theme
     */
    theme?: string;
}

declare module 'perfect-scrollbar' {

    /**
     * https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/initialize.js#L19
     */
    export function initialize(element: HTMLElement, settings?: PerfectScrollbarSettings): void;

    /**
     * https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/update.js#L9
     */
    export function update(element: HTMLElement): void;

    /**
     * https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/plugin/destroy.js#L7
     */
    export function destroy(element: HTMLElement): void;
}

interface JQuery {

    /**
     * https://github.com/noraesae/perfect-scrollbar/blob/master/src/js/adaptor/jquery.js#L6
     */
    perfectScrollbar(settingOrCommand?: PerfectScrollbarSettings | 'update' | 'destroy'): JQuery;
}

declare module 'perfect-scrollbar/jquery' {
    function mountJQuery(jQuery: JQueryStatic): void;
    export = mountJQuery;
}
