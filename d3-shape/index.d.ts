// Type definitions for D3JS d3-shape module v1.0.3
// Project: https://github.com/d3/d3-shape/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
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
    innerRadius(radius: number): this;
    innerRadius(radius: (this: This, d: Datum, ...args: any[]) => number): this;
    outerRadius(): (this: This, d: Datum, ...args: any[]) => number;
    outerRadius(radius: number): this;
    outerRadius(radius: (this: This, d: Datum, ...args: any[]) => number): this;
    cornerRadius(): (this: This, d: Datum, ...args: any[]) => number;
    cornerRadius(radius: number): this;
    cornerRadius(radius: (this: This, d: Datum, ...args: any[]) => number): this;
    startAngle(): (this: This, d: Datum, ...args: any[]) => number;
    startAngle(angle: number): this;
    startAngle(angle: (this: This, d: Datum, ...args: any[]) => number): this;
    endAngle(): (this: This, d: Datum, ...args: any[]) => number;
    endAngle(angle: number): this;
    endAngle(angle: (this: This, d: Datum, ...args: any[]) => number): this;
    padAngle(): (this: This, d: Datum, ...args: any[]) => number;
    padAngle(angle: number): this;
    padAngle(angle: (this: This, d: Datum, ...args: any[]) => number): this;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): this;
    context(context: null): this;
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
    value(): (d: Datum, i: number, data: Array<Datum>) => number;
    value(value: number): this;
    value(value: (d: Datum, i: number, data: Array<Datum>) => number): this;
    sort(): ((a: Datum, b: Datum) => number) | null;
    sort(comparator: (a: Datum, b: Datum) => number): this;
    sort(comparator: null): this;
    sortValues(): ((a: number, b: number) => number) | null;
    sortValues(comparator: (a: number, b: number) => number): this;
    sortValues(comparator: null): this;
    startAngle(): (this: This, data: Array<Datum>, ...args: any[]) => number;
    startAngle(angle: number): this;
    startAngle(angle: (this: This, data: Array<Datum>, ...args: any[]) => number): this;
    endAngle(): (this: This, data: Array<Datum>, ...args: any[]) => number;
    endAngle(angle: number): this;
    endAngle(angle: (this: This, data: Array<Datum>, ...args: any[]) => number): this;
    padAngle(): (this: This, data: Array<Datum>, ...args: any[]) => number;
    padAngle(angle: number): this;
    padAngle(angle: (this: This, data: Array<Datum>, ...args: any[]) => number): this;
}

export function pie(): Pie<any, number | { valueOf(): number }>;
export function pie<Datum>(): Pie<any, Datum>;
export function pie<This, Datum>(): Pie<This, Datum>;

// -----------------------------------------------------------------------------------
// Line Generators
// -----------------------------------------------------------------------------------


export interface Line<Datum> {
    (data: Array<Datum>): string | undefined;
    x(): (d: Datum, index: number, data: Array<Datum>) => number;
    x(x: number): this;
    x(x: (d: Datum, index: number, data: Array<Datum>) => number): this;
    y(): (d: Datum, index: number, data: Array<Datum>) => number;
    y(y: number): this;
    y(y: (d: Datum, index: number, data: Array<Datum>) => number): this;
    defined(): (d: Datum, index: number, data: Array<Datum>) => boolean;
    defined(defined: boolean): this;
    defined(defined: (d: Datum, index: number, data: Array<Datum>) => boolean): this;
    curve(): CurveFactory | CurveFactoryLineOnly;
    curve(curve: CurveFactory | CurveFactoryLineOnly): this;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): this;
    context(context: null): this;
}
export function line(): Line<[number, number]>;
export function line<Datum>(): Line<Datum>;
export function line<This, Datum>(): Line<Datum>;

export interface RadialLine<Datum> {
    (data: Array<Datum>): string | undefined;
    angle(): (d: Datum, index: number, data: Array<Datum>) => number;
    angle(angle: number): this;
    angle(angle: (d: Datum, index: number, data: Array<Datum>) => number): this;
    radius(): (d: Datum, index: number, data: Array<Datum>) => number;
    radius(radius: number): this;
    radius(radius: (d: Datum, index: number, data: Array<Datum>) => number): this;
    defined(): (d: Datum, index: number, data: Array<Datum>) => boolean;
    defined(defined: boolean): this;
    defined(defined: (d: Datum, index: number, data: Array<Datum>) => boolean): this;
    curve(): CurveFactory | CurveFactoryLineOnly;
    curve(curve: CurveFactory | CurveFactoryLineOnly): this;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): this;
    context(context: null): this;
}

export function radialLine(): RadialLine<[number, number]>;
export function radialLine<Datum>(): RadialLine<Datum>;

// -----------------------------------------------------------------------------------
// Area Generators
// -----------------------------------------------------------------------------------


