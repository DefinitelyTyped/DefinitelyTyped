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
 * @param [props]
 * props object with optional key
 *
 * @param polePosition
 * the pole position
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.PoleNode} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.PoleNode
 */
export const pole:
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
 * @param [props]
 * props object with optional key
 *
 * @param b0
 * the first coefficient
 *
 * @param b1
 * the second coefficient
 *
 * @param b2
 * the third coefficient
 *
 * @param a1
 * the fourth coefficient
 *
 * @param a2
 * the fifth coefficient
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.BiquadNode} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.BiquadNode
 */
export const biquad:
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
 * @param [props]
 * {@link core.ConvolveProps} object
 *
 * @param signal
 * signal to convolve
 *
 * @returns
 * a {@link core.ConvolveNode} that convolves the signal
 *
 * @see el
 * @see core.ConvolveProps
 * @see core.Child
 * @see core.Node
 */
export const convolve:
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
 * @param [props]
 * props object with optional key
 *
 * @param b0
 * the first coefficient
 *
 * @param b1
 * the second coefficient
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const zero:
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
 * @param [props]
 * props object with optional key
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const dcblock:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            signal: core.Child
        ]>;

/**
 * A simple first order pole-zero filter, Direct Form 1.
 *
 * @param [props]
 * props object with optional key
 *
 * @param b0
 * the first coefficient
 *
 * @param b1
 * the second coefficient
 *
 * @param a1
 * the third coefficient
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const df11:
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
 * @param [props]
 * props object with optional key
 *
 * @param polePosition
 * the pole position
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const smooth:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            polePosition: core.Child,
            signal: core.Child
        ]>;

/**
 * A pre-defined smoothing export function with a 20ms decay time equivalent to
 * @example
 *     el.smooth(el.tau2pole(0.02), signal)
 *
 * @param [props]
 * props object with optional key
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const sm:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            signal: core.Child
        ]>;

/**
 * A simple lowpass biquad filter with a cutoff frequency, a Q,
 * and which filters the signal.
 *
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const lowpass:
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
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const highpass:
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
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const bandpass:
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
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const allpass:
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
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const notch:
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
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param gain
 * the filter gain in decibels
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const peak:
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
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param gain
 * the filter gain in decibels
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const lowshelf:
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
 * @param [props]
 * props object with optional key
 *
 * @param cutoff
 * the filter cutoff
 *
 * @param Q
 * the filter Q
 *
 * @param gain
 * the filter gain in decibels
 *
 * @param signal
 * signal
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const highshelf:
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
 * @param [props]
 * props object with optional key
 *
 * @param signal
 * signal to filter
 *
 * @returns
 * a {@link core.Node} that filters the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const pink:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            signal: core.Child
        ]>;
