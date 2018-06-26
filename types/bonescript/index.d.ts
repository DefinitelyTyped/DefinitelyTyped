// Type definitions for bonescript 0.6
// Project: https://github.com/jadonk/bonescript
// Definitions by: Troy W. <https://github.com/troywweber7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as SerialPort from 'serialport';
import * as VError from 'verror';

// OBJECTS
export const bone: BoneObj;

// FUNCTIONS - TODO obliterate all "any" types where possible! --- TWW
// https://github.com/jadonk/bonescript#system

export function getPlatform(callback?: (error: ErrorType, platform: any) => void): any;

export function getEeproms(callback?: (error: ErrorType, eeproms: any) => void): any;

export function echo(data: any, callback?: (error: ErrorType, data: any) => void): any;

export function readTextFile(filename: string, callback?: (error: ErrorType, data: any) => void): any;

export function writeTextFile(filename: string, data: any, callback?: (error: ErrorType, data: any) => void): void;

export function writeCModule(filename: string, data: any, callback?: (error: ErrorType, data: any) => void): void;

export function setDate(date: any, callback?: (error: ErrorType, data: any) => void): void;

export function analogRead(pin: string, callback?: (err: ErrorType, value: number) => void): any;

export function analogWrite(pin: string, value: number, freq?: number, callback?: ErrorCb): void;

export function attachInterrupt(
    pin: string,
    handler: InterruptFn,
    mode: InterruptType,
    callback?: AttachIntCb
): void;

export function detachInterrupt(pin: string, callback?: DetachIntCb): void;

export function digitalRead(pin: string, callback?: (err: ErrorType, value: number) => void): any;

export function digitalWrite(pin: string, value: PinStateType, callback?: DigitalWriteCb): void;

export function pinMode(
    pin: string,
    direction: any,
    mux?: any,
    pullup?: any,
    slew?: any,
    callback?: PinModeCb
): void;

export function getPinMode(pin: string, callback?: (err: ErrorType, mode: PinModeObj) => void): any;

export function shiftOut(dataPin: any, clockPin: any, bitOrder: any, val: any, callback?: ErrorCb): void;

// https://github.com/jadonk/bonescript#serial
export function serialOpen(port: any, options: any, callback?: ErrorCb): void;

export function serialWrite(port: any, data: any, callback?: ErrorCb): void;

export const serialParsers: typeof SerialPort.parsers;

export function i2cOpen(port: any, address: any, options: any, callback?: ErrorCb): void;

export function i2cScan(port: any, callback?: ErrorCb): void;

export function i2cWriteByte(port: any, byte: any, callback?: ErrorCb): void;

export function i2cWriteBytes(port: any, command: any, bytes: any, callback?: ErrorCb): void;

export function i2cReadByte(port: any, callback?: ErrorCb): void;

export function i2cReadBytes(port: any, command: any, length: any, callback?: ErrorCb): void;

export function i2cStream(port: any, command: any, length: any, callback?: ErrorCb): void;
// ffi
export function loadCModule(filename: string, data: any, isMRAA?: boolean): any;

export function lowByte(value: number): number;

export function highByte(value: number): number;

export function bitRead(value: number, bitnum: number): number;

export function bitWrite(value: number, bitnum: number, bitdata: any): number;

export function bitSet(value: number, bitnum: number): number;

export function bitClear(value: number, bitnum: number): number;

export function bit(bitnum: number): number;

export function min(x: number, y: number): number;

export function max(x: number, y: number): number;

export function abs(x: number): number;

export function constrain(x: number, a: number, b: number): number;

export function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number;

export function pow(x: number, y: number): number;

export function sqrt(x: number): number;

export function sin(radians: number): number;

export function cos(radians: number): number;

export function tan(radians: number): number;

export function randomSeed(x: number): number;

export function random(min: number, max?: number): number;

export function delay(...args: any[]): any;

export function autorun(...args: any[]): any;

export function serverStart(...args: any[]): any;

export function socketJSReqHandler(...args: any[]): any;

export function addSocketListeners(...args: any[]): any;

export function setGlobals(...args: any[]): any;

// CONSTANTS
export const OUTPUT: 'out';
export const INPUT: 'in';
export const INPUT_PULLUP: 'in_pullup';
export const ANALOG_OUTPUT: 'analog_out';
export const HIGH: 1;
export const LOW: 0;
export const LSBFIRST: 1;
export const MSBFIRST: 0;
export const CHANGE: 'both';
export const RISING: 'rising';
export const FALLING: 'falling';

// INTERFACES - adjusted based on observation / testing
export interface PinModeObj {
    gpio?: {
        active: boolean,
        direction: 'in' | 'out',
        allocated: boolean,
    };
    modes: string[];
    mux?: number;
    name: string;
    pin: string;
    pinState: string;
    pullup?: 'diabled' | 'pullup' | 'pulldown';
    pwm?: {
        freq: number,
        value: number,
    };
    rx?: 'enabled' | 'disabled';
    slew?: 'fast' | 'slow';
}

export interface BoneObj {
    i2c: i2cObj;
    uarts: UartsObj;
    getPinKeys(): string[];
    getPinObjects(): any;
    naturalCompare(): any;
}

export interface PinsObj {
    [i: string]: PinInfo;
}

export interface UartsObj {
    [i: string]: UartInfo;
}

export interface i2cObj {
    [i: string]: i2cInfo;
}

export interface PinInfo {
    // Analog In
    ain?: number;
    // GPIO / LEDs / Analog In
    eeprom?: number;
    // GPIO / LEDs
    gpio?: number;
    key: string;
    // LEDs
    led?: string;
    mux?: string;
    muxRegOffset?: string;
    // All
    name: string;
    options?: string[];
    // PWM
    pwm?: PwmInfo;
    scale?: number;
    universalName?: string;
}

export interface PwmInfo {
    addr: string;
    chip: string;
    index: number;
    module: string;
    muxmode: number;
    name: string;
    path: string;
    sysfs: number;
}

export interface UartInfo {
    devicetree?: string;
    rx?: string;
    tx?: string;
}

export interface i2cInfo {
    devicetree?: string;
    path?: string;
    scl?: string;
    sda?: string;
}

// TYPES - adjusted based on observation / testing
export type PinStateType = typeof HIGH | typeof LOW;
export type PinModeType = typeof ANALOG_OUTPUT | typeof INPUT | typeof INPUT_PULLUP | typeof OUTPUT;
export type InterruptType = typeof RISING | typeof FALLING | typeof CHANGE;
export type ErrorCb = (err: ErrorType) => void;
export type InterruptFn = (resp: {
    pin: PinInfo,
    value: number
}) => void;
export type AttachIntCb = (resp: {
    pin: PinInfo,
    attached: boolean
}) => void;
export type DetachIntCb = (resp: {
    pin: PinInfo,
    detached: boolean
}) => void;
export type PinModeCb = (resp: {
    value: number,
    err: VError
}) => void;
export type DigitalWriteCb = (resp: {
    data: any,
    err: VError
}) => void;
export type ErrorType = VError;
