// Type definitions for ioredis 4.19
// Project: https://github.com/luin/ioredis
// Definitions by: York Yao <https://github.com/plantain-00>
//                 Christopher Eck <https://github.com/chrisleck>
//                 Yoga Aliarham <https://github.com/aliarham11>
//                 Ebrahim <https://github.com/br8h>
//                 Whemoon Jang <https://github.com/palindrom615>
//                 Francis Gulotta <https://github.com/reconbot>
//                 Dmitry Motovilov <https://github.com/funthing>
//                 Oleg Repin <https://github.com/iamolegga>
//                 Ting-Wai To <https://github.com/tingwai-to>
//                 Alex Petty <https://github.com/pettyalex>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Tianlin <https://github.com/tianlinle>
//                 Demian Rodriguez <https://github.com/demian85>
//                 Andrew Lavers <https://github.com/alavers>
//                 Claudiu Ceia <https://github.com/ClaudiuCeia>
//                 Asyrique <https://github.com/asyrique>
//                 Michael Salaverry <https://github.com/barakplasma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/* =================== USAGE ===================
    import * as Redis from "ioredis";
    const redis = new Redis();
 =============================================== */

/// <reference types="node" />

import { ConnectionOptions } from 'tls';
import { Readable } from 'stream';
import { EventEmitter } from 'events';

interface RedisStatic {
    new (port?: number, host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    new (host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    new (options?: IORedis.RedisOptions): IORedis.Redis;
    (port?: number, host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    (host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    (options?: IORedis.RedisOptions): IORedis.Redis;
    Cluster: IORedis.ClusterStatic;
    Command: typeof Command;
}

declare var IORedis: RedisStatic;
export = IORedis;

declare class Commander {
    getBuiltinCommands(): string[];
    createBuiltinCommand(commandName: string): {};
    defineCommand(
        name: string,
        definition: {
            numberOfKeys?: number;
            lua?: string;
        },
    ): void;
    sendCommand(): void;
}

interface CommandOptions {
    replyEncoding?: string | null;
    errorStack?: string;
    keyPrefix?: string;
}
declare class Command {
    isCustomCommand: boolean;
    args: IORedis.ValueType[];
    getSlot(): number | null;
    getKeys(): Array<string | Buffer>;
    constructor(
        name: string,
        args: IORedis.ValueType[],
        opts?: CommandOptions,
        callback?: (err: null, result: any) => void,
    );
    static setArgumentTransformer(name: string, fn: (args: IORedis.ValueType[]) => IORedis.ValueType[]): void;
    static setReplyTransformer(name: string, fn: (result: any) => any): void;
}

// For backwards compatibility
type _Command = typeof Command;

declare namespace IORedis {
    type BooleanResponse = 1 | 0;
    type Callback<T> = (err: Error | null, res: T) => void;
    type KeyType = string | Buffer;
    type ValueType = string | Buffer | number | any[];

    interface OverloadedCommand<T, U> {
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, cb: Callback<U>): void;
        (arg1: T | T[], cb: Callback<U>): void;
        (cb: Callback<U>): void;
        (...args: T[]): Promise<U>;
        (arg1: T[]): Promise<U>;
    }

    interface OverloadedListCommand<T, U> {
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, cb: Callback<U>): void;
        (arg1: T | T[], cb: Callback<U>): void;
        (...args: T[]): Promise<U>;
        (arg1: T[]): Promise<U>;
    }

    interface OverloadedBlockingListCommand<T, U> {
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, timeout: number, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, timeout: number, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, timeout: number, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, timeout: number, cb: Callback<U>): void;
        (arg1: T, arg2: T, timeout: number, cb: Callback<U>): void;
        (arg1: T, timeout: number, cb: Callback<U>): void;
        (arg1: Array<T | number>, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, timeout: number): Promise<U>;
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, timeout: number): Promise<U>;
        (arg1: T, arg2: T, arg3: T, arg4: T, timeout: number): Promise<U>;
        (arg1: T, arg2: T, arg3: T, timeout: number): Promise<U>;
        (arg1: T, arg2: T, timeout: number): Promise<U>;
        (arg1: T, timeout: number): Promise<U>;
        (arg1: Array<T | number>): Promise<U>;
        (...args: Array<T | number>): Promise<U>;
    }

