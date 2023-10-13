// Type definitions for react-window-infinite-loader 1.0
// Project: https://github.com/bvaughn/react-window-infinite-loader/
// Definitions by: Nivesh Ravindran <https://github.com/Nibblesh>
//                 fnknzzz <https://github.com/fnknzzz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { Component, FC, ReactNode, Ref } from "react";
import { FixedSizeList, ListOnItemsRenderedProps, VariableSizeList } from "react-window";

type OnItemsRendered = (props: ListOnItemsRenderedProps) => any;

interface InfiniteLoaderProps {
    isItemLoaded: (index: number) => boolean;
    loadMoreItems: (startIndex: number, stopIndex: number) => Promise<void> | void;
    itemCount: number;
    children: (props: { onItemsRendered: OnItemsRendered; ref: (ref: any) => void }) => ReactNode;
    threshold?: number | undefined;
    minimumBatchSize?: number | undefined;
}

declare class InfiniteLoader extends Component<InfiniteLoaderProps> {
    resetloadMoreItemsCache(autoReload?: boolean): void;
}

export = InfiniteLoader;
