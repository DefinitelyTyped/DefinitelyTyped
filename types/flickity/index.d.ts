// Type definitions for Flickity 2.0
// Project: http://flickity.metafizzy.co/
// Definitions by: Chris McGrath <https://github.com/clmcgrath>
//                 Michael Wagner <https://github.com/wagich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace Flickity;
export = Flickity;

declare global {
    interface JQuery {
        flickity(options?: FlickityOptions): this;
        flickity(command: string, ...params: any[]): this;
    }
}

declare namespace Flickity {
    type FlickityEvents =
        /**
         * Triggered when a slide is selected.
         * This event was previously cellSelect in Flickity v1. cellSelect will continue to work in Flickity v2.
         */
        "select" | "cellSelect" |
        /**
         * Triggered when the slider is settled at its end position.
         */
        "settle" |
        /**
         * Triggered when the slider moves.
         */
        "scroll" |
        /**
         * Triggered when dragging starts and the slider starts moving.
         */
        "dragStart" |
        /**
         * Triggered when dragging moves and the slider moves.
         */
        "dragMove" |
        /**
         * Triggered when dragging ends.
         */
        "dragEnd" |
        /**
         * Triggered when the user's pointer (mouse, touch, pointer) presses down.
         */
        "pointerDown" |
        /**
         * Triggered when the user's pointer moves.
         */
        "pointerMove" |
        /**
         * Triggered when the user's pointer unpresses.
         */
        "pointerUp" |
        /**
         * Triggered when the user's pointer is pressed and unpressed and has not moved enough to start dragging.
         */
        "staticClick" |
        /**
         * Triggered after an image has been loaded with lazyLoad.
         */
        "lazyLoad" |
        /**
         * Triggered after a background image has been loaded with bgLazyLoad.
         */
        "bgLazyLoad";
}

declare class Flickity {
    /**
     * Initializes an new instance of Flickity .
     *
     * @param element Element selector string or container Element to initialize Flickity on
     * @param options (IFlickityOptions) Flickity options
     */
    constructor(selector: string | Element, options?: FlickityOptions);

    // properties

    /**
     * The selected cell index.
     */
    selectedIndex: number;

    /**
     * The selected cell element.
     */
    selectedElement: Element;

    /**
     * The array of cells. Use cells.length for the total number of cells.
     */
    cells: Element[];

    /**
     * The array of slides. Useful for groupCells. A slide contains multiple cells.
     * If groupCells is disabled, then each slide is a cell, so they are one in the same.
     */
    slides: Element[];

    /**
     * An array of elements in the selected slide. Useful for groupCells.
     */
    selectedElements: Element[];

    // static methods

    /**
     * (static) Get the Flickity instance.
     *
     * @param element Element selector string
     */
    static data(element: string | Element): Flickity;

    // instance methods

    /**
     * Select a cell.
     *
     * @param index Integer Zero-based index of the cell to select.
     * @param isWrapped (Optional) If true, the last cell will be selected if at the first cell.
     * @param isInstant (Optional) If true, immediately view the selected cell without animation.
     */
    select(index: number, isWrapped?: boolean, isInstant?: boolean): void;

    /**
     * Select the previous cell.
     *
     * @param isWrapped (Optional) If true, the first cell will be selected if at the last cell.
     */
    previous(isWrapped?: boolean): void;

    /**
     * Select the next cell.
     * @param isWrapped (Optional) If true, the first cell will be selected if at the first cell.
     */
    next(isWrapped?: boolean): void;

    /**
     * Select a slide of a cell. Useful for groupCells.
     *
     * @param index Zero-based index OR selector string of the cell to select.
     * @param isWrapped If true, the last slide will be selected if at the first slide.
     * @param isInstant If true, immediately view the selected slide without animation.
     */
    selectCell(index: number | string, isWrapped?: boolean, isInstant?: boolean): void;

    /**
     * Resize the gallery and re-position cells.
     */
    resize(): void;

    /**
     * Position cells at selected position.
     * Trigger reposition after the size of a cell has been changed.
     */
    reposition(): void;

    /**
     * Prepend elements and create cells to the beginning of the gallery.
     *
     * @param elements JQuery, Element[], Element, or NodeList
     */
    prepend(elements: JQuery | Element[] | Element | NodeList): void;

    /**
     * Append elements and create cells to the end of the gallery.
     *
     * @param elements JQuery, Element[], Element, or NodeList
     */
    append(elements: JQuery | Element[] | Element | NodeList): void;

