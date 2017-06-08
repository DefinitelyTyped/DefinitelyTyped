// Type definitions for PhotoSwipe 4.0.8
// Project: http://photoswipe.com/
// Definitions by: Xiaohan Zhang <https://github.com/hellochar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PhotoSwipe {
    /**
     * A specific slide in the PhotoSwipe gallery. The terms "item", "slide", and "slide object" are used interchangeably.
     */
    export interface Item {
        /**
         * The url of this image.
         */
        src: string;
        /**
         * The width of this image.
         */
        w: number;
        /**
         * The height of this image.
         */
        h: number;

        /**
         * Internal property added by PhotoSwipe.
         */
        loadError?: boolean;

        /**
         * Internal property added by PhotoSwipe.
         */
        vGap?: {top: number; bottom: number};

        /**
         * Internal property added by PhotoSwipe.
         * This number is computed to be this item's smaller dimension divided by the larger dimension.
         */
        fitRatio?: number;

        /**
         * Internal property added by PhotoSwipe.
         */
        initialZoomLevel?: number;

        /**
         * Internal property added by PhotoSwipe.
         */
        bounds?: any;

        /**
         * Internal property added by PhotoSwipe.
         */
        initialPosition?: any;
    }

    /**
     * Options for the base PhotoSwipe class. Derived from http://photoswipe.com/documentation/options.html
     */
    export interface Options {
        /**
         * Start slide index. 0 is the first slide. Must be integer, not a string.
         *
         * Default 0.
         */
        index?: number;

        /**
         * Function should return an object with coordinates from which initial zoom-in animation will start (or zoom-out animation will end).
         * Object should contain three properties: x (X position, relative to document), y (Y position, relative to document), w (width of the element).
         * Height will be calculated automatically based on size of large image.
         * For example if you return {x:0,y:0,w:50} zoom animation will start in top left corner of your page.
         * Function has one argument - index of the item that is opening or closing.
         *
         * Default undefined.
         */
        getThumbBoundsFn?: (index: number) => { x: number; y: number; w: number };

        /**
         * Initial zoom-in transition duration in milliseconds. Set to 0 to disable. Besides this JS option, you need also to change transition duration in PhotoSwipe CSS file:
         * .pswp--animate_opacity,
         * .pswp__bg,
         * .pswp__caption,
         * .pswp__top-bar,
         * .pswp--has_mouse .pswp__button--arrow--left,
         * .pswp--has_mouse .pswp__button--arrow--right{
         *     -webkit-transition: opacity 333ms cubic-bezier(.4,0,.22,1);
         *     transition: opacity 333ms cubic-bezier(.4,0,.22,1);
         * }
         *
         * Default 333.
         */
        showAnimationDuration?: number;

        /**
         * The same as the previous option, just for closing (zoom-out) transition.
         * After PhotoSwipe is opened pswp--open class will be added to the root element, you may use it to apply different transition duration in CSS.
         *
         * Default 333.
         */
        hideAnimationDuration?: number;

        /**
         * If set to false background opacity and image scale will be animated (image opacity is always 1).
         * If set to true root PhotoSwipe element opacity and image scale will be animated.
         * Enable it when dimensions of your small thumbnail don't match dimensions of large image.
         *
         * Default false.
         */
        showHideOpacity?: boolean;

        /**
         * Background (.pswp__bg) opacity.
         * Should be a number from 0 to 1, e.g. 0.7.
         * This style is defined via JS, not via CSS, as this value is used for a few gesture-based transitions.
         *
         * Default 1.
         */
        bgOpacity?: number;

        /**
         * Spacing ratio between slides. For example, 0.12 will render as a 12% of sliding viewport width (rounded).
         *
         * Default 0.12.
         */
        spacing?: number;

        /**
         * Allow swipe navigation to next/prev item when current item is zoomed.
         * Option is always false on devices that don't have hardware touch support.
         *
         * Default true.
         */
        allowNoPanText?: boolean;

        /**
         * Maximum zoom level when performing spread (zoom) gesture. 2 means that image can be zoomed 2x from original size.
         * Try to avoid huge values here, as too big image may cause memory issues on mobile (especially on iOS).
         *
         * Default 2.
         */
        maxSpreadZoom?: number;

        /**
         * Function should return zoom level to which image will be zoomed after double-tap gesture, or when user clicks on zoom icon, or mouse-click on image itself.
         * If you return 1 image will be zoomed to its original size.
         * Function is called each time zoom-in animation is initiated. So feel free to return different values for different images based on their size or screen DPI.
         *
         * Default is:
         *
         * function(isMouseClick, item) {
         *
         *     // isMouseClick          - true if mouse, false if double-tap
         *     // item                  - slide object that is zoomed, usually current
         *     // item.initialZoomLevel - initial scale ratio of image
         *     //                         e.g. if viewport is 700px and image is 1400px,
         *     //                              initialZoomLevel will be 0.5
         *
         *     if(isMouseClick) {
         *
         *         // is mouse click on image or zoom icon
         *
         *         // zoom to original
         *         return 1;
         *
         *         // e.g. for 1400px image:
         *         // 0.5 - zooms to 700px
         *         // 2   - zooms to 2800px
         *
         *     } else {
         *
         *         // is double-tap
         *
         *         // zoom to original if initial zoom is less than 0.7x,
         *         // otherwise to 1.5x, to make sure that double-tap gesture always zooms image
         *         return item.initialZoomLevel < 0.7 ? 1 : 1.5;
         *     }
         * }
         */
        getDoubleTapZoom?: (isMouseClick: boolean, item: Item) => number;

        /**
         * Loop slides when using swipe gesture.If set to true you'll be able to swipe from last to first image.
         * Option is always false when there are less than 3 slides.
         * This option has no relation to arrows navigation. Arrows loop is turned on permanently. You can modify this behavior by making custom UI.
         *
         * Default true.
         */
        loop?: boolean;

        /**
         * Pinch to close gallery gesture. The gallery’s background will gradually fade out as the user zooms out. When the gesture is complete, the gallery will close.
         *
         * Default true.
         */
        pinchToClose?: boolean;

        /**
         * Close gallery on page scroll. Option works just for devices without hardware touch support.
         *
         * Default true.
         */
        closeOnScroll?: boolean;

        /**
         * Close gallery when dragging vertically and when image is not zoomed. Always false when mouse is used.
         *
         * Default true.
         */
        closeOnVerticalDrag?: boolean;

        /**
         * Option allows you to predefine if mouse was used or not.
         * Some PhotoSwipe feature depend on it, for example default UI left/right arrows will be displayed only after mouse is used.
         * If set to false, PhotoSwipe will start detecting when mouse is used by itself, mouseUsed event triggers when mouse is found.
         *
         * default false.
         */
        mouseUsed?: boolean;

        /**
         * esc keyboard key to close PhotoSwipe. Option can be changed dynamically (yourPhotoSwipeInstance.options.escKey = false;).
         *
         * Default true.
         */
        escKey?: boolean;

        /**
         * Keyboard left or right arrow key navigation. Option can be changed dynamically (yourPhotoSwipeInstance.options.arrowKeys = false;).
         *
         * Default true.
         */
        arrowKeys?: boolean;

        /**
         * If set to false disables history module (back button to close gallery, unique URL for each slide). You can also just exclude history.js module from your build.
         *
         * Default true.
         */
        history?: boolean;

        /**
         * Gallery unique ID. Used by History module when forming URL. For example, second picture of gallery with UID 1 will have URL: http://example.com/#&gid=1&pid=2.
         *
         * Default 1.
         */
        galleryUID?: number;

        /**
         * Error message when image was not loaded. %url% will be replaced by URL of image.
         *
         * Default is:
         *
         * <div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>
         */
        errorMsg?: string;

        /**
         * Lazy loading of nearby slides based on direction of movement.
         * Should be an array with two integers, first one - number of items to preload before current image, second one - after the current image.
         * E.g. if you set it to [1,3], it'll load 1 image before the current, and 3 images after current. Values can not be less than 1.
         *
         * Default [1, 1].
         */
        preload?: number[];

        /**
         * String with name of class that will be added to root element of PhotoSwipe (.pswp). Can contain multiple classes separated by space.
         */
        mainClass?: string;

        /**
         * NOTE: this property will be ignored in future versions of PhotoSwipe.
         *
         * @deprecated
         */
        mainScrollEndFriction?: number;

        /**
         * NOTE: this property will be ignored in future versions of PhotoSwipe.
         *
         * @deprecated
         */
        panEndFriction?: number;

        /**
         * Function that should return total number of items in gallery. Don't put very complex code here, function is executed very often.
         *
         * By default it returns length of slides array.
         */
        getNumItemsFn?: () => number;

        /**
         * Will set focus on PhotoSwipe element after it's open.
         *
         * Default true.
         */
        focus?: boolean;

        /**
         * Function should check if the element (el) is clickable.
         * If it is – PhotoSwipe will not call preventDefault and click event will pass through.
         * Function should be as light is possible, as it's executed multiple times on drag start and drag release.
         *
         * Default is:
         *
         * function(el) {
         *     return el.tagName === 'A';
         * }
         */
        isClickableElement?: (el: HTMLElement) => boolean;

        /**
         * Controls whether PhotoSwipe should expand to take up the entire viewport.
         * If false, the PhotoSwipe element will take the size of the positioned parent of the template. Take a look at the FAQ for more
         * information.
         */
        modal?: boolean;
    }

    export interface UIFramework {
        [name: string]: any;
    }

    /**
     * Base type for PhotoSwipe user interfaces.
     * T is the type of options that this PhotoSwipe.UI uses.
     *
     * To build your own PhotoSwipe.UI class:
     *
     * (1) Write an interface for the custom UI's Options that extends PhotoSwipe.Options.
     * (2) Write your custom class, implementing the PhotoSwipe.UI interface.
     * (3) Pass in your custom interface to the type parameter T of the PhotoSwipe.UI interface.
     *
     * Example:
     *
     * // (1)
     * interface MyUIOptions extends PhotoSwipe.Options {
     *     foo: number;
     *     bar: string;
     * }
     *
     * // (2) and (3)
     * class MyUI implements PhotoSwipe.UI<MyUIOptions> {
     *     constructor(pswp: PhotoSwipe<MyUIOptions>, framework: PhotoSwipe.UIFramework) {
     *     }
     * }
     *
     * var pswpWithMyUI = new PhotoSwipe<MyUIOptions>(element, MyUI, items, {foo: 1, bar: "abc"});
     */
    export interface UI<T extends Options> {
        /**
         * Called by PhotoSwipe after it constructs the UI.
         */
        init: () => void;
    }
}

