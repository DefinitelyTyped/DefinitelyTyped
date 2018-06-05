// Type definitions for react-infinite-scroll-component 4.1
// Project: https://github.com/ankeetmaini/react-infinite-scroll-component#readme
// Definitions by: Stephanie Roy <https://github.com/sroy3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="react" />

declare module InfiniteScroll {
    interface InfiniteScrollProps {
        /**
         * Set the length of the data.This will unlock the subsequent calls to next.
         */
        dataLength: number;

        /**
         * A function which must be called after reaching the bottom. It must trigger some sort of action which fetches the next data.
         * The data is passed as children to the InfiniteScroll component and the data should contain previous items too.
         * e.g. Initial data = [1, 2, 3] and then next load of data should be [1, 2, 3, 4, 5, 6].
         */
        next: () => void;

        /**
         * It tells the InfiniteScroll component on whether to call next function on reaching the bottom and shows an endMessage to the user
         */
        hasMore: boolean;

        /**
         * This message is shown to the user when he has seen all the records which means he's at the bottom and hasMore is false
         */
        endMessage: React.ReactNode

        /**
         * You can send a loader component to show while the component waits for the next load of data. e.g. <h3>Loading...</h3> or any fancy loader element
         */
        loader?: React.ReactNode;

        /**
         * This function will be called, it should return the fresh data that you want to show the user
         */
        refreshFunction?: () => void;

        /**
         * To enable Pull Down to Refresh feature
         */
        pullDownToRefresh?: boolean;

        /**
         * Any JSX that you want to show the user, default={<h3>Pull down to refresh</h3>}
         */
        pullDownToRefreshContent?: React.ReactNode;

        /**
         * Minimum distance the user needs to pull down to trigger the refresh, default=100px
         */
        pullDownToRefreshThreshold?: number;

        /**
         * Any JSX that you want to show the user, default={<h3>Release to refresh</h3>}
         */
        releaseToRefreshContent?: boolean;

        /**
         * A threshold value after that the InfiniteScroll will call next. By default it's 0.8. It means the next will be called when the user comes below 80% of the total height.
         */
        scrollThreshold?: number;

        /**
         * A function that will listen to the scroll event on the scrolling container. Note that the scroll event is throttled, so you may not receive as many events as you would expect.
         */
        onScroll?: () => void;

        /**
         * Reference to a (parent) DOM element that is already providing overflow scrollbars to the InfiniteScroll component.
         * You should provide the id of the DOM node preferably.
         */
        scrollableTarget?: React.ReactNode | string;

        /**
         * Children is by default assumed to be of type array and it's length is used to determine if loader needs to be shown or not,
         * if your children is not an array, specify this prop to tell if your items are 0 or more.
         */
        hasChildren?: boolean;

        /**
         * Set a scroll y position for the component to render with.
         */
        initialScrollY?: number;

        /**
         * Set a scroll y position for the component to render with.
         */
        style?: any;

        /**
         * Give only if you want to have a fixed height scrolling content
         */
        height?: number;
    }
}

declare class InfiniteScroll extends React.Component<InfiniteScrollProps, any> {}

declare module 'react-infinite-scroll-component' {
    export = InfiniteScroll;
    export as namespace InfiniteScroll;
}
