import { EventEmitter } from 'events';

import { NodeStatic } from './node';
import { Child } from './children';
import { MidiEvent } from './midi';


/**
 * The elementary.core object is an instance of Node.js' events.EventEmitter.
 * The events below will be dispatched from the native module and
 * can be subscribed to following the EventEmitter API.
 *
 * @interface Core
 * @extends EventEmitter
 *
 * @property {(event: 'load', doThis: () => void) => this} on
 * load event after which it is safe to call other functions
 *
 * @property {(event: 'midi', doThis: (midi: MidiEvent) => void) => this} on
 * fires off any time there is a MIDI Event
 *
 * @property {(event: 'tick', doThis: () => void) => this} on
 * fires off every quantization interval if quantization is enabled
 *
 * @property {() => number} getSampleRate
 * get the current sample rate
 *
 * @property {() => number} getBlockSize
 * get the current block size
 *
 * @property {() => number} getInputChannelCount
 * get the current input channel count
 *
 * @property {() => number} getNumInputChannels
 * get the current output channel count
 *
 * @property {() => number} getNumOutputChannels
 * get the current output channel count
 *
 * @property {() => number} getQuantizationInterval
 * get the current quantization interval
 *
 * @property {(...children: Child[]) => number} render
 * render the given children into the output channels at their position
 */
export declare interface Core extends EventEmitter
{
    /**
     * The load event fires when the runtime has finished preparing the audio
     * rendering thread and is ready to handle render calls.
     *
     * @function
     *
     * @param {'load'} event
     * event name
     *
     * @param {() => void} doThis
     * callback to call
     */
    on(event: 'load', doThis: () => void): this;

    /**
     * The midi event fires any time the runtime receives a MIDI event from
     * any connected and enabled device. By default, the runtime will be
     * listening to any such device, which may yield frequent MIDI events.
     *
     * @function
     *
     * @param {'midi'} event
     * event name
     *
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
     * @function
     *
     * @param {'tick'} event
     * event name
     *
     * @param {() => void} doThis
     * callback to call
     */
    on(event: 'tick', doThis: () => void): this;


    /**
     * Returns the audio device sample rate.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @function
     *
     * @returns {number} sample rate
     */
    getSampleRate(): number;

    /**
     * Returns the audio device block size.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @function
     *
     * @returns {number} block size
     */
    getBlockSize(): number;

    /**
     * Returns the number of input channels with which the audio device was opened.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @function
     *
     * @returns {number} input channel count
     */
    getNumInputChannels(): number;

    /**
     * Returns the number of output channels with which the audio device was opened.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @function
     *
     * @returns {number} output channel count
     */
    getNumOutputChannels(): number;

    /**
     * Returns the quantization interval with which the runtime was prepared,
     * or -1 if no quantization was enabled.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @function
     *
     * @returns {number} quantization interval
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
     * @function
     *
     * @param {...Child} children
     * {@link Child}ren to render in channels
     */
    render(...children: Child[]): void;


    /**
     * Basic building block of the Elementary audio graph.
     *
     * @public
     * @readonly
     * @type {NodeStatic}
     */
    readonly Node: NodeStatic;
}
