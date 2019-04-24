// Type definitions for non-npm package css-typed-object-model-level-1 20180410.0
// Project: https://www.w3.org/TR/css-typed-om-1/
// Definitions by: Dmitry Guketlev <https://github.com/yavanosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare class CSSStyleValue {
    static parse(property: string, cssText: string): CSSStyleValue;
    static parseAll(property: string, cssText: string): CSSStyleValue[];
    toString(): string;
}

declare class CSSVariableReferenceValue {
    constructor(variable: string, fallback?: CSSUnparsedValue)
    variable: string;
    readonly fallback?: CSSUnparsedValue;
}

type CSSUnparsedSegment = string | CSSVariableReferenceValue;

declare class CSSUnparsedValue extends CSSStyleValue {
    constructor(members: CSSUnparsedSegment[]);
    [Symbol.iterator](): IterableIterator<CSSUnparsedSegment>;
    readonly length: number;
    [idx: number]: CSSUnparsedSegment;
}

declare class CSSKeywordValue extends CSSStyleValue {
    constructor(value: string);
    value: string;
}

type CSSNumberish = number | CSSNumericValue;

declare enum CSSNumericBaseType {
    'length',
    'angle',
    'time',
    'frequency',
    'resolution',
    'flex',
    'percent',
}

interface CSSNumericType {
    length: number;
    angle: number;
    time: number;
    frequency: number;
    resolution: number;
    flex: number;
    percent: number;
    percentHint: CSSNumericBaseType;
}

declare class CSSNumericValue extends CSSStyleValue {
    add(...values: CSSNumberish[]): CSSNumericValue;
    sub(...values: CSSNumberish[]): CSSNumericValue;
    mul(...values: CSSNumberish[]): CSSNumericValue;
    div(...values: CSSNumberish[]): CSSNumericValue;
    min(...values: CSSNumberish[]): CSSNumericValue;
    max(...values: CSSNumberish[]): CSSNumericValue;

    equals(...values: CSSNumberish[]): boolean;

    to(unit: string): CSSUnitValue;
    toSum(...units: string[]): CSSMathSum;
    type(): CSSNumericType;

    static parse(cssText: string): CSSNumericValue;
}

declare class CSSUnitValue extends CSSNumericValue {
    constructor(value: number, unit: string);
    value: number;
    readonly unit: string;
}

declare class CSSMathValue extends CSSNumericValue {
    readonly operator: CSSMathOperator;
}

declare class CSSMathSum extends CSSMathValue {
    constructor(...args: CSSNumberish[]);
    readonly values: CSSNumericArray;
}

declare class CSSMathProduct extends CSSMathValue {
    constructor(...args: CSSNumberish[])
    readonly values: CSSNumericArray;
}

declare class CSSMathNegate extends CSSMathValue {
    constructor(arg: CSSNumberish)
    readonly value: CSSNumericValue;
}

declare class CSSMathInvert extends CSSMathValue {
    constructor(arg: CSSNumberish)
    readonly value: CSSNumericValue;
}

declare class CSSMathMin extends CSSMathValue {
    constructor(...args: CSSNumberish[])
    readonly values: CSSNumericArray;
}

declare class CSSMathMax extends CSSMathValue {
    constructor(...args: CSSNumberish[])
    readonly values: CSSNumericArray;
}

// TODO(yavanosta): conflict with base class properties
// Since there is no support for this class in any browser, it's better
// wait for the implementation.
// declare class CSSMathClamp extends CSSMathValue {
// constructor(min: CSSNumberish, val: CSSNumberish, max: CSSNumberish);
//     readonly min: CSSNumericValue;
//     readonly val: CSSNumericValue;
//     readonly max: CSSNumericValue;
// };

declare class CSSNumericArray {
    [Symbol.iterator](): IterableIterator<CSSNumericValue>;
    readonly length: number;
    readonly [index: number]: CSSNumericValue;
}

declare enum CSSMathOperator {
    'sum',
    'product',
    'negate',
    'invert',
    'min',
    'max',
    'clamp',
}

declare class CSSTransformValue extends CSSStyleValue {
    constructor(transforms: CSSTransformComponent[]);
    [Symbol.iterator](): IterableIterator<CSSTransformComponent>;
    readonly length: number;
    [index: number]: CSSTransformComponent;
    readonly is2D: boolean;
    toMatrix(): DOMMatrix;
}

declare class CSSTransformComponent {
    is2D: boolean;
    toMatrix(): DOMMatrix;
    toString(): string;
}

