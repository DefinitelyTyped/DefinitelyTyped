import { core } from './core';


/**
 * Outputs a ramp from 0 to 1 at the given rate.
 *
 * Expects exactly one argument, providing the rate in Hz.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} rate
 * the rate in Hz
 *
 * @returns {core.PhasorNode}
 * a {@link core.PhasorNode} the output of the phasor
 */
export declare const phasor:
    core.NodeFactory<'phasor',
        core.KeyProps,
        [
            rate: core.Child
        ]>;


/**
 * Outputs a pulse train alternating between 0 and 1 at the given rate.
 *
 * Expects exactly one argument, providing the rate in Hz.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} rate
 * the rate in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the pulse train
 */
export declare const train:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            rate: core.Child
        ]>;


/**
 * Outputs a periodic sine tone at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the sine wave
 */
export declare const cycle:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            frequency: core.Child
        ]>;


/**
 * Outputs a naive sawtooth oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive sawtooth at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the saw wave
 */
export declare const saw:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            frequency: core.Child
        ]>;


/**
 * Outputs a naive square oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the square wave
 */
export declare const square:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            frequency: core.Child
        ]>;


/**
 * Outputs a naive triangle oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the triangle wave
 */
export declare const triangle:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            frequency: core.Child
        ]>;


/**
 * Outputs a band-limited polyblep sawtooth waveform at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the blepsaw
 */
export declare const blepsaw:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            frequency: core.Child
        ]>;


/**
 * Outputs a band-limited polyblep square waveform at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the blepsquare
 */
export declare const blepsquare:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            frequency: core.Child
        ]>;


/**
 * Outputs a band-limited polyblep triangle waveform at the given frequency.
 *
 * Due to the integrator in the signal path, the polyblep triangle oscillator
 * may perform poorly (in terms of anti-aliasing) when the oscillator frequency
 * changes over time.
 *
 * Further, integrating a square waveform as we do here will produce a
 * triangle waveform with a DC offset. Therefore we use a
 * leaky integrator (coefficient at 0.999) which filters out the DC component
 * over time. Note that before the DC component is filtered out,
 * the triangle waveform may exceed +/- 1.0,
 * so take appropriate care to apply gains where necessary.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @function
 *
 * @param {core.KeyProps?} props
 * props object with optional key
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the bleptriangle
 */
export declare const bleptriangle:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            frequency: core.Child
        ]>;