    /**
     * Insert elements into the gallery and create cells.
     *
     * @param elements Element[], Element, or NodeList
     * @param index Integer: Zero-based index to insert elements.
     */
    insert(elements: JQuery | Element[] | Element | NodeList, index: number): void;

    /**
     * Remove cells from gallery and remove elements from DOM.
     *
     * @param elements Element[], Element, or NodeList
     */
    remove(elements: JQuery | Element[] | Element | NodeList): void;

    /**
     * Starts auto-play. Setting autoPlay will automatically start auto-play on initialization. You do not need to start auto-play with playPlayer.
     */
    playPlayer(): void;

    /**
     * Stops auto-play and cancels pause.
     */
    stopPlayer(): void;

    /**
     * Pauses auto-play.
     */
    pausePlayer(): void;

    /**
     * Resumes auto-play if paused.
     */
    unpausePlayer(): void;

    /**
     * Remove Flickity functionality completely. destroy will return the element back to its pre-initialized state.
     */
    destroy(): void;

    /**
     * Re-collect all cell elements in flickity-slider.
     */
    reloadCells(): void;

    /**
     * Get the elements of the cells.
     * @returns  Element[]
     */
    getCellElements(): Element[];

    // event listeners

    /**
     * Add new classic event listener
     */
    listener(...params: any[]): void;

    /**
     * bind event listener
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    on(eventname: Flickity.FlickityEvents, callback: (event?: Event, pointer?: Element | Touch, cellElement?: Element, cellIndex?: number) => any): void;
    /**
     * bind event listener
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    on(eventname: Flickity.FlickityEvents, callback: (event?: Event, pointer?: Element | Touch, moveVector?: { x: number, y: number }) => any): void;
    /**
     * bind event listener
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    on(eventname: Flickity.FlickityEvents, callback: (event?: Event, cellElement?: Element) => any): void;
    /**
     * bind event listener
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    on(eventname: Flickity.FlickityEvents, callback: (event?: Event, pointer?: Element | Touch) => any): void;

    /**
     * Remove event listener
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    off(eventname: Flickity.FlickityEvents, callback: (event?: Event, pointer?: Element | Touch, cellElement?: Element, cellIndex?: number) => any): void;

    /**
     * Remove event listener
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    off(eventname: Flickity.FlickityEvents, callback: (event?: Event, pointer?: Element | Touch, moveVector?: Object) => any): void;

    /**
     * Remove event listener
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    off(eventname: Flickity.FlickityEvents, callback: (event?: Event, cellElement?: Element) => any): void;

    /**
     * Remove event listener
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    off(eventname: Flickity.FlickityEvents, callback: (event?: Event, pointer?: Element | Touch) => any): void;

    /**
     * one time event handler
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    once(eventname: string, callback: (event?: Event, pointer?: Element | Touch, cellElement?: Element, cellIndex?: number) => any): void;

    /**
     * one time event handler
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    once(eventname: string, callback: (event?: Event, pointer?: Element | Touch, moveVector?: Object) => any): void;

    /**
     * one time event handler
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    once(eventname: string, callback: (event?: Event, cellElement?: Element) => any): void;

    /**
     * one time event handler
     * @param eventName name of event  (@see Flickity.FlickityEvents class for filckity supported events)
     * @param callback callback funtion to execute when event fires
     */
    once(eventname: string, callback: (event?: Event, pointer?: Element | Touch) => any): void;
}

interface FlickityOptions {
    /**
     * Specify selector for cell elements. cellSelector is useful if you have other elements in your gallery elements that are not cells.
     *
     * default: '.gallery-cell'
     */
    cellSelector?: string;

    /**
     * Zero-based index of the initial selected cell.
     */
    initialIndex?: number;

    /**
     * Enable keyboard navigation. Users can tab to a Flickity gallery, and pressing left & right keys to change cells.
     *
     * default: true
     */
    accessibility?: boolean;

    /**
     * Sets the height of the gallery to the height of the tallest cell.  Set to  false if you prefer to size the gallery with CSS, rather than using the size of cells.
     *
     * default: true
     */
    setGallerySize?: boolean;

    /**
     * Adjusts sizes and positions when window is resized.
     *
     * default: true
     */
    resize?: boolean;

    /**
     * Align cells within the gallery element.
     * opttions: 'left', 'center', 'right'
     *
     * default: 'center'
     */
    cellAlign?: string;

