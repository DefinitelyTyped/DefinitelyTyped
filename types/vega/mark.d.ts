import * as Encode from './encode';
import { SortOrder } from './scale';
import { Scope } from './scope';
import { SignalRef } from './signal';
import { Transform } from './transform';
import { OnMarkTrigger } from './on-trigger';
export declare type Facet = {
    name: string;
    data: string;
    field: string;
} | {
    name: string;
    data: string;
    groupby: string | string[];
    aggregate?: {
        cross?: boolean;
        fields: string[];
        ops: string[];
        as: string[];
    };
};
export interface From {
    data?: string;
}
export declare type FromFacet = From | (From & {
    facet: Facet;
});
export declare type Clip = boolean | {
    path: string | SignalRef
} | {
    sphere: string | SignalRef
}
export declare type Compare = {
    field: string | SignalRef;
    order?: SortOrder;
} | {
    field: string[] | SignalRef[];
    order?: SortOrder[];
};
export interface BaseMark {
    role?: string;
    name?: string;
    description?: string;
    key?: string;
    clip?: Clip;
    sort?: Compare;
    interactive?: boolean;
    from?: From;
    transform?: Transform[];
    zindex?: number;
    on?: OnMarkTrigger[];
}
export interface ArcMark extends BaseMark, Encode.Encode<Encode.ArcEncodeEntry> {
    type: 'arc';
}
export interface AreaMark extends BaseMark, Encode.Encode<Encode.AreaEncodeEntry> {
    type: 'area';
}
export interface ImageMark extends BaseMark, Encode.Encode<Encode.ImageEncodeEntry> {
    type: 'image';
}
export interface GroupMark extends BaseMark, Scope, Encode.Encode<Encode.GroupEncodeEntry> {
    type: 'group';
    from?: FromFacet;
}
export interface LineMark extends BaseMark, Encode.Encode<Encode.LineEncodeEntry> {
    type: 'line';
}
export interface PathMark extends BaseMark, Encode.Encode<Encode.PathEncodeEntry> {
    type: 'path';
}
export interface RectMark extends BaseMark, Encode.Encode<Encode.RectEncodeEntry> {
    type: 'rect';
}
export interface RuleMark extends BaseMark, Encode.Encode<Encode.RuleEncodeEntry> {
    type: 'rule';
}
export interface ShapeMark extends BaseMark, Encode.Encode<Encode.ShapeEncodeEntry> {
    type: 'shape';
}
export interface SymbolMark extends BaseMark, Encode.Encode<Encode.SymbolEncodeEntry> {
    type: 'symbol';
}
export interface TextMark extends BaseMark, Encode.Encode<Encode.TextEncodeEntry> {
    type: 'text';
}
export interface TrailMark extends BaseMark, Encode.Encode<Encode.TrailEncodeEntry> {
    type: 'trail';
}
export declare type Mark = ArcMark | AreaMark | ImageMark | GroupMark | LineMark | PathMark | RectMark | RuleMark | ShapeMark | SymbolMark | TextMark | TrailMark;
