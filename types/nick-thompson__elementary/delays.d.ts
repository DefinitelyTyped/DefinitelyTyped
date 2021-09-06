import { core } from './core';


/**
 * A very simple single-sample delay {@link core.Node} (z^-1).
 *
 * @returns {core.Node}
 * the signal {@link core.Node} to delay
 */
export declare function z(): core.Node;


/**
 * Props for el.delay.
 *
 * Size determines the delay time.
 *
 * @typedef {{size: number}} DelayProps
 */
export declare interface DelayProps extends core.Props
{
    size: number;
}

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
 * @param {DelayProps} props
 * {@link DelayProps} object
 * @param {core.Node} length
 * delay time {@link core.Node} in samples
 * @param {core.Node} feedback
 * feedback {@link core.Node} that returns the coefficient
 * in the range of [-1, 1]
 * @param {core.Node} signal
 * the signal {@link core.Node} to delay
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the delay
 */
export declare function delay(
    props: DelayProps,
    length: core.Node,
    feedback: core.Node,
    signal: core.Node): core.Node;
