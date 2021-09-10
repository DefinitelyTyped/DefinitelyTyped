import { core } from './core';

// for docs
// noinspection ES6UnusedImports
import * as el from '../';


// ============================================================================
// Native


// Unary

// in is in in.d.ts because it collides with the in function from basics


/**
 * Computes the sine of the operand.
 *
 * @memberOf el
 * @function sin
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the sine of
 *
 * @returns {core.SinNode}
 * a {@link core.SinNode} that computes the sine of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.SinNode
 */
export declare const sin:
    core.NodeFactory<'sin',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the cosine of the operand.
 *
 * @memberOf el
 * @function cos
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the cosine of
 *
 * @returns {core.CosNode}
 * a {@link core.CosNode} that computes the cosine of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.CosNode
 */
export declare const cos:
    core.NodeFactory<'cos',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the tangent of the operand.
 *
 * @memberOf el
 * @function tan
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the tangent of
 *
 * @returns {core.TanNode}
 * a {@link core.TanNode} that computes the tangent of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.TanNode
 */
export declare const tan:
    core.NodeFactory<'tan',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the hyperbolic tangent of the operand.
 *
 * @memberOf el
 * @function tanh
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the hyperbolic tangent of
 *
 * @returns {core.TanhNode}
 * a {@link core.TanhNode} that computes the hyperbolic tangent of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.TanhNode
 */
export declare const tanh:
    core.NodeFactory<'tanh',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the inverse hyperbolic sine of the operand.
 *
 * @memberOf el
 * @function asinh
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the inverse hyperbolic sine of
 *
 * @returns {core.AsinhNode}
 * a {@link core.AsinhNode} that computes the inverse hyperbolic sine
 * of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.AsinhNode
 */
export declare const asinh:
    core.NodeFactory<'asinh',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the natural logarithm of the operand.
 *
 * @memberOf el
 * @function ln
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the natural logarithm of
 *
 * @returns {core.LnNode}
 * a {@link core.LnNode} that computes the natural logarithm of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.LnNode
 */
export declare const ln:
    core.NodeFactory<'ln',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


// TODO: confirm its the log in base 10

/**
 * Computes the logarithm in base 10 of the operand.
 *
 * @memberOf el
 * @function log
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the logarithm in base 10 of
 *
 * @returns {core.LogNode}
 * a {@link core.LogNode} that computes the logarithm in base 10 of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.LogNode
 */
export declare const log:
    core.NodeFactory<'log',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the logarithm in base 2 of the operand.
 *
 * @memberOf el
 * @function log2
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the logarithm in base 2 of
 *
 * @returns {core.Log2Node}
 * a {@link core.Log2Node} that computes the logarithm in base 2 of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Log2Node
 */
export declare const log2:
    core.NodeFactory<'log2',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the ceiling of the operand.
 *
 * @memberOf el
 * @function ceil
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the ceiling of
 *
 * @returns {core.CeilNode}
 * a {@link core.CeilNode} that computes the ceiling of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.CeilNode
 */
export declare const ceil:
    core.NodeFactory<'ceil',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the floor of the operand.
 *
 * @memberOf el
 * @function floor
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the floor of
 *
 * @returns {core.FloorNode}
 * a {@link core.FloorNode} that computes the floor of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.FloorNode
 */
export declare const floor:
    core.NodeFactory<'floor',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the square root of the operand.
 *
 * @memberOf el
 * @function sqrt
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the square root of
 *
 * @returns {core.SqrtNode}
 * a {@link core.SqrtNode} that computes the square root of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.SqrtNode
 */
export declare const sqrt:
    core.NodeFactory<'sqrt',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


// TODO: confirm base 10

/**
 * Computes the exponential in base 10 of the operand.
 *
 * @memberOf el
 * @function exp
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the exponential in base 10 of
 *
 * @returns {core.ExpNode}
 * a {@link core.ExpNode} that computes the exponential in base 10 of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.ExpNode
 */
export declare const exp:
    core.NodeFactory<'exp',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


/**
 * Computes the absolute number of the operand.
 *
 * @memberOf el
 * @function abs
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} operand
 * to compute the absolute number of
 *
 * @returns {core.AbsNode}
 * a {@link core.AbsNode} that computes the absolute number of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.AbsNode
 */
