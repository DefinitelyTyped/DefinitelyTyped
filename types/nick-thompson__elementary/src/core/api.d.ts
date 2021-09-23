import { EventEmitter } from 'events';

import { NodeStatic } from './node';
import { Child } from './children';
import { MidiEvent } from './midi';

// for docs
// noinspection ES6UnusedImports
import * as el from '../../';

/**
 * The elementary.core object is an instance of Node.js' events.EventEmitter.
 * The events below will be dispatched from the native module and
 * can be subscribed to following the EventEmitter API.
 *
 * The examples explain how to properly setup the core variable from
 * Elementary and use it in functions.
 *
 * @example
 *     import * as el from '@nick-thompson/elementary';
 *     declare const global: any;
 *     const core: el.Core = global.elementary.core;
 *
 *     function render(core: el.Core, el: el.Elementary)
 *     {
 *         // Your code goes here
 *         core.render(el.phasor(440));
 *     }
 *
 *     core.on('load', () => render(core, el));
 *
 *     export { core };
 *
 * @see el
 * @see EventEmitter
 */
export interface Core extends EventEmitter {
    /**
     * The load event fires when the runtime has finished preparing the audio
     * rendering thread and is ready to handle render calls.
     *
     * The tick event fires only when the quantize option is enabled. See Command
     * Line Options for more details on the quantize option. Specifically, the
     * 'tick' event will fire just after the runtime has finished applying
     * any queued changes at the end of a given quantization interval.
     *
     * @param event
     * event name
     *
     * @param doThis
     * callback to call
     *
     * @see Core
     */
    on(event: 'load' | 'tick', doThis: () => void): this;

    /**
     * The midi event fires any time the runtime receives a MIDI event from
     * any connected and enabled device. By default, the runtime will be
     * listening to any such device, which may yield frequent MIDI events.
     *
     * @param event
     * event name
     *
     * @param doThis
     * callback to call with the MIDI Event
     *
     * @see Core
     * @see MidiEvent
     */
    on(event: 'midi', doThis: (event: MidiEvent) => void): this;

    /**
     * Returns the audio device sample rate.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @returns sample rate
     *
     * @see Core
     */
    getSampleRate(): number;

    /**
     * Returns the audio device block size.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @returns block size
     *
     * @see Core
     */
    getBlockSize(): number;

    /**
     * Returns the number of input channels with which the audio device was opened.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @returns input channel count
     *
     * @see Core
     */
    getNumInputChannels(): number;

    /**
     * Returns the number of output channels with which the audio device was opened.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @returns output channel count
     *
     * @see Core
     */
    getNumOutputChannels(): number;

    /**
     * Returns the quantization interval with which the runtime was prepared,
     * or -1 if no quantization was enabled.
     *
     * Will throw an error if called before the load event has fired.
     *
     * @returns quantization interval
     *
     * @see Core
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
     * @param children
     * {@link Child}ren to render in channels
     *
     * @see Core
     * @see Child
     * @see Node
     */
    render(...children: Child[]): void;

    /**
     * Object containing methods for creating and
     * checking the type of {@link Node}s.
     *
     * @see Core
     * @see Node
     * @see NodeStatic
     */
    readonly Node: NodeStatic;
}
