import { core } from './core';


// Unary

// in is in in.d.ts because it collides with the in function from basics


/**
 * Computes the sine of the operand.
 *
 * @param {...core.Child} operand
 * to compute the sine of
 *
 * @returns {core.SinNode}
 * a {@link core.SinNode} that computes the sine of the operand
 */
export declare function sin(
    operand: core.Child): core.SinNode;


/**
 * Computes the cosine of the operand.
 *
 * @param {core.Child} operand
 * to compute the cosine of
 *
 * @returns {core.CosNode}
 * a {@link core.CosNode} that computes the cosine of the operand
 */
export declare function cos(
    operand: core.Child): core.CosNode;


/**
 * Computes the tangent of the operand.
 *
 * @param {core.Child} operand
 * to compute the tangent of
 *
 * @returns {core.TanNode}
 * a {@link core.TanNode} that computes the tangent of the operand
 */
export declare function tan(
    operand: core.Child): core.TanNode;


/**
 * Computes the hyperbolic tangent of the operand.
 *
 * @param {core.Child} operand
 * to compute the hyperbolic tangent of
 *
 * @returns {core.TanhNode}
 * a {@link core.TanhNode} that computes the hyperbolic tangent of the operand
 */
export declare function tanh(
    operand: core.Child): core.TanhNode;


/**
 * Computes the inverse hyperbolic sine of the operand.
 *
 * @param {core.Child} operand
 * to compute the inverse hyperbolic sine of
 *
 * @returns {core.AsinhNode}
 * a {@link core.AsinhNode} that computes the inverse hyperbolic sine
 * of the operand
 */
export declare function asinh(
    operand: core.Child): core.AsinhNode;


/**
 * Computes the natural logarithm of the operand.
 *
 * @param {core.Child} operand
 * to compute the natural logarithm of
 *
 * @returns {core.LnNode}
 * a {@link core.LnNode} that computes the natural logarithm of the operand
 */
export declare function ln(
    operand: core.Child): core.LnNode;


// TODO: confirm its the log in base 10

/**
 * Computes the logarithm in base 10 of the operand.
 *
 * @param {core.Child} operand
 * to compute the logarithm in base 10 of
 *
 * @returns {core.LogNode}
 * a {@link core.LogNode} that computes the logarithm in base 10 of the operand
 */
export declare function log(
    operand: core.Child): core.LogNode;


/**
 * Computes the logarithm in base 2 of the operand.
 *
 * @param {core.Child} operand
 * to compute the logarithm in base 2 of
 *
 * @returns {core.Log2Node}
 * a {@link core.Log2Node} that computes the logarithm in base 2 of the operand
 */
export declare function log2(
    operand: core.Child): core.Log2Node;


/**
 * Computes the ceiling of the operand.
 *
 * @param {core.Child} operand
 * to compute the ceiling of
 *
 * @returns {core.CeilNode}
 * a {@link core.CeilNode} that computes the ceiling of the operand
 */
export declare function ceil(
    operand: core.Child): core.CeilNode;


/**
 * Computes the floor of the operand.
 *
 * @param {core.Child} operand
 * to compute the floor of
 *
 * @returns {core.FloorNode}
 * a {@link core.FloorNode} that computes the floor of the operand
 */
export declare function floor(
    operand: core.Child): core.FloorNode;


/**
 * Computes the square root of the operand.
 *
 * @param {core.Child} operand
 * to compute the square root of
 *
 * @returns {core.SqrtNode}
 * a {@link core.SqrtNode} that computes the square root of the operand
 */
export declare function sqrt(
    operand: core.Child): core.SqrtNode;


// TODO: confirm base 10

/**
 * Computes the exponential in base 10 of the operand.
 *
 * @param {core.Child} operand
 * to compute the exponential in base 10 of
 *
 * @returns {core.ExpNode}
 * a {@link core.ExpNode} that computes the exponential in base 10 of the operand
 */
export declare function exp(
    operand: core.Child): core.ExpNode;