/**
 * Base PhotoSwipe class. Derived from http://photoswipe.com/documentation/api.html
 */
declare class PhotoSwipe<T extends PhotoSwipe.Options> {
    /**
     * Constructs a PhotoSwipe.
     *
     * Note: By default Typescript will not correctly typecheck the options parameter. Make sure to
     * explicitly annotate the type of options being passed into the constructor like so:
     *
     * new PhotoSwipe<PhotoSwipeUI_Default.Options>( element, PhotoSwipeUI_Default, items, options );
     *
     * It accepts 4 arguments:
     *
     * (1) PhotoSwipe element (it must be added to DOM).
     * (2) PhotoSwipe UI class. If you included default photoswipe-ui-default.js, class will be PhotoSwipeUI_Default. Can be "false".
     * (3) Array with objects (slides).
     * (4) Options.
     */
    constructor(pswpElement: HTMLElement,
                uiConstructor: (new (pswp: PhotoSwipe<T>, framework: PhotoSwipe.UIFramework) => PhotoSwipe.UI<T>) | boolean,
                items: PhotoSwipe.Item[],
                options: T);

    /**
     * Current slide object.
     */
    currItem: PhotoSwipe.Item;

    /**
     * Items in this gallery. PhotoSwipe will (almost) dynamically respond to changes in this array.
     * To add, edit, or remove slides after PhotoSwipe is opened, you just need to modify the items array.
     *
     * For example, you can push new slide objects into the items array:
     *
     * pswp.items.push({
     *     src: "path/to/image.jpg",
     *     w:1200,
     *     h:500
     * });
     *
     * If you changed slide that is CURRENT, NEXT or PREVIOUS (which you should try to avoid) – you need to call method that will update their content:
     *
     * // sets a flag that slides should be updated
     * pswp.invalidateCurrItems();
     * // updates the content of slides
     * pswp.updateSize(true);
     *
     * If you're using the DefaultUI, call pswp.ui.update() to update that as well. Also note:
     *
     * (1) You can't reassign whole array, you can only modify it (e.g. use splice to remove elements).
     * (2) If you're going to remove current slide – call goTo method before.
     * (3) There must be at least one slide.
     * (4) This technique is used to serve responsive images.
     */
    items: PhotoSwipe.Item[];