declare class CSSTranslate extends CSSTransformComponent {
    constructor(x: CSSNumericValue, y: CSSNumericValue, z?: CSSNumericValue);
    x: CSSNumericValue;
    y: CSSNumericValue;
    z: CSSNumericValue;
}

declare class CSSRotate extends CSSTransformComponent {
    constructor(angle: CSSNumericValue);
    constructor(x: CSSNumberish, y: CSSNumberish, z: CSSNumberish, angle: CSSNumericValue)
    x: CSSNumberish;
    y: CSSNumberish;
    z: CSSNumberish;
    angle: CSSNumericValue;
}

declare class CSSScale extends CSSTransformComponent {
    constructor(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish)
    x: CSSNumberish;
    y: CSSNumberish;
    z: CSSNumberish;
}

declare class CSSSkew extends CSSTransformComponent {
    constructor(ax: CSSNumericValue, ay: CSSNumericValue)
    ax: CSSNumericValue;
    ay: CSSNumericValue;
}

declare class CSSSkewX extends CSSTransformComponent {
    constructor(ax: CSSNumericValue)
    ax: CSSNumericValue;
}

declare class CSSSkewY extends CSSTransformComponent {
    constructor(ay: CSSNumericValue)
    ay: CSSNumericValue;
}

/* Note that skew(x,y) is *not* the same as skewX(x) skewY(y),
     thus the separate interfaces for all three. */

declare class CSSPerspective extends CSSTransformComponent {
    constructor(length: CSSNumericValue)
    length: CSSNumericValue;
}

declare class CSSMatrixComponent extends CSSTransformComponent {
    constructor(matrix: DOMMatrixReadOnly, options?: CSSMatrixComponentOptions)
    matrix: DOMMatrix;
}

interface CSSMatrixComponentOptions {
    is2D: boolean;
}

declare class CSSImageValue extends CSSStyleValue {
}

declare class StylePropertyMapReadOnly {
    [Symbol.iterator](): IterableIterator<[string, CSSStyleValue[]]>;

    get(property: string): CSSStyleValue | undefined;
    getAll(property: string): CSSStyleValue[];
    has(property: string): boolean;
    readonly size: number;
}

declare class StylePropertyMap extends StylePropertyMapReadOnly {
    set(property: string, ...values: Array<CSSStyleValue | string>): void;
    append(property: string, ...values: Array<CSSStyleValue | string>): void;
    delete(property: string): void;
    clear(): void;
}

interface Element {
    computedStyleMap(): StylePropertyMapReadOnly;
}

interface CSSStyleRule {
    readonly styleMap: StylePropertyMap;
}

interface ElementCSSInlineStyle {
    readonly attributeStyleMap: StylePropertyMap;
}

interface CSS {
    number(value: number): CSSUnitValue;
    percent(value: number): CSSUnitValue;

    // <length>
    em(value: number): CSSUnitValue;
    ex(value: number): CSSUnitValue;
    ch(value: number): CSSUnitValue;
    ic(value: number): CSSUnitValue;
    rem(value: number): CSSUnitValue;
    lh(value: number): CSSUnitValue;
    rlh(value: number): CSSUnitValue;
    vw(value: number): CSSUnitValue;
    vh(value: number): CSSUnitValue;
    vi(value: number): CSSUnitValue;
    vb(value: number): CSSUnitValue;
    vmin(value: number): CSSUnitValue;
    vmax(value: number): CSSUnitValue;
    cm(value: number): CSSUnitValue;
    mm(value: number): CSSUnitValue;
    Q(value: number): CSSUnitValue;
    in(value: number): CSSUnitValue;
    pt(value: number): CSSUnitValue;
    pc(value: number): CSSUnitValue;
    px(value: number): CSSUnitValue;

    // <angle>
    deg(value: number): CSSUnitValue;
    grad(value: number): CSSUnitValue;
    rad(value: number): CSSUnitValue;
    turn(value: number): CSSUnitValue;

    // <time>
    s(value: number): CSSUnitValue;
    ms(value: number): CSSUnitValue;

    // <frequency>
    Hz(value: number): CSSUnitValue;
    kHz(value: number): CSSUnitValue;

    // <resolution>
    dpi(value: number): CSSUnitValue;
    dpcm(value: number): CSSUnitValue;
    dppx(value: number): CSSUnitValue;

    // <flex>
    fr(value: number): CSSUnitValue;
}
declare var CSS: CSS;
