/// <reference path="./common.d.ts" />

declare namespace M {
    class Pushpin extends Component<PushpinOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Pushpin;

        /**
         * Init Pushpin
         */
        static init(els: Element, options?: Partial<PushpinOptions>): Pushpin;

        /**
         * Init Pushpins
         */
        static init(els: MElements, options?: Partial<PushpinOptions>): Pushpin[];

        /**
         * Original offsetTop of element
         */
        originalOffset: number;
    }

    interface PushpinOptions {
        /**
         * The distance in pixels from the top of the page where the element becomes fixed
         * @default 0
         */
        top: number;

        /**
         * The distance in pixels from the top of the page where the elements stops being fixed
         * @default Infinity
         */
        bottom: number;

        /**
         * The offset from the top the element will be fixed at
         * @default 0
         */
        offset: number;

        /**
         * Callback function called when pushpin position changes. You are provided with a position string
         * @default null
         */
        onPositionChange: (this: Pushpin, position: "pinned" | "pin-top" | "pin-bottom") => void;
    }
}

interface JQuery {
    pushpin(options?: Partial<M.PushpinOptions>): JQuery;
    pushpin(method: keyof Pick<M.Pushpin, "destroy">): JQuery;
}
