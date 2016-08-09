// Type definitions for D3JS d3-shape module 1.0.0
// Project: https://github.com/d3/d3-shape/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// -----------------------------------------------------------------------------------
// Arc Generator
// -----------------------------------------------------------------------------------

export interface DefaultArcObject {
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    padAngle: number;
}

export interface Arc<This, Datum> {
    (this: This, d: Datum, ...args: any[]): string | undefined;
    centroid(d: Datum, ...args: any[]): [number, number];
    innerRadius(): (this: This, d: Datum, ...args: any[]) => number;
    innerRadius(radius: number): Arc<This, Datum>;
    innerRadius(radius: (this: This, d: Datum, ...args: any[]) => number): Arc<This, Datum>;
    outerRadius(): (this: This, d: Datum, ...args: any[]) => number;
    outerRadius(radius: number): Arc<This, Datum>;
    outerRadius(radius: (this: This, d: Datum, ...args: any[]) => number): Arc<This, Datum>;
    cornerRadius(): (this: This, d: Datum, ...args: any[]) => number;
    cornerRadius(radius: number): Arc<This, Datum>;
    cornerRadius(radius: (this: This, d: Datum, ...args: any[]) => number): Arc<This, Datum>;
    startAngle(): (this: This, d: Datum, ...args: any[]) => number;
    startAngle(angle: number): Arc<This, Datum>;
    startAngle(angle: (this: This, d: Datum, ...args: any[]) => number): Arc<This, Datum>;
    endAngle(): (this: This, d: Datum, ...args: any[]) => number;
    endAngle(angle: number): Arc<This, Datum>;
    endAngle(angle: (this: This, d: Datum, ...args: any[]) => number): Arc<This, Datum>;
    padAngle(): (this: This, d: Datum, ...args: any[]) => number;
    padAngle(angle: number): Arc<This, Datum>;
    padAngle(angle: (this: This, d: Datum, ...args: any[]) => number): Arc<This, Datum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): Arc<This, Datum>;
    context(context: null): Arc<This, Datum>;
}

export function arc(): Arc<any, DefaultArcObject>;
export function arc<Datum>(): Arc<any, Datum>;
export function arc<This, Datum>(): Arc<This, Datum>;

// -----------------------------------------------------------------------------------
// Pie Generator
// -----------------------------------------------------------------------------------


export interface PieArcDatum<T> {
    data: T;
    value: number;
    index: number;
    startAngle: number;
    endAngle: number;
    padAngle: number;
}


export interface Pie<This, Datum> {
    (this: This, data: Array<Datum>, ...args: any[]): Array<PieArcDatum<Datum>>;
    value(): (d: Datum, i?: number, data?: Array<Datum>) => number;
    value(value: number): Pie<This, Datum>;
    value(value: (d: Datum, i?: number, data?: Array<Datum>) => number): Pie<This, Datum>;
    sort(): ((a: Datum, b: Datum) => number) | null;
    sort(comparator: (a: Datum, b: Datum) => number): Pie<This, Datum>;
    sort(comparator: null): Pie<This, Datum>;
    sortValues(): ((a: number, b: number) => number) | null;
    sortValues(comparator: (a: number, b: number) => number): Pie<This, Datum>;
    sortValues(comparator: null): Pie<This, Datum>;
    startAngle(): (this: This, data: Array<Datum>, ...args: any[]) => number;
    startAngle(angle: number): Pie<This, Datum>;
    startAngle(angle: (this: This, data: Array<Datum>, ...args: any[]) => number): Pie<This, Datum>;
    endAngle(): (this: This, data: Array<Datum>, ...args: any[]) => number;
    endAngle(angle: number): Pie<This, Datum>;
    endAngle(angle: (this: This, data: Array<Datum>, ...args: any[]) => number): Pie<This, Datum>;
    padAngle(): (this: This, data: Array<Datum>, ...args: any[]) => number;
    padAngle(angle: number): Pie<This, Datum>;
    padAngle(angle: (this: This, data: Array<Datum>, ...args: any[]) => number): Pie<This, Datum>;
}

