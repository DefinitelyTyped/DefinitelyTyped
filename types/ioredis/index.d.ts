// Type definitions for ioredis 4.0
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
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/* =================== USAGE ===================
    import * as Redis from "ioredis";
    const redis = new Redis();
 =============================================== */

/// <reference types="node" />

import tls = require('tls');

interface RedisStatic {
    new(port?: number, host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    new(host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    new(options?: IORedis.RedisOptions): IORedis.Redis;
    (port?: number, host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    (host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    (options?: IORedis.RedisOptions): IORedis.Redis;
    Cluster: IORedis.ClusterStatic;
    Command: IORedis.Command;
}

declare var IORedis: RedisStatic;
export = IORedis;

declare class Commander {
    getBuiltinCommands(): string[];
    createBuiltinCommand(commandName: string): {};
    defineCommand(name: string, definition: {
        numberOfKeys?: number;
        lua?: string;
    }): any;
    sendCommand(): void;
}

declare namespace IORedis {
    type KeyType = string | Buffer;

    interface Command {
        setArgumentTransformer(name: string, fn: (args: any[]) => any[]): void;
        setReplyTransformer(name: string, fn: (result: any) => any): void;
    }

    interface Redis extends NodeJS.EventEmitter, Commander {
        Promise: typeof Promise;
        status: string;
        connect(callback?: () => void): Promise<any>;
        disconnect(): void;
        duplicate(): Redis;

        send_command(command: string, ...args: any[]): any;

        bitcount(key: KeyType, callback: (err: Error, res: number) => void): void;
        bitcount(key: KeyType, start: number, end: number, callback: (err: Error, res: number) => void): void;
        bitcount(key: KeyType): Promise<number>;
        bitcount(key: KeyType, start: number, end: number): Promise<number>;

        get(key: KeyType, callback: (err: Error, res: string | null) => void): void;
        get(key: KeyType): Promise<string | null>;

        getBuffer(key: KeyType, callback: (err: Error, res: Buffer) => void): void;
        getBuffer(key: KeyType): Promise<Buffer>;

        set(key: KeyType, value: any, expiryMode?: string | any[], time?: number | string, setMode?: number | string): Promise<string>;

        set(key: KeyType, value: any, callback: (err: Error, res: string) => void): void;
        set(key: KeyType, value: any, setMode: string | any[], callback: (err: Error, res: string) => void): void;
        set(key: KeyType, value: any, expiryMode: string, time: number | string, callback: (err: Error, res: string) => void): void;
        set(key: KeyType, value: any, expiryMode: string, time: number | string, setMode: number | string, callback: (err: Error, res: string) => void): void;

        setBuffer(key: KeyType, value: any, expiryMode?: string | any[], time?: number | string, setMode?: number | string): Promise<Buffer>;

        setBuffer(key: KeyType, value: any, callback: (err: Error, res: Buffer) => void): void;
        setBuffer(key: KeyType, value: any, setMode: string, callback: (err: Error, res: Buffer) => void): void;
        setBuffer(key: KeyType, value: any, expiryMode: string, time: number, callback: (err: Error, res: Buffer) => void): void;
        setBuffer(key: KeyType, value: any, expiryMode: string, time: number | string, setMode: number | string, callback: (err: Error, res: Buffer) => void): void;

        setnx(key: KeyType, value: any, callback: (err: Error, res: any) => void): void;
        setnx(key: KeyType, value: any): Promise<any>;

        setex(key: KeyType, seconds: number, value: any, callback: (err: Error, res: any) => void): void;
        setex(key: KeyType, seconds: number, value: any): Promise<any>;

        psetex(key: KeyType, milliseconds: number, value: any, callback: (err: Error, res: any) => void): void;
        psetex(key: KeyType, milliseconds: number, value: any): Promise<any>;

        append(key: KeyType, value: any, callback: (err: Error, res: number) => void): void;
        append(key: KeyType, value: any): Promise<number>;

        strlen(key: KeyType, callback: (err: Error, res: number) => void): void;
        strlen(key: KeyType): Promise<number>;

        del(...keys: KeyType[]): Promise<number>;

        exists(...keys: KeyType[]): Promise<number>;
        exists(key: KeyType, callback: (err: Error, res: number) => void): void;

        setbit(key: KeyType, offset: number, value: any, callback: (err: Error, res: number) => void): void;
        setbit(key: KeyType, offset: number, value: any): Promise<number>;

        getbit(key: KeyType, offset: number, callback: (err: Error, res: number) => void): void;
        getbit(key: KeyType, offset: number): Promise<number>;

        setrange(key: KeyType, offset: number, value: any, callback: (err: Error, res: number) => void): void;
        setrange(key: KeyType, offset: number, value: any): Promise<number>;

        getrange(key: KeyType, start: number, end: number, callback: (err: Error, res: string) => void): void;
        getrange(key: KeyType, start: number, end: number): Promise<string>;

        substr(key: KeyType, start: number, end: number, callback: (err: Error, res: string) => void): void;
        substr(key: KeyType, start: number, end: number): Promise<string>;

        incr(key: KeyType, callback: (err: Error, res: number) => void): void;
        incr(key: KeyType): Promise<number>;

        decr(key: KeyType, callback: (err: Error, res: number) => void): void;
        decr(key: KeyType): Promise<number>;

        mget(...keys: KeyType[]): any;

        rpush(key: KeyType, ...values: any[]): any;

        lpush(key: KeyType, ...values: any[]): any;

        rpushx(key: KeyType, value: any, callback: (err: Error, res: number) => void): void;
        rpushx(key: KeyType, value: any): Promise<number>;

        lpushx(key: KeyType, value: any, callback: (err: Error, res: number) => void): void;
        lpushx(key: KeyType, value: any): Promise<number>;

        linsert(key: KeyType, direction: "BEFORE" | "AFTER", pivot: string, value: any, callback: (err: Error, res: number) => void): void;
        linsert(key: KeyType, direction: "BEFORE" | "AFTER", pivot: string, value: any): Promise<number>;

        rpop(key: KeyType, callback: (err: Error, res: string) => void): void;
        rpop(key: KeyType): Promise<string>;

        lpop(key: KeyType, callback: (err: Error, res: string) => void): void;
        lpop(key: KeyType): Promise<string>;

        brpop(...keys: KeyType[]): any;

        blpop(...keys: KeyType[]): any;

        brpoplpush(source: string, destination: string, timeout: number, callback: (err: Error, res: any) => void): void;
        brpoplpush(source: string, destination: string, timeout: number): Promise<any>;

        llen(key: KeyType, callback: (err: Error, res: number) => void): void;
        llen(key: KeyType): Promise<number>;

        lindex(key: KeyType, index: number, callback: (err: Error, res: string) => void): void;
        lindex(key: KeyType, index: number): Promise<string>;

        lset(key: KeyType, index: number, value: any, callback: (err: Error, res: any) => void): void;
        lset(key: KeyType, index: number, value: any): Promise<any>;

        lrange(key: KeyType, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        lrange(key: KeyType, start: number, stop: number): Promise<any>;

        ltrim(key: KeyType, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        ltrim(key: KeyType, start: number, stop: number): Promise<any>;

        lrem(key: KeyType, count: number, value: any, callback: (err: Error, res: number) => void): void;
        lrem(key: KeyType, count: number, value: any): Promise<number>;

        rpoplpush(source: string, destination: string, callback: (err: Error, res: string) => void): void;
        rpoplpush(source: string, destination: string): Promise<string>;

        sadd(key: KeyType, ...members: any[]): any;

        srem(key: KeyType, ...members: any[]): any;

        smove(source: string, destination: string, member: string, callback: (err: Error, res: string) => void): void;
        smove(source: string, destination: string, member: string): Promise<string>;

        sismember(key: KeyType, member: string, callback: (err: Error, res: 1 | 0) => void): void;
        sismember(key: KeyType, member: string): Promise<1 | 0>;

        scard(key: KeyType, callback: (err: Error, res: number) => void): void;
        scard(key: KeyType): Promise<number>;

        spop(key: KeyType, callback: (err: Error, res: any) => void): void;
        spop(key: KeyType, count: number, callback: (err: Error, res: any) => void): void;
        spop(key: KeyType, count?: number): Promise<any>;

        srandmember(key: KeyType, callback: (err: Error, res: any) => void): void;
        srandmember(key: KeyType, count: number, callback: (err: Error, res: any) => void): void;
        srandmember(key: KeyType, count?: number): Promise<any>;

        sinter(...keys: KeyType[]): any;

        sinterstore(destination: string, ...keys: KeyType[]): any;

        sunion(...keys: KeyType[]): any;

        sunionstore(destination: string, ...keys: KeyType[]): any;

        sdiff(...keys: KeyType[]): any;

        sdiffstore(destination: string, ...keys: KeyType[]): any;

        smembers(key: KeyType, callback: (err: Error, res: any) => void): void;
        smembers(key: KeyType): Promise<any>;

        zadd(key: KeyType, ...args: string[]): Promise<number | string>;

        zincrby(key: KeyType, increment: number, member: string, callback: (err: Error, res: any) => void): void;
        zincrby(key: KeyType, increment: number, member: string): Promise<any>;

        zrem(key: KeyType, ...members: any[]): any;

        zremrangebyscore(key: KeyType, min: number | string, max: number | string, callback: (err: Error, res: any) => void): void;
        zremrangebyscore(key: KeyType, min: number | string, max: number | string): Promise<any>;

        zremrangebyrank(key: KeyType, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        zremrangebyrank(key: KeyType, start: number, stop: number): Promise<any>;

        zunionstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): any;

        zinterstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): any;

        zrange(key: KeyType, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        zrange(key: KeyType, start: number, stop: number, withScores: "WITHSCORES", callback: (err: Error, res: any) => void): void;
        zrange(key: KeyType, start: number, stop: number, withScores?: "WITHSCORES"): Promise<any>;

        zrevrange(key: KeyType, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        zrevrange(key: KeyType, start: number, stop: number, withScores: "WITHSCORES", callback: (err: Error, res: any) => void): void;
        zrevrange(key: KeyType, start: number, stop: number, withScores?: "WITHSCORES"): Promise<any>;

        zrangebyscore(key: KeyType, min: number | string, max: number | string, ...args: string[]): any;

        zrevrangebyscore(key: KeyType, max: number | string, min: number | string, ...args: string[]): any;

        zcount(key: KeyType, min: number | string, max: number | string, callback: (err: Error, res: number) => void): void;
        zcount(key: KeyType, min: number | string, max: number | string): Promise<number>;

        zcard(key: KeyType, callback: (err: Error, res: number) => void): void;
        zcard(key: KeyType): Promise<number>;

        zscore(key: KeyType, member: string, callback: (err: Error, res: string) => void): void;
        zscore(key: KeyType, member: string): Promise<string>;

        zrank(key: KeyType, member: string, callback: (err: Error, res: number) => void): void;
        zrank(key: KeyType, member: string): Promise<number>;

        zrevrank(key: KeyType, member: string, callback: (err: Error, res: number) => void): void;
        zrevrank(key: KeyType, member: string): Promise<number>;

        hset(key: KeyType, field: string, value: any, callback: (err: Error, res: 0 | 1) => void): void;
        hset(key: KeyType, field: string, value: any): Promise<0 | 1>;
        hsetBuffer(key: KeyType, field: string, value: any, callback: (err: Error, res: 0 | 1) => void): void;
        hsetBuffer(key: KeyType, field: string, value: any): Promise<Buffer>;

        hsetnx(key: KeyType, field: string, value: any, callback: (err: Error, res: 0 | 1) => void): void;
        hsetnx(key: KeyType, field: string, value: any): Promise<0 | 1>;

        hget(key: KeyType, field: string, callback: (err: Error, res: string | null) => void): void;
        hget(key: KeyType, field: string): Promise<string | null>;
        hgetBuffer(key: KeyType, field: string, callback: (err: Error, res: Buffer) => void): void;
        hgetBuffer(key: KeyType, field: string): Promise<Buffer>;

        hmset(key: KeyType, ...args: any[]): Promise<0 | 1>;
        hmset(key: KeyType, data: any, callback: (err: Error, res: 0 | 1) => void): void;
        hmset(key: KeyType, data: any): Promise<0 | 1>;

        hmget(key: KeyType, ...fields: string[]): any;

        hincrby(key: KeyType, field: string, increment: number, callback: (err: Error, res: number) => void): void;
        hincrby(key: KeyType, field: string, increment: number): Promise<number>;

        hincrbyfloat(key: KeyType, field: string, increment: number, callback: (err: Error, res: number) => void): void;
        hincrbyfloat(key: KeyType, field: string, increment: number): Promise<number>;

        hdel(key: KeyType, ...fields: string[]): any;

        hlen(key: KeyType, callback: (err: Error, res: number) => void): void;
        hlen(key: KeyType): Promise<number>;

        hkeys(key: KeyType, callback: (err: Error, res: any) => void): void;
        hkeys(key: KeyType): Promise<any>;

        hvals(key: KeyType, callback: (err: Error, res: any) => void): void;
        hvals(key: KeyType): Promise<any>;

        hgetall(key: KeyType, callback: (err: Error, res: any) => void): void;
        hgetall(key: KeyType): Promise<any>;

        hexists(key: KeyType, field: string, callback: (err: Error, res: 0 | 1) => void): void;
        hexists(key: KeyType, field: string): Promise<0 | 1>;

        incrby(key: KeyType, increment: number, callback: (err: Error, res: number) => void): void;
        incrby(key: KeyType, increment: number): Promise<number>;

        incrbyfloat(key: KeyType, increment: number, callback: (err: Error, res: number) => void): void;
        incrbyfloat(key: KeyType, increment: number): Promise<number>;

        decrby(key: KeyType, decrement: number, callback: (err: Error, res: number) => void): void;
        decrby(key: KeyType, decrement: number): Promise<number>;

        getset(key: KeyType, value: any, callback: (err: Error, res: string | null) => void): void;
        getset(key: KeyType, value: any): Promise<string | null>;

        mset(...args: any[]): any;
        mset(data: any, callback: (err: Error, res: string) => void): void;
        mset(data: any): Promise<string>;

        msetnx(...args: any[]): any;
        msetnx(data: any, callback: (err: Error, res: 0 | 1) => void): void;
        msetnx(data: any): Promise<0 | 1>;

        randomkey(callback: (err: Error, res: string) => void): void;
        randomkey(): Promise<string>;

        select(index: number, callback: (err: Error, res: string) => void): void;
        select(index: number): Promise<string>;

        move(key: KeyType, db: string, callback: (err: Error, res: 0 | 1) => void): void;
        move(key: KeyType, db: string): Promise<0 | 1>;

        rename(key: KeyType, newkey: KeyType, callback: (err: Error, res: string) => void): void;
        rename(key: KeyType, newkey: KeyType): Promise<string>;

        renamenx(key: KeyType, newkey: KeyType, callback: (err: Error, res: 0 | 1) => void): void;
        renamenx(key: KeyType, newkey: KeyType): Promise<0 | 1>;

        expire(key: KeyType, seconds: number, callback: (err: Error, res: 0 | 1) => void): void;
        expire(key: KeyType, seconds: number): Promise<0 | 1>;

        pexpire(key: KeyType, milliseconds: number, callback: (err: Error, res: 0 | 1) => void): void;
        pexpire(key: KeyType, milliseconds: number): Promise<0 | 1>;

        expireat(key: KeyType, timestamp: number, callback: (err: Error, res: 0 | 1) => void): void;
        expireat(key: KeyType, timestamp: number): Promise<0 | 1>;

        pexpireat(key: KeyType, millisecondsTimestamp: number, callback: (err: Error, res: 0 | 1) => void): void;
        pexpireat(key: KeyType, millisecondsTimestamp: number): Promise<0 | 1>;

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

        shutdown(save: "SAVE" | "NOSAVE", callback: (err: Error, res: any) => void): void;
        shutdown(save: "SAVE" | "NOSAVE"): Promise<any>;

        lastsave(callback: (err: Error, res: number) => void): void;
        lastsave(): Promise<number>;

        type(key: KeyType, callback: (err: Error, res: string) => void): void;
        type(key: KeyType): Promise<string>;

        multi(commands?: string[][], options?: MultiOptions): Pipeline;
        multi(options: { pipeline: false }): Promise<string>;

        exec(callback: (err: Error, res: any) => void): void;
        exec(): Promise<any>;

        discard(callback: (err: Error, res: any) => void): void;
        discard(): Promise<any>;

        sync(callback: (err: Error, res: any) => void): void;
        sync(): Promise<any>;

        flushdb(callback: (err: Error, res: string) => void): void;
        flushdb(): Promise<string>;

        flushall(callback: (err: Error, res: string) => void): void;
        flushall(): Promise<string>;

        sort(key: KeyType, ...args: string[]): any;

        info(callback: (err: Error, res: any) => void): void;
        info(section: string, callback: (err: Error, res: any) => void): void;
        info(section?: string): Promise<string>;

        time(callback: (err: Error, res: any) => void): void;
        time(): Promise<any>;

        monitor(callback: (err: Error, res: NodeJS.EventEmitter) => void): void;
        monitor(): Promise<NodeJS.EventEmitter>;

        ttl(key: KeyType, callback: (err: Error, res: number) => void): void;
        ttl(key: KeyType): Promise<number>;

        persist(key: KeyType, callback: (err: Error, res: 0 | 1) => void): void;
        persist(key: KeyType): Promise<0 | 1>;

        slaveof(host: string, port: number, callback: (err: Error, res: string) => void): void;
        slaveof(host: string, port: number): Promise<string>;

        debug(...args: any[]): any;

        config(...args: any[]): any;

        subscribe(...channels: any[]): any;

        unsubscribe(...channels: string[]): any;

        psubscribe(...patterns: string[]): any;

        punsubscribe(...patterns: string[]): any;

        publish(channel: string, message: string, callback: (err: Error, res: number) => void): void;
        publish(channel: string, message: string): Promise<number>;

        watch(...keys: KeyType[]): any;

        unwatch(callback: (err: Error, res: string) => void): void;
        unwatch(): Promise<string>;

        cluster(...args: any[]): any;

        restore(...args: any[]): any;

        migrate(...args: any[]): any;

        dump(key: KeyType, callback: (err: Error, res: string) => void): void;
        dump(key: KeyType): Promise<string>;

        object(subcommand: string, ...args: any[]): any;

        client(...args: any[]): any;

        eval(...args: any[]): any;

        evalsha(...args: any[]): any;

        script(...args: any[]): any;

        quit(callback: (err: Error, res: string) => void): void;
        quit(): Promise<string>;

        scan(cursor: number): Promise<[string, string[]]>;

        scan(cursor: number, matchOption: 'match' | 'MATCH', pattern: string): Promise<[string, string[]]>;
        scan(cursor: number, countOption: 'count' | 'COUNT', count: number): Promise<[string, string[]]>;

        scan(cursor: number, matchOption: 'match' | 'MATCH', pattern: string, countOption: 'count' | 'COUNT', count: number): Promise<[string, string[]]>;
        scan(cursor: number, countOption: 'count' | 'COUNT', count: number, matchOption: 'match' | 'MATCH', pattern: string): Promise<[string, string[]]>;

        sscan(key: KeyType, cursor: number, ...args: any[]): any;

        hscan(key: KeyType, cursor: number, ...args: any[]): any;

        zscan(key: KeyType, cursor: number, ...args: any[]): any;

        pfmerge(destkey: KeyType, ...sourcekeys: KeyType[]): any;

        pfadd(key: KeyType, ...elements: string[]): any;

        pfcount(...keys: KeyType[]): any;

        pipeline(commands?: string[][]): Pipeline;

        scanStream(options?: ScanStreamOption): NodeJS.EventEmitter;
        sscanStream(key: KeyType, options?: ScanStreamOption): NodeJS.EventEmitter;
        hscanStream(key: KeyType, options?: ScanStreamOption): NodeJS.EventEmitter;
        zscanStream(key: KeyType, options?: ScanStreamOption): NodeJS.EventEmitter;

        xack(key: KeyType, group: string, ...ids: string[]): any;

        xadd(key: KeyType, id: string, ...args: string[]): any;
        xadd(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', count: number, ...args: string[]): any;
        xadd(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', approximate: '~', count: number, ...args: string[]): any;

        xclaim(key: KeyType, group: string, consumer: string, minIdleTime: number, ...args: any[]): any;

        xdel(key: KeyType, ...ids: string[]): any;

        xgroup(...args: any[]): any;

        xinfo(...args: any[]): any;

        xlen(key: KeyType): any;

        xpending(key: KeyType, group: string, ...args: any[]): any;

        xrange(key: KeyType, start: string, end: string, ...args: any[]): any;

        xread(...args: any[]): any;

        xreadgroup(groupOption: 'GROUP' | 'group', group: string, consumer: string,  ...args: any[]): any;

        xrevrange(key: KeyType, end: string, start: string, ...args: any[]): any;

        xtrim(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', ...args: any[]): any;
    }

    interface Pipeline {
        redis: Redis;
        isCluster: boolean;
        options: RedisOptions;
        _queue: Command[];
        _result: any[];
        _transactions: number;
        _shaToScript: {};
        bitcount(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;
        bitcount(key: KeyType, start: number, end: number, callback?: (err: Error, res: number) => void): Pipeline;

        get(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;
        getBuffer(key: KeyType, callback?: (err: Error, res: Buffer) => void): Pipeline;

        set(key: KeyType, value: any, callback?: (err: Error, res: string) => void): Pipeline;
        set(key: KeyType, value: any, setMode: string, callback?: (err: Error, res: string) => void): Pipeline;
        set(key: KeyType, value: any, expiryMode: string, time: number, callback?: (err: Error, res: string) => void): Pipeline;
        set(key: KeyType, value: any, expiryMode: string, time: number, setMode: string, callback?: (err: Error, res: string) => void): Pipeline;

        setBuffer(key: KeyType, value: any, callback?: (err: Error, res: Buffer) => void): Pipeline;
        setBuffer(key: KeyType, value: any, setMode: string, callback?: (err: Error, res: Buffer) => void): Pipeline;
        setBuffer(key: KeyType, value: any, expiryMode: string, time: number, callback?: (err: Error, res: Buffer) => void): Pipeline;
        setBuffer(key: KeyType, value: any, expiryMode: string, time: number, setMode: string, callback?: (err: Error, res: Buffer) => void): Pipeline;

        setnx(key: KeyType, value: any, callback?: (err: Error, res: any) => void): Pipeline;

        setex(key: KeyType, seconds: number, value: any, callback?: (err: Error, res: any) => void): Pipeline;

        psetex(key: KeyType, milliseconds: number, value: any, callback?: (err: Error, res: any) => void): Pipeline;

        append(key: KeyType, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        strlen(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        del(...keys: KeyType[]): Pipeline;

        exists(...keys: KeyType[]): Pipeline;

        setbit(key: KeyType, offset: number, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        getbit(key: KeyType, offset: number, callback?: (err: Error, res: number) => void): Pipeline;

        setrange(key: KeyType, offset: number, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        getrange(key: KeyType, start: number, end: number, callback?: (err: Error, res: string) => void): Pipeline;

        substr(key: KeyType, start: number, end: number, callback?: (err: Error, res: string) => void): Pipeline;

        incr(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        decr(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        mget(...keys: KeyType[]): Pipeline;

        rpush(key: KeyType, ...values: any[]): Pipeline;

        lpush(key: KeyType, ...values: any[]): Pipeline;

        rpushx(key: KeyType, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        lpushx(key: KeyType, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        linsert(key: KeyType, direction: "BEFORE" | "AFTER", pivot: string, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        rpop(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        lpop(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        brpop(...keys: KeyType[]): Pipeline;

        blpop(...keys: KeyType[]): Pipeline;

        brpoplpush(source: string, destination: string, timeout: number, callback?: (err: Error, res: any) => void): Pipeline;

        llen(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        lindex(key: KeyType, index: number, callback?: (err: Error, res: string) => void): Pipeline;

        lset(key: KeyType, index: number, value: any, callback?: (err: Error, res: any) => void): Pipeline;

        lrange(key: KeyType, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;

        ltrim(key: KeyType, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;

        lrem(key: KeyType, count: number, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        rpoplpush(source: string, destination: string, callback?: (err: Error, res: string) => void): Pipeline;

        sadd(key: KeyType, ...members: any[]): Pipeline;

        srem(key: KeyType, ...members: any[]): Pipeline;

        smove(source: string, destination: string, member: string, callback?: (err: Error, res: string) => void): Pipeline;

        sismember(key: KeyType, member: string, callback?: (err: Error, res: 1 | 0) => void): Pipeline;

        scard(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        spop(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;
        spop(key: KeyType, count: number, callback?: (err: Error, res: any) => void): Pipeline;

        srandmember(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;
        srandmember(key: KeyType, count: number, callback?: (err: Error, res: any) => void): Pipeline;

        sinter(...keys: KeyType[]): Pipeline;

        sinterstore(destination: string, ...keys: KeyType[]): Pipeline;

        sunion(...keys: KeyType[]): Pipeline;

        sunionstore(destination: string, ...keys: KeyType[]): Pipeline;

        sdiff(...keys: KeyType[]): Pipeline;

        sdiffstore(destination: string, ...keys: KeyType[]): Pipeline;

        smembers(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;

        zadd(key: KeyType, ...args: string[]): Pipeline;

        zincrby(key: KeyType, increment: number, member: string, callback?: (err: Error, res: any) => void): Pipeline;

        zrem(key: KeyType, ...members: any[]): Pipeline;

        zremrangebyscore(key: KeyType, min: number | string, max: number | string, callback?: (err: Error, res: any) => void): Pipeline;

        zremrangebyrank(key: KeyType, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;

        zunionstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

        zinterstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

        zrange(key: KeyType, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;
        zrange(key: KeyType, start: number, stop: number, withScores: "WITHSCORES", callback?: (err: Error, res: any) => void): Pipeline;

        zrevrange(key: KeyType, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;
        zrevrange(key: KeyType, start: number, stop: number, withScores: "WITHSCORES", callback?: (err: Error, res: any) => void): Pipeline;

        zrangebyscore(key: KeyType, min: number | string, max: number | string, ...args: string[]): Pipeline;

        zrevrangebyscore(key: KeyType, max: number | string, min: number | string, ...args: string[]): Pipeline;

        zcount(key: KeyType, min: number | string, max: number | string, callback?: (err: Error, res: number) => void): Pipeline;

        zcard(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        zscore(key: KeyType, member: string, callback?: (err: Error, res: number) => void): Pipeline;

        zrank(key: KeyType, member: string, callback?: (err: Error, res: number) => void): Pipeline;

        zrevrank(key: KeyType, member: string, callback?: (err: Error, res: number) => void): Pipeline;

        hset(key: KeyType, field: string, value: any, callback?: (err: Error, res: 0 | 1) => void): Pipeline;
        hsetBuffer(key: KeyType, field: string, value: any, callback?: (err: Error, res: Buffer) => void): Pipeline;

        hsetnx(key: KeyType, field: string, value: any, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        hget(key: KeyType, field: string, callback?: (err: Error, res: string | string) => void): Pipeline;
        hgetBuffer(key: KeyType, field: string, callback?: (err: Error, res: Buffer) => void): Pipeline;

        hmset(key: KeyType, ...args: any[]): Pipeline;
        hmset(key: KeyType, data: any, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        hmget(key: KeyType, ...fields: string[]): Pipeline;

        hincrby(key: KeyType, field: string, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        hincrbyfloat(key: KeyType, field: string, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        hdel(key: KeyType, ...fields: string[]): Pipeline;

        hlen(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        hkeys(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;

        hvals(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;

        hgetall(key: KeyType, callback?: (err: Error, res: any) => void): Pipeline;

        hexists(key: KeyType, field: string, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        incrby(key: KeyType, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        incrbyfloat(key: KeyType, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        decrby(key: KeyType, decrement: number, callback?: (err: Error, res: number) => void): Pipeline;

        getset(key: KeyType, value: any, callback?: (err: Error, res: string) => void): Pipeline;

        mset(...args: any[]): Pipeline;
        mset(data: any, callback?: (err: Error, res: string) => void): Pipeline;

        msetnx(...args: any[]): Pipeline;
        msetnx(data: any, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        randomkey(callback?: (err: Error, res: string) => void): Pipeline;

        select(index: number, callback?: (err: Error, res: string) => void): Pipeline;

        move(key: KeyType, db: string, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        rename(key: KeyType, newkey: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        renamenx(key: KeyType, newkey: KeyType, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        expire(key: KeyType, seconds: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        pexpire(key: KeyType, milliseconds: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        expireat(key: KeyType, timestamp: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        pexpireat(key: KeyType, millisecondsTimestamp: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        keys(pattern: string, callback?: (err: Error, res: string[]) => void): Pipeline;

        dbsize(callback?: (err: Error, res: number) => void): Pipeline;

        auth(password: string, callback?: (err: Error, res: string) => void): Pipeline;

        ping(callback?: (err: Error, res: string) => void): Pipeline;
        ping(message: string, callback?: (err: Error, res: string) => void): Pipeline;

        echo(message: string, callback?: (err: Error, res: string) => void): Pipeline;

        save(callback?: (err: Error, res: string) => void): Pipeline;

        bgsave(callback?: (err: Error, res: string) => void): Pipeline;

        bgrewriteaof(callback?: (err: Error, res: string) => void): Pipeline;

        shutdown(save: "SAVE" | "NOSAVE", callback?: (err: Error, res: any) => void): Pipeline;

        lastsave(callback?: (err: Error, res: number) => void): Pipeline;

        type(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        multi(callback?: (err: Error, res: string) => void): Pipeline;

        exec(callback?: (err: Error, res: any) => void): Promise<any>;

        discard(callback?: (err: Error, res: any) => void): Pipeline;

        sync(callback?: (err: Error, res: any) => void): Pipeline;

        flushdb(callback?: (err: Error, res: string) => void): Pipeline;

        flushall(callback?: (err: Error, res: string) => void): Pipeline;

        sort(key: KeyType, ...args: string[]): Pipeline;

        info(callback?: (err: Error, res: any) => void): Pipeline;
        info(section: string, callback?: (err: Error, res: any) => void): Pipeline;

        time(callback?: (err: Error, res: any) => void): Pipeline;

        monitor(callback?: (err: Error, res: NodeJS.EventEmitter) => void): Pipeline;

        ttl(key: KeyType, callback?: (err: Error, res: number) => void): Pipeline;

        persist(key: KeyType, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        slaveof(host: string, port: number, callback?: (err: Error, res: string) => void): Pipeline;

        debug(...args: any[]): Pipeline;

        config(...args: any[]): Pipeline;

        subscribe(...channels: any[]): Pipeline;

        unsubscribe(...channels: string[]): Pipeline;

        psubscribe(...patterns: string[]): Pipeline;

        punsubscribe(...patterns: string[]): Pipeline;

        publish(channel: string, message: string, callback?: (err: Error, res: number) => void): Pipeline;

        watch(...keys: KeyType[]): Pipeline;

        unwatch(callback?: (err: Error, res: string) => void): Pipeline;

        cluster(...args: any[]): Pipeline;

        restore(...args: any[]): Pipeline;

        migrate(...args: any[]): Pipeline;

        dump(key: KeyType, callback?: (err: Error, res: string) => void): Pipeline;

        object(subcommand: string, ...args: any[]): Pipeline;

        client(...args: any[]): Pipeline;

        eval(...args: any[]): Pipeline;

        evalsha(...args: any[]): Pipeline;

        script(...args: any[]): Pipeline;

        quit(callback?: (err: Error, res: string) => void): Pipeline;

        scan(cursor: number): Pipeline;

        scan(cursor: number, matchOption: 'match' | 'MATCH', pattern: string): Pipeline;
        scan(cursor: number, countOption: 'count' | 'COUNT', count: number): Pipeline;

        scan(cursor: number, matchOption: 'match' | 'MATCH', pattern: string, countOption: 'count' | 'COUNT', count: number): Pipeline;
        scan(cursor: number, countOption: 'count' | 'COUNT', count: number, matchOption: 'match' | 'MATCH', pattern: string): Pipeline;
        sscan(key: KeyType, cursor: number, ...args: any[]): Pipeline;

        hscan(key: KeyType, cursor: number, ...args: any[]): Pipeline;

        zscan(key: KeyType, cursor: number, ...args: any[]): Pipeline;

        pfmerge(destkey: KeyType, ...sourcekeys: KeyType[]): Pipeline;

        pfadd(key: KeyType, ...elements: string[]): Pipeline;

        pfcount(...keys: KeyType[]): Pipeline;

        xack(key: KeyType, group: string, ...ids: string[]): Pipeline;

        xadd(key: KeyType, id: string, ...args: string[]): Pipeline;

        xclaim(key: KeyType, group: string, consumer: string, minIdleTime: number, id: string, ...args: any[]): Pipeline;

        xdel(key: KeyType, ...ids: string[]): Pipeline;

        xgroup(...args: any[]): Pipeline;

        xinfo(...args: any[]): Pipeline;

        xlen(key: KeyType): Pipeline;

        xpending(key: KeyType, group: string, ...args: any[]): Pipeline;

        xrange(key: KeyType, start: string, end: string, ...args: any[]): Pipeline;

        xread(...args: any[]): Pipeline;

        xreadgroup(command: 'GROUP' | 'group', group: string, consumer: string,  ...args: any[]): Pipeline;

        xrevrange(key: KeyType, end: string, start: string, ...args: any[]): Pipeline;

        xtrim(key: KeyType, strategy: 'MAXLEN' | 'maxlen', ...args: any[]): Pipeline;
    }

    interface NodeConfiguration {
        host?: string;
        port?: number;
    }

    type ClusterNode = string | number | NodeConfiguration;

    type NodeRole = 'master' | 'slave' | 'all';

    interface Cluster extends NodeJS.EventEmitter, Commander {
        connect(callback: () => void): Promise<any>;
        disconnect(): void;
        nodes(role?: NodeRole): Redis[];
    }

    interface ClusterStatic extends NodeJS.EventEmitter, Commander {
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
        retryStrategy?(times: number): number | false;
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
        tls?: tls.ConnectionOptions;
        sentinels?: Array<{ host: string; port: number; }>;
        name?: string;
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

    interface ScanStreamOption {
        match?: string;
        count?: number;
    }

    type DNSLookupFunction = (hostname: string, callback: (err: NodeJS.ErrnoException, address: string, family: number) => void) => void;
    interface NatMap {
        [key: string]: {host: string, port: number};
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
