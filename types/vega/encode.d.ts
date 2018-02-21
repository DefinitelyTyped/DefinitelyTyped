import { SignalRef } from './signal';
export declare type FieldRef = string | SignalRef | {
    datum: FieldRef;
} | GroupFieldRef | ParentFieldRef;
export interface GroupFieldRef {
    group: FieldRef;
    level?: number;
}
export interface ParentFieldRef {
    parent: FieldRef;
    level?: number;
}
export declare type BaseValueRef<T> = SignalRef | {
    value: T;
} | {
    field: FieldRef;
} | {
    range: number | boolean;
};
export declare type ScaledValueRef<T> = BaseValueRef<T> | (BaseValueRef<T> & {
    scale: FieldRef;
}) | {
    scale: FieldRef;
    band: boolean | number;
};
export declare type NumericValueRef = (ScaledValueRef<number> | {}) & {
    exponent?: number | NumericValueRef;
    mult?: number | NumericValueRef;
    offset?: number | NumericValueRef;
    round?: boolean;
    extra?: boolean;
};
export declare type StringValueRef = ScaledValueRef<string>;
export declare type BooleanValueRef = ScaledValueRef<boolean>;
export interface ColorRGB {
    r: NumericValueRef;
    g: NumericValueRef;
    b: NumericValueRef;
}
export interface ColorHSL {
    h: NumericValueRef;
    s: NumericValueRef;
    l: NumericValueRef;
}
export interface ColorLAB {
    l: NumericValueRef;
    a: NumericValueRef;
    b: NumericValueRef;
}
export interface ColorHCL {
    h: NumericValueRef;
    c: NumericValueRef;
    l: NumericValueRef;
}
export declare type ColorValueRef = ScaledValueRef<string> | {
    gradient: FieldRef;
} | {
    color: ColorRGB | ColorHSL | ColorLAB | ColorHCL;
};
export declare type ProductionRule<T> = T | ({
    test?: string;
} & T)[];
export interface EncodeEntry {
    x?: ProductionRule<NumericValueRef>;
    x2?: ProductionRule<NumericValueRef>;
    xc?: ProductionRule<NumericValueRef>;
    width?: ProductionRule<NumericValueRef>;
    y?: ProductionRule<NumericValueRef>;
    y2?: ProductionRule<NumericValueRef>;
    yc?: ProductionRule<NumericValueRef>;
    height?: ProductionRule<NumericValueRef>;
    opacity?: ProductionRule<NumericValueRef>;
    fill?: ProductionRule<ColorValueRef>;
    fillOpacity?: ProductionRule<NumericValueRef>;
    stroke?: ProductionRule<ColorValueRef>;
    strokeWidth?: ProductionRule<NumericValueRef>;
    strokeOpacity?: ProductionRule<NumericValueRef>;
    strokeDash?: ProductionRule<ScaledValueRef<number[]>>;
    strokeDashOffset?: ProductionRule<NumericValueRef>;
    zindex?: ProductionRule<NumericValueRef>;
    cursor?: ProductionRule<StringValueRef>;
    tooltip?: ProductionRule<StringValueRef>;
    xfocus?: ProductionRule<NumericValueRef>;
    yfocus?: ProductionRule<NumericValueRef>;
}
export declare type Align = 'left' | 'center' | 'right';
export interface AlignProperty {
    align?: ProductionRule<ScaledValueRef<Align>>;
}
export interface DefinedProperty {
    defined?: ProductionRule<BooleanValueRef>;
}
export interface ThetaProperty {
    theta?: ProductionRule<NumericValueRef>;
}
export interface ArcEncodeEntry extends EncodeEntry {
    startAngle?: ProductionRule<NumericValueRef>;
    endAngle?: ProductionRule<NumericValueRef>;
    padAngle?: ProductionRule<NumericValueRef>;
    innerRadius?: ProductionRule<NumericValueRef>;
    outerRadius?: ProductionRule<NumericValueRef>;
    cornerRadius?: ProductionRule<NumericValueRef>;
}
export declare type Orientation = 'horizontal' | 'vertical';
export interface AreaEncodeEntry extends LineEncodeEntry {
    orient?: ProductionRule<ScaledValueRef<Orientation>>;
}
export interface GroupEncodeEntry extends RectEncodeEntry {
    clip?: ProductionRule<BooleanValueRef>;
}
export declare type Baseline = 'top' | 'middle' | 'bottom';
export interface ImageEncodeEntry extends EncodeEntry, AlignProperty {
    url: ProductionRule<StringValueRef>;
    aspect?: ProductionRule<BooleanValueRef>;
    baseline?: ProductionRule<ScaledValueRef<Baseline>>;
}
export declare type Interpolate = 'basis' | 'bundle' | 'cardinal' | 'catmull-rom' | 'linear' | 'monotone' | 'natural' | 'step' | 'step-after' | 'step-before';
export interface LineEncodeEntry extends EncodeEntry, DefinedProperty {
    interpolate?: ProductionRule<ScaledValueRef<Interpolate>>;
    tension?: ProductionRule<NumericValueRef>;
}
export interface PathEncodeEntry extends EncodeEntry {
    path?: ProductionRule<StringValueRef>;
}
export interface RectEncodeEntry extends EncodeEntry {
    cornerRadius?: ProductionRule<NumericValueRef>;
}
export declare type RuleEncodeEntry = EncodeEntry;
export interface ShapeEncodeEntry extends EncodeEntry {
    shape?: ProductionRule<StringValueRef>;
}
export declare type SymbolShapes = 'circle' | 'square' | 'cross' | 'diamond' | 'triangle-up' | 'triangle-down' | 'triangle-right' | 'triangle-left' | string;
export interface SymbolEncodeEntry extends EncodeEntry {
    size?: ProductionRule<NumericValueRef>;
    shape?: string | ProductionRule<ScaledValueRef<SymbolShapes>>;
}
export declare type TextBaseline = 'alphabetic' | Baseline;
export declare type TextDirection = 'ltr' | 'rtl';
export declare type FontWeight =
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    ;
export declare type FontStyle = 'normal' | 'italic';
export interface TextEncodeEntry extends EncodeEntry, AlignProperty, ThetaProperty {
    text?: ProductionRule<StringValueRef>;
    angle?: ProductionRule<NumericValueRef>;
    baseline?: ProductionRule<ScaledValueRef<TextBaseline>>;
    dir?: ProductionRule<ScaledValueRef<TextDirection>>;
    dx?: ProductionRule<NumericValueRef>;
    dy?: ProductionRule<NumericValueRef>;
    ellipsis?: ProductionRule<StringValueRef>;
    font?: ProductionRule<StringValueRef>;
    fontSize?: ProductionRule<NumericValueRef>;
    fontWeight?: ProductionRule<ScaledValueRef<FontWeight>>;
    fontStyle?: ProductionRule<ScaledValueRef<FontStyle>>;
    limit?: ProductionRule<NumericValueRef>;
    radius?: ProductionRule<NumericValueRef>;
}
export interface TrailEncodeEntry extends EncodeEntry, DefinedProperty, ThetaProperty {
}
export interface Encode<T> {
    encode?: {
        enter?: T;
        update?: T;
        exit?: T;
        hover?: T;
        leave?: T;
        select?: T;
        release?: T;
    };
}
