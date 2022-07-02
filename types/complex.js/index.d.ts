// Type definitions for complex.js 2.0
// Project: https://github.com/infusion/Complex.js
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type ComplexLike =
    | { re: number; im: number }
    | { arg: number; abs: number }
    | { phi: number; r: number }
    | [number, number]
    | number
    | string
    | Complex;

declare class Complex {
    /**
     * A complex zero value (south pole on the Riemann Sphere).
     */
    static ZERO: Complex;

    /**
     * A complex one instance.
     */
    static ONE: Complex;

    /**
     * A complex infinity value (north pole on the Riemann Sphere).
     */
    static INFINITY: Complex;

    /**
     * A complex NaN value (not on the Riemann Sphere).
     */
    static NAN: Complex;

    /**
     * An imaginary number i instance.
     */
    static I: Complex;

    /**
     * A complex PI instance.
     */
    static PI: Complex;

    /**
     * A complex euler number instance.
     */
    static E: Complex;

    /**
     * A small epsilon value used for equals() comparison in order to circumvent double inprecision.
     */
    static EPSILON: number;

    constructor(x: number, y: number);
    constructor(x: ComplexLike);

    // the real part of this complex number
    re: number;
    // the imaginary part of this complex number
    im: number;

    /**
     * Returns the complex sign, defined as the complex number
     * normalized by it's absolute value.
     */
    sign(): Complex;

    /**
     * Adds another complex number.
     */
    add(a: number, b: number): Complex;
    add(a: ComplexLike): Complex;

    /**
     * Subtracts another complex number.
     */
    sub(a: number, b: number): Complex;
    sub(a: ComplexLike): Complex;

    /**
     * Multiplies the number with another complex number.
     */
    mul(a: number, b: number): Complex;
    mul(a: ComplexLike): Complex;

    /**
     * Divides the number by another complex number.
     */
    div(a: number, b: number): Complex;
    div(a: ComplexLike): Complex;

    /**
     * Returns the number raised to the complex exponent.
     */
    pow(a: number, b: number): Complex;
    pow(a: ComplexLike): Complex;

    /**
     * Returns the complex square root of the number.
     */
    sqrt(): Complex;

    /**
     * Returns e^n with complex exponent n
     */
    exp(): Complex;

    /**
     * Returns the natural logarithm (base E) of the actual complex number.
     */
    log(): Complex;

    /**
     * Calculates the magnitude of the complex number.
     */
    abs(): number;

    /**
     * Calculate the angle of the complex number.
     */
    arg(): number;

    /**
     * Calculates the multiplicative inverse of the complex number (1 / z).
     */
    inverse(): Complex;

    /**
     * Calculates the conjugate of the complex number (multiplies the imaginary part with -1).
     */
    conjugate(): Complex;

    /**
     * Negates the number (multiplies both the real and imaginary part with -1) in order to get the additive inverse.
     */
    neg(): Complex;

    /**
     * Floors the complex number parts towards zero.
     */
    floor(places?: number): Complex;

    /**
     * Ceils the complex number parts off zero.
     */
    ceil(places?: number): Complex;

    /**
     * Rounds the complex number parts.
     */
    round(places?: number): Complex;

    /**
     * Checks if both numbers are exactly the same,
     * if both numbers are infinite they are considered not equal.
     */
    equals(a: number, b: number): boolean;
    equals(a: ComplexLike): boolean;

    /**
     * Checks if the given number is not a number.
     */
    isNaN(): boolean;

    /**
     * Determines whether or not a complex number is at the zero pole of the
     * Riemann sphere.
     */
    isZero(): boolean;

    /**
     * Checks if the given number is finite.
     */
    isFinite(): boolean;

    /**
     * Determines whether or not a complex number is at the infinity pole of the
     * Riemann sphere.
     */
    isInfinite(): boolean;

    /**
     * Returns a new Complex instance with the same real and imaginary properties.
     */
    clone(): Complex;

    /**
     * Returns a Vector of the actual complex number with two components.
     */
    toVector(): number[];

    /**
     * Returns a string representation of the actual number. As of v1.9.0 the output is a bit more human readable.
     */
    toString(): string;

    /**
     * Returns the real part of the number if imaginary part is zero. Otherwise null.
     */
    valueOf(): number | undefined;

    /**
     * Calculate the sine of the complex number.
     */
    sin(): Complex;

    /**
     * Calculate the complex arcus sinus.
     */
    asin(): Complex;

    /**
     * Calculate the complex sinh.
     */
    sinh(): Complex;

    /**
     * Calculate the complex asinh.
     */
    asinh(): Complex;

    /**
     * Calculate the cosine.
     */
    cos(): Complex;

    /**
     * Calculate the complex arcus cosinus.
     */
    acos(): Complex;

    /**
     * Calculate the complex cosh.
     */
    cosh(): Complex;

    /**
     * Calculate the complex asinh.
     */
    acosh(): Complex;

    /**
     * Calculate the tangent.
     */
    tan(): Complex;

    /**
     * Calculate the complex arcus tangent.
     */
    atan(): Complex;

    /**
     * Calculate the complex tanh.
     */
    tanh(): Complex;

    /**
     * Calculate the complex atanh.
     */
    atanh(): Complex;

    /**
     * Calculate the cotangent.
     */
    cot(): Complex;

    /**
     * Calculate the complex arcus cotangent.
     */
    acot(): Complex;

    /**
     * Calculate the complex coth.
     */
    coth(): Complex;

    /**
     * Calculate the complex acoth.
     */
    acoth(): Complex;

    /**
     * Calculate the secant.
     */
    sec(): Complex;

    /**
     * Calculate the complex arcus secant.
     */
    asec(): Complex;

    /**
     * Calculate the complex sech.
     */
    sech(): Complex;

    /**
     * Calculate the complex asech.
     */
    asech(): Complex;

    /**
     * Calculate the cosecans.
     */
    csc(): Complex;

    /**
     * Calculate the complex arcus cosecans.
     */
    acsc(): Complex;

    /**
     * Calculate the complex csch.
     */
    csch(): Complex;

    /**
     * Calculate the complex acsch.
     */
    acsch(): Complex;
}

export default Complex;
