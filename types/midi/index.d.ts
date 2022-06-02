// Type definitions for midi 2.0
// Project: https://github.com/justinlatimer/node-midi
// Definitions by: Matthew Soulanille <https://github.com/mattsoulanille>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as Stream from 'stream';
import * as EventEmitter from 'events';

/**
 * An array of numbers corresponding to the MIDI bytes: [status, data1, data2].
 * See https://www.cs.cf.ac.uk/Dave/Multimedia/node158.html for more info.
 */
export type MidiMessage = [number, number, number];
export type MidiCallback = (deltaTime: number, message: MidiMessage) => void;

export class Input extends EventEmitter {
    /** Close the midi port */
    closePort(): void;
    /** Count the available input ports */
    getPortCount(): number;
    /** Get the name of a specified input port */
    getPortName(port: number): string;
    /**
     * Sysex, timing, and active sensing messages are ignored by default. To
     * enable these message types, pass false for the appropriate type in the
     * function below.  Order: (Sysex, Timing, Active Sensing) For example if
     * you want to receive only MIDI Clock beats you should use
     * input.ignoreTypes(true, false, true)
     */
    ignoreTypes(sysex: boolean, timing: boolean, activeSensing: boolean): void;
    /** Open the specified input port */
    openPort(port: number): void;
    /**
     * Instead of opening a connection to an existing MIDI device, on Mac OS X
     * and Linux with ALSA you can create a virtual device that other software
     * may connect to. This can be done simply by calling
     * openVirtualPort(portName) instead of openPort(portNumber).
     */
    openVirtualPort(port: string): void;

    on(event: 'message', callback: MidiCallback): this;
}

export class Output {
    /** Close the midi port */
    closePort(): void;
    /** Count the available output ports */
    getPortCount(): number;
    /** Get the name of a specified output port */
    getPortName(port: number): string;
    /** Open the specified output port */
    openPort(port: number): void;
    /**
     * Instead of opening a connection to an existing MIDI device, on Mac OS X
     * and Linux with ALSA you can create a virtual device that other software
     * may connect to. This can be done simply by calling
     * openVirtualPort(portName) instead of openPort(portNumber).
     */
    openVirtualPort(port: string): void;
    /** Send a MIDI message */
    send(message: MidiMessage): void;
    /** Send a MIDI message */
    sendMessage(message: MidiMessage): void;
}

/** @deprecated */
export const input: typeof Input;
/** @deprecated */
export const output: typeof Output;

export function createReadStream(input?: Input): Stream;

export function createWriteStream(output?: Output): Stream;
