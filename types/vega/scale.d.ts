import { SignalRef } from './signal';
export declare type RangeEnum = 'width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap';
export declare type RangeRaw = (null | boolean | string | number | SignalRef)[];
export declare type RangeScheme = RangeEnum | RangeRaw | SignalRef | {
    scheme: string | SignalRef;
    count?: number | SignalRef;
    extent?: (number | SignalRef)[] | SignalRef;
};
export declare type RangeBand = RangeEnum | RangeRaw | {
    step: number | SignalRef;
};
export declare type SortOrder = 'ascending' | 'descending' | SignalRef;
export interface SingleSort {
    sort?: boolean | {
        field?: ScaleField;
        op?: ScaleField;
        order?: SortOrder;
    };
}
export interface MultiSort {
    sort?: boolean | {
        op?: 'count';
        order?: SortOrder;
    };
}
export declare type ScaleField = string | SignalRef;
export declare type ScaleInterpolate = string | SignalRef | {
    type: string | SignalRef;
    gamma?: string | SignalRef;
};
export interface DataRef {
    data: string;
    field: ScaleField;
}
export declare type ScaleData = (DataRef & SingleSort) | (MultiSort & ({
    data: string;
    fields: ScaleField[];
} | {
    fields: ((string | number | boolean)[] | DataRef | SignalRef)[];
}));
export declare type QuantScaleType = 'linear' | 'pow' | 'sqrt' | 'log' | 'time' | 'utc' | 'sequential';
export declare type DiscreteScaleType = 'ordinal' | 'band' | 'point';
export declare type DiscretizingScaleType = 'quantile' | 'quantize' | 'threshold' | 'bin-linear' | 'bin-ordinal';
export declare type ScaleType = QuantScaleType | DiscreteScaleType | DiscretizingScaleType | 'identity';
export interface BaseScale {
    name: string;
    type?: ScaleType;
    domain?: (null | string | number | boolean | SignalRef)[] | ScaleData | SignalRef;
    domainMin?: number | SignalRef;
    domainMax?: number | SignalRef;
    domainMid?: number | SignalRef;
    domainRaw?: null | any[] | SignalRef;
    reverse?: boolean | SignalRef;
    round?: boolean | SignalRef;
}
export interface OrdinalScale extends BaseScale {
    type: 'ordinal';
    range?: RangeScheme | ScaleData;
}
export interface BandScale extends BaseScale {
    type: 'band';
    range?: RangeBand;
    padding?: number | SignalRef;
    paddingInner?: number | SignalRef;
    paddingOuter?: number | SignalRef;
    align?: number | SignalRef;
}
export interface PointScale extends BaseScale {
    type: 'point';
    range?: RangeBand;
    padding?: number | SignalRef;
    paddingOuter?: number | SignalRef;
    align?: number | SignalRef;
}
export interface SequentialScale extends BaseScale {
    type: 'sequential';
    range: RangeScheme;
    clamp?: boolean | SignalRef;
    zero?: boolean | SignalRef;
    nice?: boolean | Nice | SignalRef;
}
export declare type Nice = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
export interface TimeScale extends BaseScale {
    type: 'time' | 'utc';
    range?: RangeScheme;
    clamp?: boolean | SignalRef;
    nice?: boolean | Nice | SignalRef;
}
export interface IdentityScale extends BaseScale {
    type: 'identity';
    nice?: Nice;
}
export interface DiscretizingScale extends BaseScale {
    type: DiscreteScaleType;
    range?: RangeScheme;
    nice?: boolean | Nice | SignalRef;
    zero?: boolean | SignalRef;
}
export interface LinearScale extends BaseScale {
    type?: 'linear'; // optional because it's the default
    range?: RangeScheme;
    interpolate?: ScaleInterpolate;
    clamp?: boolean | SignalRef;
    nice?: boolean | number | SignalRef;
    zero?: boolean | SignalRef;
}
export interface LogScale extends BaseScale {
    type: 'log';
    range?: RangeScheme;
    interpolate?: ScaleInterpolate;
    base?: number | SignalRef;
    clamp?: boolean | SignalRef;
    nice?: boolean | number | SignalRef;
}
export interface PowScale extends BaseScale {
    type: 'pow';
    exponent: number;
    range?: RangeScheme;
    interpolate?: ScaleInterpolate;
    clamp?: boolean | SignalRef;
    nice?: boolean | number | SignalRef;
    zero?: boolean | SignalRef;
}
export interface SqrtScale extends BaseScale {
    type: 'sqrt';
    range?: RangeScheme;
    interpolate?: ScaleInterpolate;
    clamp?: boolean | SignalRef;
    nice?: boolean | number | SignalRef;
    zero?: boolean | SignalRef;
}
export interface QuantileScale extends BaseScale {
    type?: 'quantile';
    range?: RangeScheme;
    nice?: boolean | number | SignalRef;
    zero?: boolean | SignalRef;
}
export interface QuantizeScale extends BaseScale {
    type?: 'quantize';
    range?: RangeScheme;
    nice?: boolean | number | SignalRef;
    zero?: boolean | SignalRef;
}
export interface BinLinearScale extends BaseScale {
    type: 'bin-linear';
    range?: RangeScheme;
    interpolate?: ScaleInterpolate;
}
export declare type Scale =
    | OrdinalScale
    | BandScale
    | PointScale
    | SequentialScale
    | TimeScale
    | IdentityScale
    | DiscretizingScale
    | LinearScale
    | LogScale
    | PowScale
    | SqrtScale
    | QuantileScale
    | QuantizeScale
    | BinLinearScale;