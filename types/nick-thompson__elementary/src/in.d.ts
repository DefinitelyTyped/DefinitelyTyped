import { core } from './core';

// placed in here because the two functions from basics and math would collide


// noinspection JSUnusedLocalSymbols
/**
 * Identity function, f(x) = x.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} operand
 * to return the result of
 *
 * @returns {core.InNode}
 * a {@link core.InNode} that returns the result of the operand
 */
declare const _in_identity:
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
 * @function
 *
 * @param {core.InProps?} props
 * {@link core.InProps} object
 *
 * @returns {core.InNode}
 * a {@link core.InNode} that returns a stream of the input
 */
declare const _in_input:
    core.NodeFactory<'in',
        core.InProps,
        []>;


/**
 * Either the identity or the input function.
 * See the functions above for more detail.
 *
 * @see _in_input
 * @see _in_identity
 *
 * @function
 */
declare const _in: typeof _in_identity & typeof _in_input;

// noinspection ReservedWordAsName
export { _in as in };
