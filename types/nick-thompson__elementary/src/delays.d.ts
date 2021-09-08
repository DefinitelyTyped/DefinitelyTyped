import { core } from './core';


/**
 * A very simple single-sample delay {@link core.Node} (z^-1).
 *
 * @returns {core.ZNode}
 * the signal {@link core.ZNode} to delay
 */
export declare function z(): core.ZNode;


/**
 * A variable-length delay line with a feedback component.
 *
 * When feedback is zero, this gives a simple signal delay.
 *
 * At small delay times, and with various feedback and feedforward components,
 * this gives various comb filters.
 *
 * At larger delay times with a positive feedback
 * this gives a simple feedback delay/echo.
 *
 * In the following example, a feedforward component where feedforward is equal
 * to the negative feedback gives an allpass filter:
 * @example
 *     el.add(
 *      el.mul(feedforward, signal),
 *      el.delay(
 *       {size: 44100}, // usually one second
 *       el.ms2samps(length),
 *       feedback,
 *       signal));
 *
 * @param {core.DelayProps} props
 * {@link core.DelayProps} object
 *
 * @param {core.Child} length
 * delay time in samples
 *
 * @param {core.Child} feedback
 * feedback in the range of [-1, 1]
 *
 * @param {core.Child} signal
 * the signal to delay
 *
 * @returns {core.DelayNode}
 * a {@link core.DelayNode} that computes the output of the delay
 */
export declare function delay(
    props: core.DelayProps,
    length: core.Child,
    feedback: core.Child,
    signal: core.Child): core.DelayNode;
