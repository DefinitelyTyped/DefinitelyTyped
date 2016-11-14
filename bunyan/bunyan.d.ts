// Type definitions for node-bunyan
// Project: https://github.com/trentm/node-bunyan
// Definitions by: Alex Mikhalev <https://github.com/amikhalev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "bunyan" {
    import { EventEmitter } from 'events';

    class Logger extends EventEmitter {
        constructor(options:LoggerOptions);
        addStream(stream:Stream):void;
        addSerializers(serializers:Serializers | StdSerializers):void;
        child(options:LoggerOptions, simple?:boolean):Logger;
        child(obj:Object, simple?:boolean):Logger;
        reopenFileStreams():void;

        level():string|number;
        level(value: number | string):void;
        levels(name: number | string, value: number | string):void;

        fields:any;
        src:boolean;

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
        level?: string | number;
        stream?: NodeJS.WritableStream;
        serializers?: Serializers;
        src?: boolean;
    }

	interface Serializer {
		(input:any): any;
	}

    interface Serializers {
        [key:string]: Serializer;
    }

    interface StdSerializers {
        err: Serializer;
        res: Serializer;
        req: Serializer;
    }

    interface Stream {
        type?: string;
        level?: number | string;
        path?: string;
        stream?: NodeJS.WritableStream | Stream;
        closeOnExit?: boolean;
        period?: string;
        count?: number;
    }

    export var stdSerializers: StdSerializers;

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
