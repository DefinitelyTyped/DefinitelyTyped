/// <reference path="./common.d.ts" />

declare namespace M {
    class Carousel extends Component<CarouselOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Carousel;

        /**
         * Init carousel
         */
        static init(els: Element, options?: Partial<CarouselOptions>): Carousel;

        /**
         * Init carousels
         */
        static init(els: MElements, options?: Partial<CarouselOptions>): Carousel[];

        /**
         * If the carousel is being clicked or tapped
         */
        pressed: boolean;

        /**
         * If the carousel is currently being dragged
         */
        dragged: number;

        /**
         * The index of the center carousel item
         */
        center: number;

        /**
         * Move carousel to next slide or go forward a given amount of slides
         * @param n How many times the carousel slides
         */
        next(n?: number): void;

        /**
         * Move carousel to previous slide or go back a given amount of slides
         * @param n How many times the carousel slides
         */
        prev(n?: number): void;

        /**
         * Move carousel to nth slide
         * @param n Index of slide
         */
        set(n?: number): void;
    }

    interface CarouselOptions {
        /**
         * Transition duration in milliseconds
         * @default 200
         */
        duration: number;

        /**
         * Perspective zoom. If 0, all items are the same size
         * @default -100
         */
        dist: number;

        /**
         * Set the spacing of the center item
         * @default 0
         */
        shift: number;

        /**
         * Set the padding between non center items
         * @default 0
         */
        padding: number;

        /**
         * Set the number of visible items
         * @default 5
         */
        numVisible: number;

        /**
         * Make the carousel a full width slider like the second example
         * @default false
         */
        fullWidth: boolean;

        /**
         * Set to true to show indicators
         * @default false
         */
        indicators: boolean;

        /**
         * Don't wrap around and cycle through items
         * @default false
         */
        noWrap: boolean;

        /**
         * Callback for when a new slide is cycled to
         * @default null
         */
        onCycleTo: (this: Carousel, current: Element, dragged: boolean) => void;
    }
}

interface JQuery {
    carousel(method: keyof Pick<M.Carousel, "destroy">): JQuery;
    carousel(method: keyof Pick<M.Carousel, "next"> | keyof Pick<M.Carousel, "prev"> | keyof Pick<M.Carousel, "set">, n?: number): JQuery;
    carousel(options?: Partial<M.CarouselOptions>): JQuery;
}
