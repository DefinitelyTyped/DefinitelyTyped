declare namespace Glider {
    // Selectors are either results of querying document DOM or a string
    // Let's default to nullable Element to allow friction free migration
    // from JS to TS
    type Selector = Element | string;

    type EasingFunction = (x: number, t: number, b: number, c: number, d: number) => number;

    interface GliderEvent<T = undefined> extends Event {
        detail: T;
        target: (HTMLElement & { _glider: Glider<HTMLElement> | undefined }) | null;
    }

    interface GliderEventMap {
        /**
         * Called whenever an item is added to Glider.js
         */
        "glider-add": {
            scroll: () => void;
        };

        /**
         * Called whenever a Glider.js paging animation is complete
         */
        "glider-animated": {
            value: string | number;
            type: "arrow" | "dot" | "slide";
        };

        /**
         * Called whenever a Glider.js is destroyed
         */
        "glider-destroy": undefined;

        /**
         * Called after Glider.js is first initialized
         */
        "glider-loaded": undefined;

        /**
         * Called whenever Glider.js refreshes its elements or settings
         */
        "glider-refresh": undefined;

        /**
         * Called whenever a Glider.js animation is complete
         */
        "glider-remove": undefined;

        /**
         * Called whenever a slide is hidden. Passed an object containing the slide index
         */
        "glider-slide-hidden": {
            slide: number;
        };

        /**
         * Called whenever a slide is shown. Passed an object containing the slide index
         */
        "glider-slide-visible": {
            slide: number;
        };
    }

    interface Breakpoint {
        breakpoint: number;
        settings: Options;
    }

    interface Options {
        /**
         * An object containing the prev/next arrow settings
         */
        arrows?:
            | {
                prev: Selector | null;
                next: Selector | null;
            }
            | undefined;

        /**
         * An HTML element or selector containing the dot container
         */
        dots?: Selector | null | undefined;

        /**
         * If true, the list can be scrolled by click and dragging with the
         * mouse
         */
        draggable?: boolean | undefined;

        /**
         * How much to aggravate the velocity of the mouse dragging
         */
        dragVelocity?: number | undefined;

        /**
         * An aggravator used to control animation speed. Higher is slower!
         */
        duration?: number | undefined;

        /**
         * This prevents resizing items to fit when `slidesToShow` is set to
         * auto.
         */
        exactWidth?: boolean | undefined;

        /**
         * Use any custom easing function, compatible with most easing
         * plugins
         */
        easing?: EasingFunction | undefined;

        /**
         * This value is ignored unless `slidesToShow` is set to `auto`, in
         * which it is then required.
         */
        itemWidth?: number | undefined;

        /**
         * If true, Glider.js will lock to the nearest slide on resizing of
         * the window
         */
        resizeLock?: boolean | undefined;

        /**
         * An object containing custom settings per provided breakpoint. See
         * demo for details.
         */
        responsive?: Breakpoint[] | undefined;

        /**
         * If true, Glider.js will scroll to the beginning/end when its
         * respective endpoint is reached
         */
        rewind?: boolean | undefined;

        /**
         * If true, Glider.js will scroll to the nearest slide after any
         * scroll interactions
         */
        scrollLock?: boolean | undefined;

        /**
         * When `scrollLock` is set, this is the delay in milliseconds to
         * wait before the scroll happens
         */
        scrollLockDelay?: number | undefined;

        /**
         * Whether or not to release the scroll events from the container
         */
        scrollPropagate?: boolean | undefined;

        /**
         * Whether or not the event bubbles up from the container
         * @default true
         */
        eventPropagate?: boolean | undefined;

        /**
         * Whether or not Glider.js should skip wrapping its children with a
         * 'glider-track' <div>.
         */
        skipTrack?: boolean | undefined;

        /**
         * The number of slides to scroll when arrow navigation is used If
         * this value is set to `auto`, it will match the value of
         * `slidesToScroll`.
         */
        slidesToScroll?: number | "auto" | undefined;

        /**
         * The number of slides to show in container. If this value is set
         * to `auto`, it will be automatially calcuated based upon the
         * number of items able to fit within the container viewport. This
         * requires setting the `itemWidth` option.
         */
        slidesToShow?: number | "auto" | undefined;
    }

    interface Arrow extends HTMLElement {
        _func?: (glider: Glider, direction: "next" | "prev") => false;
    }
}