    /**
     * Size of the current viewport.
     */
    viewportSize: {
         x: number;
         y: number;
    };

    /**
     * The Framework. Holds utility methods.
     */
    framework: PhotoSwipe.UIFramework;

    /**
     * The ui instance constructed by PhotoSwipe.
     */
    ui: PhotoSwipe.UI<T>;

    /**
     * The background element (with class .pswp__bg).
     */
    bg: HTMLElement;

    /**
     * The container element (with class .pswp__container).
     */
    container: HTMLElement;

    /**
     * Options for this PhotoSwipe. This object is a copy of the options parameter passed into the constructor.
     * Some properties in options are dynamically modifiable.
     */
    options: T;

    /**
     * Current item index.
     */
    getCurrentIndex(): number;

    /**
     * Current zoom level.
     */
    getZoomLevel(): number;

    /**
     * Whether one (or more) pointer is used.
     */
    isDragging(): boolean;

    /**
     * Whether two (or more) pointers are used.
     */
    isZooming(): boolean;

    /**
     * true wehn transition between is running (after swipe).
     */
    isMainScrollAnimating(): boolean;

    /**
     * Initialize and open gallery (you can bind events before this method).
     */
    init(): void;

    /**
     * Go to slide by index.
     */
    goTo(index: number): void;