    interface OverloadedSubCommand<T, U> {
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, cb: Callback<U>): void;
        (arg1: T, arg2: T | T[], cb: Callback<U>): void;
        (arg1: T | T[], cb: Callback<U>): void;
        (...args: T[]): Promise<U>;
        (arg1: T[]): Promise<U>;
    }

    interface OverloadedKeyCommand<T, U> {
        (key: KeyType, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb: Callback<U>): void;
        (key: KeyType, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb: Callback<U>): void;
        (key: KeyType, arg1: T, arg2: T, arg3: T, arg4: T, cb: Callback<U>): void;
        (key: KeyType, arg1: T, arg2: T, arg3: T, cb: Callback<U>): void;
        (key: KeyType, arg1: T, arg2: T, cb: Callback<U>): void;
        (key: KeyType, arg1: T | T[], cb: Callback<U>): void;
        (key: KeyType, ...args: T[]): Promise<U>;
        (key: KeyType, arg1: T[]): Promise<U>;
    }

    interface OverloadedHashCommand<T, U> {
        (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, arg3: T, arg4: T, cb: Callback<U>): void;
        (arg1: T, arg2: T, cb: Callback<U>): void;
        (data: T[] | { [key: string]: T } | Map<string, T>, cb: Callback<U>): void;
        (data: T[] | { [key: string]: T } | Map<string, T>): Promise<U>;
        (...args: T[]): Promise<U>;
    }

    interface OverloadedKeyedHashCommand<T, U> {
        (key: KeyType, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb: Callback<U>): void;
        (key: KeyType, arg1: T, arg2: T, arg3: T, arg4: T, cb: Callback<U>): void;
        (key: KeyType, arg1: T, arg2: T, cb: Callback<U>): void;
        (key: KeyType, data: T[] | { [key: string]: T } | Map<string, ValueType>, cb: Callback<U>): void;
        (key: KeyType, data: T[] | { [key: string]: T } | Map<string, ValueType>): Promise<U>;
        (key: KeyType, ...args: T[]): Promise<U>;
    }

    interface OverloadedEvalCommand<T, U> {
        (script: string, numKeys: number, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb: Callback<U>): void;
        (script: string, numKeys: number, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb: Callback<U>): void;
        (script: string, numKeys: number, arg1: T, arg2: T, arg3: T, arg4: T, cb: Callback<U>): void;
        (script: string, numKeys: number, arg1: T, arg2: T, arg3: T, cb: Callback<U>): void;
        (script: string, numKeys: number, arg1: T, arg2: T, cb: Callback<U>): void;
        (script: string, numKeys: number, arg1: T | T[], cb: Callback<U>): void;
        (script: string, numKeys: number, ...args: T[]): Promise<U>;
        (script: string, numKeys: number, arg1: T[]): Promise<U>;
        // This overload exists specifically to retain compatibility to `redlock`
        // All arguments are by default flattened, declaring all possible permuatations
        // would be unreasonable (and probably impossible)
        (args: ValueType[], callback?: Callback<any>): any;
    }

    interface OverloadedScanCommand<T, U> {
        (key: string, cursor: number, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb: Callback<U>): void;
        (key: string, cursor: number, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb: Callback<U>): void;
        (key: string, cursor: number, arg1: T, arg2: T, arg3: T, arg4: T, cb: Callback<U>): void;
        (key: string, cursor: number, arg1: T, arg2: T, arg3: T, cb: Callback<U>): void;
        (key: string, cursor: number, arg1: T, arg2: T, cb: Callback<U>): void;
        (key: string, cursor: number, arg1: T | T[], cb: Callback<U>): void;
        (key: string, cursor: number, cb: Callback<U>): void;
        (key: string, cursor: number, ...args: T[]): Promise<U>;
        (key: string, cursor: number, arg1: T[]): Promise<U>;
    }

    type Command = _Command;

    interface Commands {
        bitcount(key: KeyType, callback: Callback<number>): void;
        bitcount(key: KeyType, start: number, end: number, callback: (err: Error, res: number) => void): void;
        bitcount(key: KeyType): Promise<number>;
        bitcount(key: KeyType, start: number, end: number): Promise<number>;

        get(key: KeyType, callback: Callback<string | null>): void;
        get(key: KeyType): Promise<string | null>;

        getBuffer(key: KeyType, callback: Callback<Buffer>): void;
        getBuffer(key: KeyType): Promise<Buffer>;

        set(
            key: KeyType,
            value: ValueType,
            expiryMode?: string | any[],
            time?: number | string,
            setMode?: number | string,
        ): Promise<Ok | null>;

        set(key: KeyType, value: ValueType, callback: Callback<Ok>): void;
        set(key: KeyType, value: ValueType, setMode: string | any[], callback: Callback<Ok | null>): void;
        set(key: KeyType, value: ValueType, expiryMode: string, time: number | string, callback: Callback<Ok>): void;
        set(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number | string,
            setMode: number | string,
            callback: Callback<Ok | null>,
        ): void;

        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode?: string | any[],
            time?: number | string,
            setMode?: number | string,
        ): Promise<Buffer>;

        setBuffer(key: KeyType, value: ValueType, callback: Callback<Buffer>): void;
        setBuffer(key: KeyType, value: ValueType, setMode: string, callback: Callback<Buffer>): void;
        setBuffer(key: KeyType, value: ValueType, expiryMode: string, time: number, callback: Callback<Buffer>): void;
        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number | string,
            setMode: number | string,
            callback: Callback<Buffer>,
        ): void;

        setnx(key: KeyType, value: ValueType, callback: Callback<BooleanResponse>): void;
        setnx(key: KeyType, value: ValueType): Promise<BooleanResponse>;

        setex(key: KeyType, seconds: number, value: ValueType, callback: Callback<Ok>): void;
        setex(key: KeyType, seconds: number, value: ValueType): Promise<Ok>;

        psetex(key: KeyType, milliseconds: number, value: ValueType, callback: Callback<Ok>): void;
        psetex(key: KeyType, milliseconds: number, value: ValueType): Promise<Ok>;

        append(key: KeyType, value: ValueType, callback: Callback<number>): void;
        append(key: KeyType, value: ValueType): Promise<number>;

        strlen(key: KeyType, callback: Callback<number>): void;
        strlen(key: KeyType): Promise<number>;

        del: OverloadedListCommand<KeyType, number>;

        unlink: OverloadedListCommand<KeyType, number>;

        exists(...keys: KeyType[]): Promise<number>;
        exists(key: KeyType, callback: Callback<number>): void;

        setbit(key: KeyType, offset: number, value: ValueType, callback: Callback<number>): void;
        setbit(key: KeyType, offset: number, value: ValueType): Promise<number>;

        getbit(key: KeyType, offset: number, callback: Callback<number>): void;
        getbit(key: KeyType, offset: number): Promise<number>;

        setrange(key: KeyType, offset: number, value: ValueType, callback: Callback<number>): void;
        setrange(key: KeyType, offset: number, value: ValueType): Promise<number>;

        getrange(key: KeyType, start: number, end: number, callback: Callback<string>): void;
        getrange(key: KeyType, start: number, end: number): Promise<string>;

        getrangeBuffer(key: KeyType, start: number, end: number, callback: Callback<Buffer>): void;
        getrangeBuffer(key: KeyType, start: number, end: number): Promise<Buffer>;

        substr(key: KeyType, start: number, end: number, callback: Callback<string>): void;
        substr(key: KeyType, start: number, end: number): Promise<string>;

        incr(key: KeyType, callback: Callback<number>): void;
        incr(key: KeyType): Promise<number>;

        decr(key: KeyType, callback: Callback<number>): void;
        decr(key: KeyType): Promise<number>;

        mget: OverloadedListCommand<KeyType, Array<string | null>>;

        rpush: OverloadedKeyCommand<ValueType, number>;
        rpushBuffer: OverloadedKeyCommand<Buffer, number>;

        lpush: OverloadedKeyCommand<ValueType, number>;
        lpushBuffer: OverloadedKeyCommand<Buffer, number>;

        rpushx: OverloadedKeyCommand<ValueType, number>;

        lpushx: OverloadedKeyCommand<ValueType, number>;

        linsert(
            key: KeyType,
            direction: 'BEFORE' | 'AFTER',
            pivot: string,
            value: ValueType,
            callback: Callback<number>,
        ): void;
        linsert(key: KeyType, direction: 'BEFORE' | 'AFTER', pivot: string, value: ValueType): Promise<number>;

        rpop(key: KeyType, callback: Callback<string>): void;
        rpop(key: KeyType): Promise<string>;

        lpop(key: KeyType, callback: Callback<string>): void;
        lpop(key: KeyType): Promise<string>;

        lpos(key: KeyType, value: ValueType, rank?: number, count?: number, maxlen?: number): Promise<number | null>;

        lpopBuffer(key: KeyType, callback: Callback<Buffer>): void;
        lpopBuffer(key: KeyType): Promise<Buffer>;

        brpop: OverloadedBlockingListCommand<KeyType, [string, string]>;

        blpop: OverloadedBlockingListCommand<KeyType, [string, string]>;

        brpoplpush(source: string, destination: string, timeout: number, callback: Callback<string>): void;
        brpoplpush(source: string, destination: string, timeout: number): Promise<string>;

        llen(key: KeyType, callback: Callback<number>): void;
        llen(key: KeyType): Promise<number>;

        lindex(key: KeyType, index: number, callback: Callback<string>): void;
        lindex(key: KeyType, index: number): Promise<string>;

        lset(key: KeyType, index: number, value: ValueType, callback: Callback<Ok>): void;
        lset(key: KeyType, index: number, value: ValueType): Promise<Ok>;

        lrange(key: KeyType, start: number, stop: number, callback: Callback<string[]>): void;
        lrange(key: KeyType, start: number, stop: number): Promise<string[]>;

        lrangeBuffer(key: KeyType, start: number, stop: number, callback: Callback<Buffer[]>): void;
        lrangeBuffer(key: KeyType, start: number, stop: number): Promise<Buffer[]>;

        ltrim(key: KeyType, start: number, stop: number, callback: Callback<Ok>): void;
        ltrim(key: KeyType, start: number, stop: number): Promise<Ok>;

        lrem(key: KeyType, count: number, value: ValueType, callback: Callback<number>): void;
        lrem(key: KeyType, count: number, value: ValueType): Promise<number>;

        rpoplpush(source: string, destination: string, callback: Callback<string>): void;
        rpoplpush(source: string, destination: string): Promise<string>;

        rpoplpushBuffer(source: string, destination: string, callback: Callback<Buffer>): void;
        rpoplpushBuffer(source: string, destination: string): Promise<Buffer>;

        sadd: OverloadedKeyCommand<ValueType, number>;

        srem: OverloadedKeyCommand<ValueType, number>;

        smove(source: string, destination: string, member: string, callback: Callback<BooleanResponse>): void;
        smove(source: string, destination: string, member: string): Promise<BooleanResponse>;

        sismember(key: KeyType, member: string, callback: Callback<BooleanResponse>): void;
        sismember(key: KeyType, member: string): Promise<BooleanResponse>;

        scard(key: KeyType, callback: Callback<number>): void;
        scard(key: KeyType): Promise<number>;

        spop(key: KeyType, callback: Callback<string | null>): void;
        spop(key: KeyType): Promise<string | null>;
        spop(key: KeyType, count: number, callback: Callback<string[]>): void;
        spop(key: KeyType, count: number): Promise<string[]>;

        srandmember(key: KeyType, callback: Callback<string | null>): void;
        srandmember(key: KeyType): Promise<string | null>;
        srandmember(key: KeyType, count: number, callback: Callback<string[]>): void;
        srandmember(key: KeyType, count: number): Promise<string[]>;

        sinter: OverloadedListCommand<KeyType, string[]>;

        sinterstore: OverloadedKeyCommand<KeyType, number>;

        sunion: OverloadedListCommand<KeyType, string[]>;

        sunionstore: OverloadedKeyCommand<KeyType, number>;

        sdiff: OverloadedListCommand<KeyType, string[]>;

        sdiffstore: OverloadedKeyCommand<KeyType, number>;

        smembers(key: KeyType, callback: Callback<string[]>): void;
        smembers(key: KeyType): Promise<string[]>;

        zadd: OverloadedKeyCommand<KeyType | number, number | string>;

        zaddBuffer(key: KeyType, score1: number, member1: Buffer, callback: Callback<string | number>): void;
        zaddBuffer(key: KeyType, score1: number, member1: Buffer): Promise<string | number>;

        zincrby(key: KeyType, increment: number, member: string, callback: Callback<string>): void;
        zincrby(key: KeyType, increment: number, member: string): Promise<string>;

        zpopmin(key: KeyType, callback: Callback<string[]>): void;
        zpopmin(key: KeyType, count: number, callback: Callback<string[]>): void;
        zpopmin(key: KeyType, count?: number): Promise<string[]>;

        zpopmax(key: KeyType, callback: Callback<string[]>): void;
        zpopmax(key: KeyType, count: number, callback: Callback<string[]>): void;
        zpopmax(key: KeyType, count?: number): Promise<string[]>;

        bzpopmin: OverloadedBlockingListCommand<KeyType, [string, string, string]>;

        bzpopmax: OverloadedBlockingListCommand<KeyType, [string, string, string]>;

        zrem: OverloadedKeyCommand<ValueType, number>;

        zremrangebyscore(key: KeyType, min: number | string, max: number | string, callback: Callback<number>): void;
        zremrangebyscore(key: KeyType, min: number | string, max: number | string): Promise<number>;

        zremrangebyrank(key: KeyType, start: number, stop: number, callback: Callback<number>): void;
        zremrangebyrank(key: KeyType, start: number, stop: number): Promise<number>;

        zremrangebylex(
            key: KeyType,
            min: string,
            max: string,
        ): Promise<number>;
        zremrangebylex(
            key: KeyType,
            min: string,
            max: string,
            callback: Callback<number>
        ): void;

        zunionstore: OverloadedKeyCommand<KeyType | number, number>;

        zinterstore: OverloadedKeyCommand<KeyType | number, number>;

        zrange(key: KeyType, start: number, stop: number, callback: Callback<string[]>): void;
        zrange(key: KeyType, start: number, stop: number, withScores: 'WITHSCORES', callback: Callback<string[]>): void;
        zrange(key: KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<string[]>;

        zrangeBuffer(key: KeyType, start: number, stop: number, callback: Callback<Buffer[]>): void;
        zrangeBuffer(key: KeyType, start: number, stop: number, withScores: 'WITHSCORES', callback: Callback<Buffer[]>): void;
        zrangeBuffer(key: KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<Buffer[]>;

        zrevrange(key: KeyType, start: number, stop: number, callback: Callback<string[]>): void;
        zrevrange(
            key: KeyType,
            start: number,
            stop: number,
            withScores: 'WITHSCORES',
            callback: Callback<string[]>,
        ): void;
        zrevrange(key: KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<string[]>;

        zrevrangeBuffer(key: KeyType, start: number, stop: number, callback: Callback<Buffer[]>): void;
        zrevrangeBuffer(
            key: KeyType,
            start: number,
            stop: number,
            withScores: 'WITHSCORES',
            callback: Callback<Buffer[]>,
        ): void;
        zrevrangeBuffer(key: KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<Buffer[]>;

        zrangebyscore(
            key: KeyType,
            min: number | string,
            max: number | string,
            withScores?: 'WITHSCORES',
        ): Promise<string[]>;
        zrangebyscore(
            key: KeyType,
            min: number | string,
            max: number | string,
            withScores: 'WITHSCORES',
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<string[]>;
        zrangebyscore(
            key: KeyType,
            min: number | string,
            max: number | string,
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<string[]>;
        zrangebyscore(key: KeyType, min: number | string, max: number | string, callback: Callback<string[]>): void;
        zrangebyscore(
            key: KeyType,
            min: number | string,
            max: number | string,
            withScores: 'WITHSCORES',
            callback: Callback<string[]>,
        ): void;
        zrangebyscore(
            key: KeyType,
            min: number | string,
            max: number | string,
            withScores: 'WITHSCORES',
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<string[]>,
        ): void;
        zrangebyscore(
            key: KeyType,
            min: number | string,
            max: number | string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<string[]>,
        ): void;

        zrangebyscoreBuffer(
            key: KeyType,
            min: number | string,
            max: number | string,
            withScores?: 'WITHSCORES',
        ): Promise<Buffer[]>;
        zrangebyscoreBuffer(
            key: KeyType,
            min: number | string,
            max: number | string,
            withScores: 'WITHSCORES',
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<Buffer[]>;
        zrangebyscoreBuffer(
            key: KeyType,
            min: number | string,
            max: number | string,
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<Buffer[]>;
        zrangebyscoreBuffer(key: KeyType, min: number | string, max: number | string, callback: Callback<Buffer[]>): void;
        zrangebyscoreBuffer(
            key: KeyType,
            min: number | string,
            max: number | string,
            withScores: 'WITHSCORES',
            callback: Callback<Buffer[]>,
        ): void;
        zrangebyscoreBuffer(
            key: KeyType,
            min: number | string,
            max: number | string,
            withScores: 'WITHSCORES',
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<Buffer[]>,
        ): void;
        zrangebyscoreBuffer(
            key: KeyType,
            min: number | string,
            max: number | string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<Buffer[]>,
        ): void;

        zrevrangebyscore(
            key: KeyType,
            max: number | string,
            min: number | string,
            withScores?: 'WITHSCORES',
        ): Promise<string[]>;
        zrevrangebyscore(
            key: KeyType,
            max: number | string,
            min: number | string,
            withScores: 'WITHSCORES',
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<string[]>;
        zrevrangebyscore(
            key: KeyType,
            max: number | string,
            min: number | string,
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<string[]>;
        zrevrangebyscore(key: KeyType, max: number | string, min: number | string, callback: Callback<string[]>): void;
        zrevrangebyscore(
            key: KeyType,
            max: number | string,
            min: number | string,
            withScores: 'WITHSCORES',
            callback: Callback<string[]>,
        ): void;
        zrevrangebyscore(
            key: KeyType,
            max: number | string,
            min: number | string,
            withScores: 'WITHSCORES',
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<string[]>,
        ): void;
        zrevrangebyscore(
            key: KeyType,
            max: number | string,
            min: number | string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<string[]>,
        ): void;

        zrevrangebyscoreBuffer(
            key: KeyType,
            max: number | string,
            min: number | string,
            withScores?: 'WITHSCORES',
        ): Promise<Buffer[]>;
        zrevrangebyscoreBuffer(
            key: KeyType,
            max: number | string,
            min: number | string,
            withScores: 'WITHSCORES',
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<Buffer[]>;
        zrevrangebyscoreBuffer(
            key: KeyType,
            max: number | string,
            min: number | string,
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<Buffer[]>;
        zrevrangebyscoreBuffer(key: KeyType, max: number | string, min: number | string, callback: Callback<Buffer[]>): void;
        zrevrangebyscoreBuffer(
            key: KeyType,
            max: number | string,
            min: number | string,
            withScores: 'WITHSCORES',
            callback: Callback<Buffer[]>,
        ): void;
        zrevrangebyscoreBuffer(
            key: KeyType,
            max: number | string,
            min: number | string,
            withScores: 'WITHSCORES',
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<Buffer[]>,
        ): void;
        zrevrangebyscoreBuffer(
            key: KeyType,
            max: number | string,
            min: number | string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<Buffer[]>,
        ): void;

        zrangebylex(
            key: KeyType,
            min: string,
            max: string,
        ): Promise<string[]>;
        zrangebylex(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<string[]>;
        zrangebylex(
            key: KeyType,
            min: string,
            max: string,
            callback: Callback<string[]>,
        ): void;
        zrangebylex(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<string[]>,
        ): void;

        zrangebylexBuffer(
            key: KeyType,
            min: string,
            max: string,
        ): Promise<Buffer[]>;
        zrangebylexBuffer(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<Buffer[]>;
        zrangebylexBuffer(
            key: KeyType,
            min: string,
            max: string,
            callback: Callback<Buffer[]>,
        ): void;
        zrangebylexBuffer(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<Buffer[]>,
        ): void;

        zrevrangebylex(
            key: KeyType,
            min: string,
            max: string,
        ): Promise<string[]>;
        zrevrangebylex(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<string[]>;
        zrevrangebylex(
            key: KeyType,
            min: string,
            max: string,
            callback: Callback<string[]>,
        ): void;
        zrevrangebylex(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<string[]>,
        ): void;

        zrevrangebylexBuffer(
            key: KeyType,
            min: string,
            max: string,
        ): Promise<Buffer[]>;
        zrevrangebylexBuffer(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
        ): Promise<Buffer[]>;
        zrevrangebylexBuffer(
            key: KeyType,
            min: string,
            max: string,
            callback: Callback<Buffer[]>,
        ): void;
        zrevrangebylexBuffer(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback: Callback<Buffer[]>,
        ): void;

        zcount(key: KeyType, min: number | string, max: number | string, callback: Callback<number>): void;
        zcount(key: KeyType, min: number | string, max: number | string): Promise<number>;

        zcard(key: KeyType, callback: Callback<number>): void;
        zcard(key: KeyType): Promise<number>;

        zscore(key: KeyType, member: string, callback: Callback<string>): void;
        zscore(key: KeyType, member: string): Promise<string>;

        zrank(key: KeyType, member: string, callback: Callback<number | null>): void;
        zrank(key: KeyType, member: string): Promise<number | null>;

        zrevrank(key: KeyType, member: string, callback: Callback<number | null>): void;
        zrevrank(key: KeyType, member: string): Promise<number | null>;

        hset: OverloadedKeyedHashCommand<ValueType, number>;

        hsetBuffer(key: KeyType, field: string, value: ValueType, callback: Callback<BooleanResponse>): void;
        hsetBuffer(key: KeyType, field: string, value: ValueType): Promise<Buffer>;

        hsetnx(key: KeyType, field: string, value: ValueType, callback: Callback<BooleanResponse>): void;
        hsetnx(key: KeyType, field: string, value: ValueType): Promise<BooleanResponse>;

        hget(key: KeyType, field: string, callback: Callback<string | null>): void;
        hget(key: KeyType, field: string): Promise<string | null>;
        hgetBuffer(key: KeyType, field: string, callback: Callback<Buffer>): void;
        hgetBuffer(key: KeyType, field: string): Promise<Buffer>;

        hmset: OverloadedKeyedHashCommand<ValueType, Ok>;

        hmget: OverloadedKeyCommand<KeyType, Array<string | null>>;

        hstrlen(key: KeyType, field: string, callback: Callback<number>): void;
        hstrlen(key: KeyType, field: string): Promise<number>;

        hincrby(key: KeyType, field: string, increment: number, callback: Callback<number>): void;
        hincrby(key: KeyType, field: string, increment: number): Promise<number>;

        hincrbyfloat(key: KeyType, field: string, increment: number, callback: Callback<number>): void;
        hincrbyfloat(key: KeyType, field: string, increment: number): Promise<number>;

        hdel: OverloadedKeyCommand<KeyType, number>;

        hlen(key: KeyType, callback: Callback<number>): void;
        hlen(key: KeyType): Promise<number>;

        hkeys(key: KeyType, callback: Callback<string[]>): void;
        hkeys(key: KeyType): Promise<string[]>;

        hvals(key: KeyType, callback: Callback<string[]>): void;
        hvals(key: KeyType): Promise<string[]>;

        hgetall(key: KeyType, callback: Callback<Record<string, string>>): void;
        hgetall(key: KeyType): Promise<Record<string, string>>;

        hexists(key: KeyType, field: string, callback: Callback<BooleanResponse>): void;
        hexists(key: KeyType, field: string): Promise<BooleanResponse>;

        geoadd(key: KeyType, longitude: number, latitude: number, member: string, callback: Callback<number>): void;
        geoadd(key: KeyType, longitude: number, latitude: number, member: string): Promise<number>;

        geodist(key: KeyType, member1: string, member2: string, unit: 'm'|'km'|'ft'|'mi', callback: Callback<string | null>): void;
        geodist(key: KeyType, member1: string, member2: string, unit: 'm'|'km'|'ft'|'mi'): Promise<string | null>;

        geohash: OverloadedKeyCommand<string, string[]>;

        geopos: OverloadedKeyCommand<string, string[]>;

        georadius(
            key: KeyType,
            longitude: number,
            latitude: number,
            radius: number,
            unit: 'm'|'km'|'ft'|'mi',
            callback: Callback<string[]>,
        ): void;
        georadius(
            key: KeyType,
            longitude: number,
            latitude: number,
            radius: number,
            unit: 'm'|'km'|'ft'|'mi',
            sort?: 'ASC' | 'DESC'
        ): Promise<string[]>;
        georadius(
            key: KeyType,
            longitude: number,
            latitude: number,
            radius: number,
            unit: 'm'|'km'|'ft'|'mi',
            count: 'COUNT',
            countValue: number,
            sort?: 'ASC' | 'DESC'
        ): Promise<string[]>;

        georadiusbymember(key: KeyType, member: string, radius: number, unit: 'm'|'km'|'ft'|'mi', callback: Callback<string[]>): void;
        georadiusbymember(key: KeyType, member: string, radius: number, unit: 'm'|'km'|'ft'|'mi', count: 'COUNT', countValue: number, callback: Callback<string[]>): void;
        georadiusbymember(key: KeyType, member: string, radius: number, unit: 'm'|'km'|'ft'|'mi'): Promise<string[]>;
        georadiusbymember(key: KeyType, member: string, radius: number, unit: 'm'|'km'|'ft'|'mi', count: 'COUNT', countValue: number): Promise<string[]>;

        incrby(key: KeyType, increment: number, callback: Callback<number>): void;
        incrby(key: KeyType, increment: number): Promise<number>;

        incrbyfloat(key: KeyType, increment: number, callback: Callback<number>): void;
        incrbyfloat(key: KeyType, increment: number): Promise<number>;

        decrby(key: KeyType, decrement: number, callback: Callback<number>): void;
        decrby(key: KeyType, decrement: number): Promise<number>;

        getset(key: KeyType, value: ValueType, callback: Callback<string | null>): void;
        getset(key: KeyType, value: ValueType): Promise<string | null>;

        mset: OverloadedHashCommand<ValueType, Ok>;
        msetnx: OverloadedHashCommand<ValueType, BooleanResponse>;

        memory(argument: 'USAGE', key: KeyType, callback?: Callback<number>): Promise<number>;

        randomkey(callback: Callback<string>): void;
        randomkey(): Promise<string>;

        select(index: number, callback: Callback<Ok>): void;
        select(index: number): Promise<Ok>;

        move(key: KeyType, db: string, callback: Callback<BooleanResponse>): void;
        move(key: KeyType, db: string): Promise<BooleanResponse>;

        rename(key: KeyType, newkey: KeyType, callback: Callback<Ok>): void;
        rename(key: KeyType, newkey: KeyType): Promise<Ok>;

        renamenx(key: KeyType, newkey: KeyType, callback: Callback<BooleanResponse>): void;
        renamenx(key: KeyType, newkey: KeyType): Promise<BooleanResponse>;

        expire(key: KeyType, seconds: number, callback: Callback<BooleanResponse>): void;
        expire(key: KeyType, seconds: number): Promise<BooleanResponse>;

        pexpire(key: KeyType, milliseconds: number, callback: Callback<BooleanResponse>): void;
        pexpire(key: KeyType, milliseconds: number): Promise<BooleanResponse>;

        expireat(key: KeyType, timestamp: number, callback: Callback<BooleanResponse>): void;
        expireat(key: KeyType, timestamp: number): Promise<BooleanResponse>;

        pexpireat(key: KeyType, millisecondsTimestamp: number, callback: Callback<BooleanResponse>): void;
        pexpireat(key: KeyType, millisecondsTimestamp: number): Promise<BooleanResponse>;

        keys(pattern: string, callback: Callback<string[]>): void;
        keys(pattern: string): Promise<string[]>;

        dbsize(callback: Callback<number>): void;
        dbsize(): Promise<number>;

        auth(username: string, password: string, callback: Callback<string>): void;
        auth(password: string, callback: Callback<string>): void;
        // tslint:disable-next-line unified-signatures
        auth(username: string, password: string): Promise<string>;
        auth(password: string): Promise<string>;

        ping(callback: Callback<string>): void;
        ping(message: string, callback: Callback<string>): void;
        ping(message?: string): Promise<string>;

        echo(message: string, callback: Callback<string>): void;
        echo(message: string): Promise<string>;

        save(callback: Callback<string>): void;
        save(): Promise<string>;

        bgsave(callback: Callback<string>): void;
        bgsave(): Promise<string>;

        bgrewriteaof(callback: Callback<string>): void;
        bgrewriteaof(): Promise<string>;

        shutdown(save: 'SAVE' | 'NOSAVE', callback: Callback<never>): void;
        shutdown(save: 'SAVE' | 'NOSAVE'): Promise<never>;

        lastsave(callback: Callback<number>): void;
        lastsave(): Promise<number>;

        type(key: KeyType, callback: Callback<string>): void;
        type(key: KeyType): Promise<string>;

        multi(commands?: string[][], options?: MultiOptions): Pipeline;
        multi(options: { pipeline: false }): Promise<Ok>;

        exec(callback: Callback<Array<[Error | null, string]>>): void;
        exec(): Promise<Array<[Error | null, string]>>;

        discard(callback: Callback<Ok>): void;
        discard(): Promise<Ok>;

        sync(callback: Callback<any>): void;
        sync(): Promise<any>;

        flushdb(callback: Callback<Ok>): void;
        flushdb(): Promise<Ok>;

        flushall(callback: Callback<Ok>): void;
        flushall(): Promise<Ok>;

        sort: OverloadedListCommand<KeyType | number, string[] | number>;

        info(callback: Callback<string>): void;
        info(section: string, callback: Callback<string>): void;
        info(section?: string): Promise<string>;

        time(callback: Callback<[string, string]>): void;
        time(): Promise<[string, string]>;

        monitor(callback: Callback<EventEmitter>): void;
        monitor(): Promise<EventEmitter>;

        ttl(key: KeyType, callback: Callback<number>): void;
        ttl(key: KeyType): Promise<number>;

        pttl(key: KeyType, callback: Callback<number>): void;
        pttl(key: KeyType): Promise<number>;

        persist(key: KeyType, callback: Callback<BooleanResponse>): void;
        persist(key: KeyType): Promise<BooleanResponse>;

        slaveof(host: string, port: number, callback: Callback<string>): void;
        slaveof(host: string, port: number): Promise<string>;

        debug: OverloadedSubCommand<ValueType, any>;

        config(op: 'GET', cfg: string): Promise<string[]>;
        config(op: 'GET', cfg: string, callback: Callback<string[]>): void;
        config(op: 'REWRITE' | 'RESETSTAT'): Promise<Ok>;
        config(op: 'REWRITE' | 'RESETSTAT', callback: Callback<Ok>): void;
        config(op: 'SET', key: string, value: ValueType): Promise<Ok>;
        config(op: 'SET', key: string, value: ValueType, callback: Callback<Ok>): void;

        subscribe: OverloadedListCommand<string, number>;

        unsubscribe: OverloadedCommand<string, number>;

        psubscribe: OverloadedListCommand<string, number>;

        punsubscribe: OverloadedCommand<string, number>;

        publish(channel: string, message: string, callback: Callback<number>): void;
        publish(channel: string, message: string): Promise<number>;

        publishBuffer(channel: string, message: Buffer): Promise<number>;

        watch: OverloadedListCommand<KeyType, Ok>;

        unwatch(callback: Callback<string>): void;
        unwatch(): Promise<string>;

        cluster: OverloadedSubCommand<ValueType, any>;

        restore: OverloadedListCommand<ValueType, Ok>;

        migrate: OverloadedListCommand<ValueType, Ok | 'NOKEY'>;

        dump(key: KeyType, callback: Callback<string>): void;
        dump(key: KeyType): Promise<string>;

        object: OverloadedListCommand<ValueType, any>;

        client: OverloadedSubCommand<ValueType, any>;

        eval: OverloadedEvalCommand<ValueType, any>;

        evalsha: OverloadedEvalCommand<ValueType, any>;

        script: OverloadedSubCommand<ValueType, any>;

        quit(callback: Callback<Ok>): void;
        quit(): Promise<Ok>;

        scan(cursor: number | string, matchOption: 'match' | 'MATCH', pattern: string): Promise<[string, string[]]>;
        scan(
            cursor: number | string,
            matchOption: 'match' | 'MATCH',
            pattern: string,
            callback: Callback<[string, string[]]>,
        ): void;
        scan(cursor: number | string, countOption: 'count' | 'COUNT', count: number): Promise<[string, string[]]>;
        scan(
            cursor: number | string,
            countOption: 'count' | 'COUNT',
            count: number,
            callback: Callback<[string, string[]]>,
        ): void;

        scan(
            cursor: number | string,
            matchOption: 'match' | 'MATCH',
            pattern: string,
            countOption: 'count' | 'COUNT',
            count: number,
        ): Promise<[string, string[]]>;
        scan(
            cursor: number | string,
            matchOption: 'match' | 'MATCH',
            pattern: string,
            countOption: 'count' | 'COUNT',
            count: number,
            callback: Callback<[string, string[]]>,
        ): void;
        scan(
            cursor: number | string,
            countOption: 'count' | 'COUNT',
            count: number,
            matchOption: 'match' | 'MATCH',
            pattern: string,
        ): Promise<[string, string[]]>;
        scan(
            cursor: number | string,
            countOption: 'count' | 'COUNT',
            count: number,
            matchOption: 'match' | 'MATCH',
            pattern: string,
            callback: Callback<[string, string[]]>,
        ): void;

        sscan: OverloadedKeyCommand<ValueType, [string, string[]]>;

        hscan: OverloadedKeyCommand<ValueType, [string, string[]]>;

        zscan: OverloadedKeyCommand<ValueType, [string, string[]]>;

        pfmerge: OverloadedKeyCommand<KeyType, Ok>;

        pfadd: OverloadedKeyCommand<string, number>;

        pfcount: OverloadedListCommand<KeyType, number>;

        pipeline(commands?: string[][]): Pipeline;

        scanStream(options?: ScanStreamOption): Readable;
        sscanStream(key: KeyType, options?: ScanStreamOption): Readable;
        hscanStream(key: KeyType, options?: ScanStreamOption): Readable;
        zscanStream(key: KeyType, options?: ScanStreamOption): Readable;

        xack: OverloadedKeyCommand<ValueType, number>;

        xadd: OverloadedKeyCommand<ValueType, string>;

        xclaim: OverloadedKeyCommand<ValueType, Array<[string, string[]]>>;

        xdel: OverloadedKeyCommand<string, number>;

        xgroup: OverloadedSubCommand<ValueType, Ok>;

        xinfo: OverloadedSubCommand<ValueType, any>;

        xlen(key: KeyType): Promise<number>;
        xlen(key: KeyType, callback: Callback<number>): void;

        xpending: OverloadedKeyCommand<ValueType, any>;

        xrange: OverloadedKeyCommand<ValueType, Array<[string, string[]]>>;

        xread: OverloadedListCommand<ValueType, Array<[string, Array<[string, string[]]>]>>;

        xreadgroup: OverloadedKeyCommand<ValueType, Array<[string, string[]]>>;

        xrevrange: OverloadedKeyCommand<ValueType, Array<[string, string[]]>>;

        xtrim: OverloadedKeyCommand<ValueType, number>;
    }

    interface Redis extends EventEmitter, Commander, Commands {
        Promise: typeof Promise;
        readonly options: RedisOptions;
        readonly status: string;
        connect(callback?: () => void): Promise<void>;
        disconnect(): void;
        duplicate(): Redis;

        send_command(command: string, ...args: ValueType[]): Promise<any>;
    }

    interface Pipeline {
        readonly redis: Redis | Cluster;
        readonly isCluster: boolean;
        readonly options: RedisOptions | ClusterOptions;
        readonly length: number;

        bitcount(key: KeyType, callback?: Callback<number>): Pipeline;
        bitcount(key: KeyType, start: number, end: number, callback?: Callback<number>): Pipeline;

        get(key: KeyType, callback?: Callback<string>): Pipeline;
        getBuffer(key: KeyType, callback?: Callback<Buffer>): Pipeline;

        set(key: KeyType, value: ValueType, callback?: Callback<string>): Pipeline;
        set(key: KeyType, value: ValueType, setMode: string, callback?: Callback<string>): Pipeline;
        set(key: KeyType, value: ValueType, expiryMode: string, time: number, callback?: Callback<string>): Pipeline;
        set(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number,
            setMode: string,
            callback?: Callback<string>,
        ): Pipeline;

        setBuffer(key: KeyType, value: ValueType, callback?: Callback<Buffer>): Pipeline;
        setBuffer(key: KeyType, value: ValueType, setMode: string, callback?: Callback<Buffer>): Pipeline;
        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number,
            callback?: Callback<Buffer>,
        ): Pipeline;
        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number,
            setMode: string,
            callback?: Callback<Buffer>,
        ): Pipeline;

        setnx(key: KeyType, value: ValueType, callback?: Callback<BooleanResponse>): Pipeline;

        setex(key: KeyType, seconds: number, value: ValueType, callback?: Callback<Ok>): Pipeline;

        psetex(key: KeyType, milliseconds: number, value: ValueType, callback?: Callback<Ok>): Pipeline;

        append(key: KeyType, value: ValueType, callback?: Callback<number>): Pipeline;

        strlen(key: KeyType, callback?: Callback<number>): Pipeline;

        del(...keys: KeyType[]): Pipeline;

        unlink(...keys: KeyType[]): Pipeline;

        exists(...keys: KeyType[]): Pipeline;

        setbit(key: KeyType, offset: number, value: ValueType, callback?: Callback<number>): Pipeline;

        getbit(key: KeyType, offset: number, callback?: Callback<number>): Pipeline;

        setrange(key: KeyType, offset: number, value: ValueType, callback?: Callback<number>): Pipeline;

        getrange(key: KeyType, start: number, end: number, callback?: Callback<string>): Pipeline;

        getrangeBuffer(key: KeyType, start: number, end: number, callback?: Callback<Buffer>): Pipeline;

        substr(key: KeyType, start: number, end: number, callback?: Callback<string>): Pipeline;

        incr(key: KeyType, callback?: Callback<number>): Pipeline;

        decr(key: KeyType, callback?: Callback<number>): Pipeline;

        mget(...keys: KeyType[]): Pipeline;

        rpush(key: KeyType, ...values: ValueType[]): Pipeline;

        rpushBuffer(key: string, ...values: Buffer[]): Pipeline;

        lpush(key: KeyType, ...values: ValueType[]): Pipeline;

        rpushx(key: KeyType, value: ValueType, callback?: Callback<number>): Pipeline;

        lpushx(key: KeyType, value: ValueType, callback?: Callback<number>): Pipeline;

        linsert(
            key: KeyType,
            direction: 'BEFORE' | 'AFTER',
            pivot: string,
            value: ValueType,
            callback?: Callback<number>,
        ): Pipeline;

        rpop(key: KeyType, callback?: Callback<string>): Pipeline;

        lpop(key: KeyType, callback?: Callback<string>): Pipeline;

        lpopBuffer(key: KeyType, callback?: Callback<Buffer>): Pipeline;

        brpop(...keys: KeyType[]): Pipeline;

        blpop(...keys: KeyType[]): Pipeline;

        brpoplpush(source: string, destination: string, timeout: number, callback?: Callback<string>): Pipeline;

        llen(key: KeyType, callback?: Callback<number>): Pipeline;

        lindex(key: KeyType, index: number, callback?: Callback<string>): Pipeline;

        lset(key: KeyType, index: number, value: ValueType, callback?: Callback<Ok>): Pipeline;

        lrange(key: KeyType, start: number, stop: number, callback?: Callback<string[]>): Pipeline;

        lrangeBuffer(key: KeyType, start: number, stop: number, callback?: Callback<Buffer[]>): Pipeline;

        ltrim(key: KeyType, start: number, stop: number, callback?: Callback<Ok>): Pipeline;

        lrem(key: KeyType, count: number, value: ValueType, callback?: Callback<number>): Pipeline;

        rpoplpush(source: string, destination: string, callback?: Callback<string>): Pipeline;

        sadd(key: KeyType, ...members: ValueType[]): Pipeline;

        srem(key: KeyType, ...members: ValueType[]): Pipeline;

        smove(source: string, destination: string, member: string, callback?: Callback<string>): Pipeline;

        sismember(key: KeyType, member: string, callback?: Callback<BooleanResponse>): Pipeline;

        scard(key: KeyType, callback?: Callback<number>): Pipeline;

        spop(key: KeyType, callback?: Callback<string | null>): Pipeline;
        spop(key: KeyType, count: number, callback?: Callback<string[]>): Pipeline;

        srandmember(key: KeyType, callback?: Callback<string | null>): Pipeline;
        srandmember(key: KeyType, count: number, callback?: Callback<string[]>): Pipeline;

        sinter(...keys: KeyType[]): Pipeline;

        sinterstore(destination: string, ...keys: KeyType[]): Pipeline;

        sunion(...keys: KeyType[]): Pipeline;

        sunionstore(destination: string, ...keys: KeyType[]): Pipeline;

        sdiff(...keys: KeyType[]): Pipeline;

        sdiffstore(destination: string, ...keys: KeyType[]): Pipeline;

        smembers(key: KeyType, callback?: Callback<string[]>): Pipeline;

        zadd(key: KeyType, ...scoresAndMembers: Array<number|string>): Pipeline;

        zincrby(key: KeyType, increment: number, member: string, callback?: Callback<string>): Pipeline;

        zpopmin(key: KeyType, count: number, callback?: Callback<string[]>): Pipeline;

        zpopmax(key: KeyType, count: number, callback?: Callback<string[]>): Pipeline;

        bzpopmin(...args: Array<string | number | Callback<[string, string, string]>>): Pipeline;

        bzpopmax(...args: Array<string | number | Callback<[string, string, string]>>): Pipeline;

        zrem(key: KeyType, ...members: ValueType[]): Pipeline;

        zremrangebyscore(
            key: KeyType,
            min: number | string,
            max: number | string,
            callback?: Callback<number>,
        ): Pipeline;

        zremrangebyrank(key: KeyType, start: number, stop: number, callback?: Callback<number>): Pipeline;

        zremrangebylex(
            key: KeyType,
            min: string,
            max: string,
            callback?: Callback<number>,
        ): Pipeline;

        zunionstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

        zinterstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

        zrange(key: KeyType, start: number, stop: number, callback?: Callback<string[]>): Pipeline;
        zrange(
            key: KeyType,
            start: number,
            stop: number,
            withScores: 'WITHSCORES',
            callback?: Callback<string[]>,
        ): Pipeline;

        zrevrange(key: KeyType, start: number, stop: number, callback?: Callback<string[]>): Pipeline;
        zrevrange(
            key: KeyType,
            start: number,
            stop: number,
            withScores: 'WITHSCORES',
            callback?: Callback<string[]>,
        ): Pipeline;

        zrangebyscore(key: KeyType, min: number | string, max: number | string, ...args: string[]): Pipeline;

        zrevrangebyscore(key: KeyType, max: number | string, min: number | string, ...args: string[]): Pipeline;

        zrangebylex(
            key: KeyType,
            min: string,
            max: string,
            callback?: Callback<string[]>,
        ): Pipeline;
        zrangebylex(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback?: Callback<string[]>,
        ): Pipeline;
        zrevrangebylex(
            key: KeyType,
            min: string,
            max: string,
            callback?: Callback<string[]>,
        ): Pipeline;
        zrevrangebylex(
            key: KeyType,
            min: string,
            max: string,
            limit: 'LIMIT',
            offset: number,
            count: number,
            callback?: Callback<string[]>,
        ): Pipeline;

        zcount(key: KeyType, min: number | string, max: number | string, callback?: Callback<number>): Pipeline;

        zcard(key: KeyType, callback?: Callback<number>): Pipeline;

        zscore(key: KeyType, member: string, callback?: Callback<number>): Pipeline;

        zrank(key: KeyType, member: string, callback?: Callback<number>): Pipeline;

        zrevrank(key: KeyType, member: string, callback?: Callback<number>): Pipeline;

        hset(key: KeyType, ...args: ValueType[]): Pipeline;
        hset(key: KeyType, data: object | Map<string, any>, callback?: Callback<BooleanResponse>): Pipeline;
        hset(key: KeyType, field: string, value: ValueType, callback?: Callback<BooleanResponse>): Pipeline;
        hsetBuffer(key: KeyType, field: string, value: ValueType, callback?: Callback<Buffer>): Pipeline;

        hsetnx(key: KeyType, field: string, value: ValueType, callback?: Callback<BooleanResponse>): Pipeline;

        hget(key: KeyType, field: string, callback?: Callback<string | string>): Pipeline;
        hgetBuffer(key: KeyType, field: string, callback?: Callback<Buffer>): Pipeline;

        hmset(key: KeyType, ...args: ValueType[]): Pipeline;
        hmset(key: KeyType, data: object | Map<string, any>, callback?: Callback<BooleanResponse>): Pipeline;

        hmget(key: KeyType, ...fields: string[]): Pipeline;

        hstrlen(key: KeyType, field: string, callback?: Callback<number>): Pipeline;

        hincrby(key: KeyType, field: string, increment: number, callback?: Callback<number>): Pipeline;

        hincrbyfloat(key: KeyType, field: string, increment: number, callback?: Callback<number>): Pipeline;

        hdel(key: KeyType, ...fields: string[]): Pipeline;

        hlen(key: KeyType, callback?: Callback<number>): Pipeline;

        hkeys(key: KeyType, callback?: Callback<string[]>): Pipeline;

        hvals(key: KeyType, callback?: Callback<string[]>): Pipeline;

        hgetall(key: KeyType, callback?: Callback<Record<string, string>>): Pipeline;

        hexists(key: KeyType, field: string, callback?: Callback<BooleanResponse>): Pipeline;

        geoadd(key: KeyType, longitude: number, latitude: number, member: string, callback?: Callback<number>): Pipeline;

        geodist(key: KeyType, member1: string, member2: string, unit: 'm'|'km'|'ft'|'mi', callback?: Callback<string | null>): Pipeline;

        geohash(key: KeyType, ...fields: string[]): Pipeline;

        geopos(key: KeyType, ...fields: string[]): Pipeline;

        georadius(key: KeyType, longitude: number, latitude: number, radius: number, unit: 'm'|'km'|'ft'|'mi', callback?: Callback<string[]>): Pipeline;
        georadius(key: KeyType, longitude: number, latitude: number, radius: number, unit: 'm'|'km'|'ft'|'mi', count: 'COUNT', countValue: number, callback?: Callback<string[]>): Pipeline;

        georadiusbymember(key: KeyType, member: string, radius: number, unit: 'm'|'km'|'ft'|'mi', callback?: Callback<string[]>): Pipeline;
        georadiusbymember(key: KeyType, member: string, radius: number, unit: 'm'|'km'|'ft'|'mi', count: 'COUNT', countValue: number, callback?: Callback<string[]>): Pipeline;

        incrby(key: KeyType, increment: number, callback?: Callback<number>): Pipeline;

        incrbyfloat(key: KeyType, increment: number, callback?: Callback<number>): Pipeline;

        decrby(key: KeyType, decrement: number, callback?: Callback<number>): Pipeline;

        getset(key: KeyType, value: ValueType, callback?: Callback<string>): Pipeline;

        mset(...args: ValueType[]): Pipeline;
        mset(data: object | Map<string, any>, callback?: Callback<string>): Pipeline;

        msetnx(...args: ValueType[]): Pipeline;
        msetnx(data: object | Map<string, any>, callback?: Callback<BooleanResponse>): Pipeline;

        memory(argument: 'USAGE', key: KeyType, callback?: Callback<number>): Pipeline;

        randomkey(callback?: Callback<string>): Pipeline;

        select(index: number, callback?: Callback<string>): Pipeline;

        move(key: KeyType, db: string, callback?: Callback<BooleanResponse>): Pipeline;

        rename(key: KeyType, newkey: KeyType, callback?: Callback<string>): Pipeline;

        renamenx(key: KeyType, newkey: KeyType, callback?: Callback<BooleanResponse>): Pipeline;

        expire(key: KeyType, seconds: number, callback?: Callback<BooleanResponse>): Pipeline;

        pexpire(key: KeyType, milliseconds: number, callback?: Callback<BooleanResponse>): Pipeline;

        expireat(key: KeyType, timestamp: number, callback?: Callback<BooleanResponse>): Pipeline;

        pexpireat(key: KeyType, millisecondsTimestamp: number, callback?: Callback<BooleanResponse>): Pipeline;

        keys(pattern: string, callback?: Callback<string[]>): Pipeline;

        dbsize(callback?: Callback<number>): Pipeline;

        auth(password: string, callback?: Callback<string>): Pipeline;
        auth(username: string, password: string, callback?: Callback<string>): Pipeline;

        ping(callback?: Callback<string>): Pipeline;
        ping(message: string, callback?: Callback<string>): Pipeline;

        echo(message: string, callback?: Callback<string>): Pipeline;

        save(callback?: Callback<string>): Pipeline;

        bgsave(callback?: Callback<string>): Pipeline;

        bgrewriteaof(callback?: Callback<string>): Pipeline;

        shutdown(save: 'SAVE' | 'NOSAVE', callback?: Callback<never>): Pipeline;

        lastsave(callback?: Callback<number>): Pipeline;

        type(key: KeyType, callback?: Callback<string>): Pipeline;

        multi(callback?: Callback<string>): Pipeline;

        exec(callback?: Callback<Array<[Error | null, any]>>): Promise<Array<[Error | null, any]>>;

        discard(callback?: Callback<any>): Pipeline;

        sync(callback?: Callback<any>): Pipeline;

        flushdb(callback?: Callback<string>): Pipeline;

        flushall(callback?: Callback<string>): Pipeline;

        sort(key: KeyType, ...args: string[]): Pipeline;

        info(callback?: Callback<string>): Pipeline;
        info(section: string, callback?: Callback<string>): Pipeline;

        time(callback?: Callback<[string, string]>): Pipeline;

        monitor(callback?: Callback<EventEmitter>): Pipeline;

        ttl(key: KeyType, callback?: Callback<number>): Pipeline;

        pttl(key: KeyType, callback?: Callback<number>): Pipeline;

        persist(key: KeyType, callback?: Callback<BooleanResponse>): Pipeline;

        slaveof(host: string, port: number, callback?: Callback<string>): Pipeline;

        debug(...args: ValueType[]): Pipeline;

        config(...args: ValueType[]): Pipeline;

        subscribe(...channels: ValueType[]): Pipeline;

        unsubscribe(...channels: string[]): Pipeline;

        psubscribe(...patterns: string[]): Pipeline;

        punsubscribe(...patterns: string[]): Pipeline;

        publish(channel: string, message: string, callback?: Callback<number>): Pipeline;

        watch(...keys: KeyType[]): Pipeline;

        unwatch(callback?: Callback<string>): Pipeline;

        cluster(...args: ValueType[]): Pipeline;

        restore(...args: ValueType[]): Pipeline;

        migrate(...args: ValueType[]): Pipeline;

        dump(key: KeyType, callback?: Callback<string>): Pipeline;

        object(subcommand: string, ...args: ValueType[]): Pipeline;

        client(...args: ValueType[]): Pipeline;

        eval(script: string, numKeys: number, ...args: ValueType[]): Pipeline;

        evalsha(scriptSha: string, numKeys: string, ...args: ValueType[]): Pipeline;

        script(...args: ValueType[]): Pipeline;

        quit(callback?: Callback<string>): Pipeline;

        scan(cursor: number | string): Pipeline;

        scan(cursor: number | string, matchOption: 'match' | 'MATCH', pattern: string): Pipeline;
        scan(cursor: number | string, countOption: 'count' | 'COUNT', count: number): Pipeline;

        scan(
            cursor: number | string,
            matchOption: 'match' | 'MATCH',
            pattern: string,
            countOption: 'count' | 'COUNT',
            count: number,
        ): Pipeline;
        scan(
            cursor: number | string,
            countOption: 'count' | 'COUNT',
            count: number,
            matchOption: 'match' | 'MATCH',
            pattern: string,
        ): Pipeline;
        sscan(key: KeyType, cursor: number | string, ...args: ValueType[]): Pipeline;

        hscan(key: KeyType, cursor: number | string, ...args: ValueType[]): Pipeline;

        zscan(key: KeyType, cursor: number | string, ...args: ValueType[]): Pipeline;

        pfmerge(destkey: KeyType, ...sourcekeys: KeyType[]): Pipeline;

        pfadd(key: KeyType, ...elements: string[]): Pipeline;

        pfcount(...keys: KeyType[]): Pipeline;

        xack(key: KeyType, group: string, ...ids: string[]): Pipeline;

        xadd(key: KeyType, id: string, ...args: string[]): Pipeline;

        xclaim(
            key: KeyType,
            group: string,
            consumer: string,
            minIdleTime: number,
            id: string,
            ...args: ValueType[]
        ): Pipeline;

        xdel(key: KeyType, ...ids: string[]): Pipeline;

        xgroup(...args: ValueType[]): Pipeline;

        xinfo(...args: ValueType[]): Pipeline;

        xlen(key: KeyType): Pipeline;

        xpending(key: KeyType, group: string, ...args: ValueType[]): Pipeline;

        xrange(key: KeyType, start: string, end: string, ...args: ValueType[]): Pipeline;

        xread(...args: ValueType[]): Pipeline;

        xreadgroup(command: 'GROUP' | 'group', group: string, consumer: string, ...args: ValueType[]): Pipeline;

        xrevrange(key: KeyType, end: string, start: string, ...args: ValueType[]): Pipeline;

        xtrim(key: KeyType, strategy: 'MAXLEN' | 'maxlen', ...args: ValueType[]): Pipeline;
    }

    interface NodeConfiguration {
        host?: string;
        port?: number;
    }

    type ClusterNode = string | number | NodeConfiguration;

    type NodeRole = 'master' | 'slave' | 'all';

    type CallbackFunction<T = any> = (err?: NodeJS.ErrnoException | null, result?: T) => void;

    type Ok = 'OK';

    interface Cluster extends EventEmitter, Commander, Commands {
        readonly options: ClusterOptions;
        readonly status: string;
        connect(): Promise<void>;
        disconnect(): void;
        nodes(role?: NodeRole): Redis[];
    }

    interface ClusterStatic extends EventEmitter {
        new (nodes: ClusterNode[], options?: ClusterOptions): Cluster;
    }

    interface RedisOptions {
        port?: number;
        host?: string;
        /**
         * 4 (IPv4) or 6 (IPv6), Defaults to 4.
         */
        family?: number;
        /**
         * Local domain socket path. If set the port, host and family will be ignored.
         */
        path?: string;
        /**
         * TCP KeepAlive on the socket with a X ms delay before start. Set to a non-number value to disable keepAlive.
         */
        keepAlive?: number;
        connectionName?: string;
        /**
         * If set, client will send AUTH command with the value of this option as the first argument when connected. The `password` option must be set too. Username should only be set for Redis >=6.
         */
        username?: string;
        /**
         * If set, client will send AUTH command with the value of this option when connected.
         */
        password?: string;
        /**
         * Database index to use.
         */
        db?: number;
        /**
         * When a connection is established to the Redis server, the server might still be loading
         * the database from disk. While loading, the server not respond to any commands.
         * To work around this, when this option is true, ioredis will check the status of the Redis server,
         * and when the Redis server is able to process commands, a ready event will be emitted.
         */
        enableReadyCheck?: boolean;
        keyPrefix?: string;
        /**
         * When the return value isn't a number, ioredis will stop trying to reconnect.
         * Fixed in: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/15858
         */
        retryStrategy?(times: number): number | void | null;
        /**
         * By default, all pending commands will be flushed with an error every
         * 20 retry attempts. That makes sure commands won't wait forever when
         * the connection is down. You can change this behavior by setting
         * `maxRetriesPerRequest`.
         *
         * Set maxRetriesPerRequest to `null` to disable this behavior, and
         * every command will wait forever until the connection is alive again
         * (which is the default behavior before ioredis v4).
         */
        maxRetriesPerRequest?: number | null;
        /**
         * 1/true means reconnect, 2 means reconnect and resend failed command. Returning false will ignore
         * the error and do nothing.
         */
        reconnectOnError?(error: Error): boolean | 1 | 2;
        /**
         * By default, if there is no active connection to the Redis server, commands are added to a queue
         * and are executed once the connection is "ready" (when enableReadyCheck is true, "ready" means
         * the Redis server has loaded the database from disk, otherwise means the connection to the Redis
         * server has been established). If this option is false, when execute the command when the connection
         * isn't ready, an error will be returned.
         */
        enableOfflineQueue?: boolean;
        /**
         * The milliseconds before a timeout occurs during the initial connection to the Redis server.
         * default: 10000.
         */
        connectTimeout?: number;
        /**
         * After reconnected, if the previous connection was in the subscriber mode, client will auto re-subscribe these channels.
         * default: true.
         */
        autoResubscribe?: boolean;
        /**
         * If true, client will resend unfulfilled commands(e.g. block commands) in the previous connection when reconnected.
         * default: true.
         */
        autoResendUnfulfilledCommands?: boolean;
        lazyConnect?: boolean;
        tls?: ConnectionOptions;
        /**
         * default: "master".
         */
        role?: 'master' | 'slave';
        /**
         * default: null.
         */
        name?: string;
        sentinelUsername?: string;
        sentinelPassword?: string;
        sentinels?: Array<{ host: string; port: number }>;
        /**
         * If `sentinelRetryStrategy` returns a valid delay time, ioredis will try to reconnect from scratch.
         * default: function(times) { return Math.min(times * 10, 1000); }
         */
        sentinelRetryStrategy?(times: number): number | void | null;
        /**
         * Can be used to prefer a particular slave or set of slaves based on priority.
         */
        preferredSlaves?: PreferredSlaves;
        /**
         * Whether to support the `tls` option when connecting to Redis via sentinel mode.
         * default: false.
         */
        enableTLSForSentinelMode?: boolean;
        sentinelTLS?: SecureContextOptions;
        /**
         * NAT map for sentinel connector.
         * default: null.
         */
        natMap?: NatMap;
        /**
         * Update the given `sentinels` list with new IP addresses when communicating with existing sentinels.
         * default: true.
         */
        updateSentinels?: boolean;
        /**
         * Enable READONLY mode for the connection. Only available for cluster mode.
         * default: false.
         */
        readOnly?: boolean;
        /**
         * If you are using the hiredis parser, it's highly recommended to enable this option.
         * Create another instance with dropBufferSupport disabled for other commands that you want to return binary instead of string
         */
        dropBufferSupport?: boolean;
        /**
         * Whether to show a friendly error stack. Will decrease the performance significantly.
         */
        showFriendlyErrorStack?: boolean;
        /**
         * When enabled, all commands issued during an event loop iteration are automatically wrapped in a
         * pipeline and sent to the server at the same time. This can improve performance by 30-50%.
         * default: false.
         */
        enableAutoPipelining?: boolean;
    }

    interface AddressFromResponse {
        port: string;
        ip: string;
        flags?: string;
    }

    type PreferredSlaves =
        | ((slaves: AddressFromResponse[]) => AddressFromResponse | null)
        | Array<{ port: string; ip: string; prio?: number }>
        | { port: string; ip: string; prio?: number };

    type SecureVersion = 'TLSv1.3' | 'TLSv1.2' | 'TLSv1.1' | 'TLSv1';

    interface SecureContextOptions {
        pfx?: string | Buffer | Array<string | Buffer | object>;
        key?: string | Buffer | Array<Buffer | object>;
        passphrase?: string;
        cert?: string | Buffer | Array<string | Buffer>;
        ca?: string | Buffer | Array<string | Buffer>;
        ciphers?: string;
        honorCipherOrder?: boolean;
        ecdhCurve?: string;
        clientCertEngine?: string;
        crl?: string | Buffer | Array<string | Buffer>;
        dhparam?: string | Buffer;
        secureOptions?: number; // Value is a numeric bitmask of the `SSL_OP_*` options
        secureProtocol?: string; // SSL Method, e.g. SSLv23_method
        sessionIdContext?: string;
        /**
         * Optionally set the maximum TLS version to allow. One
         * of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
         * `secureProtocol` option, use one or the other.
         * **Default:** `'TLSv1.3'`, unless changed using CLI options. Using
         * `--tls-max-v1.2` sets the default to `'TLSv1.2'`. Using `--tls-max-v1.3` sets the default to
         * `'TLSv1.3'`. If multiple of the options are provided, the highest maximum is used.
         */
        maxVersion?: SecureVersion;
        /**
         * Optionally set the minimum TLS version to allow. One
         * of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
         * `secureProtocol` option, use one or the other.  It is not recommended to use
         * less than TLSv1.2, but it may be required for interoperability.
         * **Default:** `'TLSv1.2'`, unless changed using CLI options. Using
         * `--tls-v1.0` sets the default to `'TLSv1'`. Using `--tls-v1.1` sets the default to
         * `'TLSv1.1'`. Using `--tls-min-v1.3` sets the default to
         * 'TLSv1.3'. If multiple of the options are provided, the lowest minimum is used.
         */
        minVersion?: SecureVersion;
    }

    interface ScanStreamOption {
        match?: string;
        count?: number;
    }

    type DNSLookupFunction = (
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, address: string, family?: number) => void,
    ) => void;
    interface NatMap {
        [key: string]: { host: string; port: number };
    }

    interface ClusterOptions {
        clusterRetryStrategy?(times: number, reason?: Error): number | null;
        enableOfflineQueue?: boolean;
        enableReadyCheck?: boolean;
        scaleReads?: string;
        maxRedirections?: number;
        retryDelayOnFailover?: number;
        retryDelayOnClusterDown?: number;
        retryDelayOnTryAgain?: number;
        slotsRefreshTimeout?: number;
        slotsRefreshInterval?: number;
        redisOptions?: RedisOptions;
        lazyConnect?: boolean;
        dnsLookup?: DNSLookupFunction;
        natMap?: NatMap;
    }

    interface MultiOptions {
        pipeline: boolean;
    }
}
