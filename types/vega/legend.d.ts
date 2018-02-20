import { GroupEncodeEntry, NumericValueRef, RectEncodeEntry, SymbolEncodeEntry, TextEncodeEntry } from './encode';
import { SignalRef } from './signal';
export interface GuideEncodeEntry<T> {
    name?: string;
    interactive?: boolean;
    enter?: T;
    update?: T;
    exit?: T;
    hover?: T;
}
export declare type LegendType = 'gradient' | 'symbol';
export declare type LegendOrient = 'none' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface BaseLegend {
    name?: string;
    type?: LegendType;
    orient?: LegendOrient;
    title?: string | SignalRef;
    zindex?: number;
    interactive?: boolean;
    offset?: number | NumericValueRef;
    padding?: number | NumericValueRef;
    titlePadding?: number | NumericValueRef;
    entryPadding?: number | NumericValueRef;
    tickCount?: number | SignalRef;
    format?: string | SignalRef;
    values?: any[] | SignalRef;
    encode?: {
        title?: GuideEncodeEntry<GroupEncodeEntry>;
        labels?: GuideEncodeEntry<TextEncodeEntry>;
        legend?: GuideEncodeEntry<TextEncodeEntry>;
        symbols?: GuideEncodeEntry<SymbolEncodeEntry>;
        gradient?: GuideEncodeEntry<RectEncodeEntry>;
    };
}
export interface SizeLegend extends BaseLegend {
    size: string;
}
export interface ShapeLegend extends BaseLegend {
    shape: string;
}
export interface FillLegend extends BaseLegend {
    fill: string;
}
export interface StrokeLegend extends BaseLegend {
    stroke: string;
}
export interface StrokeDashLegend extends BaseLegend {
    strokeDash: string;
}
export interface OpacityLegend extends BaseLegend {
    opacity: string;
}
export declare type Legend = SizeLegend | ShapeLegend | FillLegend | StrokeLegend | StrokeDashLegend | OpacityLegend;
