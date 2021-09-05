import { core } from './core';


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
 * @param {core.Node} attack
 * child that computes the attack time in seconds
 * @param {core.Node} delay
 * child that computes the decay time in seconds
 * @param {core.Node} sustain
 * child that computes the sustain amplitude between 0 and 1
 * @param {core.Node} release
 * child that computes the release time in seconds
 * @param {core.Node} gate
 * child that computes the gate signal limited to values of 0 and 1
 * @returns {core.Node}
 * a node that computes the output of the envelope
 */
export declare function adsr(
    attack: core.Node,
    delay: core.Node,
    sustain: core.Node,
    release: core.Node,
    gate: core.Node): core.Node;


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
 * @param {core.Node} control
 * child that computes the control signal
 * @param {core.Node} input
 * child that computes the input signal
 * @returns {core.Node}
 * a node that computes the latch of the arguments
 */
export declare function latch(
    control: core.Node,
    input: core.Node): core.Node;


// TODO: document and confirm Array<number>

export declare interface SeqProps extends core.Props
{
    seq: Array<number>,
    hold?: boolean,
    loop?: boolean
}

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
 * @param {SeqProps} props
 * prop object
 * @param {core.Node} next
 * child node that computes the next step
 * @param {core.Node?} last
 * child note that computes the last step
 * @returns {core.Node} a
 * node that computes the output of the sequencer
 */
export declare function seq(
    props: SeqProps,
    next: core.Node,
    last?: core.Node): core.Node;


/**
 * A simple Hann window generator. The window is generated according to an
 * incoming phasor signal, where a phase value of 0 corresponds to the
 * left hand side of the window, and a phase value of 1 corresponds to
 * the right hand side of the window.
 *
 * Expects exactly one child, the incoming phase.
 *
 * @param {core.Node} phase
 * child that computes the incoming phase
 * @returns {core.Node}
 * a node that computes the output of the generator
 */
export declare function hann(
    phase: core.Node): core.Node;
