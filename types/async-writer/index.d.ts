/// <reference types="node" />

import stream = require("stream");
import events = require("events");

declare namespace async_writer {
    interface EventFunction {
        (event: string, callback: Function): void;
    }

    class StringWriter {
        constructor(events: events.EventEmitter);
        end(): void;
        write(what: string): StringWriter;
        toString(): string;
    }

    class BufferedWriter {
        constructor(wrappedStream: stream.Stream);
        flush(): void;
        on(event: string, callback: Function): BufferedWriter;
        once(event: string, callback: Function): BufferedWriter;
        clear(): void;
        end(): void;
        write(what: string): BufferedWriter;
    }

    interface BeginAsyncOptions {
        last?: boolean | undefined;
        timeout?: number | undefined;
        name?: string | undefined;
    }

    class AsyncWriter {
        static enableAsyncStackTrace(): void;

        constructor(writer?: any, global?: { [s: string]: any }, async?: boolean, buffer?: boolean);
        isAsyncWriter: AsyncWriter;
        sync(): void;
        getAttributes(): { [s: string]: any };
        getAttribute(): any;
        write(str: string): AsyncWriter;
        getOutput(): string;
        captureString(func: Function, thisObj: Object): string;
        swapWriter(newWriter: StringWriter | BufferedWriter, func: Function, thisObj: Object): void;
        createNestedWriter(writer: StringWriter | BufferedWriter): AsyncWriter;
        beginAsync(options?: number | BeginAsyncOptions): AsyncWriter;
        handleBeginAsync(options: number | BeginAsyncOptions, parent: AsyncWriter): void;
        on(event: string, callback: Function): AsyncWriter;
        once(event: string, callback: Function): AsyncWriter;
        onLast(callback: Function): AsyncWriter;
        emit(arg: any): AsyncWriter;
        removeListener(): AsyncWriter;
        pipe(stream: stream.Stream): AsyncWriter;
        error(e: Error): void;
        end(data?: any): AsyncWriter;
        handleEnd(isAsync: boolean): void;
        _finish(): void;
        flush(): void;
    }

    interface AsyncWriterOptions {
        global?: { [s: string]: any } | undefined;
        buffer?: boolean | undefined;
    }

    function create(writer?: any, options?: AsyncWriterOptions): AsyncWriter;
    function enableAsyncStackTrace(): void;
}

export = async_writer;
