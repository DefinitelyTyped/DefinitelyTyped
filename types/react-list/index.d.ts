import { Component } from "react";

type ItemRenderer = (index: number, key: number | string) => JSX.Element;
type ItemsRenderer = (items: JSX.Element[], ref: string) => JSX.Element;
type ItemSizeEstimator = (index: number, cache: {}) => number;
type ItemSizeGetter = (index: number) => number;
type ScrollParentGetter = () => JSX.Element;

interface ReactListProps {
    children?: React.ReactNode;
    ref?: React.LegacyRef<ReactList> | undefined;
    axis?: "x" | "y" | undefined;
    initialIndex?: number | undefined;
    itemRenderer?: ItemRenderer | undefined;
    itemSizeEstimator?: ItemSizeEstimator | undefined;
    itemSizeGetter?: ItemSizeGetter | undefined;
    itemsRenderer?: ItemsRenderer | undefined;
    length?: number | undefined;
    minSize?: number | undefined;
    pageSize?: number | undefined;
    scrollParentGetter?: ScrollParentGetter | undefined;
    threshold?: number | undefined;
    type?: string | undefined;
    useStaticSize?: boolean | undefined;
    useTranslate3d?: boolean | undefined;
}

declare class ReactList extends Component<ReactListProps> {
    scrollTo(index: number): void;
    scrollAround(index: number): void;
    getVisibleRange(): number[];
}
declare namespace ReactList {}
export = ReactList;
