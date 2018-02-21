import { SignalRef } from './signal';
export declare type LayoutAlign = 'all' | 'each' | 'none' | SignalRef;
export declare type LayoutBounds = 'full' | 'flush' | SignalRef;
export declare type LayoutOffset = number | SignalRef | {
    rowHeader?: number | SignalRef;
    rowFooter?: number | SignalRef;
    rowTitle?: number | SignalRef;
    columnHeader?: number | SignalRef;
    columnFooter?: number | SignalRef;
    columnTitle?: number | SignalRef;
};
export declare type RowColumnParam = number | SignalRef | {
    row?: number | SignalRef;
    column?: number | SignalRef;
};
export declare type Layout = SignalRef | {
    align?: LayoutAlign | {
        row?: LayoutAlign;
        column?: LayoutAlign;
    };
    bounds?: LayoutBounds;
    columns?: number | SignalRef;
    padding?: RowColumnParam;
    offset?: LayoutOffset;
    titleBand?: RowColumnParam;
};
