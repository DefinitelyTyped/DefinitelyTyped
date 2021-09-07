import { core } from './core';


// Unary

// in is in in.d.ts because it collides with the in function from basics

/**
 * Computes the sine of the operand.
 *
 * @param {...core.Argument} operand
 * to compute the sine of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the sine of the operand
 */
export declare function sin(
    operand: core.Argument): core.Node;


/**
 * Computes the cosine of the operand.
 *
 * @param {core.Argument} operand
 * to compute the cosine of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the cosine of the operand
 */
export declare function cos(
    operand: core.Argument): core.Node;


/**
 * Computes the tangent of the operand.
 *
 * @param {core.Argument} operand
 * to compute the tangent of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the tangent of the operand
 */
export declare function tan(
    operand: core.Argument): core.Node;


/**
 * Computes the hyperbolic tangent of the operand.
 *
 * @param {core.Argument} operand
 * to compute the hyperbolic tangent of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the hyperbolic tangent of the operand
 */
export declare function tanh(
    operand: core.Argument): core.Node;


/**
 * Computes the inverse hyperbolic sine of the operand.
 *
 * @param {core.Argument} operand
 * to compute the inverse hyperbolic sine of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the inverse hyperbolic sine of the operand
 */
export declare function asinh(
    operand: core.Argument): core.Node;


/**
 * Computes the natural logarithm of the operand.
 *
 * @param {core.Argument} operand
 * to compute the natural logarithm of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the natural logarithm of the operand
 */
export declare function ln(
    operand: core.Argument): core.Node;


// TODO: confirm its the log in base 10

/**
 * Computes the logarithm in base 10 of the operand.
 *
 * @param {core.Argument} operand
 * to compute the logarithm in base 10 of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the logarithm in base 10 of the operand
 */
export declare function log(
    operand: core.Argument): core.Node;


/**
 * Computes the logarithm in base 2 of the operand.
 *
 * @param {core.Argument} operand
 * to compute the logarithm in base 2 of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the logarithm in base 2 of the operand
 */
export declare function log2(
    operand: core.Argument): core.Node;


/**
 * Computes the ceiling of the operand.
 *
 * @param {core.Argument} operand
 * to compute the ceiling of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the ceiling of the operand
 */
export declare function ceil(
    operand: core.Argument): core.Node;


/**
 * Computes the floor of the operand.
 *
 * @param {core.Argument} operand
 * to compute the floor of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the floor of the operand
 */
export declare function floor(
    operand: core.Argument): core.Node;


/**
 * Computes the square root of the operand.
 *
 * @param {core.Argument} operand
 * to compute the square root of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the square root of the operand
 */
export declare function sqrt(
    operand: core.Argument): core.Node;


// TODO: confirm base 10

/**
 * Computes the exponential in base 10 of the operand.
 *
 * @param {core.Argument} operand
 * to compute the exponential in base 10 of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the exponential in base 10 of the operand
 */
export declare function exp(
    operand: core.Argument): core.Node;


/**
 * Computes the absolute number of the operand.
 *
 * @param {core.Argument} operand
 * to compute the absolute number of
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the absolute number of the operand
 */
export declare function abs(
    operand: core.Argument): core.Node;


// Binary

/**
 * Computes whether the first is lesser than the second.
 *
 * @param {core.Argument} first
 * first operand
 *
 * @param {core.Argument} second
 * second operand
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes whether the first is lesser
 * than the second operand
 */
export declare function le(
    first: core.Argument,
    second: core.Argument): core.Node;


/**
 * Computes whether the first is lesser or equal than the second.
 *
 * @param {core.Argument} first
 * first operand
 *
 * @param {core.Argument} second
 * second operand
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes whether the first is lesser or equal
 * than the second operand
 */
export declare function leq(
    first: core.Argument,
    second: core.Argument): core.Node;


/**
 * Computes whether the first is greater than the second.
 *
 * @param {core.Argument} first
 * first operand
 *
 * @param {core.Argument} second
 * second operand
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes whether the first is greater
 * than the second operand
 */
export declare function ge(
    first: core.Argument,
    second: core.Argument): core.Node;


/**
 * Computes whether the first is greater or equal than the second.
 *
 * @param {core.Argument} first
 * first operand
 *
 * @param {core.Argument} second
 * second operand
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes whether the first is greater or equal
 * than the second operand
 */
export declare function geq(
    first: core.Argument,
    second: core.Argument): core.Node;


/**
 * Computes the power of the first with with the second as the exponent.
 *
 * @param {core.Argument} first
 * first operand
 *
 * @param {core.Argument} second
 * second operand
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the power of the first with the second as the exponent
 */
export declare function pow(
    first: core.Argument,
    second: core.Argument): core.Node;


/**
 * Computes the modulo of the first with the second.
 *
 * @param {core.Argument} first
 * first operand
 *
 * @param {core.Argument} second
 * second operand
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the module of the first with the second
 */
export declare function mod(
    first: core.Argument,
    second: core.Argument): core.Node;


/**
 * Returns the result of the minimal operand.
 *
 * @param {core.Argument} first
 * first operand
 *
 * @param {core.Argument} second
 * second operand
 *
 * @returns {core.Node}
 * a {@link core.Node} that returns the result of the minimal operand
 */
export declare function min(
    first: core.Argument,
    second: core.Argument): core.Node;


/**
 * Returns the result of the maximal operand.
 *
 * @param {core.Argument} first
 * first operand
 *
 * @param {core.Argument} second
 * second operand
 *
 * @returns {core.Node}
 * a {@link core.Node} that returns the result of the maximal operand
 */
export declare function max(
    first: core.Argument,
    second: core.Argument): core.Node;


// Variadic

/**
 * Adds up the rest of the operands to the first.
 * Identical to: (((child1 + child2) + child3) + ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @param {core.Argument} first
 * operand to add up to
 *
 * @param {...(core.Argument)} rest
 * the operands to add up
 *
 * @returns {core.Node}
 * a {@link core.Node} that sums up the rest of the operands with the first
 */
export declare function add(
    first: core.Argument,
    ...rest: (core.Argument)[]): core.Node;


/**
 * Subtracts the rest of the operands from the first.
 * Identical to: (((child1 - child2) - child3) - ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @param {core.Argument} first
 * operand to subtract from
 *
 * @param {...(core.Argument)} rest
 * the operands to subtract with
 *
 * @returns {core.Node}
 * a {@link core.Node} that subtracts the rest of the operands from the first
 */
export declare function sub(
    first: core.Argument,
    ...rest: (core.Argument)[]): core.Node;


/**
 * Multiplies the first with the rest of the operands.
 * Identical to: (((child1 * child2) * child3) * ... )
 *
 * Expects at least one operand.
 * If only one is passed it as the identity function.
 *
 * @param {core.Argument} first
 * operand to multiply
 *
 * @param {...(core.Argument)} rest
 * the operands to multiply with
 *
 * @returns {core.Node}
 * a {@link core.Node} that multiplies the first with the rest of the operands
 */
export declare function mul(
    first: core.Argument,
    ...rest: (core.Argument)[]): core.Node;


/**
 * Divides the first with the rest of the operands.
 * Identical to: (((child1 / child2) / child3) / ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @param {core.Argument} first
 * operand to divide
 *
 * @param {...(core.Argument)} rest
 * the operands to divide with
 *
 * @returns {core.Node}
 * a {@link core.Node} that divides the first with the rest
 */
export declare function div(
    first: core.Argument,
    ...rest: (core.Argument)[]): core.Node;
