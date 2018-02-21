import { GroupEncodeEntry, NumericValueRef, RuleEncodeEntry, TextEncodeEntry } from './encode';
import { GuideEncodeEntry } from './legend';
import { SignalRef } from './signal';
export declare type AxisOrient = 'top' | 'bottom' | 'left' | 'right';
export interface Axis {
    orient: AxisOrient;
    scale: string;
    name?: string;
    title?: string | SignalRef;
    zindex?: number;
    interactive?: boolean;
    ticks?: boolean;
    labels?: boolean;
    domain?: boolean;
    grid?: boolean;
    gridScale?: string;
    tickSize?: number;
    labelPadding?: number;
    tickCount?: number | SignalRef;
    format?: string | SignalRef;
    values?: any[] | SignalRef;
    offset?: number | NumericValueRef;
    position?: number | NumericValueRef;
    titlePadding?: number | NumericValueRef;
    minExtent?: number | NumericValueRef;
    maxExtent?: number | NumericValueRef;
    encode?: {
        ticks?: GuideEncodeEntry<GroupEncodeEntry>;
        labels?: GuideEncodeEntry<TextEncodeEntry>;
        title?: GuideEncodeEntry<TextEncodeEntry>;
        grid?: GuideEncodeEntry<RuleEncodeEntry>;
        domain?: GuideEncodeEntry<RuleEncodeEntry>;
    };
}
