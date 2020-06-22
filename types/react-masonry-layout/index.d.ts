// Type definitions for react-masonry-layout 0.4
// Project: https://github.com/scarletsky/react-masonry-layout#readme
// Definitions by: moonrailgun <https://github.com/moonrailgun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

declare namespace ReactMasonryLayoutExport {
    interface MasonryLayoutSizes {
        /**
         * the minimum viewport width (String CSS unit: em, px, rem)
         */
        mq?: string;

        /**
         * the number of vertical columns
         */
        columns: number;

        /**
         * the space (in px) between the columns and grid items
         */
        gutter: number;
    }

    interface MasonryLayoutProps {
        id: string;

        /**
         * An attribute added to the grid items after they're positioned within the grid. If the attribute is not prefixed with data-, it will be added.
         * @default data-packed
         */
        packed?: string;

        /**
         * An array of objects describing the grid's properties at different breakpoints.
         *
         * When defining your sizes, note the following:
         *
         * - Sizes must be listed smallest to largest
         * - Sizes must use min-width media queries (any unit)
         * - Width of the grid items at each breakpoint should be set in your CSS (in px)
         * - The size without the mq property is assumed to be your smallest breakpoint, and must appear first
         * @default [ { columns: 2, gutter: 20 }, { mq: '768px', columns: 3, gutter: 20 }, { mq: '1024px', columns: 6, gutter: 20 } ]
         */
        sizes?: MasonryLayoutSizes[];

        /**
         * A boolean, defaulting to true, indicating that the grid items should be positioned using the top and left CSS properties.
         *
         * If set to false, the grid items will be positioned using the transform CSS property.
         *
         * @default false
         */
        position?: boolean;

        /**
         * The css classname you want to use
         *
         * @default ''
         */
        className?: string;

        /**
         * The inline style you want to use
         *
         * @default {}
         */
        style?: React.CSSProperties;

        /**
         * The function that used to load more data
         *
         * @default () => {}
         */
        infiniteScroll?: () => void;

        /**
         * By default, it will listen to the window's scroll event. If you want to listen to some div's scroll event, please set the container's id to it
         *
         * @default 'window'
         */
        infiniteScrollContainer?: string;

        /**
         * If you don't want to trigger infiniteScroll, set it to true
         *
         * @default false
         */
        infiniteScrollDisabled?: boolean;

        /**
         * When you are loading data, please set it to true, then the infiniteScroll will not trigger
         *
         * @default false
         */
        infiniteScrollLoading?: boolean;

        /**
         * When no more data, please set it to true, then the infiniteScroll will not trigger
         *
         * @default false
         */
        infiniteScrollEnd?: boolean;

        /**
         * The distance to trigger infiniteScroll
         *
         * @default 200
         */
        infiniteScrollDistance?: number;

        /**
         * Override it if you want to custom the loading spinner
         *
         * @default <div>this is a loader</div>
         */
        infiniteScrollSpinner?: React.ReactNode;

        /**
         * Override it if you want to custom the no more data indicator
         *
         * @default <div>no more data</div>
         */
        infiniteScrollEndIndicator?: React.ReactNode;
    }
}

declare const ReactMasonryLayoutExport: React.ComponentType<ReactMasonryLayoutExport.MasonryLayoutProps>;

export default ReactMasonryLayoutExport;
