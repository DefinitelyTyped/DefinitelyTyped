// Type definitions for minipass 3.1
// Project: https://github.com/isaacs/minipass#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { EventEmitter } from 'events';

export = MiniPass;

// Initially was declared with the line below, but minipass types differ slightly
// declare class MiniPass extends EventEmitter implements NodeJS.WritableStream {
declare class MiniPass extends EventEmitter {
    readonly bufferLength: number;
    readonly flowing: boolean;
    readonly emittedEnd: boolean;
    readonly destroyed: boolean;
    encoding: string | null;
    readable: boolean;
    writable: boolean;
    paused: boolean;
    objectMode: boolean;
    pipes: any;
    buffer: any;

    constructor(options?: MiniPass.Options);

    setEncoding(encoding: string | null): void;
    read(size?: number): any;
    write(chunk: any, cb?: () => void): boolean;
    write(chunk: any, encoding?: string | null, cb?: () => void): boolean;
    end(cb?: () => void): this;
    end(chunk: any, cb?: () => void): this;
    end(chunk: any, encoding?: string | null, cb?: () => void): this;
    resume(): void;
    pause(): void;
    promise(): Promise<void>;
    collect(): Promise<any[]>;
    concat(): Promise<Buffer | string>;
    destroy(err?: any): void;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean | undefined; }): T;

    addEventHandler(event: string, listener: (...args: any[]) => void): this;
    addEventHandler(event: 'data', listener: (chunk: any) => void): this;
    addEventHandler(event: 'readable' | 'drain' | 'resume' | 'end' | 'prefinish' | 'finish' | 'close', listener: () => void): this;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: 'data', listener: (chunk: any) => void): this;
    on(event: 'readable' | 'drain' | 'resume' | 'end' | 'prefinish' | 'finish' | 'close', listener: () => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: 'data', listener: (chunk: any) => void): this;
    once(event: 'readable' | 'drain' | 'resume' | 'end' | 'prefinish' | 'finish' | 'close', listener: () => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: 'data', listener: (chunk: any) => void): this;
    prependListener(event: 'readable' | 'drain' | 'resume' | 'end' | 'prefinish' | 'finish' | 'close', listener: () => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: 'data', listener: (chunk: any) => void): this;
    prependOnceListener(event: 'readable' | 'drain' | 'resume' | 'end' | 'prefinish' | 'finish' | 'close', listener: () => void): this;

    removeListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: 'data', listener: (chunk: any) => void): this;
    removeListener(event: 'readable' | 'drain' | 'resume' | 'end' | 'prefinish' | 'finish' | 'close', listener: () => void): this;

    emit(event: string, ...args: any[]): boolean;
    emit(event: 'data', chunk: any): boolean;
    emit(event: 'readable' | 'drain' | 'resume' | 'end' | 'prefinish' | 'finish' | 'close'): boolean;
}

declare namespace MiniPass {
    interface Options {
        objectMode?: boolean | undefined;
        encoding?: string | null | undefined;
    }
}
