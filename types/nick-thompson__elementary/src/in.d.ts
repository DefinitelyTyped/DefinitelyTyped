import { core } from './core';


// placed in here because the two functions from basics and math would collide


/**
 * Identity function, f(x) = x.
 *
 * @param {core.Argument} operand
 * to return the result of
 *
 * @returns {core.Node}
 * a {@link core.Node} that returns the result of the operand
 */
declare function _in(
    operand: core.Argument): core.Node;

/**
 * Used for accepting an input signal from the audio driver,
 * whereupon the channel prop will be used to decide which
 * incoming signal channel will be passed forward.
 *
 * @param {core.InProps} props
 * {@link core.InProps} object
 *
 * @returns {core.Node}
 * a {@link core.Node} that returns a stream of the input
 */
declare function _in(props: core.InProps): core.Node;

// noinspection ReservedWordAsName
export { _in as in };