declare class Glider<T extends HTMLElement = HTMLDivElement> {
    animate_id: number;
    arrows: {
        next?: Glider.Arrow;
        prev?: Glider.Arrow;
    };
    breakpoint: number;
    containerWidth: number;
    dots: HTMLElement;
    ele: T;
    isDrag: boolean;
    itemWidth: number;
    opt: Glider.Options;
    page: number;
    preventClick: boolean;
    slide: number;
    slides: HTMLCollection;
    track: HTMLElement;
    trackWidth: number;

    private _opt: Glider.Options;

    constructor(ref: T, options?: Glider.Options);

    /**
     * Add an item to the list
     * @param element HTMLElement
     */
    addItem(element: HTMLElement): void;

    /**
     * Destroy Glider.js.
     */
    destroy(): void;

    /**
     * Force a refresh of Glider.js. If rebuildPaging is true, paging
     * controls will force a rebuild as well. This arument must be true
     * if any options affecting paging controls (dots/arrows) are
     * modified.
     * @param rebuildPaging boolean
     */
    refresh(rebuildPaging?: boolean): void;

    /**
     * Remove an item from the list
     * @param itemIndex number
     */
    removeItem(itemIndex: number): void;

    /**
     * Scroll to any slide or page. If second argument is explicitly
     * true, then the first argument will refer to the page to scroll
     * to, as opposed to the slide.
     * @param slideIndexs string | number
     * @param isActuallyDotIndex boolean
     */
    scrollItem(slideIndex: string | number, isActuallyDotIndex: boolean): void;

    /**
     * Scroll directly to supplied scroll position in pixels
     * @param pixelOffset number
     */
    scrollTo(pixelOffset: number): void;

    /**
     * Overrides options set during initialization. If called when a
     * breakpoint is active, the settings for the active breakpoint are
     * updated. If second argument is true, the global settings are
     * updated regardless of active breakpoint. Required for overriding
     * `responsive` setting itself
     * @param arguments Glider.Options
     * @param global Boolean
     */
    setOption(arguments: Glider.Options, global?: boolean): void;

    /**
     * Force a refresh of Glider.js navigation controls
     */
    updateControls(): void;

    mouse(): void;

    resize(): void;

    init(): void;
}

declare function Glider<T extends HTMLElement = HTMLDivElement>(element: T): Glider<T>;

declare global {
    interface HTMLElement {
        addEventListener<K extends keyof Glider.GliderEventMap>(
            type: K,
            listener: (event: Glider.GliderEvent<Glider.GliderEventMap[K]>) => void,
            options?: boolean | AddEventListenerOptions,
        ): void;

        removeEventListener<K extends keyof Glider.GliderEventMap>(
            type: K,
            listener: (event: Glider.GliderEvent<Glider.GliderEventMap[K]>) => void,
            options?: boolean | AddEventListenerOptions,
        ): void;
    }

    interface HTMLDivElement {
        addEventListener<K extends keyof Glider.GliderEventMap>(
            type: K,
            listener: (event: Glider.GliderEvent<Glider.GliderEventMap[K]>) => void,
            options?: boolean | AddEventListenerOptions,
        ): void;

        removeEventListener<K extends keyof Glider.GliderEventMap>(
            type: K,
            listener: (event: Glider.GliderEvent<Glider.GliderEventMap[K]>) => void,
            options?: boolean | AddEventListenerOptions,
        ): void;
    }
}

export = Glider;
export as namespace Glider;
