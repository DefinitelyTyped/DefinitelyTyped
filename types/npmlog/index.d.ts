// Type definitions for npmlog 4.1
// Project: https://github.com/npm/npmlog#readme
// Definitions by: Daniel Schmidt <https://github.com/DanielMSchmidt>
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
interface npmlog {
    log(level: LogLevels | string, prefix: string, message: string, ...args: any[]): void;

    silly(prefix: string, message: string, ...args: any[]): void;
    verbose(prefix: string, message: string, ...args: any[]): void;
    info(prefix: string, message: string, ...args: any[]): void;
    http(prefix: string, message: string, ...args: any[]): void;
    warn(prefix: string, message: string, ...args: any[]): void;
    error(prefix: string, message: string, ...args: any[]): void;

    level: string;
    record: MessageObject[];
    maxRecordSize: number;
    prefixStyle: StyleObject;
    headingStyle: StyleObject;
    heading: string;
    stream: any; // Defaults to process.stderr

    enableColor(): void;
    disableColor(): void;

    enableProgress(): void;
    disableProgress(): void;

    enableUnicode(): void;
    disableUnicode(): void;

    pause(): void;
    resume(): void;

    addLevel(level: string, n: number, style?: StyleObject, disp?: string): void;
}

declare const logger: npmlog;

export default logger;
