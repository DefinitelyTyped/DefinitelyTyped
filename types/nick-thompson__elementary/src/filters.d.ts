import { core } from './core';


/**
 * Implements a simple one-pole filter,
 * also sometimes called a leaky integrator.
 * Expects two children, the first is the pole position,
 * the second is the signal to filter.
 *
 * @param {core.Argument} polePosition
 * the pole position
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function pole(
    polePosition: core.Argument,
    signal: core.Argument): core.Node;


/**
 * Implements a simple one-zero filter.
 * Expects the b0 coefficient as the first argument,
 * the zero position b1 as the second argument,
 * and the input to the filter as the third.
 *
 * @param {core.Argument} b0
 * the first coefficient
 *
 * @param {core.Argument} b1
 * the second coefficient
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function zero(
    b0: core.Argument,
    b1: core.Argument,
    signal: core.Argument): core.Node;


/**
 * Implements a default DC blocking filter with a pole at 0.995 and a zero at 1.
 * This filter has a -3dB point near 35Hz at 44.1kHz.
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function dbclock(
    signal: core.Argument): core.Node;


/**
 * A simple first order pole-zero filter, Direct Form 1.
 *
 * @param {core.Argument} b0
 * the first coefficient
 *
 * @param {core.Argument} b1
 * the second coefficient
 *
 * @param {core.Argument} a1
 * the third coefficient
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function df11(
    b0: core.Argument,
    b1: core.Argument,
    a1: core.Argument,
    signal: core.Argument): core.Node;


/**
 * Unity gain one-pole smoothing. Commonly used for addressing
 * discontinuities in control signals.
 * Expects two children, the first is the pole position,
 * the second is the signal to filter.
 *
 * @param {core.Argument} polePosition
 * the pole position
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function smooth(
    polePosition: core.Argument,
    signal: core.Argument): core.Node;


/**
 * A pre-defined smoothing export declare function with a 20ms decay time equivalent to
 * @example
 *     el.smooth(el.tau2pole(0.02), signal)
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function sm(
    signal: core.Argument): core.Node;


/**
 * A second order transposed direct-form II filter implementation.
 * Expects six children, the first five of which are the raw filter
 * coefficients (b0, b1, b2, a1, a2). The final input is the signal to filter.
 *
 * @param {core.Argument} b0
 * the first coefficient
 *
 * @param {core.Argument} b1
 * the second coefficient
 *
 * @param {core.Argument} b2
 * the third coefficient
 *
 * @param {core.Argument} a1
 * the fourth coefficient
 *
 * @param {core.Argument} a2
 * the fifth coefficient
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function biquad(
    b0: core.Argument,
    b1: core.Argument,
    b2: core.Argument,
    a1: core.Argument,
    a2: core.Argument,
    signal: core.Argument): core.Node;


/**
 * A simple lowpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Argument} cutoff
 * the filter cutoff
 *
 * @param {core.Argument} Q
 * the filter Q
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function lowpass(
    cutoff: core.Argument,
    Q: core.Argument,
    signal: core.Argument): core.Node;


/**
 * A simple highpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Argument} cutoff
 * the filter cutoff
 *
 * @param {core.Argument} Q
 * the filter Q
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function highpass(
    cutoff: core.Argument,
    Q: core.Argument,
    signal: core.Argument): core.Node;


/**
 * A simple bandpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Argument} cutoff
 * the filter cutoff
 *
 * @param {core.Argument} Q
 * the filter Q
 *
 * @param {core.Argument} signal
 * signal
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function bandpass(
    cutoff: core.Argument,
    Q: core.Argument,
    signal: core.Argument): core.Node;


/**
 * An allpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Argument} cutoff
 * the filter cutoff
 *
 * @param {core.Argument} Q
 * the filter Q
 *
 * @param {core.Argument} signal
 * signal
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function allpass(
    cutoff: core.Argument,
    Q: core.Argument,
    signal: core.Argument): core.Node;


/**
 * A notch biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param {core.Argument} cutoff
 * the filter cutoff
 *
 * @param {core.Argument} Q
 * the filter Q
 *
 * @param {core.Argument} signal
 * signal
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function notch(
    cutoff: core.Argument,
    Q: core.Argument,
    signal: core.Argument): core.Node;


/**
 * A peaking (bell) biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @param {core.Argument} cutoff
 * the filter cutoff
 *
 * @param {core.Argument} Q
 * the filter Q
 *
 * @param {core.Argument} gain
 * the filter gain in decibels
 *
 * @param {core.Argument} signal
 * signal
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function peak(
    cutoff: core.Argument,
    Q: core.Argument,
    gain: core.Argument,
    signal: core.Argument): core.Node;


/**
 * A lowshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @param {core.Argument} cutoff
 * the filter cutoff
 *
 * @param {core.Argument} Q
 * the filter Q
 *
 * @param {core.Argument} gain
 * the filter gain in decibels
 *
 * @param {core.Argument} signal
 * signal
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function lowshelf(
    cutoff: core.Argument,
    Q: core.Argument,
    gain: core.Argument,
    signal: core.Argument): core.Node;


/**
 * A highshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @param {core.Argument} cutoff
 * the filter cutoff
 *
 * @param {core.Argument} Q
 * the filter Q
 *
 * @param {core.Argument} gain
 * the filter gain in decibels
 *
 * @param {core.Argument} signal
 * signal
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function highshelf(
    cutoff: core.Argument,
    Q: core.Argument,
    gain: core.Argument,
    signal: core.Argument): core.Node;


/**
 * A convolution node which reads an impulse response from disk and
 * convolves it with the input signal.
 *
 * @param {core.ConvolveProps} props
 * object containing the path to the impulse response
 *
 * @param {core.Argument} signal
 * signal to convolve
 *
 * @returns {core.Node}
 * a node that convolves the signal
 */
export declare function convolve(
    props: core.ConvolveProps,
    signal: core.Argument): core.Node;


/**
 * A pink noise filter designed to apply a -3dB/octave lowpass to the
 * incoming signal.
 *
 * @param {core.Argument} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a node that filters the signal
 */
export declare function pink(
    signal: core.Argument): core.Node;
