/// <reference path="./common.d.ts" />

declare namespace M {
    class Parallax extends Component<ParallaxOptions> {
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
}
