// Type definitions for react-infinite-scroller 1.2
// Project: https://github.com/CassetteRocks/react-infinite-scroller
// Definitions by: Lauri Lavanti <https://github.com/Lapanti>,
//                 Piotr Srebniak <https://github.com/psrebniak>
//                 Brett Miller <https://github.com/WrathZA>
//                 Yipeng Zhao <https://github.com/daggerjames>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
        element?: React.ReactNode | string | undefined;
        /**
         * Whether there are more items to be loaded. Event listeners are removed if false.
         * Defaults to false.
         */
        hasMore?: boolean | undefined;
        /**
         * Whether the component should load the first set of items.
         * Defaults to true.
         */
        initialLoad?: boolean | undefined;
        /**
         * Whether new items should be loaded when user scrolls to the top of the scrollable area.
         * Default to false.
         */
        isReverse?: boolean | undefined;
        /**
         * A callback for when more items are requested by the user.
         * Page param is next page index.
         */
        loadMore(page: number): void;
        /**
         * The number of the first page to load, with the default of 0, the first page is 1.
         * Defaults to 0.
         */
        pageStart?: number | undefined;
        /**
         * The distance in pixels before the end of the items that will trigger a call to loadMore.
         * Defaults to 250.
         */
        threshold?: number | undefined;
        /**
         * Proxy to the useCapture option of the added event listeners.
         * Defaults to false.
         */
        useCapture?: boolean | undefined;
        /**
         * Add scroll listeners to the window, or else, the component's parentNode.
         * Defaults to true.
         */
        useWindow?: boolean | undefined;
        /**
         * Loader component for indicating "loading more".
         */
        loader?: React.ReactElement | undefined;
        /**
         * Override method to return a different scroll listener if it's not the immediate parent of InfiniteScroll.
         */
        getScrollParent?(): HTMLElement | null;
    }
    class InfiniteScroll extends React.Component<InfiniteScrollProps> {
        getParentElement(elem?: HTMLElement | null): HTMLElement | undefined | null;
    }
    namespace InfiniteScroll {}
}

export = InfiniteScroll.InfiniteScroll;
