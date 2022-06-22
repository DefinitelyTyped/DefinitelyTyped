// Type definitions for rpi-ws281x-native 1.0
// Project: https://github.com/beyondscreen/node-rpi-ws281x-native
// Definitions by: Nathan Rajlich <https://github.com/TooTallNate>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

/// <reference types="node" />

declare enum StripType {
    SK6812_RGBW = 403703808,
    SK6812_RBGW = 403701768,
    SK6812_GRBW = 403181568,
    SK6812_GBRW = 403177488,
    SK6812_BRGW = 402657288,
    SK6812_BGRW = 402655248,
    WS2811_RGB = 1050624,
    WS2811_RBG = 1048584,
    WS2811_GRB = 528384,
    WS2811_GBR = 524304,
    WS2811_BRG = 4104,
    WS2811_BGR = 2064,
    WS2812 = 528384,
    SK6812 = 528384,
    SK6812W = 403177488,
}

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
    stripType: StripType;
}

interface Ws281x {
    (numLeds: number, opts: ChannelOptions): Channel;
    stripType: typeof StripType;
    init(): Channel[];
    finalize(): void;
    reset(): void;
    render(): void;
}

declare const ws281x: Ws281x;
export = ws281x;
