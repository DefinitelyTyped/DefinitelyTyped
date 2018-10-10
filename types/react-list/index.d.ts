// Type definitions for react-list 0.8
// Project: https://github.com/orgsync/react-list
// Definitions by: Yifei Yan <https://github.com/buptyyf>, Tom Shen <https://github.com/tomshen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    Component,
    Props
} from "react";

type ItemRenderer = (index: number, key: number | string) => JSX.Element;
type ItemsRenderer = (items: JSX.Element[], ref: string) => JSX.Element;
type ItemSizeEstimator = (index: number, cache: {}) => number;
type ItemSizeGetter = (index: number) => number;
type ScrollParentGetter = () => JSX.Element;

interface ReactListProps extends Props<ReactList> {
    axis?: 'x' | 'y';
    initialIndex?: number;
    itemRenderer?: ItemRenderer;
    itemSizeEstimator?: ItemSizeEstimator;
    itemSizeGetter?: ItemSizeGetter;
    itemsRenderer?: ItemsRenderer;
    length?: number;
    minSize?: number;
    pageSize?: number;
    scrollParentGetter?: ScrollParentGetter;
    threshold?: number;
    type?: string;
    useStaticSize?: boolean;
    useTranslate3d?: boolean;
}

declare class ReactList extends Component<ReactListProps> {
    scrollTo(index: number): void;
    scrollAround(index: number): void;
    getVisibleRange(): number[];
}
declare namespace ReactList { }
export = ReactList;
