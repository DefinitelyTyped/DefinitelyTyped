import { core } from './core';

// for docs
// noinspection ES6UnusedImports
import * as el from '../';

// ============================================================================
// Native

// in is in in.d.ts because it collides with the in function from math

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
 * @returns
 * an array of {@link core.InNode} that output the input signals of their
 * designated channels
 *
 * @see el
 * @see core.InNode
 */
export function inputs(): core.InNode[];

/**
 * A constant value node whose value is set by the value prop.
 * Commonly, you'll see the const node expressed as a numeric literal.
 *
 * In the following example, the two expressions are equivalent.
 * @example
 *     el.cycle(440)
 *     el.cycle(el.const({value: 440}))
 *
 * @param [props]
 * {@link core.ConstProps} object
 *
 * @returns
 * a {@link core.ConstNode} that returns the given value
 *
 * @see el
 * @see core.KeyProps
 * @see core.ConstProps
 * @see core.Child
 * @see core.ConstNode
 */
declare const _const:
    core.NodeFactory<'const',
        core.ConstProps,
        []>;

// noinspection ReservedWordAsName
export { _const as const };

/**
 * A constant value node whose value is the current sample rate of the system.
 *
 * @param [props]
 * props object with optional key
 *
 * @returns
 * a {@link core.SrNode} that returns the current sample rate
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.SrNode
 */
export const sr:
    core.NodeFactory<'sr',
        core.KeyProps,
        []>;

/**
 * Outputs a continuous count of elapsed samples.
 * Expects a pulse train alternating between 0 and 1.
 * When the pulse is high, the counter will run.
 * When the pulse is low, the counter will reset and output 0 until the
 * pulse is high again.
 *
 * @param [props]
 * props object with optional key
 *
 * @param pulse
 * pulse to count
 *
 * @returns
 * a {@link core.CounterNode} that computes the count of the counter
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.CounterNode
 */
export const counter:
    core.NodeFactory<'counter',
        core.KeyProps,
        [pulse: core.Child]>;

// ============================================================================
// Functions

/**
 * Computes a real pole position giving exponential decay over t,
 * where t is the time to decay 60dB.
 * Computes lazily.
 *
 * @param child
 * {@link core.Node} to compute the real pole position of
 *
 * @returns
 * a {@link core.Node} that computes the real pole position of the child
 *
 * @see el
 * @see core.Node
 */
export function tau2pole(
    child: core.Node): core.Node;

/**
 * Computes a real pole position giving exponential decay over t,
 * where t is the time to decay 60dB.
 * Computes eagerly.
 *
 * @param time
 * time to compute the real pole position of
 *
 * @returns
 * real pole position of the time
 *
 * @see el
 */
export function tau2pole(
    time: number): number;

/**
 * Equivalent to (time / 1000) * sampleRate,
 * where time is the input time in milliseconds.
 * Computes lazily.
 *
 * @param child
 * {@link core.Node} to compute the sample count of
 *
 * @returns
 * a {@link core.Node} computing the sample count the given child node
 *
 * @see el
 * @see core.Node
 */
export function ms2samps(
    child: core.Node): core.Node;

/**
 * Equivalent to (time / 1000) * sampleRate,
 * where time is the input time in milliseconds.
 * Computes eagerly.
 *
 * @param time
 * time to convert to sample count
 *
 * @returns
 * sample count of the time given
 *
 * @see el
 */
export function ms2samps(
    time: number): number;

// ============================================================================
// Composite

/**
 * A simple conditional operator. Given a gate signal, on the range [0, 1],
 * returns high when the gate is high, and low when the gate is low.
 * For values of the signal between (0, 1), performs a linear interpolation
 * between high and low.
 *
 * @param [props]
 * props object with optional key
 *
 * @param signal
 * the signal to test
 *
 * @param high
 * result when signal is high
 *
 * @param low
 * result when signal is low
 *
 * @returns
 * a {@link core.Node} that results in high or low or their interpolation
 * depending on the signal
 *
 * @see el
 * @see core.KeyProps
 * @see core.Child
 * @see core.Node
 */
export const select:
    core.NodeFactory<core.CompositeNodeType,
        core.KeyProps,
        [
            signal: core.Child,
            high: core.Child,
            low: core.Child
        ]>;
