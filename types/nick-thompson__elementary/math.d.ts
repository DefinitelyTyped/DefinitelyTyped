import { core } from './core';


// Unary

// the in function is in reserved because it clashes with the keyword in


/**
 * Computes the sine of the child.
 *
 * @param {...core.Node} operand
 * child to compute the sine of
 * @returns {core.Node}
 * a node that computes the sine of the child
 */
export declare function sin(
    operand: core.Node): core.Node;


/**
 * Computes the cosine of the child.
 *
 * @param {core.Node} operand
 * child to compute the cosine of
 * @returns {core.Node}
 * a node that computes the cosine of the child
 */
export declare function cos(
    operand: core.Node): core.Node;


/**
 * Computes the tangent of the child.
 *
 * @param {core.Node} operand
 * node to compute the tangent of
 * @returns {core.Node}
 * node that computes the tangent of the child
 */
export declare function tan(
    operand: core.Node): core.Node;


/**
 * Computes the hyperbolic tangent of the child.
 *
 * @param {core.Node} operand
 * child to compute the hyperbolic tangent of
 * @returns {core.Node}
 * node that computes the hyperbolic tangent of the child
 */
export declare function tanh(
    operand: core.Node): core.Node;


/**
 * Computes the inverse hyperbolic sine of the child.
 *
 * @param {core.Node} operand
 * child to compute the inverse hyperbolic sine of
 * @returns {core.Node}
 * node that computes the inverse hyperbolic sine of the child
 */
export declare function asinh(
    operand: core.Node): core.Node;


/**
 * Computes the natural logarithm of the child.
 *
 * @param {core.Node} operand
 * child to compute the natural logarithm of
 * @returns {core.Node}
 * node that computes the natural logarithm of the child
 */
export declare function ln(
    operand: core.Node): core.Node;


// TODO: confirm its the log in base 10

/**
 * Computes the logarithm in base 10 of the child.
 *
 * @param {core.Node} operand
 * child to compute the logarithm in base 10 of
 * @returns {core.Node}
 * node that computes the logarithm in base 10 of the child
 */
export declare function log(
    operand: core.Node): core.Node;


/**
 * Computes the logarithm in base 2 of the child.
 *
 * @param {core.Node} operand
 * child to compute the logarithm in base 2 of
 * @returns {core.Node}
 * node that computes the logarithm in base 2 of the child
 */
export declare function log2(
    operand: core.Node): core.Node;


/**
 * Computes the ceiling of the child.
 *
 * @param {core.Node} operand
 * child to compute the ceiling of
 * @returns {core.Node}
 * node that computes the ceiling of the child
 */
export declare function ceil(
    operand: core.Node): core.Node;


/**
 * Computes the floor of the child.
 *
 * @param {core.Node} operand
 * child to compute the floor of
 * @returns {core.Node}
 * node that computes the floor of the child
 */
export declare function floor(
    operand: core.Node): core.Node;


/**
 * Computes the square root of the child.
 *
 * @param {core.Node} operand
 * child to compute the square root of
 * @returns {core.Node}
 * node that computes the square root of the child
 */
export declare function sqrt(
    operand: core.Node): core.Node;


// TODO: confirm base 10

/**
 * Computes the exponential in base 10 of the child.
 *
 * @param {core.Node} operand
 * child to compute the exponential in base 10 of
 * @returns {core.Node}
 * node that computes the exponential in base 10 of the child
 */
export declare function exp(
    operand: core.Node): core.Node;


/**
 * Computes the absolute number of the child.
 *
 * @param {core.Node} operand
 * child to compute the absolute number of
 * @returns {core.Node}
 * node that computes the absolute number of the child
 */
export declare function abs(
    operand: core.Node): core.Node;


// Binary

/**
 * Computes whether the first child is lesser than the second.
 *
 * @param {core.Node} first
 * first child
 * @param {core.Node} second
 * second child
 * @returns {core.Node}
 * a node that computes whether the first child is lesser
 * than the second child
 */
export declare function le(
    first: core.Node,
    second: core.Node): core.Node;


