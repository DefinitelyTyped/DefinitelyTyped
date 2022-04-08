// Type definitions for pino 3.0
// Project: https://github.com/mcollina/pino.git
// Definitions by: Peter Snider <https://github.com/psnider>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node"/>

import stream = require("stream");

declare function P(optionsOrStream?: P.LoggerOptions | stream.Writable | stream.Duplex | stream.Transform): P.Logger;
declare function P(options: P.LoggerOptions, stream: stream.Writable | stream.Duplex | stream.Transform): P.Logger;

declare namespace P {
    function pretty(opts?: {
        timeTransOnly?: boolean;
        levelFirst?: boolean;
        formatter?(log: IPinoLog): string;
    }): stream.Transform;

    type Level = "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent";
    interface Headers {
        [header: string]: string;
    }

    // tslint:disable-next-line interface-name
    interface IPinoLog {
        pid: number;
        hostname: string;
        level: number;
        time: string;
        msg: string;
        v: number;
    }

    interface LevelLabelsToValues {
        [level: string]: number;
    }

    interface LevelValuesToLabels {
        [level: number]: string;
    }

    interface Serializers {
        req?(req: any): any;
        res?(res: any): any;
        err?(error: Error): any;
    }

    interface LoggerOptions {
        // avoid error causes by circular references in the object tree, default true
        safe?: boolean;
        // the name of the logger, default undefined
        name?: string;
        // an object containing functions for custom serialization of objects.
        // These functions should return an JSONifiable object and they should never throw
        serializers?: Serializers;
        // Outputs ISO time stamps ('2016-03-09T15:18:53.889Z') instead of Epoch time stamps (1457536759176).
        // WARNING: This option carries a 25% performance drop, we recommend using default Epoch timestamps and transforming logs after if required.
        // The pino -t command will do this for you (see CLI). default false.
        slowtime?: boolean;
        // Enables extreme mode, yields an additional 60% performance (from 250ms down to 100ms per 10000 ops).
        // There are trade-off's should be understood before usage. See Extreme mode explained. default false
        extreme?: boolean;
        // enables logging, defaults to true.
        enabled?: boolean;
        level?: Level | string;
        levelVal?: number;
    }

    interface Pino {
        (optionsOrStream?: LoggerOptions | stream.Writable | stream.Duplex): Logger;
        (options: LoggerOptions, stream: stream.Writable | stream.Duplex): Logger;
        levels: {
            values: LevelLabelsToValues;
            labels: LevelValuesToLabels;
        };
        LOG_VERSION: number;
    }

    type LevelChangeEventListener = (lvl: string, val: number, prevLvl: string, prevVal: number) => void;
    type LevelChangeEvent = "level-change";

    interface Logger {
        child(bindings: {}): Logger;
        level: Level;
        levelVal: number;
        on(event: LevelChangeEvent, listener: LevelChangeEventListener): void;
        fatal(msg: string, ...args: any[]): void;
        fatal(obj: {}, msg?: string, ...args: any[]): void;
        error(msg: string, ...args: any[]): void;
        error(obj: {}, msg?: string, ...args: any[]): void;
        warn(msg: string, ...args: any[]): void;
        warn(obj: {}, msg?: string, ...args: any[]): void;
        info(msg: string, ...args: any[]): void;
        info(obj: {}, msg?: string, ...args: any[]): void;
        debug(msg: string, ...args: any[]): void;
        debug(obj: {}, msg?: string, ...args: any[]): void;
        trace(msg: string, ...args: any[]): void;
        trace(obj: {}, msg?: string, ...args: any[]): void;
        levels: {
            values: LevelLabelsToValues;
            labels: LevelValuesToLabels;
        };
        LOG_VERSION: number;
        stdSerializers: Serializers;
    }
}

export = P;
