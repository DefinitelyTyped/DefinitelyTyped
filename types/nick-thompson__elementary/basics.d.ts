import { core } from './core';


// in and const functions are in reserved because they clash with keywords in
// and const


/**
 * Returns an array of el.in nodes, each one assigned to the corresponding
 * input from the system.
 * Useful for mapping input channels over an input effect.
 *
 * In the following example, if you open two input channels when running
 * Elementary:
 * @example
 *     el.inputs() === [el.in({channel: 0}), el.in({channel: 1})]
 *
 *
 * @returns {core.Node[]}
 * an array of nodes that output the input signals of their
 * designated channels
 */
export declare function inputs(): core.Node[];


/**
 * A constant value node whose value is the current sample rate of the system.
 *
 * @returns {core.Node}
 * a node that returns the current sample rate
 */
export declare function sr(): core.Node;


/**
 * Outputs a continuous count of elapsed samples.
 * Expects a pulse train alternating between 0 and 1.
 * When the pulse is high, the counter will run.
 * When the pulse is low, the counter will reset and output 0 until the
 * pulse is high again.
 *
 * @param {core.Node | number} pulse
 * pulse to count
 * @returns {core.Node}
 * node that computes the count of the counter
 */
export declare function counter(
    pulse: core.Node | number): core.Node;


/**
 * Computes a real pole position giving exponential decay over t,
 * where t is the time to decay 60dB.
 * Computes realtime.
 *
 * @param {core.Node} child
 * node to compute the real pole position of
 * @returns {core.Node}
 * node that computes the real pole position of the child
 */
export declare function tau2pole(
    child: core.Node): core.Node;

/**
 * Computes a real pole position giving exponential decay over t,
 * where t is the time to decay 60dB.
 * Computes eagerly.
 *
 * @param {number} time
 * time to compute the real pole position of
 * @returns {number}
 * real pole position of the time
 */
export declare function tau2pole(
    time: number): number;


/**
 * Equivalent to (time / 1000) * sampleRate,
 * where time is the input time in milliseconds.
 * Computes realtime.
 *
 * @param {core.Node} child
 * node to compute the sample count of
 * @returns {core.Node}
 * node computing the sample count of the given child node
 */
export declare function ms2samps(
    child: core.Node): core.Node;

/**
 * Equivalent to (time / 1000) * sampleRate,
 * where time is the input time in milliseconds.
 * Computes eagerly.
 *
 * @param {number} time
 * time to convert to sample count
 * @returns {number}
 * sample count of the time given
 */
export declare function ms2samps(
    time: number): number;


/**
 * A simple conditional operator. Given a gate signal, on the range [0, 1],
 * returns high when the gate is high, and low when the gate is low.
 * For values of the signal between (0, 1), performs a linear interpolation
 * between high and low.
 *
 * @param {core.Node | number} signal
 * the signal to test
 * @param {core.Node | number} high
 * result when signal is high
 * @param {core.Node | number} low
 * result when signal is low
 * @returns {core.Node | number}
 * a node that results in high or low or their interpolation
 * depending on the signal
 */
export declare function select(
    signal: core.Node | number,
    high: core.Node | number,
    low: core.Node | number): core.Node;