export declare const abs:
    core.NodeFactory<'abs',
        core.KeyProps,
        [
            operand: core.Child
        ]>;


// Binary

/**
 * Computes whether the first is lesser than the second.
 *
 * @memberOf el
 * @function le
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
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
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.LeNode
 */
export declare const le:
    core.NodeFactory<'le',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;


/**
 * Computes whether the first is lesser or equal than the second.
 *
 * @memberOf el
 * @function leq
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
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
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.LeqNode
 */
export declare const leq:
    core.NodeFactory<'leq',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;


/**
 * Computes whether the first is greater than the second.
 *
 * @memberOf el
 * @function ge
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
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
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.GeNode
 */
export declare const ge:
    core.NodeFactory<'ge',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;


/**
 * Computes whether the first is greater or equal than the second.
 *
 * @memberOf el
 * @function geq
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
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
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.GeqNode
 */
export declare const geq:
    core.NodeFactory<'geq',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;


/**
 * Computes the power of the first with with the second as the exponent.
 *
 * @memberOf el
 * @function pow
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
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
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.PowNode
 */
export declare const pow:
    core.NodeFactory<'pow',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;


/**
 * Computes the modulo of the first with the second.
 *
 * @memberOf el
 * @function mod
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.ModNode}
 * a {@link core.ModNode} that computes the module of the first with the second
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.ModNode
 */
export declare const mod:
    core.NodeFactory<'mod',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;


/**
 * Returns the result of the minimal operand.
 *
 * @memberOf el
 * @function min
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.MinNode}
 * a {@link core.MinNode} that returns the result of the minimal operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.MinNode
 */
export declare const min:
    core.NodeFactory<'min',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;


/**
 * Returns the result of the maximal operand.
 *
 * @memberOf el
 * @function max
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} first
 * first operand
 *
 * @param {core.Child} second
 * second operand
 *
 * @returns {core.MaxNode}
 * a {@link core.MaxNode} that returns the result of the maximal operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.MaxNode
 */
export declare const max:
    core.NodeFactory<'max',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;


// Variadic

/**
 * Adds up the operands.
 * Identical to: (((child1 + child2) + child3) + ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @memberOf el
 * @function add
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.VariadicChildrenArray} operands
 * the operands to add up
 *
 * @returns {core.AddNode}
 * a {@link core.AddNode} that sums up the operands
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.AddNode
 */
export declare const add:
    core.NodeFactory<'add',
        core.KeyProps,
        [
            ...operands: core.VariadicChildrenArray
        ]>;


/**
 * Subtracts the rest of the operands from the first.
 * Identical to: (((child1 - child2) - child3) - ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @memberOf el
 * @function sub
 *
 * @param {core.VariadicChildrenArray} operands
 * the operands to subtract
 *
 * @returns {core.SubNode}
 * a {@link core.SubNode} that subtracts the rest of the operands from the first
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.SubNode
 */
export declare const sub:
    core.NodeFactory<'sub',
        core.KeyProps,
        [
            ...operands: core.VariadicChildrenArray
        ]>;


/**
 * Multiplies the operands.
 * Identical to: (((child1 * child2) * child3) * ... )
 *
 * Expects at least one operand.
 * If only one is passed it as the identity function.
 *
 * @memberOf el
 * @function mul
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.VariadicChildrenArray} rest
 * the operands to multiply
 *
 * @returns {core.MulNode}
 * a {@link core.MulNode} that multiplies the operands
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.MulNode
 */
export declare const mul:
    core.NodeFactory<'mul',
        core.KeyProps,
        [
            ...operands: core.VariadicChildrenArray
        ]>;


/**
 * Divides the first with the rest of the operands.
 * Identical to: (((child1 / child2) / child3) / ... )
 *
 * Expects at least one operand.
 * If only one is passed it behaves as the identity function.
 *
 * @memberOf el
 * @function div
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.VariadicChildrenArray} operands
 * the operands to divide
 *
 * @returns {core.DivNode}
 * a {@link core.DivNode} that divides the first with the rest of the operands
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.DivNode
 */
export declare const div:
    core.NodeFactory<'div',
        core.KeyProps,
        [
            ...operands: core.VariadicChildrenArray
        ]>;