/**
 * Computes the absolute number of the operand.
 *
 * @param {core.Child} operand
 * to compute the absolute number of
 *
 * @returns {core.AbsNode}
 * a {@link core.AbsNode} that computes the absolute number of the operand
 */
export declare function abs(
    operand: core.Child): core.AbsNode;


// Binary

/**
 * Computes whether the first is lesser than the second.
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.LeNode}
 * a {@link core.LeNode} that computes whether the first is lesser
 * than the second operand
 */
export declare function le(
    first: core.Child,
    second: core.Child): core.LeNode;


/**
 * Computes whether the first is lesser or equal than the second.
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.LeqNode}
 * a {@link core.LeqNode} that computes whether the first is lesser or equal
 * than the second operand
 */
export declare function leq(
    first: core.Child,
    second: core.Child): core.LeqNode;


/**
 * Computes whether the first is greater than the second.
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.GeNode}
 * a {@link core.GeNode} that computes whether the first is greater
 * than the second operand
 */
export declare function ge(
    first: core.Child,
    second: core.Child): core.GeNode;


/**
 * Computes whether the first is greater or equal than the second.
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.GeqNode}
 * a {@link core.GeqNode} that computes whether the first is greater or equal
 * than the second operand
 */
export declare function geq(
    first: core.Child,
    second: core.Child): core.GeqNode;


/**
 * Computes the power of the first with with the second as the exponent.
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.PowNode}
 * a {@link core.PowNode} that computes the power of the first with
 * the second as the exponent
 */
export declare function pow(
    first: core.Child,
    second: core.Child): core.PowNode;


/**
 * Computes the modulo of the first with the second.
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.ModNode}
 * a {@link core.ModNode} that computes the module of the first with the second
 */
export declare function mod(
    first: core.Child,
    second: core.Child): core.ModNode;


/**
 * Returns the result of the minimal operand.
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.MinNode}
 * a {@link core.MinNode} that returns the result of the minimal operand
 */
export declare function min(
    first: core.Child,
    second: core.Child): core.MinNode;


/**
 * Returns the result of the maximal operand.
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.MaxNode}
 * a {@link core.MaxNode} that returns the result of the maximal operand
 */
export declare function max(
    first: core.Child,
    second: core.Child): core.MaxNode;


// Variadic

/**
 * Adds up the rest of the operands to the first.
 * Identical to: (((child1 + child2) + child3) + ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @param {core.Child} first
 * operand to add up to
 *
 * @param {...(core.Child)} rest
 * the operands to add up
 *
 * @returns {core.AddNode}
 * a {@link core.AddNode} that sums up the rest of the operands with the first
 */
export declare function add(
    first: core.Child,
    ...rest: (core.Child)[]): core.AddNode;


/**
 * Subtracts the rest of the operands from the first.
 * Identical to: (((child1 - child2) - child3) - ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @param {core.Child} first
 * operand to subtract from
 *
 * @param {...(core.Child)} rest
 * the operands to subtract with
 *
 * @returns {core.SubNode}
 * a {@link core.SubNode} that subtracts the rest of the operands from the first
 */
export declare function sub(
    first: core.Child,
    ...rest: (core.Child)[]): core.SubNode;


/**
 * Multiplies the first with the rest of the operands.
 * Identical to: (((child1 * child2) * child3) * ... )
 *
 * Expects at least one operand.
 * If only one is passed it as the identity function.
 *
 * @param {core.Child} first
 * operand to multiply
 *
 * @param {...(core.Child)} rest
 * the operands to multiply with
 *
 * @returns {core.MulNode}
 * a {@link core.MulNode} that multiplies the first with the rest of the operands
 */
export declare function mul(
    first: core.Child,
    ...rest: (core.Child)[]): core.MulNode;


/**
 * Divides the first with the rest of the operands.
 * Identical to: (((child1 / child2) / child3) / ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @param {core.Child} first
 * operand to divide
 *
 * @param {...(core.Child)} rest
 * the operands to divide with
 *
 * @returns {core.DivNode}
 * a {@link core.DivNode} that divides the first with the rest
 */
export declare function div(
    first: core.Child,
    ...rest: (core.Child)[]): core.DivNode;
