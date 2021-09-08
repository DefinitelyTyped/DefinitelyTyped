import { core } from './core';


/**
 * Outputs a ramp from 0 to 1 at the given rate.
 *
 * Expects exactly one argument, providing the rate in Hz.
 *
 * @param {core.Child} rate
 * the rate in Hz
 *
 * @returns {core.PhasorNode}
 * a {@link core.PhasorNode} the output of the phasor
 */
export declare function phasor(
    rate: core.Child): core.PhasorNode;


/**
 * Outputs a pulse train alternating between 0 and 1 at the given rate.
 *
 * Expects exactly one argument, providing the rate in Hz.
 *
 * @param {core.Child} rate
 * the rate in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the pulse train
 */
export declare function train(
    rate: core.Child): core.Node;


/**
 * Outputs a periodic sine tone at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the sine wave
 */
export declare function cycle(
    frequency: core.Child): core.Node;


/**
 * Outputs a naive sawtooth oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive sawtooth at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the saw wave
 */
export declare function saw(
    frequency: core.Child): core.Node;


/**
 * Outputs a naive square oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the square wave
 */
export declare function square(
    frequency: core.Child): core.Node;


/**
 * Outputs a naive triangle oscillator at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * Typically, due to the aliasing of the naive square at audio rates,
 * this oscillator is used for low frequency modulation.
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the triangle wave
 */
export declare function triangle(
    frequency: core.Child): core.Node;


/**
 * Outputs a band-limited polyblep sawtooth waveform at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the blepsaw
 */
export declare function blepsaw(
    frequency: core.Child): core.Node;


/**
 * Outputs a band-limited polyblep square waveform at the given frequency.
 *
 * Expects exactly one argument specifying the frequency in Hz.
 *
 * @param {core.Child} frequency
 * the frequency in Hz
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the blepsquare
 */
export declare function blepsquare(
    frequency: core.Child): core.Node;


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
 * @param {core.Child} frequency
 * the frequency in Hz
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the bleptriangle
 */
export declare function bleptriangle(
    frequency: core.Child): core.Node;
