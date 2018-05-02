/// <reference path="./common.d.ts" />

declare namespace M {
    class ScrollSpy extends Component<ScrollSpyOptions> {
    }

    interface ScrollSpyOptions {
        /**
         * Throttle of scroll handler
         * @default 100
         */
        throttle: number;

        /**
         * Offset for centering element when scrolled to
         * @default 200
         */
        scrollOffset: number;

        /**
         * Class applied to active elements
         * @default 'active'
         */
        activeClass: string;

        /**
         * Used to find active element
         * @default id => 'a[href="#' + id + '"]'
         */
        getActiveElement: (id: string) => string;
    }
}

interface JQuery {
    scrollSpy(options?: Partial<M.ScrollSpyOptions>): JQuery;
}
