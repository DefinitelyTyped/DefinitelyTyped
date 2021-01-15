declare class Carousel {
    constructor(element: Element, options?: Partial<Carousel.Options>);

    /**
     * Cycles through the carousel items from left to right.
     */
    cycle(): void;

    /**
     * Stops the carousel from cycling through items.
     */
    pause(): void;

    /**
     * Cycles to the previous item. Returns to the caller before the previous
     * item has been shown (e.g., before the slid.bs.carousel event occurs).
     */
    prev(): void;

    /**
     * Cycles to the next item. Returns to the caller before the next item has
     * been shown (e.g., before the slid.bs.carousel event occurs).
     */
    next(): void;

    /**
     * Cycles the carousel to a particular frame (0 based, similar to an array).
     * Returns to the caller before the target item has been shown (e.g., before
     * the slid.bs.carousel event occurs).
     */
    nextWhenVisible(): void;

    /**
     * Destroys an element's carousel.
     */
    dispose(): void;

    /**
     * Static method which allows you to get the carousel instance associated
     * with a DOM element.
     */
    static getInstance(element: Element, options?: Partial<Carousel.Options>): Carousel;
}

declare namespace Carousel {
    interface Options {
        /**
         * The amount of time to delay between automatically cycling an item. If
         * false, carousel will not automatically cycle.
         *
         * @default 5000
         */
        interval: number;

        /**
         * Whether the carousel should react to keyboard events.
         *
         * @default true
         */
        keyboard: boolean;

        /**
         * If set to "hover", pauses the cycling of the carousel on mouseenter and
         * resumes the cycling of the carousel on mouseleave. If set to false,
         * hovering over the carousel won't pause it. On touch-enabled devices, when
         * set to "hover", cycling will pause on touchend (once the user finished
         * interacting with the carousel) for two intervals, before automatically
         * resuming. Note that this is in addition to the above mouse behavior.
         *
         * @default "hover"
         */
        pause: string | boolean;

        /**
         * Autoplays the carousel after the user manually cycles the first item. If
         * "carousel", autoplays the carousel on load.
         *
         * @default false
         */
        slide: string | boolean;

        /**
         * Whether the carousel should cycle continuously or have hard stops.
         *
         * @default true
         */
        wrap: boolean;

        /**
         * Whether the carousel should support left/right swipe interactions on
         * touchscreen devices.
         *
         * @default true
         */
        touch: boolean;
    }

    enum Events {
        /**
         * Fires immediately when the slide instance method is invoked.
         */
        slide = 'slide.bs.carousel',

        /**
         * Fired when the carousel has completed its slide transition.
         */
        slid = 'slid.bs.carousel',
    }
}

export default Carousel;