    /**
     * Go to the next slide.
     */
    next(): void;

    /**
     * Go to the previous slide.
     */
    prev(): void;

    /**
     * Update gallery size
     * @param  {boolean} `force` If you set it to `true`, size of the gallery will be updated even if viewport size hasn't changed.
     */
    updateSize(force: boolean): void;

    /**
     * Close gallery. Calls destroy() after closing.
     */
    close(): void;

    /**
     * Destroy gallery (unbind listeners, free memory). Automatically called after close().
     */
    destroy(): void;

    /**
     * Zoom in/out the current slide to a specified zoom level, optionally with animation.
     *
     * @param  {number}   `destZoomLevel` Destination scale number. Set to 1 for unzoomed.
     *                                    Use `pswp.currItem.fitRatio - image` to zoom the image to perfectly fit into the viewport.
     * @param  {object}   `centerPoint`   The center of the zoom, relative to viewport.
     * @param  {number}   `speed`         Animation duration in milliseconds. Can be 0.
     * @param  {function} `easingFn`      Easing function (optional). Set to false to use default easing.
     *                                    This method is passed in the percentage that the animation is finished (from 0 to 1) and should return an eased value (which should be 0 at the start and 1 at the end).
     * @param  {function} `updateFn`      Function will be called on each update frame (optional).
     *                                    This method is passed the eased zoom level.
     *
     * Example below will 2x zoom to center of slide:
     *
     * pswp.zoomTo(2, {x:pswp.viewportSize.x/2,y:pswp.viewportSize.y/2}, 2000, false, function(now) {});
     *
     */
    zoomTo(destZoomLevel: number,
           centerPoint: {x: number; y: number},
           speed: number,
           easingFn?: (k: number) => number,
           updateFn?: (now: number) => void): void;

