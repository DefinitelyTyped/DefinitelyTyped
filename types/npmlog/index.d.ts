/// <reference types="node" />

import { EventEmitter } from "events";

declare namespace npmlog {
    // TODO: newStream, newGroup, setGaugeTemplate and setGaugeTemplateSet need to be added
    interface Logger extends EventEmitter {
        (): any;

        level: string;
        record: MessageObject[];
        maxRecordSize: number;
        prefixStyle: StyleObject;
        headingStyle: StyleObject;
        heading: string;
        stream: any; // Defaults to process.stderr

        /**
         * Creates a log message
         * @param level
         * @param prefix
         * @param message message of the log which will be formatted using utils.format()
         * @param args additional arguments appended to the log message also formatted using utils.format()
         */
        log(level: LogLevels | string, prefix: string, message: any, ...args: any[]): void;

        /**
         * @param prefix
         * @param message message of the log which will be formatted using utils.format()
         * @param args additional arguments appended to the log message also formatted using utils.format()
         */
        silly(prefix: string, message: any, ...args: any[]): void;
        verbose(prefix: string, message: any, ...args: any[]): void;
        info(prefix: string, message: any, ...args: any[]): void;
        timing(prefix: string, message: any, ...args: any[]): void;
        http(prefix: string, message: any, ...args: any[]): void;
        notice(prefix: string, message: any, ...args: any[]): void;
        warn(prefix: string, message: any, ...args: any[]): void;
        error(prefix: string, message: any, ...args: any[]): void;
        silent(prefix: string, message: any, ...args: any[]): void;

        enableColor(): void;
        disableColor(): void;

        enableProgress(): void;
        disableProgress(): void;
        progressEnabled(): boolean;

        enableUnicode(): void;
        disableUnicode(): void;

        pause(): void;
        resume(): void;

        addLevel(level: string, n: number, style?: StyleObject, disp?: string): void;

        // Allows for custom log levels
        // npmlog.addLevel("custom", level)
        // npmlog.custom(prefix, message)
        [key: string]: any;
    }

    type LogLevels = "silly" | "verbose" | "info" | "timing" | "http" | "notice" | "warn" | "error" | "silent";

    interface StyleObject {
        fg?: string | undefined;
        bg?: string | undefined;
        bold?: boolean | undefined;
        inverse?: boolean | undefined;
        underline?: boolean | undefined;
        bell?: boolean | undefined;
    }

    interface MessageObject {
        id: number;
        level: string;
        prefix: string;
        message: string;
        messageRaw: string;
    }
}

declare var npmlog: npmlog.Logger;
export = npmlog;
