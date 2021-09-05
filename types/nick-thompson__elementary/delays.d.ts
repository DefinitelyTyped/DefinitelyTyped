import { core } from './core';


/**
 * A very simple single-sample delay node (z^-1).
 *
 * @returns core.Node
 */
export declare function z(): core.Node;


// TODO: document

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
 * prop object
 * @param {core.Node} length
 * delay time node in samples
 * @param {core.Node} feedback
 * feedback node that returns the coefficient in the range of [-1, 1]
 * @param {core.Node} signal
 * the signal node to delay
 */
export declare function delay(
    props: DelayProps,
    length: core.Node,
    feedback: core.Node,
    signal: core.Node): core.Node;
