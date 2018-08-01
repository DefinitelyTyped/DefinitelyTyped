// Type definitions for viewerjs 0.7
// Project: https://fengyuanchen.github.io/viewerjs
// Definitions by: LRH3321 <https://github.com/lrh3321>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Viewer {
    type ImageSourceDelegate = (image: HTMLImageElement) => string;

    type ViewerMethod = () => void;

    /**
     * Options
     * @see {@link https://github.com/fengyuanchen/viewerjs#options}
     */
    interface ViewerOption {
        /**
         * Enable inline mode.
         * @default false
         */
        inline?: boolean;

        /**
         * Show the button on the top-right of the viewer.
         * @default true
         */
        button?: boolean;

        /**
         * Specify the visibility of the navbar.
         * - `0` or `false`: hide the navbar
         * - `1` or `true`: show the navbar
         * - `2`: show the navbar only when screen width great then 768 pixels
         * - `3`: show the navbar only when screen width great then 992 pixels
         * - `4`: show the navbar only when screen width great then 1200 pixels
         * @default true
         */
        navbar?: boolean | number;

        /**
         * Specify the visibility of the title (the current image's name and dimensions).
         * `0` or `false`: hide the title
         * `1` or `true`: show the title
         * `2`: show the title only when screen width great then 768 pixels
         * `3`: show the title only when screen width great then 992 pixels
         * `4`: show the title only when screen width great then 1200 pixels
         * @default true
         * @description The name comes from the `alt` attribute of an image element or the image name parsed from URL.
         */
        title?: boolean | number;

        /**
         * Specify the visibility of the toolbar.
         * - `0` or `false`: hide the toolbar
         * - `1` or `true`: show the toolbar
         * - `2`: show the toolbar only when screen width great then 768 pixels
         * - `3`: show the toolbar only when screen width great then 992 pixels
         * - `4`: show the toolbar only when screen width great then 1200 pixels
         * @default true
         */
        toolbar?: boolean | number;

        /**
         * Show the tooltip with image ratio (percentage) when zoom in or zoom out
         * @default true
         */
        tooltip?: boolean;

        /**
         * Enable to move the image.
         * @default true
         */
        movable?: boolean;

        /**
         * Enable to zoom the image.
         * @default true
         */
        zoomable?: boolean;

        /**
         * Enable to rotate the image.
         * @default true
         */
        rotatable?: boolean;

        /**
         * Enable to scale the image.
         * @default true
         */
        scalable?: boolean;

        /**
         * Enable CSS3 Transition for some special elements.
         * @default true
         */
        transition?: boolean;

        /**
         * Enable to request full screen when play.
         * @default true
         * @description Requires the browser supports
         * @see {@link http://caniuse.com/fullscreen}
         */
        fullscreen?: boolean;

        /**
         * Enable keyboard support.
         * @default true
         */
        keyboard?: boolean;

        /**
         * Define interval of each image when playing.
         * @default 5000
         */
        interval?: number;

        /**
         * Define the minimum width of the viewer.
         * @default 200
         * @description Only available in inline mode (set the `inline` option to `true`).
         */
        minWidth?: number;

        /**
         * Define the minimum height of the viewer.
         * @default 100
         * @description Only available in inline mode (set the `inline` option to `true`).
         */
        minHeight?: number;

        /**
         * Define the ratio when zoom the image by wheeling mouse.
         * @default 0.1
         */
        zoomRatio?: number;

        /**
         * Define the min ratio of the image when zoom out.
         * @default 0.01
         */
        minZoomRatio?: number;

        /**
         * Define the max ratio of the image when zoom in.
         * @default 100
         */
        maxZoomRatio?: number;

        /**
         * Define the CSS `z-index` value of viewer in modal mode.
         * @default 2015
         */
        zIndex?: number;

        /**
         * Define the CSS `z-index` value of viewer in inline mode.
         * @default 0
         */
        zIndexInline?: number;

        /**
         * Define where to get the original image URL for viewing.
         * @default 'src'
         * @description If it is a string, it should be one of the attributes of each image element.
         * @description If it is a function, it will be called on each image and should return a valid image URL.
         */
        url?: string | ImageSourceDelegate;

        /**
         * A shortcut of the `ready` event.
         * @default null
         */
        ready?: ViewerMethod | null;

        /**
         * A shortcut of the `show` event.
         * @default null
         */
        show?: ViewerMethod | null;

        /**
         * A shortcut of the `shown` event.
         * @default null
         */
        shown?: ViewerMethod | null;

        /**
         * A shortcut of the `hide` event.
         * @default null
         */
        hide?: ViewerMethod | null;

        /**
         * A shortcut of the `hidden` event.
         * @default null
         */
        hidden?: ViewerMethod | null;

        /**
         * A shortcut of the `view` event.
         * @default null
         */
        view?: ViewerMethod | null;

        /**
         * A shortcut of the `viewed` event.
         * @default null
         */
        viewed?: ViewerMethod | null;
    }

    /**
     * Change the global default options.
     */
    function setDefaults(options: ViewerOption): void;

    /**
     * If you have to use other viewer with the same namespace, just call the `Viewer.noConflict` static method to revert to it.
     */
    function noConflict(): void;
}

