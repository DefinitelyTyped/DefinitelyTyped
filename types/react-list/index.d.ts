// Type definitions for react-list v0.8.3
// Project: https://github.com/orgsync/react-list
// Definitions by: Yifei Yan <https://github.com/buptyyf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
    Component,
    Props
} from "react";
export as namespace ReactList;

/*~ If this module has methods, declare them as functions like so.
 */
export function scrollTo(index: number): void;
export function scrollAround(index: number): void;
export function getVisibleRange(): Array<number>;

/*~ You can declare types that are available via importing the module */
type ItemRenderer = (index: number, key: number | string) => JSX.Element;
type ItemsRenderer = (items: Array<JSX.Element>, ref: string) => JSX.Element;
type ItemSizeEstimator = (index: number, cache: object) => number;
type ItemSizeGetter = (index: number) => number;
type ScrollParentGetter = () => JSX.Element;

export interface ReactListProps extends Props<ReactList> {
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

export default class ReactList extends Component<ReactListProps, {}> {}