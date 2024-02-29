/// <reference types="react" />

import * as React from "react";

export = Infinite;
export as namespace Infinite;

declare namespace Infinite {
    interface InfiniteProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<Infinite> | undefined;
        elementHeight: number | number[];
        containerHeight?: number | undefined;
        preloadBatchSize?: number | Object | undefined;
        preloadAdditionalHeight?: number | Object | undefined;
        handleScroll?: ((node: React.ReactElement) => void) | undefined;
        infiniteLoadBeginBottomOffset?: number | undefined;
        infiniteLoadBeginEdgeOffset?: number | undefined;
        onInfiniteLoad?: (() => void) | undefined;
        loadingSpinnerDelegate?: React.ReactElement | undefined;
        isInfiniteLoading?: boolean | undefined;
        timeScrollStateLastsForAfterUserScrolls?: number | undefined;
        className?: string | undefined;
        useWindowAsScrollContainer?: boolean | undefined;
        displayBottomUpwards?: boolean | undefined;
    }
}

declare class Infinite extends React.Component<Infinite.InfiniteProps> {
    static containerHeightScaleFactor(n: number): any;
}
