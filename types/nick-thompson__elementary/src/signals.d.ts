import { core } from './core';


/**
 * A sample and hold node.
 * Samples a new value from the input on a rising edge of the control signal,
 * then holds and emits that value until the next rising edge of
 * the control signal.
 *
 * Expected children:
 * 1. The control signal
 * 2. The input signal to sample.
 *
 * @param {core.Child} control
 * the control signal
 *
 * @param {core.Child} input
 * the input signal
 *
 * @returns {core.LatchNode}
 * a {@link core.LatchNode} that computes the controlled input signal output
 */
export declare function latch(
    control: core.Child,
    input: core.Child): core.LatchNode;


/**
 * A simple signal sequencer. Receives a sequence of values from the seq
 * property and steps through them on each rising edge of an incoming
 * pulse train.
 *
 * Expects at least one child,
 * the pulse train to trigger the next step of the sequence.
 * An optional second child may be provided:
 * another control signal (pulse train) whose rising edge will
 * reset the sequence position back to the beginning.
 *
 * @param {core.SeqProps} props
 * {@link core.SeqProps} object
 *
 * @param {core.Child} next
 * the next step
 *
 * @param {core.Child?} last
 * the last step
 *
 * @returns {core.SeqNode}
 * a {@link core.SeqNode} that computes the output of the sequencer
 */
export declare function seq(
    props: core.SeqProps,
    next: core.Child,
    last?: core.Child): core.SeqNode;


/**
 * An exponential ADSR envelope generator, triggered by the gate signal g.
 * When the gate is high (1), this generates the ADS phase. When the gate
 * is low, the R phase.
 *
 * Expected children: 1. Attack time in seconds (number or signal) 2. Decay
 * time in seconds (number or signal) 3. Sustain amplitude between 0 and
 * 1 (number or signal) 4. Release time in seconds (number or signal) 5.
 * Gate signal; a pulse train alternating between 0 and 1.
 *
 * @param {core.Child} attack
 * the attack time in seconds
 *
 * @param {core.Child} delay
 * the decay time in seconds
 *
 * @param {core.Child} sustain
 * the sustain amplitude between 0 and 1
 *
 * @param {core.Child} release
 * the release time in seconds
 *
 * @param {core.Child} gate
 * the gate signal limited to values of 0 and 1
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the envelope
 */
export declare function adsr(
    attack: core.Child,
    delay: core.Child,
    sustain: core.Child,
    release: core.Child,
    gate: core.Child): core.Node;


/**
 * A simple Hann window generator. The window is generated according to an
 * incoming phasor signal, where a phase value of 0 corresponds to the
 * left hand side of the window, and a phase value of 1 corresponds to
 * the right hand side of the window.
 *
 * Expects exactly one argument, the incoming phase.
 *
 * @param {core.Child} phase
 * the incoming phase
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the output of the generator
 */
export declare function hann(
    phase: core.Child): core.Node;
