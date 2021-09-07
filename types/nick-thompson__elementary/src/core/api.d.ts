import { EventEmitter } from 'events';

import { Node, NodeConstructor } from './nodes';
import { MidiEvent } from './midi';


/**
 * The elementary.core object is an instance of Node.js' events.EventEmitter.
 * The events below will be dispatched from the native module and
 * can be subscribed to following the EventEmitter API.
 */
export declare interface Core extends EventEmitter
{
    /**
     * The load event fires when the runtime has finished preparing the audio
     * rendering thread and is ready to handle render calls.
     *
     * @param {'load'} event
     * event name
     * @param {() => void} doThis
     * callback to call
     */
    on(event: 'load', doThis: () => void): this;

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
    on(event: 'midi', doThis: (event: MidiEvent) => void): this;

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
    on(event: 'tick', doThis: () => void): this;


    /**
     * Returns the audio device sample rate.
     *
     * Will throw an error if called before the load event has fired.
     */
    getSampleRate(): number;

    /**
     * Returns the audio device block size.
     *
     * Will throw an error if called before the load event has fired.
     */
    getBlockSize(): number;

    /**
     * Returns the number of input channels with which the audio device was opened.
     *
     * Will throw an error if called before the load event has fired.
     */
    getNumInputChannels(): number;

    /**
     * Returns the number of output channels with which the audio device was opened.
     *
     * Will throw an error if called before the load event has fired.
     */
    getNumOutputChannels(): number;

    /**
     * Returns the quantization interval with which the runtime was prepared,
     * or -1 if no quantization was enabled.
     *
     * Will throw an error if called before the load event has fired.
     */
    getQuantizationInterval(): number;


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
    render(...signals: Node[]): void;


    /**
     * Basic building block of the Elementary audio graph.
     */
    Node: NodeConstructor;
}
