// Type definitions for redux-infinite-scroll 1.0
// Project: https://github.com/RealScout/redux-infinite-scroll
// Definitions by: Tony Nikolov <https://github.com/silkyfray>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, HTMLProps } from "react";

interface InfiniteScrollerProps {
    elementIsScrollable?: boolean | undefined;
    containerHeight?: number | string | undefined;
    threshold?: number | undefined;
    hasMore?: boolean | undefined;
    loadingMore?: boolean | undefined;
    loader?: any;
    showLoader?: boolean | undefined;
    loadMore(): void;
    items?: JSX.Element[] | undefined;
    children?: JSX.Element[] | undefined;
    holderType?: string | undefined;
}

declare class InfiniteScoller extends Component<InfiniteScrollerProps & HTMLProps<HTMLDivElement>> {}

export default InfiniteScoller;
