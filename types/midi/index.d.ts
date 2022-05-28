// Type definitions for midi 2.0
// Project: https://github.com/justinlatimer/node-midi (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Matthew Soulanille <https://github.com/mattsoulanille>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as Stream from 'stream';
import * as EventEmitter from 'events';

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
   * function below.  Order: (Sysex, Timing, Active Sensing) For example if you
   * want to receive only MIDI Clock beats you should use
   * input.ignoreTypes(true, false, true)
   */
  ignoreTypes(sysex: boolean, timing: boolean, activeSensing: boolean): void;
  /** Check if the port is open */
  isPortOpen(): boolean;
  /** Open the first available input port */
  openPort(port: number): void;
  /**
   * Instead of opening a connection to an existing MIDI device, on Mac OS X and
   * Linux with ALSA you can create a virtual device that other software may
   * connect to. This can be done simply by calling openVirtualPort(portName)
   * instead of openPort(portNumber).
   */
  openVirtualPort(port: string): void;
}

export class Output {
  closePort(): void;
  getPortCount(): number;
  getPortName(port: number): string;
  isPortOpen(): boolean;
  openPort(port: number): void;
  openVirtualPort(port: string): void;
  send(message: [number, ...number[]]): void;
  sendMessage(message: [number, ...number[]]): void;
}

export const input: {new(): Input};
export const output: {new(): Output};

export function createReadStream(input?: Input): Stream;

export function createWriteStream(output?: Output): Stream;
