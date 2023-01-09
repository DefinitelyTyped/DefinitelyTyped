// Type definitions for rpi-ws281x-native 1.0
// Project: https://github.com/beyondscreen/node-rpi-ws281x-native
// Definitions by: Nathan Rajlich <https://github.com/TooTallNate>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import type { stripType, stripTypeIds } from './lib/constants';

type StripType = typeof stripType[keyof typeof stripType];
type StripTypeEnum = StripType | keyof typeof stripTypeIds;

interface Channel {
    readonly count: number;
    readonly stripType: StripType;
    readonly invert: boolean;
    readonly gpio: number;
    brightness: number;
    array: Uint32Array;
    buffer: Buffer;
}

interface ChannelOptions {
    /**
     * Number of LEDs on this channel.
     */
    count: number;
    /**
     * The GPIO port-number the LED strip is connected to (default `18` for the first channel, and `12` for the second channel).
     */
    gpio?: number;
    /**
     * `true` to invert the output-signal (for example, if you are using an inverting level-shifter).
     */
    invert?: boolean;
    /**
     * Initial brightness for the channel (0-255).
     */
    brightness?: number;
    /**
     * The LED-type connected on this channel. Can be a string-constant or one of the values from `ws281x.stripType` (default `ws281x.stripType.WS2812`).
     */
    stripType?: StripTypeEnum;
}

interface InitOptions {
    /**
     * The dma-number to use for the driver's data-transport to the LEDs (default `10`).
     */
    dma?: number;
    /**
     * The frequency in Hz of the control-signal. This is 800kHz for ws2812/sk6812 LEDs
     * and 400kHz for older ws2811 LEDs (default `800000`).
     */
    freq?: number;
    /**
     * An array of one or two objects with channel-specific configuration for the two
     * possible outputs.
     */
    channels: ChannelOptions[];
}

interface Ws281x {
    (numLeds: number, opts?: Omit<ChannelOptions, 'count'>): Channel;
    stripType: typeof stripType;
    init(opts: InitOptions): Channel[];
    /**
     * Shut down the drivers and free all resources.
     */
    finalize(): void;
    /**
     * Clear all color-values and render.
     */
    reset(): void;
    /**
     * Send the current state of the channel color-buffers to the LEDs.
     */
    render(): void;
}

declare const ws281x: Ws281x;
export = ws281x;
