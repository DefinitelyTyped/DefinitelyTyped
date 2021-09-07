import { core } from './core';


/**
 * Loads a sample from disk and triggers its playback on the rising edge of
 * an incoming pulse train.
 *
 * Because each Elementary node has strictly one channel output,
 * the channel prop can be used to decide which channel from the sample
 * to propagate.
 * In the example below, if kick.wav is a stereo wav file sample, the
 * sample node here will only play the right channel.
 * @example
 *     el.sample(
 *      {path: '/path/to/kick.wav', channel: 1},
 *      el.train(1));
 *
 * Expects exactly one argument, the pulse train to trigger playback.
 *
 * @param {core.SampleProps} props
 * {@link core.SampleProps} object
 *
 * @param {core.Node} trigger
 * the pulse train that triggers the playback
 *
 * @returns {core.Node}
 * a {@link core.Node} that outputs the playback of the sample
 */
export declare function sample(
    props: core.SampleProps,
    trigger: core.Argument): core.Node;


/**
 * Loads a lookup table which is then read from with a position determined
 * by the incoming signal phase. The table can either be loaded directly
 * or from a file on disk.
 *
 * The lookup position is given as a normalized phase value, so for example,
 * driving a lookup table with a simple phasor will sweep through the
 * entire lookup table at the rate of the phasor (this example is great
 * for wavetable synthesis). To read only a partial segment of the
 * wavetable, you can multiply and add to the phasor such that the
 * table sweeps through just the desired segment.
 *
 * Because each Elementary node has strictly one channel output, the channel
 * prop can be used to decide which channel from the sample to propagate.
 * In the example below, if kick.wav is a stereo wav file sample, the
 * sample node here will only play the right channel.
 * @example
 * // Sweep the whole table, as in wavetable synthesis
 * el.table(
 *  {path: '/path/to/squareWaveTable.wav'},
 *  el.phasor(220));
 *
 * // Or to sweep a specific segment
 * el.table(
 *  {path: '/path/to/padSound.wav'},
 *  el.add(0.1, el.mul(0.1, el.phasor(1))));
 *
 * @param {TableProps} props
 * {@link core.TableProps} object
 *
 * @param {core.Node} trigger
 * the pulse train that triggers the playback
 *
 * @returns {core.Node}
 * a {@link core.Node} that computes the lookup table output
 */
export declare function table(
    props: core.TableProps,
    trigger: core.Argument): core.Node;
