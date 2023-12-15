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
