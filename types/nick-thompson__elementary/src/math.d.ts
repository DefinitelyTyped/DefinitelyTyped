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
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the sine of
 *
 * @returns
 * a {@link core.SinNode} that computes the sine of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.SinNode
 */
export const sin:
    core.NodeFactory<'sin',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the cosine of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the cosine of
 *
 * @returns
 * a {@link core.CosNode} that computes the cosine of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.CosNode
 */
export const cos:
    core.NodeFactory<'cos',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the tangent of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the tangent of
 *
 * @returns
 * a {@link core.TanNode} that computes the tangent of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.TanNode
 */
export const tan:
    core.NodeFactory<'tan',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the hyperbolic tangent of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the hyperbolic tangent of
 *
 * @returns
 * a {@link core.TanhNode} that computes the hyperbolic tangent of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.TanhNode
 */
export const tanh:
    core.NodeFactory<'tanh',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the inverse hyperbolic sine of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the inverse hyperbolic sine of
 *
 * @returns
 * a {@link core.AsinhNode} that computes the inverse hyperbolic sine
 * of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.AsinhNode
 */
export const asinh:
    core.NodeFactory<'asinh',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the natural logarithm of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the natural logarithm of
 *
 * @returns
 * a {@link core.LnNode} that computes the natural logarithm of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.LnNode
 */
export const ln:
    core.NodeFactory<'ln',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

// TODO: confirm its the log in base 10

/**
 * Computes the logarithm in base 10 of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the logarithm in base 10 of
 *
 * @returns
 * a {@link core.LogNode} that computes the logarithm in base 10 of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.LogNode
 */
export const log:
    core.NodeFactory<'log',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the logarithm in base 2 of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the logarithm in base 2 of
 *
 * @returns
 * a {@link core.Log2Node} that computes the logarithm in base 2 of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Log2Node
 */
export const log2:
    core.NodeFactory<'log2',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the ceiling of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the ceiling of
 *
 * @returns
 * a {@link core.CeilNode} that computes the ceiling of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.CeilNode
 */
export const ceil:
    core.NodeFactory<'ceil',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the floor of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the floor of
 *
 * @returns
 * a {@link core.FloorNode} that computes the floor of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.FloorNode
 */
export const floor:
    core.NodeFactory<'floor',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the square root of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the square root of
 *
 * @returns
 * a {@link core.SqrtNode} that computes the square root of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.SqrtNode
 */
export const sqrt:
    core.NodeFactory<'sqrt',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

// TODO: confirm base 10

/**
 * Computes the exponential in base 10 of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the exponential in base 10 of
 *
 * @returns
 * a {@link core.ExpNode} that computes the exponential in base 10 of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.ExpNode
 */
export const exp:
    core.NodeFactory<'exp',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Computes the absolute number of the operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to compute the absolute number of
 *
 * @returns
 * a {@link core.AbsNode} that computes the absolute number of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.AbsNode
 */
export const abs:
    core.NodeFactory<'abs',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

// Binary

/**
 * Computes whether the first is lesser than the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link core.LeNode} that computes whether the first is lesser
 * than the second operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.LeNode
 */
export const le:
    core.NodeFactory<'le',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;

/**
 * Computes whether the first is lesser or equal than the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link core.LeqNode} that computes whether the first is lesser or equal
 * than the second operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.LeqNode
 */
export const leq:
    core.NodeFactory<'leq',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;

/**
 * Computes whether the first is greater than the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link core.GeNode} that computes whether the first is greater
 * than the second operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.GeNode
 */
export const ge:
    core.NodeFactory<'ge',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;

/**
 * Computes whether the first is greater or equal than the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link core.GeqNode} that computes whether the first is greater or equal
 * than the second operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.GeqNode
 */
export const geq:
    core.NodeFactory<'geq',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;

/**
 * Computes the power of the first with with the second as the exponent.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link core.PowNode} that computes the power of the first with
 * the second as the exponent
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.PowNode
 */
export const pow:
    core.NodeFactory<'pow',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;

/**
 * Computes the modulo of the first with the second.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link core.ModNode} that computes the module of the first with the second
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.ModNode
 */
export const mod:
    core.NodeFactory<'mod',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;

/**
 * Returns the result of the minimal operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link core.MinNode} that returns the result of the minimal operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.MinNode
 */
export const min:
    core.NodeFactory<'min',
        core.KeyProps,
        [
            first: core.Child,
            second: core.Child
        ]>;

/**
 * Returns the result of the maximal operand.
 *
 * @param [props]
 * props object with optional key
 *
 * @param first
 * first operand
 *
 * @param second
 * second operand
 *
 * @returns
 * a {@link core.MaxNode} that returns the result of the maximal operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.MaxNode
 */
export const max:
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
 * @param [props]
 * props object with optional key
 *
 * @param operands
 * the operands to add up
 *
 * @returns
 * a {@link core.AddNode} that sums up the operands
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.AddNode
 */
export const add:
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
 * @param operands
 * the operands to subtract
 *
 * @returns
 * a {@link core.SubNode} that subtracts the rest of the operands from the first
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.SubNode
 */
export const sub:
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
 * @param [props]
 * props object with optional key
 *
 * @param rest
 * the operands to multiply
 *
 * @returns
 * a {@link core.MulNode} that multiplies the operands
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.MulNode
 */
export const mul:
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
 * @param [props]
 * props object with optional key
 *
 * @param operands
 * the operands to divide
 *
 * @returns
 * a {@link core.DivNode} that divides the first with the rest of the operands
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.DivNode
 */
export const div:
    core.NodeFactory<'div',
        core.KeyProps,
        [
            ...operands: core.VariadicChildrenArray
        ]>;
