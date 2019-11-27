// Type definitions for react-window-infinite-loader 1.0
// Project: https://github.com/bvaughn/react-window-infinite-loader/
// Definitions by: Nivesh Ravindran <https://github.com/Nibblesh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { FC, Ref, ReactNode, Component } from "react";
import { ListOnItemsRenderedProps, FixedSizeList, VariableSizeList } from 'react-window';

type OnItemsRendered = (props: ListOnItemsRenderedProps) => any;

interface InfiniteLoaderProps {
    isItemLoaded: (index: number) => boolean;
    loadMoreItems: (startIndex: number, stopIndex: number) => Promise<any> | null;
    itemCount: number;
    children: (props: {onItemsRendered: OnItemsRendered, ref: Ref<any>}) => ReactNode;
    threshold?: number;
    minimumBatchSize?: number;
}

declare class InfiniteLoader extends Component<InfiniteLoaderProps> {
}

export = InfiniteLoader;
