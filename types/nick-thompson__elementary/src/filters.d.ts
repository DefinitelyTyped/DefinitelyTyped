import { core } from './core';

// for docs
// noinspection ES6UnusedImports
import * as el from '../';


// ============================================================================
// Native

/**
 * Implements a simple one-pole filter,
 * also sometimes called a leaky integrator.
 * Expects two children, the first is the pole position,
 * the second is the signal to filter.
 *
 * @function pole
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} polePosition
 * the pole position
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.PoleNode}
 * a {@link core.PoleNode} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.PoleNode
 */
export declare const pole:
    core.NodeFactory<'pole',
        core.KeyProps,
        [
            polePosition: core.Child,
            signal: core.Child
        ]>;


/**
 * A second order transposed direct-form II filter implementation.
 * Expects six children, the first five of which are the raw filter
 * coefficients (b0, b1, b2, a1, a2). The final input is the signal to filter.
 *
 * @function biquad
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} b0
 * the first coefficient
 *
 * @param {core.Child} b1
 * the second coefficient
 *
 * @param {core.Child} b2
 * the third coefficient
 *
 * @param {core.Child} a1
 * the fourth coefficient
 *
 * @param {core.Child} a2
 * the fifth coefficient
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.BiquadNode}
 * a {@link core.BiquadNode} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.BiquadNode
 */
export declare const biquad:
    core.NodeFactory<'biquad',
        core.KeyProps,
        [
            b0: core.Child,
            b1: core.Child,
            b2: core.Child,
            a1: core.Child,
            a2: core.Child,
            signal: core.Child
        ]>;


/**
 * A convolution node which reads an impulse response from disk and
 * convolves it with the input signal.
 *
 * @function convolve
 *
 * @param {core.ConvolveProps} [props]
 * {@link core.ConvolveProps} object
 *
 * @param {core.Child} signal
 * signal to convolve
 *
 * @returns {core.ConvolveNode}
 * a {@link core.ConvolveNode} that convolves the signal
 *
 * @see el
 * @see core.ConvolveProps
 * @see core.Child
 * @see core.Node
 */
export declare const convolve:
    core.NodeFactory<'convolve',
        core.ConvolveProps,
        [
            signal: core.Child
        ]>;


// ============================================================================
// Functions

/**
 * Implements a simple one-zero filter.
 * Expects the b0 coefficient as the first argument,
 * the zero position b1 as the second argument,
 * and the input to the filter as the third.
 *
 * @function zero
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} b0
 * the first coefficient
 *
 * @param {core.Child} b1
 * the second coefficient
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const zero:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            b0: core.Child,
            b1: core.Child,
            signal: core.Child
        ]>;


/**
 * Implements a default DC blocking filter with a pole at 0.995 and a zero at 1.
 * This filter has a -3dB point near 35Hz at 44.1kHz.
 *
 * @function dcblock
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const dcblock:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            signal: core.Child
        ]>;


/**
 * A simple first order pole-zero filter, Direct Form 1.
 *
 * @function df11
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} b0
 * the first coefficient
 *
 * @param {core.Child} b1
 * the second coefficient
 *
 * @param {core.Child} a1
 * the third coefficient
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const df11:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            b0: core.Child,
            b1: core.Child,
            a1: core.Child,
            signal: core.Child
        ]>;


/**
 * Unity gain one-pole smoothing. Commonly used for addressing
 * discontinuities in control signals.
 * Expects two children, the first is the pole position,
 * the second is the signal to filter.
 *
 * @function smooth
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} polePosition
 * the pole position
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const smooth:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            polePosition: core.Child,
            signal: core.Child
        ]>;


/**
 * A pre-defined smoothing export declare function with a 20ms decay time equivalent to
 * @example
 *     el.smooth(el.tau2pole(0.02), signal)
 *
 * @function sm
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const sm:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            signal: core.Child
        ]>;


/**
 * A simple lowpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @function lowpass
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} cutoff
 * the filter cutoff
 *
 * @param {core.Child} Q
 * the filter Q
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const lowpass:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            cutoff: core.Child,
            Q: core.Child,
            signal: core.Child
        ]>;


/**
 * A simple highpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @function highpass
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} cutoff
 * the filter cutoff
 *
 * @param {core.Child} Q
 * the filter Q
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const highpass:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            cutoff: core.Child,
            Q: core.Child,
            signal: core.Child
        ]>;


/**
 * A simple bandpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @function bandpass
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} cutoff
 * the filter cutoff
 *
 * @param {core.Child} Q
 * the filter Q
 *
 * @param {core.Child} signal
 * signal
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const bandpass:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            cutoff: core.Child,
            Q: core.Child,
            signal: core.Child
        ]>;


/**
 * An allpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @function allpass
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} cutoff
 * the filter cutoff
 *
 * @param {core.Child} Q
 * the filter Q
 *
 * @param {core.Child} signal
 * signal
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const allpass:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            cutoff: core.Child,
            Q: core.Child,
            signal: core.Child
        ]>;


/**
 * A notch biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @function notch
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} cutoff
 * the filter cutoff
 *
 * @param {core.Child} Q
 * the filter Q
 *
 * @param {core.Child} signal
 * signal
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const notch:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            cutoff: core.Child,
            Q: core.Child,
            signal: core.Child
        ]>;


/**
 * A peaking (bell) biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @function peak
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} cutoff
 * the filter cutoff
 *
 * @param {core.Child} Q
 * the filter Q
 *
 * @param {core.Child} gain
 * the filter gain in decibels
 *
 * @param {core.Child} signal
 * signal
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const peak:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            cutoff: core.Child,
            Q: core.Child,
            gain: core.Child,
            signal: core.Child
        ]>;


/**
 * A lowshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @function lowshelf
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} cutoff
 * the filter cutoff
 *
 * @param {core.Child} Q
 * the filter Q
 *
 * @param {core.Child} gain
 * the filter gain in decibels
 *
 * @param {core.Child} signal
 * signal
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const lowshelf:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            cutoff: core.Child,
            Q: core.Child,
            gain: core.Child,
            signal: core.Child
        ]>;


/**
 * A highshelf biquad filter with a cutoff frequency, a Q,
 * gain in decibels, and which filters the signal.
 *
 * @function highshelf
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} cutoff
 * the filter cutoff
 *
 * @param {core.Child} Q
 * the filter Q
 *
 * @param {core.Child} gain
 * the filter gain in decibels
 *
 * @param {core.Child} signal
 * signal
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const highshelf:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            cutoff: core.Child,
            Q: core.Child,
            gain: core.Child,
            signal: core.Child
        ]>;


/**
 * A pink noise filter designed to apply a -3dB/octave lowpass to the
 * incoming signal.
 *
 * @function pink
 *
 * @param {core.KeyProps} [props]
 * props object with optional key
 *
 * @param {core.Child} signal
 * signal to filter
 *
 * @returns {core.Node}
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export declare const pink:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            signal: core.Child
        ]>;