/**
 * Computes whether the first child is lesser or equal than the second.
 *
 * @param {core.Node} first
 * first child
 * @param {core.Node} second
 * second child
 * @returns {core.Node}
 * a node that computes whether the first child is lesser or equal
 * than the second child
 */
export declare function leq(
    first: core.Node,
    second: core.Node): core.Node;


/**
 * Computes whether the first child is greater than the second.
 *
 * @param {core.Node} first
 * first child
 * @param {core.Node} second
 * second child
 * @returns {core.Node}
 * a node that computes whether the first child is greater
 * than the second child
 */
export declare function ge(
    first: core.Node,
    second: core.Node): core.Node;


/**
 * Computes whether the first child is greater or equal than the second.
 *
 * @param {core.Node} first
 * first child
 * @param {core.Node} second
 * second child
 * @returns {core.Node}
 * a node that computes whether the first child is greater or equal
 * than the second child
 */
export declare function geq(
    first: core.Node,
    second: core.Node): core.Node;


/**
 * Computes the power of the first with with the second as the exponent.
 *
 * @param {core.Node} first
 * first
 * @param {core.Node} second
 * second
 * @returns {core.Node}
 * a node that computes the power of the first with the second as the exponent
 */
export declare function pow(
    first: core.Node,
    second: core.Node): core.Node;


/**
 * Computes the modulo of the first child with the second.
 *
 * @param {core.Node} first
 * first child
 * @param {core.Node} second
 * second child
 * @returns {core.Node}
 * a node that computes the module of the first child with the second
 */
export declare function mod(
    first: core.Node,
    second: core.Node): core.Node;


/**
 * Returns the result of the minimal child.
 *
 * @param {core.Node} first
 * first child
 * @param {core.Node} second
 * second child
 * @returns {core.Node}
 * a node that returns the result of the minimal child
 */
export declare function min(
    first: core.Node,
    second: core.Node): core.Node;


/**
 * Returns the result of the maximal child.
 *
 * @param {core.Node} first
 * first child
 * @param {core.Node} second
 * second child
 * @returns {core.Node}
 * a node that returns the result of the maximal child
 */
export declare function max(
    first: core.Node,
    second: core.Node): core.Node;


// Variadic

/**
 * Adds up the rest of the children to the first.
 * Identical to: (((child1 + child2) + child3) + ... )
 *
 * Expects at least one child.
 * If only one child is passed it behaves as an identity export declare function.
 *
 * @param {core.Node} first
 * child to add up to
 * @param {...core.Node} rest
 * the children to add up
 * @returns {core.Node}
 * a node that sums up the rest of the children with the first
 */
export declare function add(
    first: core.Node,
    ...rest: core.Node[]): core.Node;


/**
 * Subtracts the rest of the children from the first.
 * Identical to: (((child1 - child2) - child3) - ... )
 *
 * Expects at least one child.
 * If only one child is passed it behaves as an identity export declare function.
 *
 * @param {core.Node} first
 * child to subtract from
 * @param {...core.Node} rest
 * the children to subtract with
 * @returns {core.Node}
 * a node that subtracts the rest of the children from the first
 */
export declare function sub(
    first: core.Node,
    ...rest: core.Node[]): core.Node;


/**
 * Multiplies the first child with the rest.
 * Identical to: (((child1 * child2) * child3) * ... )
 *
 * Expects at least one child.
 * If only one child is passed it behaves as an identity export declare function.
 *
 * @param {core.Node} first
 * child to multiply
 * @param {...core.Node} rest
 * the children to multiply with
 * @returns {core.Node}
 * a node that multiplies the first child with the rest
 */
export declare function mul(
    first: core.Node,
    ...rest: core.Node[]): core.Node;


/**
 * Divides the first child with the rest.
 * Identical to: (((child1 / child2) / child3) / ... )
 *
 * Expects at least one child.
 * If only one child is passed it behaves as an identity export declare function.
 *
 * @param {core.Node} first
 * child to divide
 * @param {...core.Node} rest
 * the children to divide with
 * @returns {core.Node}
 * a node that divides the first child with the rest
 */
export declare function div(
    first: core.Node,
    ...rest: core.Node[]): core.Node;
