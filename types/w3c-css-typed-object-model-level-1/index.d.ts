interface CSSStyleValue {
    toString(): string;
}

declare var CSSStyleValue: {
    prototype: CSSStyleValue;
    new(): CSSStyleValue;
    parse(property: string, cssText: string): CSSStyleValue;
    parseAll(property: string, cssText: string): CSSStyleValue[];
};

interface CSSVariableReferenceValue {
    readonly fallback: CSSUnparsedValue | null;
    variable: string;
}

declare var CSSVariableReferenceValue: {
    prototype: CSSVariableReferenceValue;
    new(variable: string, fallback?: CSSUnparsedValue | null): CSSVariableReferenceValue;
};

interface CSSUnparsedValue extends CSSStyleValue {
    readonly length: number;
    forEach(
        callbackfn: (value: CSSUnparsedSegment, key: number, parent: CSSUnparsedValue) => void,
        thisArg?: any,
    ): void;
}

declare var CSSUnparsedValue: {
    prototype: CSSUnparsedValue;
    new(members: CSSUnparsedSegment[]): CSSUnparsedValue;
};

interface CSSKeywordValue extends CSSStyleValue {
    value: string;
}

declare var CSSKeywordValue: {
    prototype: CSSKeywordValue;
    new(value: string): CSSKeywordValue;
};

type CSSNumberOrNumeric = CSSNumberish | CSSNumericValue;

interface CSSNumericType {
    angle?: number;
    flex?: number;
    frequency?: number;
    length?: number;
    percent?: number;
    percentHint?: CSSNumericBaseType;
    resolution?: number;
    time?: number;
}

interface CSSNumericValue extends CSSStyleValue {
    add(...values: CSSNumberish[]): CSSNumericValue;
    div(...values: CSSNumberish[]): CSSNumericValue;
    equals(...value: CSSNumberish[]): boolean;
    max(...values: CSSNumberish[]): CSSNumericValue;
    min(...values: CSSNumberish[]): CSSNumericValue;
    mul(...values: CSSNumberish[]): CSSNumericValue;
    sub(...values: CSSNumberish[]): CSSNumericValue;
    to(unit: string): CSSUnitValue;
    toSum(...units: string[]): CSSMathSum;
    type(): CSSNumericType;
}

declare var CSSNumericValue: {
    prototype: CSSNumericValue;
    new(): CSSNumericValue;
    parse(cssText: string): CSSNumericValue;
};

interface CSSUnitValue extends CSSNumericValue {
    readonly unit: string;
    value: number;
}

declare var CSSUnitValue: {
    prototype: CSSUnitValue;
    new(value: number, unit: string): CSSUnitValue;
};

interface CSSMathValue extends CSSNumericValue {
    readonly operator: CSSMathOperator;
}

declare var CSSMathValue: {
    prototype: CSSMathValue;
    new(): CSSMathValue;
};

interface CSSMathSum extends CSSMathValue {
    readonly values: CSSNumericArray;
}

declare var CSSMathSum: {
    prototype: CSSMathSum;
    new(...args: CSSNumberish[]): CSSMathSum;
};

interface CSSMathProduct extends CSSMathValue {
    readonly values: CSSNumericArray;
}

declare var CSSMathProduct: {
    prototype: CSSMathProduct;
    new(...args: CSSNumberish[]): CSSMathProduct;
};

interface CSSMathNegate extends CSSMathValue {
    readonly value: CSSNumericValue;
}

declare var CSSMathNegate: {
    prototype: CSSMathNegate;
    new(arg: CSSNumberish): CSSMathNegate;
};

interface CSSMathInvert extends CSSMathValue {
    readonly value: CSSNumericValue;
}

declare var CSSMathInvert: {
    prototype: CSSMathInvert;
    new(arg: CSSNumberish): CSSMathInvert;
};

interface CSSMathMin extends CSSMathValue {
    readonly values: CSSNumericArray;
}

declare var CSSMathMin: {
    prototype: CSSMathMin;
    new(...args: CSSNumberish[]): CSSMathMin;
};

interface CSSMathMax extends CSSMathValue {
    readonly values: CSSNumericArray;
}

declare var CSSMathMax: {
    prototype: CSSMathMax;
    new(...args: CSSNumberish[]): CSSMathMax;
};

interface CSSMathClamp extends CSSMathValue {
    readonly lower: CSSNumericValue;
    readonly upper: CSSNumericValue;
    readonly value: CSSNumericValue;
}

declare var CSSMathClamp: {
    prototype: CSSMathClamp;
    new(lower: CSSNumberish, value: CSSNumberish, upper: CSSNumberish): CSSMathClamp;
};

