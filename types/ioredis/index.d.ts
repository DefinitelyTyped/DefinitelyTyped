// Type definitions for ioredis 4.14
// Project: https://github.com/luin/ioredis
// Definitions by: York Yao <https://github.com/plantain-00>
//                 Christopher Eck <https://github.com/chrisleck>
//                 Yoga Aliarham <https://github.com/aliarham11>
//                 Ebrahim <https://github.com/br8h>
//                 Shahar Mor <https://github.com/shaharmor>
//                 Whemoon Jang <https://github.com/palindrom615>
//                 Francis Gulotta <https://github.com/reconbot>
//                 Dmitry Motovilov <https://github.com/funthing>
//                 Oleg Repin <https://github.com/iamolegga>
//                 Ting-Wai To <https://github.com/tingwai-to>
//                 Alex Petty <https://github.com/pettyalex>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Tianlin <https://github.com/tianlinle>
//                 Demian Rodriguez <https://github.com/demian85>
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
    type KeyType = string | Buffer;

    type BooleanResponse = 1 | 0;

    type ValueType = string | Buffer | number | any[];

    type Command = _Command;

    interface Redis extends EventEmitter, Commander {
        Promise: typeof Promise;
        status: string;
        connect(callback?: () => void): Promise<void>;
        disconnect(): void;
        duplicate(): Redis;

        send_command(command: string, ...args: ValueType[]): Promise<any>;

        bitcount(key: KeyType, callback: (err: Error, res: number) => void): void;
        bitcount(key: KeyType, start: number, end: number, callback: (err: Error, res: number) => void): void;
        bitcount(key: KeyType): Promise<number>;
        bitcount(key: KeyType, start: number, end: number): Promise<number>;

        get(key: KeyType, callback: (err: Error, res: string | null) => void): void;
        get(key: KeyType): Promise<string | null>;

        getBuffer(key: KeyType, callback: (err: Error, res: Buffer) => void): void;
        getBuffer(key: KeyType): Promise<Buffer>;

        set(
            key: KeyType,
            value: ValueType,
            expiryMode?: string | any[],
            time?: number | string,
            setMode?: number | string,
        ): Promise<string>;

        set(key: KeyType, value: ValueType, callback: (err: Error, res: string) => void): void;
        set(key: KeyType, value: ValueType, setMode: string | any[], callback: (err: Error, res: string) => void): void;
        set(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number | string,
            callback: (err: Error, res: string) => void,
        ): void;
        set(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number | string,
            setMode: number | string,
            callback: (err: Error, res: string) => void,
        ): void;

        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode?: string | any[],
            time?: number | string,
            setMode?: number | string,
        ): Promise<Buffer>;

        setBuffer(key: KeyType, value: ValueType, callback: (err: Error, res: Buffer) => void): void;
        setBuffer(key: KeyType, value: ValueType, setMode: string, callback: (err: Error, res: Buffer) => void): void;
        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number,
            callback: (err: Error, res: Buffer) => void,
        ): void;
        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number | string,
            setMode: number | string,
            callback: (err: Error, res: Buffer) => void,
        ): void;

        setnx(key: KeyType, value: ValueType, callback: (err: Error, res: BooleanResponse) => void): void;
        setnx(key: KeyType, value: ValueType): Promise<BooleanResponse>;

        setex(key: KeyType, seconds: number, value: ValueType, callback: (err: Error, res: Ok) => void): void;
        setex(key: KeyType, seconds: number, value: ValueType): Promise<Ok>;

        psetex(key: KeyType, milliseconds: number, value: ValueType, callback: (err: Error, res: Ok) => void): void;
        psetex(key: KeyType, milliseconds: number, value: ValueType): Promise<Ok>;

        append(key: KeyType, value: ValueType, callback: (err: Error, res: number) => void): void;
        append(key: KeyType, value: ValueType): Promise<number>;

        strlen(key: KeyType, callback: (err: Error, res: number) => void): void;
        strlen(key: KeyType): Promise<number>;

        del(...keys: KeyType[]): Promise<number>;

        unlink(...keys: KeyType[]): Promise<number>;

        exists(...keys: KeyType[]): Promise<number>;
        exists(key: KeyType, callback: (err: Error, res: number) => void): void;

        setbit(key: KeyType, offset: number, value: ValueType, callback: (err: Error, res: number) => void): void;
        setbit(key: KeyType, offset: number, value: ValueType): Promise<number>;

        getbit(key: KeyType, offset: number, callback: (err: Error, res: number) => void): void;
        getbit(key: KeyType, offset: number): Promise<number>;

        setrange(key: KeyType, offset: number, value: ValueType, callback: (err: Error, res: number) => void): void;
        setrange(key: KeyType, offset: number, value: ValueType): Promise<number>;

        getrange(key: KeyType, start: number, end: number, callback: (err: Error, res: string) => void): void;
        getrange(key: KeyType, start: number, end: number): Promise<string>;

        substr(key: KeyType, start: number, end: number, callback: (err: Error, res: string) => void): void;
        substr(key: KeyType, start: number, end: number): Promise<string>;

        incr(key: KeyType, callback: (err: Error, res: number) => void): void;
        incr(key: KeyType): Promise<number>;

        decr(key: KeyType, callback: (err: Error, res: number) => void): void;
        decr(key: KeyType): Promise<number>;

        mget(...keys: KeyType[]): Promise<Array<string | null>>;

        rpush(key: KeyType, ...values: ValueType[]): Promise<number>;

        rpushBuffer(key: string, ...values: Buffer[]): Promise<number>;

        lpush(key: KeyType, ...values: ValueType[]): Promise<number>;

        rpushx(key: KeyType, value: ValueType, callback: (err: Error, res: number) => void): void;
        rpushx(key: KeyType, value: ValueType): Promise<number>;

        lpushx(key: KeyType, value: ValueType, callback: (err: Error, res: number) => void): void;
        lpushx(key: KeyType, value: ValueType): Promise<number>;

        linsert(
            key: KeyType,
            direction: 'BEFORE' | 'AFTER',
            pivot: string,
            value: ValueType,
            callback: (err: Error, res: number) => void,
        ): void;
        linsert(key: KeyType, direction: 'BEFORE' | 'AFTER', pivot: string, value: ValueType): Promise<number>;

        rpop(key: KeyType, callback: (err: Error, res: string) => void): void;
        rpop(key: KeyType): Promise<string>;

        lpop(key: KeyType, callback: (err: Error, res: string) => void): void;
        lpop(key: KeyType): Promise<string>;

        lpopBuffer(key: KeyType, callback: (err: Error, res: Buffer) => void): void;
        lpopBuffer(key: KeyType): Promise<Buffer>;

        brpop(...keys: KeyType[]): Promise<[string, string]>;

        blpop(...keys: KeyType[]): Promise<[string, string]>;

        brpoplpush(
            source: string,
            destination: string,
            timeout: number,
            callback: (err: Error, res: string) => void,
        ): void;
        brpoplpush(source: string, destination: string, timeout: number): Promise<string>;

        llen(key: KeyType, callback: (err: Error, res: number) => void): void;
        llen(key: KeyType): Promise<number>;

        lindex(key: KeyType, index: number, callback: (err: Error, res: string) => void): void;
        lindex(key: KeyType, index: number): Promise<string>;

        lset(key: KeyType, index: number, value: ValueType, callback: (err: Error, res: Ok) => void): void;
        lset(key: KeyType, index: number, value: ValueType): Promise<Ok>;

        lrange(key: KeyType, start: number, stop: number, callback: (err: Error, res: string[]) => void): void;
        lrange(key: KeyType, start: number, stop: number): Promise<string[]>;

        lrangeBuffer(key: KeyType, start: number, stop: number, callback: (err: Error, res: Buffer[]) => void): void;
        lrangeBuffer(key: KeyType, start: number, stop: number): Promise<Buffer[]>;

        ltrim(key: KeyType, start: number, stop: number, callback: (err: Error, res: Ok) => void): void;
        ltrim(key: KeyType, start: number, stop: number): Promise<Ok>;

        lrem(key: KeyType, count: number, value: ValueType, callback: (err: Error, res: number) => void): void;
        lrem(key: KeyType, count: number, value: ValueType): Promise<number>;

        rpoplpush(source: string, destination: string, callback: (err: Error, res: string) => void): void;
        rpoplpush(source: string, destination: string): Promise<string>;

        rpoplpushBuffer(source: string, destination: string, callback: (err: Error, res: Buffer) => void): void;
        rpoplpushBuffer(source: string, destination: string): Promise<Buffer>;

        sadd(key: KeyType, ...members: ValueType[]): Promise<number>;

        srem(key: KeyType, ...members: ValueType[]): Promise<number>;

        smove(
            source: string,
            destination: string,
            member: string,
            callback: (err: Error, res: BooleanResponse) => void,
        ): void;
        smove(source: string, destination: string, member: string): Promise<BooleanResponse>;

        sismember(key: KeyType, member: string, callback: (err: Error, res: BooleanResponse) => void): void;
        sismember(key: KeyType, member: string): Promise<BooleanResponse>;

        scard(key: KeyType, callback: (err: Error, res: number) => void): void;
        scard(key: KeyType): Promise<number>;

        spop(key: KeyType, callback: (err: Error, res: string | null) => void): void;
        spop(key: KeyType): Promise<string | null>;
        spop(key: KeyType, count: number, callback: (err: Error, res: string[]) => void): void;
        spop(key: KeyType, count: number): Promise<string[]>;

        srandmember(key: KeyType, callback: (err: Error, res: string | null) => void): void;
        srandmember(key: KeyType): Promise<string | null>;
        srandmember(key: KeyType, count: number, callback: (err: Error, res: string[]) => void): void;
        srandmember(key: KeyType, count: number): Promise<string[]>;

        sinter(...keys: KeyType[]): Promise<string[]>;

        sinterstore(destination: string, ...keys: KeyType[]): Promise<number>;

        sunion(...keys: KeyType[]): Promise<string[]>;

        sunionstore(destination: string, ...keys: KeyType[]): Promise<number>;

        sdiff(...keys: KeyType[]): Promise<string[]>;

        sdiffstore(destination: string, ...keys: KeyType[]): Promise<number>;

        smembers(key: KeyType, callback: (err: Error, res: string[]) => void): void;
        smembers(key: KeyType): Promise<string[]>;

        zadd(key: KeyType, ...args: string[]): Promise<number | string>;

        zaddBuffer(key: KeyType, score1: number, member1: Buffer): Promise<string | number>;

        zincrby(key: KeyType, increment: number, member: string, callback: (err: Error, res: string) => void): void;
        zincrby(key: KeyType, increment: number, member: string): Promise<string>;

        zrem(key: KeyType, ...members: ValueType[]): Promise<number>;

        zremrangebyscore(
            key: KeyType,
            min: number | string,
            max: number | string,
            callback: (err: Error, res: number) => void,
        ): void;
        zremrangebyscore(key: KeyType, min: number | string, max: number | string): Promise<number>;

        zremrangebyrank(key: KeyType, start: number, stop: number, callback: (err: Error, res: number) => void): void;
        zremrangebyrank(key: KeyType, start: number, stop: number): Promise<number>;

        zunionstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Promise<number>;

        zinterstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Promise<number>;

        zrange(key: KeyType, start: number, stop: number, callback: (err: Error, res: string[]) => void): void;
        zrange(
            key: KeyType,
            start: number,
            stop: number,
            withScores: 'WITHSCORES',
            callback: (err: Error, res: string[]) => void,
        ): void;
        zrange(key: KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<string[]>;

        zrevrange(key: KeyType, start: number, stop: number, callback: (err: Error, res: string[]) => void): void;
        zrevrange(
            key: KeyType,
            start: number,
            stop: number,
            withScores: 'WITHSCORES',
            callback: (err: Error, res: string[]) => void,
        ): void;
        zrevrange(key: KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<string[]>;

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

        zcount(
            key: KeyType,
            min: number | string,
            max: number | string,
            callback: (err: Error, res: number) => void,
        ): void;
        zcount(key: KeyType, min: number | string, max: number | string): Promise<number>;

        zcard(key: KeyType, callback: (err: Error, res: number) => void): void;
        zcard(key: KeyType): Promise<number>;

        zscore(key: KeyType, member: string, callback: (err: Error, res: string) => void): void;
        zscore(key: KeyType, member: string): Promise<string>;

        zrank(key: KeyType, member: string, callback: (err: Error, res: number | null) => void): void;
        zrank(key: KeyType, member: string): Promise<number | null>;

        zrevrank(key: KeyType, member: string, callback: (err: Error, res: number | null) => void): void;
        zrevrank(key: KeyType, member: string): Promise<number | null>;

        hset(key: KeyType, field: string, value: ValueType, callback: (err: Error, res: BooleanResponse) => void): void;
        hset(key: KeyType, field: string, value: ValueType): Promise<BooleanResponse>;
        hsetBuffer(
            key: KeyType,
            field: string,
            value: ValueType,
            callback: (err: Error, res: BooleanResponse) => void,
        ): void;
        hsetBuffer(key: KeyType, field: string, value: ValueType): Promise<Buffer>;

        hsetnx(
            key: KeyType,
            field: string,
            value: ValueType,
            callback: (err: Error, res: BooleanResponse) => void,
        ): void;
        hsetnx(key: KeyType, field: string, value: ValueType): Promise<BooleanResponse>;

        hget(key: KeyType, field: string, callback: (err: Error, res: string | null) => void): void;
        hget(key: KeyType, field: string): Promise<string | null>;
        hgetBuffer(key: KeyType, field: string, callback: (err: Error, res: Buffer) => void): void;
        hgetBuffer(key: KeyType, field: string): Promise<Buffer>;

        hmset(key: KeyType, ...args: ValueType[]): Promise<BooleanResponse>;
        hmset(
            key: KeyType,
            data: object | Map<string, ValueType>,
            callback: (err: Error, res: BooleanResponse) => void,
        ): void;
        hmset(key: KeyType, data: object | Map<string, ValueType>): Promise<BooleanResponse>;

        hmget(key: KeyType, ...fields: string[]): Promise<Array<string | null>>;

        hincrby(key: KeyType, field: string, increment: number, callback: (err: Error, res: number) => void): void;
        hincrby(key: KeyType, field: string, increment: number): Promise<number>;

        hincrbyfloat(key: KeyType, field: string, increment: number, callback: (err: Error, res: number) => void): void;
        hincrbyfloat(key: KeyType, field: string, increment: number): Promise<number>;

        hdel(key: KeyType, ...fields: string[]): Promise<number>;

        hlen(key: KeyType, callback: (err: Error, res: number) => void): void;
        hlen(key: KeyType): Promise<number>;

        hkeys(key: KeyType, callback: (err: Error, res: string[]) => void): void;
        hkeys(key: KeyType): Promise<string[]>;

        hvals(key: KeyType, callback: (err: Error, res: string[]) => void): void;
        hvals(key: KeyType): Promise<string[]>;

        hgetall(key: KeyType, callback: (err: Error, res: Record<string, string>) => void): void;
        hgetall(key: KeyType): Promise<Record<string, string>>;

        hexists(key: KeyType, field: string, callback: (err: Error, res: BooleanResponse) => void): void;
        hexists(key: KeyType, field: string): Promise<BooleanResponse>;

        incrby(key: KeyType, increment: number, callback: (err: Error, res: number) => void): void;
        incrby(key: KeyType, increment: number): Promise<number>;

        incrbyfloat(key: KeyType, increment: number, callback: (err: Error, res: number) => void): void;
        incrbyfloat(key: KeyType, increment: number): Promise<number>;

        decrby(key: KeyType, decrement: number, callback: (err: Error, res: number) => void): void;
        decrby(key: KeyType, decrement: number): Promise<number>;

        getset(key: KeyType, value: ValueType, callback: (err: Error, res: string | null) => void): void;
        getset(key: KeyType, value: ValueType): Promise<string | null>;

        mset(...args: ValueType[]): Promise<Ok>;
        mset(data: object | Map<string, ValueType>, callback: (err: Error, res: Ok) => void): void;
        mset(data: object | Map<string, ValueType>): Promise<Ok>;

        msetnx(...args: ValueType[]): Promise<number>;
        msetnx(data: object | Map<string, ValueType>, callback: (err: Error, res: BooleanResponse) => void): void;
        msetnx(data: object | Map<string, ValueType>): Promise<BooleanResponse>;

        randomkey(callback: (err: Error, res: string) => void): void;
        randomkey(): Promise<string>;

        select(index: number, callback: (err: Error, res: string) => void): void;
        select(index: number): Promise<string>;

        move(key: KeyType, db: string, callback: (err: Error, res: BooleanResponse) => void): void;
        move(key: KeyType, db: string): Promise<BooleanResponse>;

        rename(key: KeyType, newkey: KeyType, callback: (err: Error, res: Ok) => void): void;
        rename(key: KeyType, newkey: KeyType): Promise<Ok>;

        renamenx(key: KeyType, newkey: KeyType, callback: (err: Error, res: BooleanResponse) => void): void;
        renamenx(key: KeyType, newkey: KeyType): Promise<BooleanResponse>;

        expire(key: KeyType, seconds: number, callback: (err: Error, res: BooleanResponse) => void): void;
        expire(key: KeyType, seconds: number): Promise<BooleanResponse>;

        pexpire(key: KeyType, milliseconds: number, callback: (err: Error, res: BooleanResponse) => void): void;
        pexpire(key: KeyType, milliseconds: number): Promise<BooleanResponse>;

        expireat(key: KeyType, timestamp: number, callback: (err: Error, res: BooleanResponse) => void): void;
        expireat(key: KeyType, timestamp: number): Promise<BooleanResponse>;

        pexpireat(
            key: KeyType,
            millisecondsTimestamp: number,
            callback: (err: Error, res: BooleanResponse) => void,
        ): void;
        pexpireat(key: KeyType, millisecondsTimestamp: number): Promise<BooleanResponse>;

        keys(pattern: string, callback: (err: Error, res: string[]) => void): void;
        keys(pattern: string): Promise<string[]>;

        dbsize(callback: (err: Error, res: number) => void): void;
        dbsize(): Promise<number>;

        auth(password: string, callback: (err: Error, res: string) => void): void;
        auth(password: string): Promise<string>;

        ping(callback: (err: Error, res: string) => void): void;
        ping(message: string, callback: (err: Error, res: string) => void): void;
        ping(message?: string): Promise<string>;

        echo(message: string, callback: (err: Error, res: string) => void): void;
        echo(message: string): Promise<string>;

        save(callback: (err: Error, res: string) => void): void;
        save(): Promise<string>;

        bgsave(callback: (err: Error, res: string) => void): void;
        bgsave(): Promise<string>;

        bgrewriteaof(callback: (err: Error, res: string) => void): void;
        bgrewriteaof(): Promise<string>;

        shutdown(save: 'SAVE' | 'NOSAVE', callback: (err: Error, res: never) => void): void;
        shutdown(save: 'SAVE' | 'NOSAVE'): Promise<never>;

        lastsave(callback: (err: Error, res: number) => void): void;
        lastsave(): Promise<number>;

        type(key: KeyType, callback: (err: Error, res: string) => void): void;
        type(key: KeyType): Promise<string>;

        multi(commands?: string[][], options?: MultiOptions): Pipeline;
        multi(options: { pipeline: false }): Promise<string>;

        exec(callback: (err: Error, res: Array<[Error | null, string]>) => void): void;
        exec(): Promise<Array<[Error | null, string]>>;

        discard(callback: (err: Error, res: string) => void): void;
        discard(): Promise<string>;

        sync(callback: (err: Error, res: any) => void): void;
        sync(): Promise<any>;

        flushdb(callback: (err: Error, res: string) => void): void;
        flushdb(): Promise<string>;

        flushall(callback: (err: Error, res: string) => void): void;
        flushall(): Promise<string>;

        sort(key: KeyType, ...args: string[]): Promise<string[] | number>;

        info(callback: (err: Error, res: string) => void): void;
        info(section: string, callback: (err: Error, res: string) => void): void;
        info(section?: string): Promise<string>;

        time(callback: (err: Error, res: [string, string]) => void): void;
        time(): Promise<[string, string]>;

        monitor(callback: (err: Error, res: EventEmitter) => void): void;
        monitor(): Promise<EventEmitter>;

        ttl(key: KeyType, callback: (err: Error, res: number) => void): void;
        ttl(key: KeyType): Promise<number>;

        pttl(key: KeyType, callback: (err: Error, res: number) => void): void;
        pttl(key: KeyType): Promise<number>;

        persist(key: KeyType, callback: (err: Error, res: BooleanResponse) => void): void;
        persist(key: KeyType): Promise<BooleanResponse>;

        slaveof(host: string, port: number, callback: (err: Error, res: string) => void): void;
        slaveof(host: string, port: number): Promise<string>;

        debug(...args: ValueType[]): Promise<any>;

        config(op: 'GET', cfg: any[]): Promise<[string, string]>;
        config(op: 'REWRITE'): Promise<Ok>;
        config(op: 'SET', key: string, value: ValueType): Promise<Ok>;

        subscribe(...channels: string[]): Promise<number>;

        unsubscribe(...channels: string[]): Promise<number>;

        psubscribe(...patterns: string[]): Promise<number>;

        punsubscribe(...patterns: string[]): Promise<number>;

        publish(channel: string, message: string, callback: (err: Error, res: number) => void): void;
        publish(channel: string, message: string): Promise<number>;

        publishBuffer(channel: string, message: Buffer): Promise<number>;

        watch(...keys: KeyType[]): Promise<Ok>;

        unwatch(callback: (err: Error, res: string) => void): void;
        unwatch(): Promise<string>;

        cluster(...args: ValueType[]): any;

        restore(...args: ValueType[]): Promise<Ok>;

        migrate(...args: ValueType[]): Promise<Ok | 'NOKEY'>;

        dump(key: KeyType, callback: (err: Error, res: string) => void): void;
        dump(key: KeyType): Promise<string>;

        object(subcommand: string, ...args: ValueType[]): Promise<any>;

        client(...args: ValueType[]): any;

        eval(script: string, numKeys: number, ...args: ValueType[]): any;
        // This overload exists specifically to retain compatibility to `redlock`
        // All arguments are by default flattened, declaring all possible permuatations
        // would be unreasonable (and probably impossible)
        eval(args: ValueType[], callback?: (err: Error | null, res: any) => void): any;

        evalsha(scriptSha: string, numKeys: string, ...args: ValueType[]): any;

        script(...args: ValueType[]): any;

        quit(callback: (err: Error, res: string) => void): void;
        quit(): Promise<string>;

        scan(cursor: number | string): Promise<[string, string[]]>;

        scan(cursor: number | string, matchOption: 'match' | 'MATCH', pattern: string): Promise<[string, string[]]>;
        scan(cursor: number | string, countOption: 'count' | 'COUNT', count: number): Promise<[string, string[]]>;

        scan(
            cursor: number | string,
            matchOption: 'match' | 'MATCH',
            pattern: string,
            countOption: 'count' | 'COUNT',
            count: number,
        ): Promise<[string, string[]]>;
        scan(
            cursor: number | string,
            countOption: 'count' | 'COUNT',
            count: number,
            matchOption: 'match' | 'MATCH',
            pattern: string,
        ): Promise<[string, string[]]>;

        sscan(key: KeyType, cursor: number, ...args: ValueType[]): Promise<[string, string[]]>;

        hscan(key: KeyType, cursor: number, ...args: ValueType[]): Promise<[string, string[]]>;

        zscan(key: KeyType, cursor: number, ...args: ValueType[]): Promise<[string, string[]]>;

        pfmerge(destkey: KeyType, ...sourcekeys: KeyType[]): Promise<Ok>;

        pfadd(key: KeyType, ...elements: string[]): Promise<number>;

        pfcount(...keys: KeyType[]): Promise<number>;

        pipeline(commands?: string[][]): Pipeline;

        scanStream(options?: ScanStreamOption): Readable;
        sscanStream(key: KeyType, options?: ScanStreamOption): Readable;
        hscanStream(key: KeyType, options?: ScanStreamOption): Readable;
        zscanStream(key: KeyType, options?: ScanStreamOption): Readable;

        xack(key: KeyType, group: string, ...ids: string[]): Promise<number>;

        xadd(key: KeyType, id: string, ...args: string[]): Promise<string>;
        xadd(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', count: number, ...args: string[]): Promise<string>;
        xadd(
            key: KeyType,
            maxLenOption: 'MAXLEN' | 'maxlen',
            approximate: '~',
            count: number,
            ...args: string[]
        ): Promise<string>;

        xclaim(
            key: KeyType,
            group: string,
            consumer: string,
            minIdleTime: number,
            ...args: ValueType[]
        ): Promise<Array<[string, string[]]>>;

        xdel(key: KeyType, ...ids: string[]): Promise<number>;

        xgroup(...args: ValueType[]): Promise<Ok>;

        xinfo(...args: ValueType[]): Promise<any>;

        xlen(key: KeyType): Promise<number>;

        xpending(key: KeyType, group: string, ...args: ValueType[]): Promise<any>;

        xrange(key: KeyType, start: string, end: string, ...args: ValueType[]): Promise<Array<[string, string[]]>>;

        xread(...args: ValueType[]): Array<[string, string[]]>;

        xreadgroup(groupOption: 'GROUP' | 'group', group: string, consumer: string, ...args: ValueType[]): any;

        xrevrange(key: KeyType, end: string, start: string, ...args: ValueType[]): Promise<Array<[string, string[]]>>;

        xtrim(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', ...args: ValueType[]): Promise<number>;
    }

    interface Pipeline {
        readonly redis: Redis;
        readonly isCluster: boolean;
        readonly options: RedisOptions;
        readonly length: number;

        bitcount(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;
        bitcount(key: KeyType, start: number, end: number, callback?: (err: Error, res: number) => void): Pipeline;

        get(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;
        getBuffer(key: KeyType, callback?: (err: Error, res: Buffer) => void): Pipeline;

        set(key: KeyType, value: ValueType, callback?: (err: Error, res: string) => void): Pipeline;
        set(key: KeyType, value: ValueType, setMode: string, callback?: (err: Error, res: string) => void): Pipeline;
        set(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number,
            callback?: (err: Error, res: string) => void,
        ): Pipeline;
        set(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number,
            setMode: string,
            callback?: (err: Error, res: string) => void,
        ): Pipeline;

        setBuffer(key: KeyType, value: ValueType, callback?: (err: Error, res: Buffer) => void): Pipeline;
        setBuffer(
            key: KeyType,
            value: ValueType,
            setMode: string,
            callback?: (err: Error, res: Buffer) => void,
        ): Pipeline;
        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number,
            callback?: (err: Error, res: Buffer) => void,
        ): Pipeline;
        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number,
            setMode: string,
            callback?: (err: Error, res: Buffer) => void,
        ): Pipeline;

        setnx(key: KeyType, value: ValueType, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        setex(key: KeyType, seconds: number, value: ValueType, callback?: (err: Error, res: Ok) => void): Pipeline;

        psetex(
            key: KeyType,
            milliseconds: number,
            value: ValueType,
            callback?: (err: Error, res: Ok) => void,
        ): Pipeline;

        append(key: KeyType, value: ValueType, callback?: (err: Error, res: number) => void): Pipeline;

        strlen(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        del(...keys: KeyType[]): Pipeline;

        unlink(...keys: KeyType[]): Pipeline;

        exists(...keys: KeyType[]): Pipeline;

        setbit(key: KeyType, offset: number, value: ValueType, callback?: (err: Error, res: number) => void): Pipeline;

        getbit(key: KeyType, offset: number, callback?: (err: Error, res: number) => void): Pipeline;

        setrange(
            key: KeyType,
            offset: number,
            value: ValueType,
            callback?: (err: Error, res: number) => void,
        ): Pipeline;

        getrange(key: KeyType, start: number, end: number, callback?: (err: Error, res: string) => void): Pipeline;

        substr(key: KeyType, start: number, end: number, callback?: (err: Error, res: string) => void): Pipeline;

        incr(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        decr(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        mget(...keys: KeyType[]): Pipeline;

        rpush(key: KeyType, ...values: ValueType[]): Pipeline;

        rpushBuffer(key: string, ...values: Buffer[]): Pipeline;

        lpush(key: KeyType, ...values: ValueType[]): Pipeline;

        rpushx(key: KeyType, value: ValueType, callback?: (err: Error, res: number) => void): Pipeline;

        lpushx(key: KeyType, value: ValueType, callback?: (err: Error, res: number) => void): Pipeline;

        linsert(
            key: KeyType,
            direction: 'BEFORE' | 'AFTER',
            pivot: string,
            value: ValueType,
            callback?: (err: Error, res: number) => void,
        ): Pipeline;

        rpop(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        lpop(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        lpopBuffer(key: KeyType, callback?: (err: Error, res: Buffer) => void): Pipeline;

        brpop(...keys: KeyType[]): Pipeline;

        blpop(...keys: KeyType[]): Pipeline;

        brpoplpush(
            source: string,
            destination: string,
            timeout: number,
            callback?: (err: Error, res: string) => void,
        ): Pipeline;

        llen(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        lindex(key: KeyType, index: number, callback?: (err: Error, res: string) => void): Pipeline;

        lset(key: KeyType, index: number, value: ValueType, callback?: (err: Error, res: Ok) => void): Pipeline;

        lrange(key: KeyType, start: number, stop: number, callback?: (err: Error, res: string[]) => void): Pipeline;

        lrangeBuffer(
            key: KeyType,
            start: number,
            stop: number,
            callback?: (err: Error, res: Buffer[]) => void,
        ): Pipeline;

        ltrim(key: KeyType, start: number, stop: number, callback?: (err: Error, res: Ok) => void): Pipeline;

        lrem(key: KeyType, count: number, value: ValueType, callback?: (err: Error, res: number) => void): Pipeline;

        rpoplpush(source: string, destination: string, callback?: (err: Error, res: string) => void): Pipeline;

        sadd(key: KeyType, ...members: ValueType[]): Pipeline;

        srem(key: KeyType, ...members: ValueType[]): Pipeline;

        smove(
            source: string,
            destination: string,
            member: string,
            callback?: (err: Error, res: string) => void,
        ): Pipeline;

        sismember(key: KeyType, member: string, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        scard(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        spop(key: KeyType, callback?: (err: Error, res: string | null) => void): Pipeline;
        spop(key: KeyType, count: number, callback?: (err: Error, res: string[]) => void): Pipeline;

        srandmember(key: KeyType, callback?: (err: Error, res: string | null) => void): Pipeline;
        srandmember(key: KeyType, count: number, callback?: (err: Error, res: string[]) => void): Pipeline;

        sinter(...keys: KeyType[]): Pipeline;

        sinterstore(destination: string, ...keys: KeyType[]): Pipeline;

        sunion(...keys: KeyType[]): Pipeline;

        sunionstore(destination: string, ...keys: KeyType[]): Pipeline;

        sdiff(...keys: KeyType[]): Pipeline;

        sdiffstore(destination: string, ...keys: KeyType[]): Pipeline;

        smembers(key: KeyType, callback?: (err: Error, res: string[]) => void): Pipeline;

        zadd(key: KeyType, ...args: string[]): Pipeline;

        zincrby(
            key: KeyType,
            increment: number,
            member: string,
            callback?: (err: Error, res: string) => void,
        ): Pipeline;

        zrem(key: KeyType, ...members: ValueType[]): Pipeline;

        zremrangebyscore(
            key: KeyType,
            min: number | string,
            max: number | string,
            callback?: (err: Error, res: number) => void,
        ): Pipeline;

        zremrangebyrank(
            key: KeyType,
            start: number,
            stop: number,
            callback?: (err: Error, res: number) => void,
        ): Pipeline;

        zunionstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

        zinterstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

        zrange(key: KeyType, start: number, stop: number, callback?: (err: Error, res: string[]) => void): Pipeline;
        zrange(
            key: KeyType,
            start: number,
            stop: number,
            withScores: 'WITHSCORES',
            callback?: (err: Error, res: string[]) => void,
        ): Pipeline;

        zrevrange(key: KeyType, start: number, stop: number, callback?: (err: Error, res: string[]) => void): Pipeline;
        zrevrange(
            key: KeyType,
            start: number,
            stop: number,
            withScores: 'WITHSCORES',
            callback?: (err: Error, res: string[]) => void,
        ): Pipeline;

        zrangebyscore(key: KeyType, min: number | string, max: number | string, ...args: string[]): Pipeline;

        zrevrangebyscore(key: KeyType, max: number | string, min: number | string, ...args: string[]): Pipeline;

        zcount(
            key: KeyType,
            min: number | string,
            max: number | string,
            callback?: (err: Error, res: number) => void,
        ): Pipeline;

        zcard(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        zscore(key: KeyType, member: string, callback?: (err: Error, res: number) => void): Pipeline;

        zrank(key: KeyType, member: string, callback?: (err: Error, res: number) => void): Pipeline;

        zrevrank(key: KeyType, member: string, callback?: (err: Error, res: number) => void): Pipeline;

        hset(
            key: KeyType,
            field: string,
            value: ValueType,
            callback?: (err: Error, res: BooleanResponse) => void,
        ): Pipeline;
        hsetBuffer(
            key: KeyType,
            field: string,
            value: ValueType,
            callback?: (err: Error, res: Buffer) => void,
        ): Pipeline;

        hsetnx(
            key: KeyType,
            field: string,
            value: ValueType,
            callback?: (err: Error, res: BooleanResponse) => void,
        ): Pipeline;

        hget(key: KeyType, field: string, callback?: (err: Error, res: string | string) => void): Pipeline;
        hgetBuffer(key: KeyType, field: string, callback?: (err: Error, res: Buffer) => void): Pipeline;

        hmset(key: KeyType, ...args: ValueType[]): Pipeline;
        hmset(
            key: KeyType,
            data: object | Map<string, any>,
            callback?: (err: Error, res: BooleanResponse) => void,
        ): Pipeline;

        hmget(key: KeyType, ...fields: string[]): Pipeline;

        hincrby(key: KeyType, field: string, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        hincrbyfloat(
            key: KeyType,
            field: string,
            increment: number,
            callback?: (err: Error, res: number) => void,
        ): Pipeline;

        hdel(key: KeyType, ...fields: string[]): Pipeline;

        hlen(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        hkeys(key: KeyType, callback?: (err: Error, res: string[]) => void): Pipeline;

        hvals(key: KeyType, callback?: (err: Error, res: string[]) => void): Pipeline;

        hgetall(key: KeyType, callback?: (err: Error, res: Record<string, string>) => void): Pipeline;

        hexists(key: KeyType, field: string, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        incrby(key: KeyType, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        incrbyfloat(key: KeyType, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        decrby(key: KeyType, decrement: number, callback?: (err: Error, res: number) => void): Pipeline;

        getset(key: KeyType, value: ValueType, callback?: (err: Error, res: string) => void): Pipeline;

        mset(...args: ValueType[]): Pipeline;
        mset(data: object | Map<string, any>, callback?: (err: Error, res: string) => void): Pipeline;

        msetnx(...args: ValueType[]): Pipeline;
        msetnx(data: object | Map<string, any>, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        randomkey(callback?: (err: Error, res: string) => void): Pipeline;

        select(index: number, callback?: (err: Error, res: string) => void): Pipeline;

        move(key: KeyType, db: string, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        rename(key: KeyType, newkey: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        renamenx(key: KeyType, newkey: KeyType, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        expire(key: KeyType, seconds: number, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        pexpire(key: KeyType, milliseconds: number, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        expireat(key: KeyType, timestamp: number, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        pexpireat(
            key: KeyType,
            millisecondsTimestamp: number,
            callback?: (err: Error, res: BooleanResponse) => void,
        ): Pipeline;

        keys(pattern: string, callback?: (err: Error, res: string[]) => void): Pipeline;

        dbsize(callback?: (err: Error, res: number) => void): Pipeline;

        auth(password: string, callback?: (err: Error, res: string) => void): Pipeline;

        ping(callback?: (err: Error, res: string) => void): Pipeline;
        ping(message: string, callback?: (err: Error, res: string) => void): Pipeline;

        echo(message: string, callback?: (err: Error, res: string) => void): Pipeline;

        save(callback?: (err: Error, res: string) => void): Pipeline;

        bgsave(callback?: (err: Error, res: string) => void): Pipeline;

        bgrewriteaof(callback?: (err: Error, res: string) => void): Pipeline;

        shutdown(save: 'SAVE' | 'NOSAVE', callback?: (err: Error, res: never) => void): Pipeline;

        lastsave(callback?: (err: Error, res: number) => void): Pipeline;

        type(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        multi(callback?: (err: Error, res: string) => void): Pipeline;

        exec(callback?: (err: Error, res: Array<[Error | null, any]>) => void): Promise<Array<[Error | null, any]>>;

        discard(callback?: (err: Error, res: any) => void): Pipeline;

        sync(callback?: (err: Error, res: any) => void): Pipeline;

        flushdb(callback?: (err: Error, res: string) => void): Pipeline;

        flushall(callback?: (err: Error, res: string) => void): Pipeline;

        sort(key: KeyType, ...args: string[]): Pipeline;

        info(callback?: (err: Error, res: string) => void): Pipeline;
        info(section: string, callback?: (err: Error, res: string) => void): Pipeline;

        time(callback?: (err: Error, res: [string, string]) => void): Pipeline;

        monitor(callback?: (err: Error, res: EventEmitter) => void): Pipeline;

        ttl(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        pttl(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        persist(key: KeyType, callback?: (err: Error, res: BooleanResponse) => void): Pipeline;

        slaveof(host: string, port: number, callback?: (err: Error, res: string) => void): Pipeline;

        debug(...args: ValueType[]): Pipeline;

        config(...args: ValueType[]): Pipeline;

        subscribe(...channels: ValueType[]): Pipeline;

        unsubscribe(...channels: string[]): Pipeline;

        psubscribe(...patterns: string[]): Pipeline;

        punsubscribe(...patterns: string[]): Pipeline;

        publish(channel: string, message: string, callback?: (err: Error, res: number) => void): Pipeline;

        watch(...keys: KeyType[]): Pipeline;

        unwatch(callback?: (err: Error, res: string) => void): Pipeline;

        cluster(...args: ValueType[]): Pipeline;

        restore(...args: ValueType[]): Pipeline;

        migrate(...args: ValueType[]): Pipeline;

        dump(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        object(subcommand: string, ...args: ValueType[]): Pipeline;

        client(...args: ValueType[]): Pipeline;

        eval(script: string, numKeys: number, ...args: ValueType[]): Pipeline;

        evalsha(scriptSha: string, numKeys: string, ...args: ValueType[]): Pipeline;

        script(...args: ValueType[]): Pipeline;

        quit(callback?: (err: Error, res: string) => void): Pipeline;

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
        sscan(key: KeyType, cursor: number, ...args: ValueType[]): Pipeline;

        hscan(key: KeyType, cursor: number, ...args: ValueType[]): Pipeline;

        zscan(key: KeyType, cursor: number, ...args: ValueType[]): Pipeline;

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

    interface Cluster extends EventEmitter, Commander {
        connect(callback: () => void): Promise<void>;
        disconnect(): void;
        nodes(role?: NodeRole): Redis[];
        quit(callback?: CallbackFunction<Ok>): Promise<Ok>;
        get(key: KeyType, callback: (err: Error, res: string | null) => void): void;
        get(key: KeyType): Promise<string | null>;

        getBuffer(key: KeyType, callback: (err: Error, res: Buffer) => void): void;
        getBuffer(key: KeyType): Promise<Buffer>;

        set(
            key: KeyType,
            value: ValueType,
            expiryMode?: string | any[],
            time?: number | string,
            setMode?: number | string,
        ): Promise<string>;
        set(key: KeyType, value: ValueType, callback: (err: Error, res: string) => void): void;
        set(key: KeyType, value: ValueType, setMode: string | any[], callback: (err: Error, res: string) => void): void;
        set(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number | string,
            callback: (err: Error, res: string) => void,
        ): void;
        set(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number | string,
            setMode: number | string,
            callback: (err: Error, res: string) => void,
        ): void;

        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode?: string | any[],
            time?: number | string,
            setMode?: number | string,
        ): Promise<Buffer>;
        setBuffer(key: KeyType, value: ValueType, callback: (err: Error, res: Buffer) => void): void;
        setBuffer(key: KeyType, value: ValueType, setMode: string, callback: (err: Error, res: Buffer) => void): void;
        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number,
            callback: (err: Error, res: Buffer) => void,
        ): void;
        setBuffer(
            key: KeyType,
            value: ValueType,
            expiryMode: string,
            time: number | string,
            setMode: number | string,
            callback: (err: Error, res: Buffer) => void,
        ): void;

        setnx(key: KeyType, value: ValueType, callback: (err: Error, res: number) => void): void;
        setnx(key: KeyType, value: ValueType): Promise<BooleanResponse>;

        del(...keys: KeyType[]): Promise<number>;

        incr(key: KeyType, callback: (err: Error, res: number) => void): void;
        incr(key: KeyType): Promise<number>;

        decr(key: KeyType, callback: (err: Error, res: number) => void): void;
        decr(key: KeyType): Promise<number>;

        rpush(key: KeyType, ...values: ValueType[]): Promise<number>;

        rpushBuffer(key: string, ...values: Buffer[]): Promise<number>;

        lpopBuffer(key: KeyType, callback: (err: Error, res: Buffer) => void): void;
        lpopBuffer(key: KeyType): Promise<Buffer>;

        llen(key: KeyType, callback: (err: Error, res: number) => void): void;
        llen(key: KeyType): Promise<number>;

        lrangeBuffer(key: KeyType, start: number, stop: number, callback: (err: Error, res: Buffer[]) => void): void;
        lrangeBuffer(key: KeyType, start: number, stop: number): Promise<Buffer[]>;

        zadd(key: KeyType, ...args: string[]): Promise<number>;

        zrem(key: KeyType, ...members: ValueType[]): Promise<number>;

        zrange(key: KeyType, start: number, stop: number, callback: (err: Error, res: string[]) => void): void;
        zrange(
            key: KeyType,
            start: number,
            stop: number,
            withScores: 'WITHSCORES',
            callback: (err: Error, res: string[]) => void,
        ): void;
        zrange(key: KeyType, start: number, stop: number, withScores?: 'WITHSCORES'): Promise<string[]>;

        hset(key: KeyType, field: string, value: ValueType, callback: (err: Error, res: BooleanResponse) => void): void;
        hset(key: KeyType, field: string, value: ValueType): Promise<BooleanResponse>;

        hget(key: KeyType, field: string, callback: (err: Error, res: string | null) => void): void;
        hget(key: KeyType, field: string): Promise<string | null>;

        expire(key: KeyType, seconds: number, callback: (err: Error, res: BooleanResponse) => void): void;
        expire(key: KeyType, seconds: number): Promise<BooleanResponse>;

        keys(pattern: string, callback: (err: Error, res: string[]) => void): void;
        keys(pattern: string): Promise<string[]>;
    }

    interface ClusterStatic extends EventEmitter, Commander {
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
        callback: (err: NodeJS.ErrnoException, address: string, family: number) => void,
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
