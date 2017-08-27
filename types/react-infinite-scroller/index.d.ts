// Type definitions for react-infinite-scroller 1.0
// Project: https://github.com/CassetteRocks/react-infinite-scroller
// Definitions by: Lauri Lavanti <https://github.com/Lapanti>,
//                 Piotr Srebniak <https://github.com/psrebniak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

declare namespace InfiniteScroll {
    /**
     * <InfiniteScroll /> properties.
     */
    interface InfiniteScrollProps extends React.HTMLProps<InfiniteScroll> {
        /**
         * Name of the element that the component should render as.
         * Defaults to 'div'.
         */
        element?: string;
        /**
         * Whether there are more items to be loaded. Event listeners are removed if false.
         * Defaults to false.
         */
        hasMore?: boolean;
        /**
         * Whether the component should load the first set of items.
         * Defaults to true.
         */
        initialLoad?: boolean;
        /**
         * Whether new items should be loaded when user scrolls to the top of the scrollable area.
         * Default to false.
         */
        isReverse?: boolean;
        /**
         * A callback for when more items are requested by the user.
         * Page param is next page index.
         */
        loadMore(page: number): void;
        /**
         * The number of the first page to load, with the default of 0, the first page is 1.
         * Defaults to 0.
         */
        pageStart?: number;
        /**
         * The distance in pixels before the end of the items that will trigger a call to loadMore.
         * Defaults to 250.
         */
        threshold?: number;
        /**
         * Proxy to the useCapture option of the added event listeners.
         * Defaults to false.
         */
        useCapture?: boolean;
        /**
         * Add scroll listeners to the window, or else, the component's parentNode.
         * Defaults to true.
         */
        useWindow?: boolean;
        /**
         * Loader component for indicating "loading more".
         */
        loader?: React.ReactElement<any>;
    }
    class InfiniteScroll extends React.Component<InfiniteScrollProps> { }
}

export = InfiniteScroll.InfiniteScroll;