export function pie(): Pie<any, number | { valueOf(): number }>;
export function pie<Datum>(): Pie<any, Datum>;
export function pie<This, Datum>(): Pie<This, Datum>;

// -----------------------------------------------------------------------------------
// Line Generators
// -----------------------------------------------------------------------------------


export interface Line<Datum> {
    (data: Array<Datum>): string | undefined;
    x(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    x(x: number): Line<Datum>;
    x(x: (d: Datum, index?: number, data?: Array<Datum>) => number): Line<Datum>;
    y(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    y(y: number): Line<Datum>;
    y(y: (d: Datum, index?: number, data?: Array<Datum>) => number): Line<Datum>;
    defined(): (d: Datum, index?: number, data?: Array<Datum>) => boolean;
    defined(defined: boolean): Line<Datum>;
    defined(defined: (d: Datum, index?: number, data?: Array<Datum>) => boolean): Line<Datum>;
    curve(): CurveFactory | CurveFactoryLineOnly;
    curve(curve: CurveFactory | CurveFactoryLineOnly): Line<Datum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): Line<Datum>;
    context(context: null): Line<Datum>;
}
export function line(): Line<[number, number]>;
export function line<Datum>(): Line<Datum>;
export function line<This, Datum>(): Line<Datum>;

export interface RadialLine<Datum> {
    (data: Array<Datum>): string | undefined;
    angle(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    angle(angle: number): RadialLine<Datum>;
    angle(angle: (d: Datum, index?: number, data?: Array<Datum>) => number): RadialLine<Datum>;
    radius(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    radius(radius: number): RadialLine<Datum>;
    radius(radius: (d: Datum, index?: number, data?: Array<Datum>) => number): RadialLine<Datum>;
    defined(): (d: Datum, index?: number, data?: Array<Datum>) => boolean;
    defined(defined: boolean): RadialLine<Datum>;
    defined(defined: (d: Datum, index?: number, data?: Array<Datum>) => boolean): RadialLine<Datum>;
    curve(): CurveFactory | CurveFactoryLineOnly;
    curve(curve: CurveFactory | CurveFactoryLineOnly): RadialLine<Datum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): RadialLine<Datum>;
    context(context: null): RadialLine<Datum>;
}

export function radialLine(): RadialLine<[number, number]>;
export function radialLine<Datum>(): RadialLine<Datum>;

// -----------------------------------------------------------------------------------
// Area Generators
// -----------------------------------------------------------------------------------


export interface Area<Datum> {
    (data: Array<Datum>): string | undefined;
    x(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    x(x: number): Area<Datum>;
    x(x: (d: Datum, index?: number, data?: Array<Datum>) => number): Area<Datum>;
    x0(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    x0(x0: number): Area<Datum>;
    x0(x0: (d: Datum, index?: number, data?: Array<Datum>) => number): Area<Datum>;
    x1(): ((d: Datum, index?: number, data?: Array<Datum>) => number) | null;
    x1(x: number): Area<Datum>;
    x1(x: (d: Datum, index?: number, data?: Array<Datum>) => number): Area<Datum>;
    y(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    y(y: number): Area<Datum>;
    y(y: (d: Datum, index?: number, data?: Array<Datum>) => number): Area<Datum>;
    y0(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    y0(y: number): Area<Datum>;
    y0(y: (d: Datum, index?: number, data?: Array<Datum>) => number): Area<Datum>;
    y1(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    y1(y: number): Area<Datum>;
    y1(y: (d: Datum, index?: number, data?: Array<Datum>) => number): Area<Datum>;
    defined(): (d: Datum, index?: number, data?: Array<Datum>) => boolean;
    defined(defined: boolean): Area<Datum>;
    defined(defined: (d: Datum, index?: number, data?: Array<Datum>) => boolean): Area<Datum>;
    curve(): CurveFactory;
    curve(curve: CurveFactory): Area<Datum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): Area<Datum>;
    context(context: null): Area<Datum>;
    lineX0(): Line<Datum>;
    lineY0(): Line<Datum>;
    lineX1(): Line<Datum>;
    lineY1(): Line<Datum>;
}

export function area(): Area<[number, number]>;
export function area<Datum>(): Area<Datum>;


export interface RadialArea<Datum> {
    (data: Array<Datum>): string | undefined;
    angle(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    angle(angle: number): RadialArea<Datum>;
    angle(angle: (d: Datum, index?: number, data?: Array<Datum>) => number): RadialArea<Datum>;
    startAngle(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    startAngle(angle: number): RadialArea<Datum>;
    startAngle(angle: (d: Datum, index?: number, data?: Array<Datum>) => number): RadialArea<Datum>;
    endAngle(): ((d: Datum, index?: number, data?: Array<Datum>) => number) | null;
    endAngle(angle: number): RadialArea<Datum>;
    endAngle(angle: (d: Datum, index?: number, data?: Array<Datum>) => number): RadialArea<Datum>;
    radius(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    radius(radius: number): RadialArea<Datum>;
    radius(radius: (d: Datum, index?: number, data?: Array<Datum>) => number): RadialArea<Datum>;
    innerRadius(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    innerRadius(radius: number): RadialArea<Datum>;
    innerRadius(radius: (d: Datum, index?: number, data?: Array<Datum>) => number): RadialArea<Datum>;
    outerRadius(): (d: Datum, index?: number, data?: Array<Datum>) => number;
    outerRadius(radius: number): RadialArea<Datum>;
    outerRadius(radius: (d: Datum, index?: number, data?: Array<Datum>) => number): RadialArea<Datum>;
    defined(): (d: Datum, index?: number, data?: Array<Datum>) => boolean;
    defined(defined: boolean): RadialArea<Datum>;
    defined(defined: (d: Datum, index?: number, data?: Array<Datum>) => boolean): RadialArea<Datum>;
    curve(): CurveFactory;
    curve(curve: CurveFactory): RadialArea<Datum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): RadialArea<Datum>;
    context(context: null): RadialArea<Datum>;
    lineStartAngle(): RadialLine<Datum>;
    lineInnerRadius(): RadialLine<Datum>;
    lineEndAngle(): RadialLine<Datum>;
    lineOuterRadius(): RadialLine<Datum>;
}

export function radialArea(): RadialArea<[number, number]>;
export function radialArea<Datum>(): RadialArea<Datum>;

// -----------------------------------------------------------------------------------
// Curve Factories
// -----------------------------------------------------------------------------------

export interface CurveGeneratorLineOnly {
    lineStart(): void;
    lineEnd(): void;
    point(x: number, y: number): void;
}

export interface CurveFactoryLineOnly {
    (context: CanvasRenderingContext2D | null): CurveGeneratorLineOnly;
}

export interface CurveGenerator extends CurveGeneratorLineOnly {
    areaStart(): void;
    areaEnd(): void;
}

export interface CurveFactory {
    (context: CanvasRenderingContext2D | null): CurveGenerator;
}

export var curveBasis: CurveFactory;

export var curveBasisOpen: CurveFactory;

export var curveBasisClosed: CurveFactory;

export interface CurveBundleFactory extends CurveFactoryLineOnly {
    beta(beta: number): CurveBundleFactory;
}

export var curveBundle: CurveBundleFactory;

export interface CurveCardinalFactory extends CurveFactory {
    tension(tension: number): CurveCardinalFactory;
}

export var curveCardinal: CurveCardinalFactory;
export var curveCardinalOpen: CurveCardinalFactory;
export var curveCardinalClosed: CurveCardinalFactory;

export interface CurveCatmullRomFactory extends CurveFactory {
    alpha(alpha: number): CurveCatmullRomFactory;
}

export var curveCatmullRom: CurveCatmullRomFactory;
export var curveCatmullRomOpen: CurveCatmullRomFactory;
export var curveCatmullRomClosed: CurveCatmullRomFactory;

export var curveLinear: CurveFactory;

export var curveLinearClosed: CurveFactory;

export var curveMonotoneX: CurveFactory;

export var curveMonotoneY: CurveFactory;

export var curveNatural: CurveFactory;

export var curveStep: CurveFactory;

export var curveStepAfter: CurveFactory;

export var curveStepBefore: CurveFactory;


// -----------------------------------------------------------------------------------
// SYMBOLS
// -----------------------------------------------------------------------------------

export interface SymbolType {
    draw(context: CanvasPathMethods, size: number): void;
}


export interface Symbol<This, Datum> {
    (this: This, d?: Datum, ...args: any[]): undefined | string;
    size(): (this: This, d?: Datum, ...args: any[]) => number;
    size(size: number): Symbol<This, Datum>;
    size(size: (this: This, d?: Datum, ...args: any[]) => number): Symbol<This, Datum>;
    type(): (this: This, d?: Datum, ...args: any[]) => SymbolType;
    type(type: SymbolType): Symbol<This, Datum>;
    type(type: (this: This, d?: Datum, ...args: any[]) => SymbolType): Symbol<This, Datum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): Symbol<This, Datum>;
    context(context: null): Symbol<This, Datum>;

}

export function symbol(): Symbol<any, any>;
export function symbol<Datum>(): Symbol<any, Datum>;
export function symbol<This, Datum>(): Symbol<This, Datum>;

export var symbols: Array<SymbolType>;


export var symbolCircle: SymbolType;

export var symbolCross: SymbolType;
export var symbolDiamond: SymbolType;
export var symbolSquare: SymbolType;
export var symbolStar: SymbolType;
export var symbolTriangle: SymbolType;
export var symbolWye: SymbolType;


// -----------------------------------------------------------------------------------
// STACKS
// -----------------------------------------------------------------------------------


// HACK: SeriesPoint is a [number, number] two-element Array with added
// data and index properties related to the data element which formed the basis for the
// SeriesPoint
export interface SeriesPoint<Datum> extends Array<number> {
    index: number;
    data: Datum;
}

export interface Series<Datum, Key> extends Array<SeriesPoint<Datum>> {
    key: Key;
}

export interface Stack<This, Datum, Key> {
    (data: Array<Datum>, ...args: any[]): Array<Series<Datum, Key>>;

    keys(): (this: This, data: Array<Datum>, ...args: any[]) => Array<Key>;
    keys(keys: Array<Key>): Stack<This, Datum, Key>;
    keys(keys: (this: This, data: Array<Datum>, ...args: any[]) => Array<Key>): Stack<This, Datum, Key>;

    value(): (d: Datum, key: Key, j?: number, data?: Array<Datum>) => number;
    value(value: number): Stack<This, Datum, Key>;
    value(value: (d: Datum, key: Key, j?: number, data?: Array<Datum>) => number): Stack<This, Datum, Key>;

    order(): (series: Series<Datum, Key>) => Array<number>;
    order(order: null): Stack<This, Datum, Key>;
    order(order: Array<number>): Stack<This, Datum, Key>;
    order(order: (series: Series<Datum, Key>) => Array<number>): Stack<This, Datum, Key>;

    offset(): (series: Series<Datum, Key>, order: Array<number>) => void;
    offset(offset: null): Stack<This, Datum, Key>;
    offset(offset: (series: Series<Datum, Key>, order: Array<number>) => void): Stack<This, Datum, Key>;

}

export function stack(): Stack<any, { [key: string]: number }, string>;
export function stack<Datum>(): Stack<any, Datum, string>;
export function stack<Datum, Key>(): Stack<any, Datum, Key>;
export function stack<This, Datum, Key>(): Stack<This, Datum, Key>;


export function stackOrderAscending(series: Series<any, any>): Array<number>;
export function stackOrderDescending(series: Series<any, any>): Array<number>
export function stackOrderInsideOut(series: Series<any, any>): Array<number>
export function stackOrderNone(series: Series<any, any>): Array<number>
export function stackOrderReverse(series: Series<any, any>): Array<number>

export function stackOffsetExpand(series: Series<any, any>, order: Array<number>): void;
export function stackOffsetNone(series: Series<any, any>, order: Array<number>): void;
export function stackOffsetSilhouette(series: Series<any, any>, order: Array<number>): void;
export function stackOffsetWiggle(series: Series<any, any>, order: Array<number>): void;