export interface Area<Datum> {
    (data: Array<Datum>): string | undefined;
    x(): (d: Datum, index: number, data: Array<Datum>) => number;
    x(x: number): this;
    x(x: (d: Datum, index: number, data: Array<Datum>) => number): this;
    x0(): (d: Datum, index: number, data: Array<Datum>) => number;
    x0(x0: number): this;
    x0(x0: (d: Datum, index: number, data: Array<Datum>) => number): this;
    x1(): ((d: Datum, index: number, data: Array<Datum>) => number) | null;
    x1(x: number): this;
    x1(x: (d: Datum, index: number, data: Array<Datum>) => number): this;
    y(): (d: Datum, index: number, data: Array<Datum>) => number;
    y(y: number): this;
    y(y: (d: Datum, index: number, data: Array<Datum>) => number): this;
    y0(): (d: Datum, index: number, data: Array<Datum>) => number;
    y0(y: number): this;
    y0(y: (d: Datum, index: number, data: Array<Datum>) => number): this;
    y1(): (d: Datum, index: number, data: Array<Datum>) => number;
    y1(y: number): this;
    y1(y: (d: Datum, index: number, data: Array<Datum>) => number): this;
    defined(): (d: Datum, index: number, data: Array<Datum>) => boolean;
    defined(defined: boolean): this;
    defined(defined: (d: Datum, index: number, data: Array<Datum>) => boolean): this;
    curve(): CurveFactory;
    curve(curve: CurveFactory): this;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): this;
    context(context: null): this;
    lineX0(): Line<Datum>;
    lineY0(): Line<Datum>;
    lineX1(): Line<Datum>;
    lineY1(): Line<Datum>;
}

export function area(): Area<[number, number]>;
export function area<Datum>(): Area<Datum>;


export interface RadialArea<Datum> {
    (data: Array<Datum>): string | undefined;
    angle(): (d: Datum, index: number, data: Array<Datum>) => number;
    angle(angle: number): this;
    angle(angle: (d: Datum, index: number, data: Array<Datum>) => number): this;
    startAngle(): (d: Datum, index: number, data: Array<Datum>) => number;
    startAngle(angle: number): this;
    startAngle(angle: (d: Datum, index: number, data: Array<Datum>) => number): this;
    endAngle(): ((d: Datum, index: number, data: Array<Datum>) => number) | null;
    endAngle(angle: number): this;
    endAngle(angle: (d: Datum, index: number, data: Array<Datum>) => number): this;
    radius(): (d: Datum, index: number, data: Array<Datum>) => number;
    radius(radius: number): this;
    radius(radius: (d: Datum, index: number, data: Array<Datum>) => number): this;
    innerRadius(): (d: Datum, index: number, data: Array<Datum>) => number;
    innerRadius(radius: number): this;
    innerRadius(radius: (d: Datum, index: number, data: Array<Datum>) => number): this;
    outerRadius(): (d: Datum, index: number, data: Array<Datum>) => number;
    outerRadius(radius: number): this;
    outerRadius(radius: (d: Datum, index: number, data: Array<Datum>) => number): this;
    defined(): (d: Datum, index: number, data: Array<Datum>) => boolean;
    defined(defined: boolean): this;
    defined(defined: (d: Datum, index: number, data: Array<Datum>) => boolean): this;
    curve(): CurveFactory;
    curve(curve: CurveFactory): this;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): this;
    context(context: null): this;
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
    beta(beta: number): this;
}

export var curveBundle: CurveBundleFactory;

export interface CurveCardinalFactory extends CurveFactory {
    tension(tension: number): this;
}

export var curveCardinal: CurveCardinalFactory;
export var curveCardinalOpen: CurveCardinalFactory;
export var curveCardinalClosed: CurveCardinalFactory;

export interface CurveCatmullRomFactory extends CurveFactory {
    alpha(alpha: number): this;
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
    size(): (this: This, d: Datum, ...args: any[]) => number;
    size(size: number): this;
    size(size: (this: This, d: Datum, ...args: any[]) => number): this;
    type(): (this: This, d: Datum, ...args: any[]) => SymbolType;
    type(type: SymbolType): this;
    type(type: (this: This, d: Datum, ...args: any[]) => SymbolType): this;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): this;
    context(context: null): this;

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


// SeriesPoint is a [number, number] two-element Array with added
// data and index properties related to the data element which formed the basis for the
// SeriesPoint
export interface SeriesPoint<Datum> extends Array<number> {
    0: number;
    1: number;
    index: number;
    data: Datum;
}

export interface Series<Datum, Key> extends Array<SeriesPoint<Datum>> {
    key: Key;
}

export interface Stack<This, Datum, Key> {
    (data: Array<Datum>, ...args: any[]): Array<Series<Datum, Key>>;

    keys(): (this: This, data: Array<Datum>, ...args: any[]) => Array<Key>;
    keys(keys: Array<Key>): this;
    keys(keys: (this: This, data: Array<Datum>, ...args: any[]) => Array<Key>): this;

    value(): (d: Datum, key: Key, j: number, data: Array<Datum>) => number;
    value(value: number): this;
    value(value: (d: Datum, key: Key, j: number, data: Array<Datum>) => number): this;

    order(): (series: Series<Datum, Key>) => Array<number>;
    order(order: null): this;
    order(order: Array<number>): this;
    order(order: (series: Series<Datum, Key>) => Array<number>): this;

    offset(): (series: Series<Datum, Key>, order: Array<number>) => void;
    offset(offset: null): this;
    offset(offset: (series: Series<Datum, Key>, order: Array<number>) => void): this;

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
