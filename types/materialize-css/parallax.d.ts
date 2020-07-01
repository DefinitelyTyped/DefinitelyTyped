/// <reference path="./common.d.ts" />

declare namespace M {
    class Parallax extends Component<ParallaxOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Parallax;

        /**
         * Init Parallax
         */
        static init(els: Element, options?: Partial<ParallaxOptions>): Parallax;

        /**
         * Init Parallaxs
         */
        static init(els: MElements, options?: Partial<ParallaxOptions>): Parallax[];
    }

    interface ParallaxOptions {
        /**
         * The minimum width of the screen, in pixels, where the parallax functionality starts working
         * @default 0
         */
        responsiveThreshold: number;
    }
}

interface JQuery {
    parallax(options?: Partial<M.ParallaxOptions>): JQuery;
    parallax(method: keyof Pick<M.Parallax, "destroy">): JQuery;
}
