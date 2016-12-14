// Type definitions for pino v3.0.5 
// Project: https://github.com/mcollina/pino.git
// Definitions by: Peter Snider <https://github.com/psnider>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node"/>


declare namespace Pino {

    type CustomLevel = string
    type Level = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent' | CustomLevel
    type LevelLabelsToValues = {
        trace: number
        debug: number
        info: number
        warn: number
        error: number
        fatal: number
    }
    type LevelValuesToLabels = {[level: number]: string}

    interface Serializers {
        req?: (req: any) => any
        res?: (res: any) => any
        err?: (error: Error) => any
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
        // one of 'fatal', 'error', 'warn', 'info', 'debug', 'trace';
        // also 'silent' is supported to disable logging.
        // Any other value defines a custom level and requires supplying a level value via levelVal.
        level?: Level
        // when defining a custom log level via level, set to an integer value to define the new level. Defaults to undefined.
        levelVal?: number
        // enables logging, defaults to true.
        enabled?: boolean
        stdSerializers?: Pino.Serializers
    }


    type LoggerEventListener = (lvl: string, val: number, prevLvl: string, prevVal: number) => void


    interface Logger {
        child(bindings: {}): Logger
        level: Level
        levelVal: number
        on(event: 'level-change', listener: LoggerEventListener): void
        on(event: 'error', listener: (error: Error) => void): void
        removeListener(event: 'level-change', listener: LoggerEventListener): void
        fatal(msg: string, ...args : any[]): void
        fatal(obj: {}, msg?: string, ...args : any[]): void
        error(msg: string, ...args : any[]): void
        error(obj: {}, msg?: string, ...args : any[]): void
        warn(msg: string, ...args : any[]): void
        warn(obj: {}, msg?: string, ...args : any[]): void
        info(msg: string, ...args : any[]): void
        info(obj: {}, msg?: string, ...args : any[]): void
        debug(msg: string, ...args : any[]): void
        debug(obj: {}, msg?: string, ...args : any[]): void
        trace(msg: string, ...args : any[]): void
        trace(obj: {}, msg?: string, ...args : any[]): void
        flush(): void
        addLevel(name: string, lvl: number): void
        levels: {
            values: LevelLabelsToValues
            labels: LevelValuesToLabels
        }
        LOG_VERSION: number
        // Custom log levels are also supported, but TypeScript doesn't have a way to declare this use case.
        // If you define one, you may create another interface, for example:
        // interface LoggerWithMyLevel extends Pino.Logger {
        //   myLevel(msg: string, ...args : any[]): void
        //   myLevel(obj: {}, msg?: string, ...args : any[]): void
        // }
    }


}


declare module 'pino' {

    import stream = require('stream')

    interface PrettyOptions {
        timeTransOnly?: boolean
        formatter?: () => string
    }

    interface Pino {
        (optionsOrStream?: Pino.LoggerOptions | stream.Writable | stream.Readable): Pino.Logger
        (options: Pino.LoggerOptions, stream: stream.Writable | stream.Readable): Pino.Logger
        levels: {
            values: Pino.LevelLabelsToValues
            labels: Pino.LevelValuesToLabels
        }
        LOG_VERSION: number
        pretty(opts?: PrettyOptions): stream.Readable
        stdSerializers: Pino.Serializers
    }

    var p: Pino
    export = p

}
