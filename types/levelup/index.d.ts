// Type definitions for levelup 3.1
// Project: https://github.com/Level/levelup
// Definitions by: Meirion Hughes <https://github.com/MeirionHughes>
//                 Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import { EventEmitter } from 'events';
import { AbstractLevelDOWN, AbstractIteratorOptions, AbstractBatch, ErrorCallback, AbstractOptions, ErrorValueCallback, AbstractGetOptions } from 'abstract-leveldown';

type LevelUpPut<K, V, O> =
    ((key: K, value: V, callback: ErrorCallback) => void) &
    ((key: K, value: V, options: O, callback: ErrorCallback) => void) &
    ((key: K, value: V, options?: O) => Promise<void>);

type LevelUpGet<K, V, O> =
    ((key: K, callback: ErrorValueCallback<V>) => void) &
    ((key: K, options: O, callback: ErrorValueCallback<V>) => void) &
    ((key: K, options?: O) => Promise<V>);

type LevelUpDel<K, O> =
    ((key: K, callback: ErrorCallback) => void) &
    ((key: K, options: O, callback: ErrorCallback) => void) &
    ((key: K, options?: O) => Promise<void>);

type LevelUpBatch<K, O> =
    ((key: K, callback: ErrorCallback) => void) &
    ((key: K, options: O, callback: ErrorCallback) => void) &
    ((key: K, options?: O) => Promise<void>);

type InferDBPut<DB> =
    DB extends { put: (key: infer K, value: infer V, options: infer O, cb: any) => void } ?
    LevelUpPut<K, V, O> :
    LevelUpPut<any, any, AbstractOptions>;

type InferDBGet<DB> =
    DB extends { get: (key: infer K, options: infer O, callback: ErrorValueCallback<infer V>) => void } ?
    LevelUpGet<K, V, O> :
    LevelUpGet<any, any, AbstractGetOptions>;

type InferDBDel<DB> =
    DB extends { del: (key: infer K, options: infer O, callback: ErrorCallback) => void } ?
    LevelUpDel<K, O> :
    LevelUpDel<any, AbstractOptions>;

export interface LevelUp<DB = AbstractLevelDOWN> extends EventEmitter {
    open(): Promise<void>;
    open(callback?: ErrorCallback): void;
    close(): Promise<void>;
    close(callback?: ErrorCallback): void;

    put: InferDBPut<DB>;
    get: InferDBGet<DB>;
    del: InferDBDel<DB>;

    batch(array: AbstractBatch[], options?: any): Promise<void>;
    batch(array: AbstractBatch[], options: any, callback: (err?: any) => any): void;
    batch(array: AbstractBatch[], callback: (err?: any) => any): void;

    batch(): LevelUpChain;

    isOpen(): boolean;
    isClosed(): boolean;

    createReadStream(options?: AbstractIteratorOptions): NodeJS.ReadableStream;
    createKeyStream(options?: AbstractIteratorOptions): NodeJS.ReadableStream;
    createValueStream(options?: AbstractIteratorOptions): NodeJS.ReadableStream;

    /*
    emitted when a new value is 'put'
    */
    on(event: 'put', cb: (key: any, value: any) => void): this;
    /*
    emitted when a value is deleted
    */
    on(event: 'del', cb: (key: any) => void): this;
    /*
    emitted when a batch operation has executed
    */
    on(event: 'batch', cb: (ary: any[]) => void): this;
    /*
    emitted on given event
    */
    on(event: 'open' | 'ready' | 'closed' | 'opening' | 'closing', cb: () => void): this;
}

interface LevelUpConstructor {
    <DB extends AbstractLevelDOWN = AbstractLevelDOWN>(
        db: DB,
        options: any,
        cb?: ErrorCallback): LevelUp<DB>;

    <DB extends AbstractLevelDOWN = AbstractLevelDOWN>(
        db: DB,
        cb?: ErrorCallback): LevelUp<DB>;

    new <DB extends AbstractLevelDOWN = AbstractLevelDOWN>(
        db: DB,
        options: any,
        cb?: ErrorCallback): LevelUp<DB>;

    new <DB extends AbstractLevelDOWN = AbstractLevelDOWN>(
        db: DB,
        cb?: ErrorCallback): LevelUp<DB>;

    errors: /*typeof levelerrors*/ any; // ? level-errors is not in DT
}

export interface LevelUpChain<K = any, V = any> {
    readonly length: number;
    put(key: K, value: V): this;
    del(key: K): this;
    clear(): this;
    write(callback: ErrorCallback): this;
    write(): Promise<this>;
}

export const errors: /*typeof levelerrors*/ any; // ? level-errors is not in DT

declare const LevelUp: LevelUpConstructor;
export default LevelUp;
