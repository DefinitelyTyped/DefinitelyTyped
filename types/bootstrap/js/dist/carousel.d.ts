import BaseComponent from "./base-component";

declare class Carousel extends BaseComponent {
    constructor(element: string | Element, options?: Partial<Carousel.Options>);

    /**
     * Cycles through the carousel items from left to right.
     */
    cycle(): void;

    /**
     * Stops the carousel from cycling through items.
     */
    pause(event?: any): void;

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
     * Cycles the carousel to a particular frame (0 based, similar to an array).
     * Returns to the caller before the target item has been shown (e.g., before
     * the slid.bs.carousel event occurs).
     */
    to(index: number): void;

    /**
     * Static method which allows you to get the carousel instance associated
     * with a DOM element.
     */
    static getInstance(element: Element, options?: Partial<Carousel.Options>): Carousel | null;

    static jQueryInterface: Carousel.jQueryInterface;

    // static NAME: 'carousel';

    /**
     * Default settings of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#default-settings
     */
    static Default: Carousel.Options;
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
        slide = "slide.bs.carousel",

        /**
         * Fired when the carousel has completed its slide transition.
         */
        slid = "slid.bs.carousel",
    }

    type Direction = "left" | "right";

    interface Event {
        /**
         * The direction in which the carousel is sliding (either "left" or
         * "right").
         */
        readonly direction: Direction;

        /**
         * The DOM element that is being slid into place as the active item.
         */
        readonly relatedTarget: Element;

        /**
         * The index of the current item
         */
        readonly from: number;

        /**
         * The index of the next item
         */
        readonly to: number;
    }

    type jQueryInterface = (
        config?: Partial<Options> | number | "cycle" | "pause" | "prev" | "next" | "nextWhenVisible" | "dispose",
    ) => void;
}

export default Carousel;
