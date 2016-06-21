// Type definitions for pino v1.0.1
// Project: https://github.com/mcollina/pino.git
// Definitions by: Peter Snider <https://github.com/psnider>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>   // only for require()

declare module 'pino' {

    import stream = require('stream')

    type Level = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent'
    type Headers = {[header: string]: string}
    type LevelLabelsToValues = {[level: string]: number}
    type LevelValuesToLabels = {[level: number]: string}

    interface RequestSummary {
        pid: number
        hostname: string
        level: number
        msg: string
        time: string
        v: number
        req: {
            method: string
            url: string
            headers: Headers
            remoteAddress: string
            remotePort: number
        }
    }

    interface ResponseSummary {
        pid: number
        hostname: string
        level: number
        msg: string
        time: string
        v: number
        res: {
            statusCode: number
            header: string
        }
    }

    interface ErrorSummary {
        pid: number
        hostname: string
        level: number
        msg: string
        time: number
        v: number
        type: string
        stack: string
    }

    interface Serializers {
        req?: (req: any) => RequestSummary
        res?: (res: any) => ResponseSummary
        err?: (error: Error) => ErrorSummary
    }

    interface LoggerOptions {
        // avoid error causes by circular references in the object tree, default true
        safe?: boolean
        // the name of the logger, default undefined
        name?: string
        // an object containing functions for custom serialization of objects.
        // These functions should return an JSONifiable object and they should never throw
        serializers?: Serializers
        // Outputs ISO time stamps ('2016-03-09T15:18:53.889Z') instead of Epoch time stamps (1457536759176).
        // WARNING: This option carries a 25% performance drop, we recommend using default Epoch timestamps and transforming logs after if required.
        // The pino -t command will do this for you (see CLI). default false.
        slowtime?: boolean
        // Enables extreme mode, yields an additional 60% performance (from 250ms down to 100ms per 10000 ops).
        // There are trade-off's should be understood before usage. See Extreme mode explained. default false
        extreme?: boolean
        // enables logging, defaults to true.
        enabled?: boolean
        level?: Level
    }

    interface Pino {
        (optionsOrStream?: LoggerOptions | stream.Writable): Logger
        (options: LoggerOptions, stream: stream.Writable): Logger
        levels: {
            values: LevelLabelsToValues
            labels: LevelValuesToLabels
        }
        LOG_VERSION: number
        pretty(opts?: {timeTransOnly?: boolean}): stream.Readable

    }

    type LevelChangeEventListener = (lvl: string, val: number, prevLvl: string, prevVal: number) => void
    type LevelChangeEvent = 'level-change'

    interface Logger {
        child(bindings: {}): Logger
        level: Level
        levelVal: number
        on(event: LevelChangeEvent, listener: LevelChangeEventListener): void
        fatal(obj: {}): void
        fatal(obj: {}, msg?: string, ...args : any[]): void
        error(obj: {}): void
        error(obj: {}, msg?: string, ...args : any[]): void
        warn(obj: {}): void
        warn(obj: {}, msg?: string, ...args : any[]): void
        info(msg: string, ...args : any[]): void
        info(obj: {}, msg?: string, ...args : any[]): void
        debug(obj: {}): void
        debug(obj: {}, msg?: string, ...args : any[]): void
        trace(obj: {}): void
        trace(obj: {}, msg?: string, ...args : any[]): void
        levels: {
            values: LevelLabelsToValues
            labels: LevelValuesToLabels
        }
        LOG_VERSION: number
        stdSerializers: Serializers
    }

    var p: Pino
    export = p

}