    /**
     * Apply zoom and pan to the current slide
     *
     * @param   {number} `zoomLevel`
     * @param   {int}    `panX`
     * @param   {int}    `panY`
     *
     * For example: `pswp.applyZoomPan(1, 0, 0)`
     * will zoom current image to the original size
     * and will place it on top left corner.
     *
     */
    applyZoomPan(zoomLevel: number, panX: number, panY: number): void;

    /**
     * Call this method after dynamically modifying the current, next, or previous slide in the items array.
     */
    invalidateCurrItems(): void;

    /**
     * PhotoSwipe uses very simple Event/Messaging system.
     * It has two methods shout (triggers event) and listen (handles event).
     * For now there is no method to unbind listener, but all of them are cleared when PhotoSwipe is closed.
     */
    listen(eventName: string, callback: (...args: any[]) => void): void;

    /**
     * Called before slides change (before the content is changed ,but after navigation). Update UI here.
     */
    listen(eventName: 'beforeChange', callback: () => void): void;
    /**
     * Called after slides change (after content has changed).
     */
    listen(eventName: 'afterChange', callback: () => void): void;
    /**
     * Called when an image is loaded.
     */
    listen(eventName: 'imageLoadComplete', callback: (index: number, item: PhotoSwipe.Item) => void): void;
    /**
     * Called when the viewport size changes.
     */
    listen(eventName: 'resize', callback: () => void): void;
    /**
     * Triggers when PhotoSwipe reads slide object data, which happens before content is set, or before lazy-loading is initiated.
     * Use it to dynamically change properties of the slide object.
     */
    listen(eventName: 'gettingData', callback: (index: number, item: PhotoSwipe.Item) => void): void;
    /**
     * Called when mouse is first used (triggers only once).
     */
    listen(eventName: 'mouseUsed', callback: () => void): void;
    /**
     * Called when opening zoom in animation starting.
     */
    listen(eventName: 'initialZoomIn', callback: () => void): void;
    /**
     * Called when opening zoom in animation finished.
     */
    listen(eventName: 'initialZoomInEnd', callback: () => void): void;
    /**
     * Called when closing zoom out animation started.
     */
    listen(eventName: 'initialZoomOut', callback: () => void): void;
    /**
     * Called when closing zoom out animation finished.
     */
    listen(eventName: 'initialZoomOutEnd', callback: () => void): void;
    /**
     * Allows overriding vertical margin for individual items.
     *
     * Example:
     *
     * pswp.listen('parseVerticalMargin', function(item) {
     *     var gap = item.vGap;
     *
     *     gap.top = 50; // There will be 50px gap from top of viewport
     *     gap.bottom = 100; // and 100px gap from the bottom
     * });
     */
    listen(eventName: 'parseVerticalMargin', callback: (item: PhotoSwipe.Item) => void): void;
    /**
     * Called when the gallery starts closing.
     */
    listen(eventName: 'close', callback: () => void): void;
    /**
     * Gallery unbinds events (triggers before closing animation).
     */
    listen(eventName: 'unbindEvents', callback: () => void): void;
    /**
     * Called after the gallery is closed and the closing animation finishes.
     * Clean up your stuff here.
     */
    listen(eventName: 'destroy', callback: () => void): void;
    /**
     * Allow to call preventDefault on down and up events.
     */
    listen(eventName: 'preventDragEvent', callback: (e: MouseEvent, isDown: boolean, preventObj: {prevent: boolean}) => void): void;

    /**
     * Triggers eventName event with args passed through to listeners.
     */
    shout(eventName: string, ...args: any[]): void;
}

export = PhotoSwipe;
export as namespace PhotoSwipe;
