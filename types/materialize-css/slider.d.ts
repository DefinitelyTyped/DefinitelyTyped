/// <reference path="./common.d.ts" />

declare namespace M {
    class Slider extends Component<SliderOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Slider;

        /**
         * Init Slider
         */
        static init(els: Element, options?: Partial<SliderOptions>): Slider;

        /**
         * Init Sliders
         */
        static init(els: MElements, options?: Partial<SliderOptions>): Slider[];

        /**
         * ID of the dropdown element
         */
        el: Element;

        /**
         * ID of the dropdown element
         */
        options: SliderOptions;

        /**
         * Index of current slide
         */
        activeIndex: number;

        /**
         * Pause slider autoslide
         */
        pause(): void;

        /**
         * Start slider autoslide
         */
        start(): void;

        /**
         * Move to next slider
         */
        next(): void;

        /**
         * Move to prev slider
         */
        prev(): void;
    }

    interface SliderOptions {
        /**
         * Set to false to hide slide indicators
         * @default true
         */
        indicators: boolean;

        /**
         * Set height of slider
         * @default 400
         */
        height: number;

        /**
         * Set the duration of the transition animation in ms
         * @default 500
         */
        duration: number;

        /**
         * Set the duration between transitions in ms
         * @default 6000
         */
        interval: number;
    }
}

interface JQuery {
    slider(method: keyof Pick<M.Slider, "pause" | "start" | "next" | "prev" | "destroy">): JQuery;
    slider(options?: Partial<M.SliderOptions>): JQuery;
}
