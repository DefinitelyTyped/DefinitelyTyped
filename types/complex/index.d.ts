// Type definitions for Complex 3.0
// Project: https://github.com/arian/Complex
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
//                 Paul Vasich <https://github.com/pavasich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Complex {
    /**
     * @param real The real part of the number
     * @param im The imaginary part of the number
     */
    constructor(real: number, im: number);

    /**
     * A in line function like Number.from.
     *
     * Examples:
     * var z = Complex.from(2, 4);
     * var z = Complex.from(5);
     * var z = Complex.from('2+5i');
     *
     * @param real A string representation of the number, for example 1+4i
     */
    static from(real: string): Complex;

    /**
     * A in line function like Number.from.
     * @param real The real part of the number
     * @param im The imaginary part of the number
     */
    static from(real: number, im?: number): Complex;

    /**
     * Creates a complex instance from a polar representation
     * @param r The radius/magnitude of the number
     * @param phi The angle/phase of the number
     */
    static fromPolar(r: number, phi: number): Complex;

    /**
     * A instance of the imaginary unit
     */
    static i: Complex;

    /**
     * A instance for the real number
     */
    static one: Complex;

    /**
     * The Complex number's real component
     */
    real: number;

    /**
     * The Complex number's imaginary component
     */
    im: number;

    /**
     * Set the real and imaginary properties a and b from a + bi.
     * @param real The real part of the number
     * @param im The imaginary part of the number
     */
    fromRect(real: number, im: number): Complex;

    /**
     * Set the a and b in a + bi from a polar representation.
     * @param r The radius/magnitude of the number
     * @param phi The angle/phase of the number
     */
    fromPolar(r: number, phi: number): Complex;

    /**
     * Set the precision of the numbers. Similar to Number.prototype.toPrecision.
     * Useful before printing the number with the toString method.
     * @param k An integer specifying the number of significant digits
     */
    toPrecision(k: number): Complex;

    /**
     * Format a number using fixed-point notation. Similar to Number.prototype.toFixed.
     * Useful before printing the number with the toString method.
     * @param k The number of digits to appear after the decimal point [0 - 20].
     * Implementations may optionally support a larger range of values.
     * If this argument is omitted, it is treated as 0.
     */
    toFixed(k: number): Complex;

    /**
     * Finalize the instance. The number will not change and any other method call will return a new instance.
     * Very useful when a complex instance should stay constant.
     * For example the Complex.i variable is a finalized instance.
     */
    finalize(): Complex;

    /**
     * Calculate the magnitude of the complex number
     */
    magnitude(): number;

    /**
     * Alias for magnitude(). Calculate the magnitude of the complex number.
     */
    abs(): number;

    /**
     * Calculate the angle with respect to the real axis, in radians.
     */
    angle(): number;

    /**
     * Alias for angle(). Calculate the angle with respect to the real axis, in radians.
     */
    arg(): number;

    /**
     * Alias for angle(). Calculate the angle with respect to the real axis, in radians.
     */
    phase(): number;

    /**
     * Calculate the conjugate of the complex number (multiplies the imaginary part with -1)
     */
    conjugate(): Complex;

    /**
     * Negate the number (multiplies both the real and imaginary part with -1)
     */
    negate(): Complex;

    /**
     * Multiply the number with a real or complex number
     * @param z The number to multiply with
     */
    multiply(z: number | Complex): Complex;

    /**
     * Alias for multiply(). Multiply the number with a real or complex number
     * @param z The number to multiply with
     */
    mult(z: number | Complex): Complex;

    /**
     * Divide the number by a real or complex number
     * @param z The number to divide by
     */
    divide(z: number | Complex): Complex;

    /**
     * Alias for divide(). Divide the number by a real or complex number
     * @param z The number to divide by
     */
    div(z: number | Complex): Complex;

    /**
     * Add a real or complex number
     * @param z The number to add
     */
    add(z: number | Complex): Complex;

    /**
     * Subtract a real or complex number
     * @param z The number to subtract
     */
    subtract(z: number | Complex): Complex;

    /**
     * Alias for subtract(). Subtract a real or complex number
     * @param z The number to subtract
     */
    sub(z: number | Complex): Complex;

    /**
     * Return the base to the exponent
     * @param z The exponent
     */
    pow(z: number | Complex): Complex;

    /**
     * Return the square root
     */
    sqrt(): Complex;

    /**
     * Return the natural logarithm (base E)
     * @param k The actual answer has a multiplicity (ln(z) = ln|z| + arg(z)) where arg(z) can return the same for
     * different angles (every 2*pi), with this argument you can define which answer is required
     */
    log(k?: number): Complex;

    /**
     * Calculate the e^z where the base is E and the exponential the complex number.
     */
    exp(): Complex;

    /**
     * Calculate the sine of the complex number
     */
    sin(): Complex;

    /**
     * Calculate the cosine of the complex number
     */
    cos(): Complex;

    /**
     * Calculate the tangent of the complex number
     */
    tan(): Complex;

    /**
     * Calculate the hyperbolic sine of the complex number
     */
    sinh(): Complex;

    /**
     * Calculate the hyperbolic cosine of the complex number
     */
    cosh(): Complex;

    /**
     * Calculate the hyperbolic tangent of the complex number
     */
    tanh(): Complex;

    /**
     * Return a new Complex instance with the same real and imaginary properties
     */
    clone(): Complex;

    /**
     * Return a string representation of the complex number
     *
     * Examples:
     * new Complex(1, 2).toString(); // 1+2i
     * new Complex(0, 1).toString(); // i
     * new Complex(4, 0).toString(); // 4
     * new Complex(1, 1).toString(); // 1+i
     * 'my Complex Number is: ' + (new Complex(3, 5)); // 'my Complex Number is: 3+5i
     */
    toString(): string;

    /**
     * Check if the real and imaginary components are equal to the passed in compelex components.
     *
     * Examples:
     * new Complex(1, 4).equals(new Complex(1, 4)); // true
     * new Complex(1, 4).equals(new Complex(1, 3)); // false
     *
     * @param z The complex number to compare with
     */
    equals(z: number | Complex): boolean;
}
