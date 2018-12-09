// Type definitions for npmlog 4.1
// Project: https://github.com/npm/npmlog#readme
// Definitions by: Daniel Schmidt <https://github.com/DanielMSchmidt>
//                 Zhu Zijia <https://github.com/littlepiggy03>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export enum LogLevels {
    silly = "silly",
    verbose = "verbose",
    info = "info",
    http = "http",
    warn = "warn",
    error = "error",
}

export interface StyleObject {
    fg?: string;
    bg?: string;
    bold?: boolean;
    inverse?: boolean;
    underline?: boolean;

    bell?: boolean;
}

export interface MessageObject {
    id: number;
    level: string;
    prefix: string;
    message: string;
    messageRaw: string;
}

// TODO: newStream, newGroup, setGaugeTemplate and setGaugeTemplateSet need to be added

export function log(level: LogLevels | string, prefix: string, message: string, ...args: any[]): void;

export function silly(prefix: string, message: string, ...args: any[]): void;
export function verbose(prefix: string, message: string, ...args: any[]): void;
export function info(prefix: string, message: string, ...args: any[]): void;
export function http(prefix: string, message: string, ...args: any[]): void;
export function warn(prefix: string, message: string, ...args: any[]): void;
export function error(prefix: string, message: string, ...args: any[]): void;

export let level: string;
export let record: MessageObject[];
export let maxRecordSize: number;
export let prefixStyle: StyleObject;
export let headingStyle: StyleObject;
export let heading: string;
export let stream: any; // Defaults to process.stderr

export function enableColor(): void;
export function disableColor(): void;

export function enableProgress(): void;
export function disableProgress(): void;

export function enableUnicode(): void;
export function disableUnicode(): void;

export function pause(): void;
export function resume(): void;

export function addLevel(level: string, n: number, style?: StyleObject, disp?: string): void;
