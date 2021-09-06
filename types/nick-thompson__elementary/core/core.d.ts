// TODO: add somehow and document a bit more
// import { EventEmitter } from 'events';

import { Node } from './nodes';
import { MidiEvent } from './midi';


/**
 * The load event fires when the runtime has finished preparing the audio
 * rendering thread and is ready to handle render calls.
 *
 * @param {'load'} event
 * event name
 * @param {() => void} doThis
 * callback to call
 */
export declare function on(
    event: 'load',
    doThis: () => void): void;

/**
 * The midi event fires any time the runtime receives a MIDI event from
 * any connected and enabled device. By default, the runtime will be
 * listening to any such device, which may yield frequent MIDI events.
 *
 * @param {'midi'} event
 * event name
 * @param {(event: MidiEvent) => void} doThis
 * callback to call with the MIDI Event
 */
export declare function on(
    event: 'midi',
    doThis: (event: MidiEvent) => void): void;

/**
 * The tick event fires only when the quantize option is enabled. See Command
 * Line Options for more details on the quantize option. Specifically, the
 * 'tick' event will fire just after the runtime has finished applying
 * any queued changes at the end of a given quantization interval.
 *
 * @param {'tick'} event
 * event name
 * @param {() => void} doThis
 * callback to call
 */
export declare function on(
    event: 'tick',
    doThis: () => void): void;


/**
 * Returns the audio device sample rate.
 *
 * Will throw an error if called before the load event has fired.
 */
export declare function getSampleRate(): number;

/**
 * Returns the audio device block size.
 *
 * Will throw an error if called before the load event has fired.
 */
export declare function getBlockSize(): number;

/**
 * Returns the number of input channels with which the audio device was opened.
 *
 * Will throw an error if called before the load event has fired.
 */
export declare function getNumInputChannels(): number;

/**
 * Returns the number of output channels with which the audio device was opened.
 *
 * Will throw an error if called before the load event has fired.
 */
export declare function getNumOutputChannels(): number;

/**
 * Returns the quantization interval with which the runtime was prepared,
 * or -1 if no quantization was enabled.
 *
 * Will throw an error if called before the load event has fired.
 */
export declare function getQuantizationInterval(): number;


/**
 * Accepts a variadic set of arguments, each one representing the audio
 * signal that is to be rendered into the given channel.
 *
 * Will throw an error if invoked before the load event has fired.
 *
 * In the example, given the signals first and second,
 * the core will render the first signal into the first output channel,
 * and the second signal into the second output channel.
 * @example
 *     core.render(first, second);
 *
 * @param {...Node} signals
 * children to render in channels
 */
export declare function render(...signals: Node[]): void;


export * from './nodes';
export * from './midi';
export * from './props';
