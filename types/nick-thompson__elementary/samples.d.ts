import { core } from './core';


// TODO: document

export declare interface SampleProps extends core.Props
{
    path: string,
    channel?: number,
    mode?: 'trigger' | 'gate' | 'loop',
    startOffset?: number,
    stopOffset?: number
}

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
 * Expects exactly one child, the pulse train to trigger playback.
 *
 * @param {SampleProps} props
 * prop object
 * @param {core.Node} trigger
 * child that computes the pulse train that triggers the playback
 * @returns {core.Node}
 * a node that outputs the playback of the sample
 */
export declare function sample(
    props: SampleProps,
    trigger: core.Node): core.Node;


// TODO: document

export declare type TableProps =
    core.Props &
    ({
         path: string
     } | {
         data: Float32Array
     }) &
    {
        channel?: number
    };

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
 * prop object
 * @param {core.Node} trigger
 * child that computes the pulse train that triggers the playback
 * @returns {core.Node}
 * a node that computes the lookup table output
 */
export declare function table(
    props: TableProps,
    trigger: core.Node): core.Node;
