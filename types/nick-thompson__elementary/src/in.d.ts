import { core } from './core';

// for docs
// noinspection ES6UnusedImports
import * as el from '../';

// ============================================================================
// Native

// placed in here because the two functions from basics and math would collide

// noinspection JSUnusedLocalSymbols
/**
 * Identity function, f(x) = x.
 *
 * @param [props]
 * props object with optional key
 *
 * @param operand
 * to return the result of
 *
 * @returns
 * a {@link core.InNode} that returns the result of the operand
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
declare const identity:
    core.NodeFactory<'in',
        core.KeyProps,
        [
            operand: core.Child
        ]>;

/**
 * Used for accepting an input signal from the audio driver,
 * whereupon the channel prop will be used to decide which
 * incoming signal channel will be passed forward.
 *
 * @param [props]
 * {@link core.InProps} object
 *
 * @returns
 * a {@link core.InNode} that returns a stream of the input
 *
 * @see el
 * @see core.InProps
 * @see core.Child
 * @see core.Node
 */
declare const input:
    core.NodeFactory<'in',
        core.InProps,
        []>;

/**
 * Either the identity or the input function.
 *
 * @param [props]
 * props object optional key or {@link core.InProps}
 *
 * @param [operand]
 * if using in as the identity function the child of which the result will
 * be returned
 *
 * @returns
 * a {@link core.InNode} that returns the result of the operand or the
 * stream of the input
 *
 * @see identity
 * @see input
 * @see el
 * @see core.InProps
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
declare const _in: typeof identity & typeof input;

// noinspection ReservedWordAsName
export { _in as in };