interface CSSNumericArray {
    readonly length: number;
    forEach(callbackfn: (value: CSSNumericValue, key: number, parent: CSSNumericArray) => void, thisArg?: any): void;
}

declare var CSSNumericArray: {
    prototype: CSSNumericArray;
    new(): CSSNumericArray;
};

interface CSSTransformValue extends CSSStyleValue {
    readonly is2D: boolean;
    readonly length: number;
    toMatrix(): DOMMatrix;
    forEach(
        callbackfn: (value: CSSTransformComponent, key: number, parent: CSSTransformValue) => void,
        thisArg?: any,
    ): void;
}

declare var CSSTransformValue: {
    prototype: CSSTransformValue;
    new(transforms: CSSTransformComponent[]): CSSTransformValue;
};

interface CSSTransformComponent {
    is2D: boolean;
    toMatrix(): DOMMatrix;
    toString(): string;
}

declare var CSSTransformComponent: {
    prototype: CSSTransformComponent;
    new(): CSSTransformComponent;
};

interface CSSTranslate extends CSSTransformComponent {
    x: CSSNumericValue;
    y: CSSNumericValue;
    z: CSSNumericValue;
}

declare var CSSTranslate: {
    prototype: CSSTranslate;
    new(x: CSSNumericValue, y: CSSNumericValue, z?: CSSNumericValue): CSSTranslate;
};

interface CSSRotate extends CSSTransformComponent {
    angle: CSSNumericValue;
    x: CSSNumberish;
    y: CSSNumberish;
    z: CSSNumberish;
}

declare var CSSRotate: {
    prototype: CSSRotate;
    new(angle: CSSNumericValue): CSSRotate;
    new(x: CSSNumberish, y: CSSNumberish, z: CSSNumberish, angle: CSSNumericValue): CSSRotate;
};

interface CSSScale extends CSSTransformComponent {
    x: CSSNumberish;
    y: CSSNumberish;
    z: CSSNumberish;
}

declare var CSSScale: {
    prototype: CSSScale;
    new(x: CSSNumberish, y: CSSNumberish, z?: CSSNumberish): CSSScale;
};

interface CSSSkew extends CSSTransformComponent {
    ax: CSSNumericValue;
    ay: CSSNumericValue;
}

declare var CSSSkew: {
    prototype: CSSSkew;
    new(ax: CSSNumericValue, ay: CSSNumericValue): CSSSkew;
};

interface CSSSkewX extends CSSTransformComponent {
    ax: CSSNumericValue;
}

declare var CSSSkewX: {
    prototype: CSSSkewX;
    new(ax: CSSNumericValue): CSSSkewX;
};

interface CSSSkewY extends CSSTransformComponent {
    ay: CSSNumericValue;
}

declare var CSSSkewY: {
    prototype: CSSSkewY;
    new(ay: CSSNumericValue): CSSSkewY;
};

/* Note that skew(x,y) is *not* the same as skewX(x) skewY(y),
     thus the separate interfaces for all three. */

interface CSSPerspective extends CSSTransformComponent {
    length: CSSPerspectiveValue;
}

declare var CSSPerspective: {
    prototype: CSSPerspective;
    new(length: CSSPerspectiveValue): CSSPerspective;
};

interface CSSMatrixComponent extends CSSTransformComponent {
    matrix: DOMMatrix;
}

declare var CSSMatrixComponent: {
    prototype: CSSMatrixComponent;
    new(matrix: DOMMatrixReadOnly, options?: CSSMatrixComponentOptions): CSSMatrixComponent;
};

interface CSSMatrixComponentOptions {
    is2D?: boolean;
}
// tslint:disable-next-line:no-empty-interface
interface CSSImageValue extends CSSStyleValue {
}

declare var CSSImageValue: {
    prototype: CSSImageValue;
    new(): CSSImageValue;
};

interface StylePropertyMapReadOnly {
    readonly size: number;
    get(property: string): undefined | CSSStyleValue;
    getAll(property: string): CSSStyleValue[];
    has(property: string): boolean;
    forEach(
        callbackfn: (value: CSSStyleValue[], key: string, parent: StylePropertyMapReadOnly) => void,
        thisArg?: any,
    ): void;
}

declare var StylePropertyMapReadOnly: {
    prototype: StylePropertyMapReadOnly;
    new(): StylePropertyMapReadOnly;
};

interface StylePropertyMap extends StylePropertyMapReadOnly {
    append(property: string, ...values: Array<CSSStyleValue | string>): void;
    clear(): void;
    delete(property: string): void;
    set(property: string, ...values: Array<CSSStyleValue | string>): void;
}

declare var StylePropertyMap: {
    prototype: StylePropertyMap;
    new(): StylePropertyMap;
};

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
