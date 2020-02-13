// Type definitions for asynciterator 1.1
// Project: https://github.com/rubenverborgh/AsyncIterator#readme
// Definitions by: Ruben Taelman <https://github.com/rubensworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import { EventEmitter } from "events";

export abstract class AsyncIterator<T> implements EventEmitter {
    static STATES: ['INIT', 'OPEN', 'CLOSING', 'CLOSED', 'ENDED'];
    static INIT: 0;
    static OPEN: 1;
    static CLOSING: 2;
    static CLOSED: 3;
    static ENDED: 4;

    _state: number;
    _readable: boolean;
    _destination?: AsyncIterator<any>;

    readable: boolean;
    closed: boolean;
    ended: boolean;

    constructor();

    read(): T;
    each(callback: (data: T) => void, self?: any): void;
    close(): void;

    _changeState(newState: number, eventAsync?: boolean): void;
    private _hasListeners(eventName: string | symbol): boolean;
    // tslint:disable-next-line ban-types
    private _addSingleListener(eventName: string | symbol, listener: Function): void;
    _end(): void;

    getProperty(propertyName: string, callback?: (value: any) => void): any;
    setProperty(propertyName: string, value: any): void;
    getProperties(): {[id: string]: any};
    setProperties(properties: {[id: string]: any}): void;
    copyProperties(source: AsyncIterator<any>, propertyNames: string[]): void;

    toString(): string;
    _toStringDetails(): string;

    transform<T2>(options?: SimpleTransformIteratorOptions<T, T2>): SimpleTransformIterator<T, T2>;
    map<T2>(mapper: (item: T) => T2, self?: object): SimpleTransformIterator<T, T2>;
    filter(filter: (item: T) => boolean, self?: object): SimpleTransformIterator<T, T>;
    prepend(items: T[]): SimpleTransformIterator<T, T>;
    append<T>(items: T[]): SimpleTransformIterator<T, T>;
    surround<T>(prepend: T[], append: T[]): SimpleTransformIterator<T, T>;
    skip<T>(offset: number): SimpleTransformIterator<T, T>;
    take<T>(limit: number): SimpleTransformIterator<T, T>;
    range<T>(start: number, end: number): SimpleTransformIterator<T, T>;
    clone(): ClonedIterator<T>;

    static range(start?: number, end?: number, step?: number): IntegerIterator;

    // From EventEmitter
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string | symbol): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string | symbol): Array<() => void>;
    rawListeners(event: string | symbol): Array<() => void>;
    emit(event: string | symbol, ...args: any[]): boolean;
    listenerCount(type: string | symbol): number;
    // Added in Node 6...
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    eventNames(): Array<string | symbol>;
}

export class EmptyIterator<T> extends AsyncIterator<T> {
    _state: 4;
}

export class SingletonIterator<T> extends AsyncIterator<T> {
    constructor(item?: T);
}

export class ArrayIterator<T> extends AsyncIterator<T> {
    constructor(items?: T[]);
}

export interface IntegerIteratorOptions {
    step?: number;
    end?: number;
    start?: number;
}

export class IntegerIterator extends AsyncIterator<number> {
    _step: number;
    _last: number;
    _next: number;

    constructor(options?: IntegerIteratorOptions);
}

export interface BufferedIteratorOptions {
    maxBufferSize?: number;
    autoStart?: boolean;
}

export class BufferedIterator<T> extends AsyncIterator<T> {
    maxBufferSize: number;
    _pushedCount: number;
    _buffer: T[];

    _init(autoStart: boolean): void;
    _begin(done: () => void): void;
    _read(count: number, done: () => void): void;
    _push(item: T): void;
    _fillBuffer(): void;
    _completeClose(): void;
    _flush(done: () => void): void;

    constructor(options?: BufferedIteratorOptions);
}

export interface TransformIteratorOptions<S> extends BufferedIteratorOptions {
    optional?: boolean;
    source?: AsyncIterator<S>;
}

export class TransformIterator<S, T> extends BufferedIterator<T> {
    _optional: boolean;
    source: AsyncIterator<S>;

    _validateSource(source: AsyncIterator<S>, allowDestination?: boolean): void;
    _transform(item: S, done: (result: T) => void): void;
    _closeWhenDone(): void;

    constructor(source?: AsyncIterator<S> | TransformIteratorOptions<S>, options?: TransformIteratorOptions<S>);
}

export interface SimpleTransformIteratorOptions<S, T> extends TransformIteratorOptions<S> {
    offset?: number;
    limit?: number;
    prepend?: T[];
    append?: T[];

    filter?(item: S): boolean;
    map?(item: S): T;
    transform?(item: S, callback: (result: T) => void): void;
}

export class SimpleTransformIterator<S, T> extends TransformIterator<S, T> {
    _offset: number;
    _limit: number;
    _prepender?: ArrayIterator<T>;
    _appender?: ArrayIterator<T>;

    _filter?(item: S): boolean;
    _map?(item: S): T;
    _transform(item: S, done: (result: T) => void): void;

    _insert(inserter: AsyncIterator<S>, done: () => void): void;

    constructor(source?: AsyncIterator<S> | SimpleTransformIteratorOptions<S, T>,
                options?: SimpleTransformIteratorOptions<S, T>);
}

export class MultiTransformIterator<S, T> extends TransformIterator<S, T> {
    _transformerQueue: S[];

    _createTransformer(element: S): AsyncIterator<T>;

    constructor(source?: AsyncIterator<S> | TransformIteratorOptions<S>, options?: TransformIteratorOptions<S>);
}

export class ClonedIterator<T> extends TransformIterator<T, T> {
    _readPosition: number;

    constructor(source?: AsyncIterator<T>);
}
