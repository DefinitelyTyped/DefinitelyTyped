// Type definitions for redux-infinite-scroll 1.0
// Project: https://github.com/RealScout/redux-infinite-scroll
// Definitions by: Tony Nikolov <https://github.com/silkyfray>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, HTMLProps } from "react";

interface InfiniteScrollerProps {
    elementIsScrollable?: boolean;
    containerHeight?: number | string;
    threshold?: number;
    hasMore?: boolean;
    loadingMore?: boolean;
    loader?: any;
    showLoader?: boolean;
    loadMore(): void;
    items?: JSX.Element[];
    children?: JSX.Element[];
    holderType?: string;
}

declare class InfiniteScoller extends Component<InfiniteScrollerProps & HTMLProps<HTMLDivElement>> {}

export default InfiniteScoller;
