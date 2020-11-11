// Type definitions for non-npm package css-typed-object-model-level-1 20180410.0
// Project: https://www.w3.org/TR/css-typed-om-1/
// Definitions by: Nathan Shively-Sanders <https://github.com/sandersn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

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

declare namespace CSS {
    export function number(value: number): CSSUnitValue;
    export function percent(value: number): CSSUnitValue;

    // <length>
    export function em(value: number): CSSUnitValue;
    export function ex(value: number): CSSUnitValue;
    export function ch(value: number): CSSUnitValue;
    export function ic(value: number): CSSUnitValue;
    export function rem(value: number): CSSUnitValue;
    export function lh(value: number): CSSUnitValue;
    export function rlh(value: number): CSSUnitValue;
    export function vw(value: number): CSSUnitValue;
    export function vh(value: number): CSSUnitValue;
    export function vi(value: number): CSSUnitValue;
    export function vb(value: number): CSSUnitValue;
    export function vmin(value: number): CSSUnitValue;
    export function vmax(value: number): CSSUnitValue;
    export function cm(value: number): CSSUnitValue;
    export function mm(value: number): CSSUnitValue;
    export function Q(value: number): CSSUnitValue;

    function _in(value: number): CSSUnitValue;
    export { _in as in };
    export function pt(value: number): CSSUnitValue;
    export function pc(value: number): CSSUnitValue;
    export function px(value: number): CSSUnitValue;

    // <angle>
    export function deg(value: number): CSSUnitValue;
    export function grad(value: number): CSSUnitValue;
    export function rad(value: number): CSSUnitValue;
    export function turn(value: number): CSSUnitValue;

    // <time>
    export function s(value: number): CSSUnitValue;
    export function ms(value: number): CSSUnitValue;

    // <frequency>
    export function Hz(value: number): CSSUnitValue;
    export function kHz(value: number): CSSUnitValue;

    // <resolution>
    export function dpi(value: number): CSSUnitValue;
    export function dpcm(value: number): CSSUnitValue;
    export function dppx(value: number): CSSUnitValue;

    // <flex>
    export function fr(value: number): CSSUnitValue;
}
