// Type definitions for pino v1.0.1
// Project: https://github.com/mcollina/pino.git
// Definitions by: Peter Snider <https://github.com/psnider>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>   // only for require()

declare module 'pino' {

    import stream = require('stream')

    interface Serializers {
        req(req: Object): Object
        res(res: Object): Object
    }


    interface LoggerOptions {
        name?: string
        enabled?: boolean
        safe?: boolean
        serializers?: Serializers
    }


    interface Pino {
        (): Logger
        (options: LoggerOptions): Logger
        (stream: stream.Writable): Logger
        (options: LoggerOptions, stream: stream.Writable): Logger
    }



    interface Logger {
        child(bindings: Object): this
        level: string   // 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace'
        fatal(msg: string, ...args : any[]): void
        fatal(obj: Object, msg: string, ...args : any[]): void
        fatal(obj: Object): void
        error(msg: string, ...args : any[]): void
        error(obj: Object, msg: string, ...args : any[]): void
        error(obj: Object): void
        warn(msg: string, ...args : any[]): void
        warn(obj: Object, msg: string, ...args : any[]): void
        warn(obj: Object): void
        info(msg: string, ...args : any[]): void
        info(obj: Object, msg: string, ...args : any[]): void
        info(obj: Object): void
        debug(msg: string, ...args : any[]): void
        debug(obj: Object, msg: string, ...args : any[]): void
        debug(obj: Object): void
        trace(msg: string, ...args : any[]): void
        trace(obj: Object, msg: string, ...args : any[]): void
        trace(obj: Object): void
        stdSerializers: Serializers
    }

    var p: Pino
    export = p

}
