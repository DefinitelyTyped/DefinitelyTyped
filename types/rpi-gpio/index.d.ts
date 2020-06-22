// Type definitions for rpi-gpio 2.1
// Project: https://github.com/JamesBarwell/rpi-gpio.js#readme
// Definitions by: Giles Roadnight <https://github.com/Roaders>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

/// <reference types="node" />
import { EventEmitter } from 'events';

type MODE = 'mode_rpi' | 'mode_bcm';
type PinDirection = 'in' | 'out' | 'low' | 'high';
type EDGE = 'none' | 'rising' | 'falling' | 'both';
type ValueCallback<T> = (err?: Error | null, value?: T) => void;
type ErrorCallback = (err?: Error | null) => void;

declare class Gpio extends EventEmitter {
    constructor();

    readonly DIR_IN: PinDirection;
    readonly DIR_OUT: PinDirection;
    readonly DIR_LOW: PinDirection;
    readonly DIR_HIGH: PinDirection;
    readonly MODE_RPI: MODE;
    readonly MODE_BCM: MODE;
    readonly EDGE_NONE: EDGE;
    readonly EDGE_RISING: EDGE;
    readonly EDGE_FALLING: EDGE;
    readonly EDGE_BOTH: EDGE;
    /**
     * Set pin reference mode. Defaults to 'mode_rpi'.
     *
     * @param mode Pin reference mode, 'mode_rpi' or 'mode_bcm'
     */
    setMode(mode: MODE): void;
    /**
     * Setup a channel for use as an input or output
     *
     * @param channel   Reference to the pin in the current mode's schema
     * @param direction The pin direction, either 'in' or 'out'
     * @param edge       edge Informs the GPIO chip if it needs to generate interrupts. Either 'none', 'rising', 'falling' or 'both'. Defaults to 'none'
     * @param onSetup  callback
     */
    setup(channel: number, onSetup?: ValueCallback<boolean>): void;
    setup(channel: number, direction?: PinDirection, onSetup?: ValueCallback<boolean>): void;
    setup(channel: number, direction?: PinDirection, edge?: EDGE, onSetup?: ValueCallback<boolean>): void;
    /**
     * Write a value to a channel
     *
     * @param channel The channel to write to
     * @param value   If true, turns the channel on, else turns off
     * @param [cb]      Optional callback
     */
    write(channel: number, value: boolean, cb?: ErrorCallback): void;
    /**
     * Write a value to a channel
     *
     * @param channel The channel to write to
     * @param value   If true, turns the channel on, else turns off
     * @param [cb]      Optional callback
     */
    output(channel: number, value: boolean, cb?: ErrorCallback): void;
    /**
     * Read a value from a channel
     *
     * @param channel The channel to read from
     * @param cb      Callback which receives the channel's boolean value
     */
    read(channel: number, cb: ValueCallback<boolean>): void;
    /**
     * Read a value from a channel
     *
     * @param channel The channel to read from
     * @param cb      Callback which receives the channel's boolean value
     */
    input(channel: number, cb: ValueCallback<boolean>): void;
    /**
     * Unexport any pins setup by this module
     *
     * @param [cb] callback
     */
    destroy(cb: ErrorCallback): void;
    /**
     * Reset the state of the module
     */
    reset(): void;

    readonly promise: {
        DIR_IN: PinDirection;
        DIR_OUT: PinDirection;
        DIR_LOW: PinDirection;
        DIR_HIGH: PinDirection;
        MODE_RPI: MODE;
        MODE_BCM: MODE;
        EDGE_NONE: EDGE;
        EDGE_RISING: EDGE;
        EDGE_FALLING: EDGE;
        EDGE_BOTH: EDGE;
        /**
         * @see {@link Gpio.setup}
         * @param channel
         * @param direction
         * @param edge
         * @returns Promise
         */
        setup: (channel: number, direction: PinDirection, edge?: EDGE) => Promise<boolean>;
        /**
         * @see {@link Gpio.write}
         * @param channel
         * @param value
         * @returns Promise
         */
        write: (channel: number, value: boolean) => Promise<unknown>;
        /**
         * @see {@link Gpio.read}
         * @param channel
         * @returns Promise
         */
        read: (channel: number) => Promise<boolean>;
        /**
         * @see {@link Gpio.destroy}
         * @returns Promise
         */
        destroy: () => Promise<unknown>;
    };
}
declare const GPIO: Gpio;
export = GPIO;