/**
 * JavaScript image viewer.
 * @see {@link https://github.com/fengyuanchen/viewerjs}
 */
declare class Viewer {
    constructor(element: Element, options?: Viewer.ViewerOption);

    /**
     * Show the viewer.
     * @description Only available in modal mode.
     */
    show(): void;

    /**
     * hide the viewer.
     * @description Only available in modal mode.
     */
    hide(): void;

    /**
     * View one of the images with image's index.
     * @param index The index of the image for viewing. Default: `0`.
     */
    view(index?: number): void;

    /**
     * View the previous image.
     */
    prev(): void;

    /**
     * View the next image.
     */
    next(): void;

    /**
     * Move the image with relative offsets.
     * @param offsetX Moving size (px) in the horizontal direction
     * @param offsetY Moving size (px) in the vertical direction. If not present, its default value is `offsetX`
     */
    move(offsetX: number, offsetY?: number): void;

    /**
     * Move the image to an absolute point.
     * @param x The `left` value of the image
     * @param y The `top` value of the image. If not present, its default value is `x`.
     */
    moveTo(x: number, y?: number): void;

    /**
     * Zoom the image with a relative ratio
     * @param ratio Zoom in: requires a positive number (ratio > 0). Zoom out: requires a negative number (ratio < 0)
     * @param hasTooltip Show tooltip. Default: `false`
     */
    zoom(ratio: number, hasTooltip?: boolean): void;

    /**
     * Zoom the image to an absolute ratio.
     * @param ratio Requires a positive number (ratio > 0)
     * @param hasTooltip Show tooltip. Default: `false`
     */
    zoomTo(ratio: number, hasTooltip?: boolean): void;

    /**
     * Rotate the image with a relative degree.
     * @param degree Rotate right: requires a positive number (degree > 0). Rotate left: requires a negative number (degree < 0)
     */
    rotate(degree: number): void;

    /**
     * Rotate the image to an absolute degree.
     */
    rotateTo(degree: number): void;

    /**
     * Scale the image.
     * @param scaleX The scaling factor to apply on the abscissa of the image. When equal to `1` it does nothing.
     * @param scaleY The scaling factor to apply on the ordinate of the image. If not present, its default value is `scaleX`.
     */
    scale(scaleX: number, scaleY?: number): void;

    /**
     * Scale the abscissa of the image.
     * @param scaleX The scaling factor to apply on the abscissa of the image. When equal to `1` it does nothing.
     */
    scaleX(scaleX: number): void;

    /**
     * Scale the ordinate of the image.
     * @param scaleY The scaling factor to apply on the abscissa of the image. When equal to `1` it does nothing.
     */
    scaleY(scaleY: number): void;

    /**
     * Play the images.
     */
    play(): void;

    /**
     * Stop play.
     */
    stop(): void;

    /**
     * Enter modal mode.
     * @description Only available in inline mode.
     */
    full(): void;

    /**
     * Exit  modal mode.
     * @description Only available in inline mode.
     */
    exit(): void;

    /**
     * Show the current ratio of the image with percentage.
     * @description Requires the `tooltip` option set to `true`.
     */
    tooltip(): void;

    /**
     * Toggle the image size between its natural size and initial size.
     */
    toggle(): void;

    /**
     * Reset the image to its initial state.
     */
    reset(): void;

    /**
     * Update the viewer instance when the source images changed (added, removed or sorted).
     * @description If you load images dynamically (with XMLHTTPRequest), you can use this method to add the new images to the viewer instance.
     */
    update(): void;

    /**
     * Destroy the viewer and remove the instance.
     */
    destroy(): void;
}

/**
 * JavaScript image viewer.
 * @see {@link https://github.com/fengyuanchen/viewerjs}
 */
export = Viewer;
