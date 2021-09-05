import { core } from './core';


/**
 * Implements a simple one-pole filter,
 * also sometimes called a leaky integrator.
 * Expects two children, the first is the pole position,
 * the second is the signal to filter.
 *
 * @param {core.Node} polePosition
 * child computing the pole position
 * @param {core.Node} signal
 * child signal to filter
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function pole(
    polePosition: core.Node,
    signal: core.Node): core.Node;


/**
 * Implements a simple one-zero filter.
 * Expects the b0 coefficient as the first argument,
 * the zero position b1 as the second argument,
 * and the input to the filter as the third.
 *
 * @param {core.Node} b0
 * child that computes the first coefficient
 * @param {core.Node} b1
 * child that computes the second coefficient
 * @param {core.Node} signal
 * child signal to filter
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function zero(
    b0: core.Node,
    b1: core.Node,
    signal: core.Node): core.Node;


/**
 * Implements a default DC blocking filter with a pole at 0.995 and a zero at 1.
 * This filter has a -3dB point near 35Hz at 44.1kHz.
 *
 * @param {core.Node} signal
 * child signal to filter
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function dbclock(
    signal: core.Node): core.Node;


/**
 * A simple first order pole-zero filter, Direct Form 1.
 *
 * @param {core.Node} b0
 * child that computes the first coefficient
 * @param {core.Node} b1
 * child that computes the second coefficient
 * @param {core.Node} a1
 * child that computes the third coefficient
 * @param {core.Node} signal
 * child signal to filter
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function df11(
    b0: core.Node,
    b1: core.Node,
    a1: core.Node,
    signal: core.Node): core.Node;


/**
 * Unity gain one-pole smoothing. Commonly used for addressing
 * discontinuities in control signals.
 * Expects two children, the first is the pole position,
 * the second is the signal to filter.
 *
 * @param {core.Node} polePosition
 * child computing the pole position
 * @param {core.Node} signal
 * child signal to filter
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function smooth(
    polePosition: core.Node,
    signal: core.Node): core.Node;


/**
 * A pre-defined smoothing export declare function with a 20ms decay time equivalent to
 * @example
 *     el.smooth(el.tau2pole(0.02), signal)
 *
 * @param {core.Node} signal
 * signal to filter
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function sm(
    signal: core.Node): core.Node;


/**
 * A second order transposed direct-form II filter implementation.
 * Expects six children, the first five of which are the raw filter
 * coefficients (b0, b1, b2, a1, a2). The final input is the signal to filter.
 *
 * @param {core.Node} b0
 * child that computes the first coefficient
 * @param {core.Node} b1
 * child that computes the second coefficient
 * @param {core.Node} b2
 * child that computes the third coefficient
 * @param {core.Node} a1
 * child that computes the fourth coefficient
 * @param {core.Node} a2
 * child that computes the fifth coefficient
 * @param {core.Node} signal
 * child signal to filter
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function biquad(
    b0: core.Node,
    b1: core.Node,
    b2: core.Node,
    a1: core.Node,
    a2: core.Node,
    signal: core.Node): core.Node;


/**
 * A simple lowpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Node} cutoff
 * child that computes the filter cutoff
 * @param {core.Node} Q
 * child that computes the filter Q
 * @param {core.Node} signal
 * child signal
 * @returns {core.Node}
 * node that filters the signal
 */
export declare function lowpass(
    cutoff: core.Node,
    Q: core.Node,
    signal: core.Node): core.Node;


/**
 * A simple highpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Node} cutoff
 * child that computes the filter cutoff
 * @param {core.Node} Q
 * child that computes the filter Q
 * @param {core.Node} signal
 * child signal
 * @returns {core.Node}
 * node that filters the signal
 */
export declare function highpass(
    cutoff: core.Node,
    Q: core.Node,
    signal: core.Node): core.Node;


/**
 * A simple bandpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Node} cutoff
 * child that computes the filter cutoff
 * @param {core.Node} Q
 * child that computes the filter Q
 * @param {core.Node} signal
 * child signal
 * @returns {core.Node}
 * node that filters the signal
 */
export declare function bandpass(
    cutoff: core.Node,
    Q: core.Node,
    signal: core.Node): core.Node;


/**
 * An allpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Node} cutoff
 * child that computes the filter cutoff
 * @param {core.Node} Q
 * child that computes the filter Q
 * @param {core.Node} signal
 * child signal
 * @returns {core.Node}
 * node that filters the signal
 */
export declare function allpass(
    cutoff: core.Node,
    Q: core.Node,
    signal: core.Node): core.Node;


/**
 * A notch biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Node} cutoff
 * child that computes the filter cutoff
 * @param {core.Node} Q
 * child that computes the filter Q
 * @param {core.Node} signal
 * child signal
 * @returns {core.Node}
 * node that filters the signal
 */
export declare function notch(
    cutoff: core.Node,
    Q: core.Node,
    signal: core.Node): core.Node;


/**
 * A peaking (bell) biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @param {core.Node} cutoff
 * child that computes the filter cutoff
 * @param {core.Node} Q
 * child that computes the filter Q
 * @param {core.Node} gain
 * child that computes the filter gain in decibels
 * @param {core.Node} signal
 * child signal
 * @returns {core.Node}
 * node that filters the signal
 */
export declare function peak(
    cutoff: core.Node,
    Q: core.Node,
    gain: core.Node,
    signal: core.Node): core.Node;


/**
 * A lowshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @param {core.Node} cutoff
 * child that computes the filter cutoff
 * @param {core.Node} Q
 * child that computes the filter Q
 * @param {core.Node} gain
 * child that computes the filter gain in decibels
 * @param {core.Node} signal
 * child signal
 * @returns {core.Node}
 * node that filters the signal
 */
export declare function lowshelf(
    cutoff: core.Node,
    Q: core.Node,
    gain: core.Node,
    signal: core.Node): core.Node;


/**
 * A highshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @param {core.Node} cutoff
 * child that computes the filter cutoff
 * @param {core.Node} Q
 * child that computes the filter Q
 * @param {core.Node} gain
 * child that computes the filter gain in decibels
 * @param {core.Node} signal
 * child signal
 * @returns {core.Node}
 * node that filters the signal
 */
export declare function highshelf(
    cutoff: core.Node,
    Q: core.Node,
    gain: core.Node,
    signal: core.Node): core.Node;


// TODO: document

export declare interface ConvolveProps extends core.Props
{
    path: string;
}

/**
 * A convolution node which reads an impulse response from disk and
 * convolves it with the input signal.
 *
 * @param {ConvolveProps} props
 * object containing the path to the impulse response
 * @param {core.Node} signal
 * signal to convolve
 * @returns {core.Node}
 * a node that convolves the signal
 */
export declare function convolve(
    props: ConvolveProps,
    signal: core.Node): core.Node;


/**
 * A pink noise filter designed to apply a -3dB/octave lowpass to the
 * incoming signal.
 *
 * @param {core.Node} signal
 * signal to filter
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function pink(
    signal: core.Node): core.Node;
