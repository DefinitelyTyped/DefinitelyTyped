// Type definitions for asynciterator 1.1
// Project: https://github.com/rubenverborgh/AsyncIterator#readme
// Definitions by: Ruben Taelman <https://github.com/rubensworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import { EventEmitter } from "events";

export abstract class AsyncIterator<T> extends NodeJS.EventEmitter {
    protected static STATES: ['INIT', 'OPEN', 'CLOSING', 'CLOSED', 'ENDED'];
    protected static INIT: 0;
    protected static OPEN: 1;
    protected static CLOSING: 2;
    protected static CLOSED: 3;
    protected static ENDED: 4;

    protected _state: number;
    protected _readable: boolean;
    protected _destination?: AsyncIterator<any>;

    readable: boolean;
    closed: boolean;
    ended: boolean;

    constructor();

    read(): T;
    each(callback: (data: T) => void, self?: any): void;
    close(): void;

    protected _changeState(newState: number, eventAsync?: boolean): void;
    private _hasListeners(eventName: string | symbol): boolean;
    // tslint:disable-next-line ban-types
    private _addSingleListener(eventName: string | symbol, listener: Function): void;
    protected _end(): void;

    getProperty(propertyName: string, callback?: (value: any) => void): any;
    setProperty(propertyName: string, value: any): void;
    getProperties(): {[id: string]: any};
    setProperties(properties: {[id: string]: any}): void;
    copyProperties(source: AsyncIterator<any>, propertyNames: string[]): void;

    toString(): string;
    protected _toStringDetails(): string;

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
    protected _step: number;
    protected _last: number;
    protected _next: number;

    constructor(options?: IntegerIteratorOptions);
}

export interface BufferedIteratorOptions {
    maxBufferSize?: number;
    autoStart?: boolean;
}

export class BufferedIterator<T> extends AsyncIterator<T> {
    maxBufferSize: number;
    protected _pushedCount: number;
    protected _buffer: T[];

    protected _init(autoStart: boolean): void;
    protected _begin(done: () => void): void;
    protected _read(count: number, done: () => void): void;
    protected _push(item: T): void;
    protected _fillBuffer(): void;
    protected _completeClose(): void;
    protected _flush(done: () => void): void;

    constructor(options?: BufferedIteratorOptions);
}

export interface TransformIteratorOptions<S> extends BufferedIteratorOptions {
    optional?: boolean;
    source?: AsyncIterator<S>;
}

export class TransformIterator<S, T> extends BufferedIterator<T> {
    protected _optional: boolean;
    source: AsyncIterator<S>;

    protected _validateSource(source: AsyncIterator<S>, allowDestination?: boolean): void;
    protected _transform(item: S, done: (result: T) => void): void;
    protected _closeWhenDone(): void;

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
    protected _offset: number;
    protected _limit: number;
    protected _prepender?: ArrayIterator<T>;
    protected _appender?: ArrayIterator<T>;

    protected _filter?(item: S): boolean;
    protected _map?(item: S): T;
    protected _transform(item: S, done: (result: T) => void): void;

    protected _insert(inserter: AsyncIterator<S>, done: () => void): void;

    constructor(source?: AsyncIterator<S> | SimpleTransformIteratorOptions<S, T>,
                options?: SimpleTransformIteratorOptions<S, T>);
}

export class MultiTransformIterator<S, T> extends TransformIterator<S, T> {
    _transformerQueue: S[];

    protected _createTransformer(): AsyncIterator<S>;

    constructor(source?: AsyncIterator<S> | TransformIteratorOptions<S>, options?: TransformIteratorOptions<S>);
}

export class ClonedIterator<T> extends TransformIterator<T, T> {
    _readPosition: number;

    constructor(source?: AsyncIterator<T>);
}
