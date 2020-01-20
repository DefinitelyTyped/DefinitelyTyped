// Type definitions for naudiodon 2.1
// Project: https://github.com/Streampunk/naudiodon#readme
// Definitions by: Federico Bond <https://github.com/federicobond>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable, Writable, Duplex } from 'stream';

export {};

interface Device {
    id: number;
    name: string;
    maxInputChannels: number;
    maxOutputChannels: number;
    defaultSampleRate: number;
    defaultLowInputLatency: number;
    defaultLowOutputLatency: number;
    defaultHighInputLatency: number;
    defaultHighOutputLatency: number;
    hostAPIName: number;
}

interface HostAPI {
    id: number;
    name: string;
    type: string;
    deviceCount: number;
    defaultInput: number;
    defaultOutput: number;
}

interface AudioOptions {
    deviceId?: number;
    channelCount?: number;
    sampleFormat?: number;
    sampleRate?: number;
    maxQueue?: number;
}

interface AudioStream {
    start(): void;
    quit(cb?: () => void): void;
    abort(cb?: () => void): void;
}

export function getDevices(): Device[];

export function getHostAPIs(): {
    defaultHostAPI: number,
    HostAPIs: HostAPI[]
};

export const SampleFormatFloat32: number;
export const SampleFormat8Bit: number;
export const SampleFormat16Bit: number;
export const SampleFormat24Bit: number;
export const SampleFormat32Bit: number;

export function AudioIO(options: { inOptions: AudioOptions }): Readable & AudioStream;

export function AudioIO(options: { outOptions: AudioOptions }): Writable & AudioStream;

export function AudioIO(options: { inOptions: AudioOptions, outOptions: AudioOptions }): Duplex & AudioStream;