    /**
     * Contains cells to gallery element to prevent excess scroll at beginning or end. Has no effect if wrapAround is enabled
     *
     * default: true
     */
    contain?: boolean;

    /**
     * Unloaded images have no size, which can throw off cell positions. To fix this, the imagesLoaded option re-positions cells once their images have loaded.
     *
     * default: true
     */
    imagesLoaded?: boolean;

    /**
     * Sets positioning in percent values, rather than pixel values. If your cells do not have percent widths, we recommended percentPosition: false.
     *
     * default: false
     */
    percentPosition?: boolean;

    /**
     * Enables right-to-left layout.
     *
     * default: false
     */
    rightToLeft?: boolean;

    /**
     * Enables dragging and flicking
     *
     * default: true
     */
    draggable?: boolean;

    /**
     * Enables content to be freely scrolled and flicked without aligning cells to an end position.
     * Enable freeScroll and wrapAround and you can flick forever, man.
     *
     * default: false
     */
    freeScroll?: boolean;

    /**
     * At the end of cells, wrap-around to the other end for infinite scrolling.
     *
     * default: false
     */
    wrapAround?: boolean;

    /**
     * Groups cells together in slides. Flicking, page dots, and previous/next buttons are mapped to group slides, not individual cells.
     * `is-selected` class is added to the multiple cells in the selected slide.
     * If set to true, group cells that fit in carousel viewport.
     * If set to a number, group cells by that number.
     * If set to a percent string, group cells that fit in the percent of the width of the carousel viewport.
     */
    groupCells?: boolean | number | string;

    /**
     * Loads cell images when a cell is selected.
     * Set the image's URL to load with the `data-flickity-lazyload` attribute.
     * If set to `true`, lazyloads image in selected slide
     * If set to a number n, load images in selected slide and next n slides and previous n slides.
     *
     * default: false
     */
    lazyLoad?: boolean | number;

    /**
     * Loads cell background image when a cell is selected.
     * Set the background image's URL to load with the `data-flickity-bg-lazyload` attribute.
     * If set to `true`, lazyloads background image in selected slide
     * If set to a number n, load background images in selected slide and next n slides and previous n slides.
     * bgLazyLoad requires the flickity-bg-lazyload package. This package is not included and must be installed separately.
     */
    bgLazyLoad?: boolean | number;

    /**
     * Automatically advances to the next cell.
     *
     * default: false
     */
    autoPlay?: boolean | number;

    /**
     * Changes height of carousel to fit height of selected slide.
     */
    adaptiveHeight?: boolean;

    /**
     * You can enable and disable Flickity with CSS. watchCSS option watches the content of :after of the gallery element. Flickity is enabled if :after content is 'flickity'.
     * note: IE8 and Android 2.3 do not support watching :after. Flickity will be disabled when watchCSS: true. Set watchCSS: 'fallbackOn' to enable Flickity for these browsers.
     *
     * default: false
     */
    watchCSS?: boolean | string;

    /**
     * Use one Flickity gallery as navigation for another.
     *
     * default: disabled
     */
    asNavFor?: string;

    /**
     * The number of pixels a mouse or touch has to move before dragging begins. Increase dragThreshold to allow for more wiggle room for vertical page scrolling on touch devices.
     *
     * default: 3
     */
    dragThreshold?: number;

    /**
     * selectedAttraction attracts the position of the slider to the selected cell. Higher attraction makes the slider move faster. Lower makes it move slower.
     *
     * default: 0.025
     */
    selectedAttraction?: number;

    /**
     * Friction slows the movement of slider. Higher friction makes the slider feel stickier and less bouncy. Lower friction makes the slider feel looser and more wobbly.
     *
     * default: 0.28
     */
    friction?: number;

    /**
     * Slows movement of slider when freeScroll: true. Higher friction makes the slider feel stickier. Lower friction makes the slider feel looser.
     *
     * default: 0.075
     */
    freeScrollFriction?: number;

    /**
     * Creates and enables previous & next buttons.
     *
     * default: true
     */
    prevNextButtons?: boolean;

    /**
     * Creates and enables paging dots.
     *
     * default: true
     */
    pageDots?: boolean;

    /**
     * Draws the shape of the arrows in the previous & next buttons.
     * javascript dictionary of points or path to SVG file
     */
    arrowShape?: string | { x0: number, x1: number, y1: number, x2: number, y2: number, x3: number };
}
