// Type definitions for node-bunyan
// Project: https://github.com/trentm/node-bunyan
// Definitions by: Alex Mikhalev <https://github.com/amikhalev>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "bunyan" {
    import events = require('events');
    import EventEmitter = events.EventEmitter;
    import WritableStream = NodeJS.WritableStream;

    class Logger extends EventEmitter {
        constructor(options:LoggerOptions);
        addStream(stream:Stream):void;
        addSerializers(serializers:Serializers):void;
        child(options:LoggerOptions, simple?:boolean):Logger;
        child(obj:Object, simple?:boolean):Logger;
        reopenFileStreams():void;

        level(value: number | string):void;
        levels(name: number | string, value: number | string):void;

        trace(error:Error, format?:any, ...params:any[]):void;
        trace(buffer:Buffer, format?:any, ...params:any[]):void;
        trace(obj:Object, format?:any, ...params:any[]):void;
        trace(format:string, ...params:any[]):void;
        debug(error:Error, format?:any, ...params:any[]):void;
        debug(buffer:Buffer, format?:any, ...params:any[]):void;
        debug(obj:Object, format?:any, ...params:any[]):void;
        debug(format:string, ...params:any[]):void;
        info(error:Error, format?:any, ...params:any[]):void;
        info(buffer:Buffer, format?:any, ...params:any[]):void;
        info(obj:Object, format?:any, ...params:any[]):void;
        info(format:string, ...params:any[]):void;
        warn(error:Error, format?:any, ...params:any[]):void;
        warn(buffer:Buffer, format?:any, ...params:any[]):void;
        warn(obj:Object, format?:any, ...params:any[]):void;
        warn(format:string, ...params:any[]):void;
        error(error:Error, format?:any, ...params:any[]):void;
        error(buffer:Buffer, format?:any, ...params:any[]):void;
        error(obj:Object, format?:any, ...params:any[]):void;
        error(format:string, ...params:any[]):void;
        fatal(error:Error, format?:any, ...params:any[]):void;
        fatal(buffer:Buffer, format?:any, ...params:any[]):void;
        fatal(obj:Object, format?:any, ...params:any[]):void;
        fatal(format:string, ...params:any[]):void;
    }

    interface LoggerOptions {
        name: string;
        streams?: Stream[];
        level?: string;
        stream?: WritableStream;
        serializers?: Serializers;
        src?: boolean;
    }

    interface Serializers {
        [key:string]: (input:any) => string;
    }

    interface Stream {
        type?: string;
        level?: number | string;
        path?: string;
        stream?: WritableStream | Stream;
        closeOnExit?: boolean;
    }

    export var stdSerializers:Serializers;

    export var TRACE:number;
    export var DEBUG:number;
    export var INFO:number;
    export var WARN:number;
    export var ERROR:number;
    export var FATAL:number;

    export function resolveLevel(value: number | string):number;

    export function createLogger(options:LoggerOptions):Logger;

    class RingBuffer extends EventEmitter {
        constructor(options:RingBufferOptions);

        writable:boolean;
        records:any[];

        write(record:any):void;
        end(record?:any):void;
        destroy():void;
        destroySoon():void;
    }

    interface RingBufferOptions {
        limit?: number;
    }

    export function safeCycles():(key:string, value:any) => any;
}
