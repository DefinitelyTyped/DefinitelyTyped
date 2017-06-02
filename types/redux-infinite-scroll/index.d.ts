// Type definitions for redux-infinite-scroll v1.0.9
// Project: https://github.com/RealScout/redux-infinite-scroll
// Definitions by: Tony Nikolov <https://github.com/silkyfray/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3.

import { Component } from "react"

declare interface IInfiniteScrollerProps {
    elementIsScrollable?: boolean,
    containerHeight?: number | string;
    threshold?: number;
    hasMore?: boolean;
    loadingMore?: boolean;
    loader?: any;
    showLoader?: boolean;
    loadMore: () => void;
    items?: JSX.Element[];
    children?: JSX.Element[];
    holderType?: string;
    className?: string;
}

declare class InfiniteScoller extends Component<IInfiniteScrollerProps, {}>{

}

export default InfiniteScoller;
