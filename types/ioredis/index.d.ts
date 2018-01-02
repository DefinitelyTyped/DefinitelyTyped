// Type definitions for ioredis 3.2
// Project: https://github.com/luin/ioredis
// Definitions by: York Yao <https://github.com/plantain-00>
//                 Christopher Eck <https://github.com/chrisleck>
//                 Yoga Aliarham <https://github.com/aliarham11>
//                 Ebrahim <https://github.com/br8h>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================
    import * as Redis from "ioredis";
    var redis = new Redis();
 =============================================== */

/// <reference types="node" />

import Promise = require('bluebird');

interface RedisStatic {
    new(port?: number, host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    new(host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    new(options?: IORedis.RedisOptions): IORedis.Redis;
    (port?: number, host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    (host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    (options?: IORedis.RedisOptions): IORedis.Redis;
    Cluster: IORedis.Cluster;
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
    interface Command {
        setArgumentTransformer(name: string, fn: (args: any[]) => any[]): void;
        setReplyTransformer(name: string, fn: (result: any) => any): void;
    }

    interface Redis extends NodeJS.EventEmitter, Commander {
        status: string;
        connect(callback?: () => void): Promise<any>;
        disconnect(): void;
        duplicate(): Redis;

        send_command(command: string, ...args: any[]): any;

        bitcount(key: string, callback: (err: Error, res: number) => void): void;
        bitcount(key: string, start: number, end: number, callback: (err: Error, res: number) => void): void;
        bitcount(key: string): Promise<number>;
        bitcount(key: string, start: number, end: number): Promise<number>;

        get(key: string, callback: (err: Error, res: string) => void): void;
        get(key: string): Promise<string>;
        getBuffer(key: string, callback: (err: Error, res: Buffer) => void): void;
        getBuffer(key: string): Promise<Buffer>;

        set(key: string, value: any, ...args: any[]): any;

        setnx(key: string, value: any, callback: (err: Error, res: any) => void): void;
        setnx(key: string, value: any): Promise<any>;

        setex(key: string, seconds: number, value: any, callback: (err: Error, res: any) => void): void;
        setex(key: string, seconds: number, value: any): Promise<any>;

        psetex(key: string, milliseconds: number, value: any, callback: (err: Error, res: any) => void): void;
        psetex(key: string, milliseconds: number, value: any): Promise<any>;

        append(key: string, value: any, callback: (err: Error, res: number) => void): void;
        append(key: string, value: any): Promise<number>;

        strlen(key: string, callback: (err: Error, res: number) => void): void;
        strlen(key: string): Promise<number>;

        del(...keys: string[]): any;

        exists(...keys: string[]): any;

        setbit(key: string, offset: number, value: any, callback: (err: Error, res: number) => void): void;
        setbit(key: string, offset: number, value: any): Promise<number>;

        getbit(key: string, offset: number, callback: (err: Error, res: number) => void): void;
        getbit(key: string, offset: number): Promise<number>;

        setrange(key: string, offset: number, value: any, callback: (err: Error, res: number) => void): void;
        setrange(key: string, offset: number, value: any): Promise<number>;

        getrange(key: string, start: number, end: number, callback: (err: Error, res: string) => void): void;
        getrange(key: string, start: number, end: number): Promise<string>;

        substr(key: string, start: number, end: number, callback: (err: Error, res: string) => void): void;
        substr(key: string, start: number, end: number): Promise<string>;

        incr(key: string, callback: (err: Error, res: number) => void): void;
        incr(key: string): Promise<number>;

        decr(key: string, callback: (err: Error, res: number) => void): void;
        decr(key: string): Promise<number>;

        mget(...keys: string[]): any;

        rpush(key: string, ...values: any[]): any;

        lpush(key: string, ...values: any[]): any;

        rpushx(key: string, value: any, callback: (err: Error, res: number) => void): void;
        rpushx(key: string, value: any): Promise<number>;

        lpushx(key: string, value: any, callback: (err: Error, res: number) => void): void;
        lpushx(key: string, value: any): Promise<number>;

        linsert(key: string, direction: "BEFORE" | "AFTER", pivot: string, value: any, callback: (err: Error, res: number) => void): void;
        linsert(key: string, direction: "BEFORE" | "AFTER", pivot: string, value: any): Promise<number>;

        rpop(key: string, callback: (err: Error, res: string) => void): void;
        rpop(key: string): Promise<string>;

        lpop(key: string, callback: (err: Error, res: string) => void): void;
        lpop(key: string): Promise<string>;

        brpop(...keys: string[]): any;

        blpop(...keys: string[]): any;

        brpoplpush(source: string, destination: string, timeout: number, callback: (err: Error, res: any) => void): void;
        brpoplpush(source: string, destination: string, timeout: number): Promise<any>;

        llen(key: string, callback: (err: Error, res: number) => void): void;
        llen(key: string): Promise<number>;

        lindex(key: string, index: number, callback: (err: Error, res: string) => void): void;
        lindex(key: string, index: number): Promise<string>;

        lset(key: string, index: number, value: any, callback: (err: Error, res: any) => void): void;
        lset(key: string, index: number, value: any): Promise<any>;

        lrange(key: string, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        lrange(key: string, start: number, stop: number): Promise<any>;

        ltrim(key: string, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        ltrim(key: string, start: number, stop: number): Promise<any>;

        lrem(key: string, count: number, value: any, callback: (err: Error, res: number) => void): void;
        lrem(key: string, count: number, value: any): Promise<number>;

        rpoplpush(source: string, destination: string, callback: (err: Error, res: string) => void): void;
        rpoplpush(source: string, destination: string): Promise<string>;

        sadd(key: string, ...members: any[]): any;

        srem(key: string, ...members: any[]): any;

        smove(source: string, destination: string, member: string, callback: (err: Error, res: string) => void): void;
        smove(source: string, destination: string, member: string): Promise<string>;

        sismember(key: string, member: string, callback: (err: Error, res: 1 | 0) => void): void;
        sismember(key: string, member: string): Promise<1 | 0>;

        scard(key: string, callback: (err: Error, res: number) => void): void;
        scard(key: string): Promise<number>;

        spop(key: string, callback: (err: Error, res: any) => void): void;
        spop(key: string, count: number, callback: (err: Error, res: any) => void): void;
        spop(key: string, count?: number): Promise<any>;

        srandmember(key: string, callback: (err: Error, res: any) => void): void;
        srandmember(key: string, count: number, callback: (err: Error, res: any) => void): void;
        srandmember(key: string, count?: number): Promise<any>;

        sinter(...keys: string[]): any;

        sinterstore(destination: string, ...keys: string[]): any;

        sunion(...keys: string[]): any;

        sunionstore(destination: string, ...keys: string[]): any;

        sdiff(...keys: string[]): any;

        sdiffstore(destination: string, ...keys: string[]): any;

        smembers(key: string, callback: (err: Error, res: any) => void): void;
        smembers(key: string): Promise<any>;

        zadd(key: string, ...args: string[]): any;

        zincrby(key: string, increment: number, member: string, callback: (err: Error, res: any) => void): void;
        zincrby(key: string, increment: number, member: string): Promise<any>;

        zrem(key: string, ...members: any[]): any;

        zremrangebyscore(key: string, min: number | string, max: number | string, callback: (err: Error, res: any) => void): void;
        zremrangebyscore(key: string, min: number | string, max: number | string): Promise<any>;

        zremrangebyrank(key: string, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        zremrangebyrank(key: string, start: number, stop: number): Promise<any>;

        zunionstore(destination: string, numkeys: number, key: string, ...args: string[]): any;

        zinterstore(destination: string, numkeys: number, key: string, ...args: string[]): any;

        zrange(key: string, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        zrange(key: string, start: number, stop: number, withScores: "WITHSCORES", callback: (err: Error, res: any) => void): void;
        zrange(key: string, start: number, stop: number, withScores?: "WITHSCORES"): Promise<any>;

        zrevrange(key: string, start: number, stop: number, callback: (err: Error, res: any) => void): void;
        zrevrange(key: string, start: number, stop: number, withScores: "WITHSCORES", callback: (err: Error, res: any) => void): void;
        zrevrange(key: string, start: number, stop: number, withScores?: "WITHSCORES"): Promise<any>;

        zrangebyscore(key: string, min: number | string, max: number | string, ...args: string[]): any;

        zrevrangebyscore(key: string, max: number | string, min: number | string, ...args: string[]): any;

        zcount(key: string, min: number | string, max: number | string, callback: (err: Error, res: number) => void): void;
        zcount(key: string, min: number | string, max: number | string): Promise<number>;

        zcard(key: string, callback: (err: Error, res: number) => void): void;
        zcard(key: string): Promise<number>;

        zscore(key: string, member: string, callback: (err: Error, res: number) => void): void;
        zscore(key: string, member: string): Promise<number>;

        zrank(key: string, member: string, callback: (err: Error, res: number) => void): void;
        zrank(key: string, member: string): Promise<number>;

        zrevrank(key: string, member: string, callback: (err: Error, res: number) => void): void;
        zrevrank(key: string, member: string): Promise<number>;

        hset(key: string, field: string, value: any, callback: (err: Error, res: 0 | 1) => void): void;
        hset(key: string, field: string, value: any): Promise<0 | 1>;

        hsetnx(key: string, field: string, value: any, callback: (err: Error, res: 0 | 1) => void): void;
        hsetnx(key: string, field: string, value: any): Promise<0 | 1>;

        hget(key: string, field: string, callback: (err: Error, res: string) => void): void;
        hget(key: string, field: string): Promise<string>;

        hmset(key: string, field: string, value: any, ...args: string[]): Promise<0 | 1>;
        hmset(key: string, data: any, callback: (err: Error, res: 0 | 1) => void): void;
        hmset(key: string, data: any): Promise<0 | 1>;

        hmget(key: string, ...fields: string[]): any;

        hincrby(key: string, field: string, increment: number, callback: (err: Error, res: number) => void): void;
        hincrby(key: string, field: string, increment: number): Promise<number>;

        hincrbyfloat(key: string, field: string, increment: number, callback: (err: Error, res: number) => void): void;
        hincrbyfloat(key: string, field: string, increment: number): Promise<number>;

        hdel(key: string, ...fields: string[]): any;

        hlen(key: string, callback: (err: Error, res: number) => void): void;
        hlen(key: string): Promise<number>;

        hkeys(key: string, callback: (err: Error, res: any) => void): void;
        hkeys(key: string): Promise<any>;

        hvals(key: string, callback: (err: Error, res: any) => void): void;
        hvals(key: string): Promise<any>;

        hgetall(key: string, callback: (err: Error, res: any) => void): void;
        hgetall(key: string): Promise<any>;

        hexists(key: string, field: string, callback: (err: Error, res: 0 | 1) => void): void;
        hexists(key: string, field: string): Promise<0 | 1>;

        incrby(key: string, increment: number, callback: (err: Error, res: number) => void): void;
        incrby(key: string, increment: number): Promise<number>;

        incrbyfloat(key: string, increment: number, callback: (err: Error, res: number) => void): void;
        incrbyfloat(key: string, increment: number): Promise<number>;

        decrby(key: string, decrement: number, callback: (err: Error, res: number) => void): void;
        decrby(key: string, decrement: number): Promise<number>;

        getset(key: string, value: any, callback: (err: Error, res: string) => void): void;
        getset(key: string, value: any): Promise<string>;

        mset(key: string, value: any, ...args: string[]): any;

        msetnx(key: string, value: any, ...args: string[]): any;

        randomkey(callback: (err: Error, res: string) => void): void;
        randomkey(): Promise<string>;

        select(index: number, callback: (err: Error, res: string) => void): void;
        select(index: number): Promise<string>;

        move(key: string, db: string, callback: (err: Error, res: 0 | 1) => void): void;
        move(key: string, db: string): Promise<0 | 1>;

        rename(key: string, newkey: string, callback: (err: Error, res: string) => void): void;
        rename(key: string, newkey: string): Promise<string>;

        renamenx(key: string, newkey: string, callback: (err: Error, res: 0 | 1) => void): void;
        renamenx(key: string, newkey: string): Promise<0 | 1>;

        expire(key: string, seconds: number, callback: (err: Error, res: 0 | 1) => void): void;
        expire(key: string, seconds: number): Promise<0 | 1>;

        pexpire(key: string, milliseconds: number, callback: (err: Error, res: 0 | 1) => void): void;
        pexpire(key: string, milliseconds: number): Promise<0 | 1>;

        expireat(key: string, timestamp: number, callback: (err: Error, res: 0 | 1) => void): void;
        expireat(key: string, timestamp: number): Promise<0 | 1>;

        pexpireat(key: string, millisecondsTimestamp: number, callback: (err: Error, res: 0 | 1) => void): void;
        pexpireat(key: string, millisecondsTimestamp: number): Promise<0 | 1>;

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

        type(key: string, callback: (err: Error, res: string) => void): void;
        type(key: string): Promise<string>;

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

        sort(key: string, ...args: string[]): any;

        info(callback: (err: Error, res: any) => void): void;
        info(section: string, callback: (err: Error, res: any) => void): void;
        info(section?: string): Promise<string>;

        time(callback: (err: Error, res: any) => void): void;
        time(): Promise<any>;

        monitor(callback: (err: Error, res: NodeJS.EventEmitter) => void): void;
        monitor(): Promise<NodeJS.EventEmitter>;

        ttl(key: string, callback: (err: Error, res: number) => void): void;
        ttl(key: string): Promise<number>;

        persist(key: string, callback: (err: Error, res: 0 | 1) => void): void;
        persist(key: string): Promise<0 | 1>;

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

        watch(...keys: string[]): any;

        unwatch(callback: (err: Error, res: string) => void): void;
        unwatch(): Promise<string>;

        cluster(...args: any[]): any;

        restore(...args: any[]): any;

        migrate(...args: any[]): any;

        dump(key: string, callback: (err: Error, res: string) => void): void;
        dump(key: string): Promise<string>;

        object(subcommand: string, ...args: any[]): any;

        client(...args: any[]): any;

        eval(...args: any[]): any;

        evalsha(...args: any[]): any;

        script(...args: any[]): any;

        quit(callback: (err: Error, res: string) => void): void;
        quit(): Promise<string>;

        scan(cursor: number, ...args: any[]): any;

        hscan(key: string, cursor: number, ...args: any[]): any;

        zscan(key: string, cursor: number, ...args: any[]): any;

        pfmerge(destkey: string, ...sourcekeys: string[]): any;

        pfadd(key: string, ...elements: string[]): any;

        pfcount(...keys: string[]): any;

        pipeline(commands?: string[][]): Pipeline;

        scanStream(options?: ScanStreamOption): NodeJS.EventEmitter;
        hscanStream(key: string, options?: ScanStreamOption): NodeJS.EventEmitter;
        zscanStream(key: string, options?: ScanStreamOption): NodeJS.EventEmitter;
    }

    interface Pipeline {
        bitcount(key: string, callback?: (err: Error, res: number) => void): Pipeline;
        bitcount(key: string, start: number, end: number, callback?: (err: Error, res: number) => void): Pipeline;

        get(key: string, callback?: (err: Error, res: string) => void): Pipeline;
        getBuffer(key: string, callback?: (err: Error, res: Buffer) => void): Pipeline;

        set(key: string, value: any, ...args: any[]): Pipeline;

        setnx(key: string, value: any, callback?: (err: Error, res: any) => void): Pipeline;

        setex(key: string, seconds: number, value: any, callback?: (err: Error, res: any) => void): Pipeline;

        psetex(key: string, milliseconds: number, value: any, callback?: (err: Error, res: any) => void): Pipeline;

        append(key: string, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        strlen(key: string, callback?: (err: Error, res: number) => void): Pipeline;

        del(...keys: string[]): Pipeline;

        exists(...keys: string[]): Pipeline;

        setbit(key: string, offset: number, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        getbit(key: string, offset: number, callback?: (err: Error, res: number) => void): Pipeline;

        setrange(key: string, offset: number, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        getrange(key: string, start: number, end: number, callback?: (err: Error, res: string) => void): Pipeline;

        substr(key: string, start: number, end: number, callback?: (err: Error, res: string) => void): Pipeline;

        incr(key: string, callback?: (err: Error, res: number) => void): Pipeline;

        decr(key: string, callback?: (err: Error, res: number) => void): Pipeline;

        mget(...keys: string[]): Pipeline;

        rpush(key: string, ...values: any[]): Pipeline;

        lpush(key: string, ...values: any[]): Pipeline;

        rpushx(key: string, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        lpushx(key: string, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        linsert(key: string, direction: "BEFORE" | "AFTER", pivot: string, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        rpop(key: string, callback?: (err: Error, res: string) => void): Pipeline;

        lpop(key: string, callback?: (err: Error, res: string) => void): Pipeline;

        brpop(...keys: string[]): Pipeline;

        blpop(...keys: string[]): Pipeline;

        brpoplpush(source: string, destination: string, timeout: number, callback?: (err: Error, res: any) => void): Pipeline;

        llen(key: string, callback?: (err: Error, res: number) => void): Pipeline;

        lindex(key: string, index: number, callback?: (err: Error, res: string) => void): Pipeline;

        lset(key: string, index: number, value: any, callback?: (err: Error, res: any) => void): Pipeline;

        lrange(key: string, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;

        ltrim(key: string, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;

        lrem(key: string, count: number, value: any, callback?: (err: Error, res: number) => void): Pipeline;

        rpoplpush(source: string, destination: string, callback?: (err: Error, res: string) => void): Pipeline;

        sadd(key: string, ...members: any[]): Pipeline;

        srem(key: string, ...members: any[]): Pipeline;

        smove(source: string, destination: string, member: string, callback?: (err: Error, res: string) => void): Pipeline;

        sismember(key: string, member: string, callback?: (err: Error, res: 1 | 0) => void): Pipeline;

        scard(key: string, callback?: (err: Error, res: number) => void): Pipeline;

        spop(key: string, callback?: (err: Error, res: any) => void): Pipeline;
        spop(key: string, count: number, callback?: (err: Error, res: any) => void): Pipeline;

        srandmember(key: string, callback?: (err: Error, res: any) => void): Pipeline;
        srandmember(key: string, count: number, callback?: (err: Error, res: any) => void): Pipeline;

        sinter(...keys: string[]): Pipeline;

        sinterstore(destination: string, ...keys: string[]): Pipeline;

        sunion(...keys: string[]): Pipeline;

        sunionstore(destination: string, ...keys: string[]): Pipeline;

        sdiff(...keys: string[]): Pipeline;

        sdiffstore(destination: string, ...keys: string[]): Pipeline;

        smembers(key: string, callback?: (err: Error, res: any) => void): Pipeline;

        zadd(key: string, ...args: string[]): Pipeline;

        zincrby(key: string, increment: number, member: string, callback?: (err: Error, res: any) => void): Pipeline;

        zrem(key: string, ...members: any[]): Pipeline;

        zremrangebyscore(key: string, min: number | string, max: number | string, callback?: (err: Error, res: any) => void): Pipeline;

        zremrangebyrank(key: string, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;

        zunionstore(destination: string, numkeys: number, key: string, ...args: string[]): Pipeline;

        zinterstore(destination: string, numkeys: number, key: string, ...args: string[]): Pipeline;

        zrange(key: string, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;
        zrange(key: string, start: number, stop: number, withScores: "WITHSCORES", callback?: (err: Error, res: any) => void): Pipeline;

        zrevrange(key: string, start: number, stop: number, callback?: (err: Error, res: any) => void): Pipeline;
        zrevrange(key: string, start: number, stop: number, withScores: "WITHSCORES", callback?: (err: Error, res: any) => void): Pipeline;

        zrangebyscore(key: string, min: number | string, max: number | string, ...args: string[]): Pipeline;

        zrevrangebyscore(key: string, max: number | string, min: number | string, ...args: string[]): Pipeline;

        zcount(key: string, min: number | string, max: number | string, callback?: (err: Error, res: number) => void): Pipeline;

        zcard(key: string, callback?: (err: Error, res: number) => void): Pipeline;

        zscore(key: string, member: string, callback?: (err: Error, res: number) => void): Pipeline;

        zrank(key: string, member: string, callback?: (err: Error, res: number) => void): Pipeline;

        zrevrank(key: string, member: string, callback?: (err: Error, res: number) => void): Pipeline;

        hset(key: string, field: string, value: any, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        hsetnx(key: string, field: string, value: any, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        hget(key: string, field: string, callback?: (err: Error, res: string) => void): Pipeline;

        hmset(key: string, field: string, value: any, ...args: string[]): Pipeline;

        hmget(key: string, ...fields: string[]): Pipeline;

        hincrby(key: string, field: string, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        hincrbyfloat(key: string, field: string, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        hdel(key: string, ...fields: string[]): Pipeline;

        hlen(key: string, callback?: (err: Error, res: number) => void): Pipeline;

        hkeys(key: string, callback?: (err: Error, res: any) => void): Pipeline;

        hvals(key: string, callback?: (err: Error, res: any) => void): Pipeline;

        hgetall(key: string, callback?: (err: Error, res: any) => void): Pipeline;

        hexists(key: string, field: string, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        incrby(key: string, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        incrbyfloat(key: string, increment: number, callback?: (err: Error, res: number) => void): Pipeline;

        decrby(key: string, decrement: number, callback?: (err: Error, res: number) => void): Pipeline;

        getset(key: string, value: any, callback?: (err: Error, res: string) => void): Pipeline;

        mset(key: string, value: any, ...args: string[]): Pipeline;

        msetnx(key: string, value: any, ...args: string[]): Pipeline;

        randomkey(callback?: (err: Error, res: string) => void): Pipeline;

        select(index: number, callback?: (err: Error, res: string) => void): Pipeline;

        move(key: string, db: string, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        rename(key: string, newkey: string, callback?: (err: Error, res: string) => void): Pipeline;

        renamenx(key: string, newkey: string, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        expire(key: string, seconds: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        pexpire(key: string, milliseconds: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        expireat(key: string, timestamp: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        pexpireat(key: string, millisecondsTimestamp: number, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

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

        type(key: string, callback?: (err: Error, res: string) => void): Pipeline;

        multi(callback?: (err: Error, res: string) => void): Pipeline;

        exec(callback?: (err: Error, res: any) => void): Promise<any>;

        discard(callback?: (err: Error, res: any) => void): Pipeline;

        sync(callback?: (err: Error, res: any) => void): Pipeline;

        flushdb(callback?: (err: Error, res: string) => void): Pipeline;

        flushall(callback?: (err: Error, res: string) => void): Pipeline;

        sort(key: string, ...args: string[]): Pipeline;

        info(callback?: (err: Error, res: any) => void): Pipeline;
        info(section: string, callback?: (err: Error, res: any) => void): Pipeline;

        time(callback?: (err: Error, res: any) => void): Pipeline;

        monitor(callback?: (err: Error, res: NodeJS.EventEmitter) => void): Pipeline;

        ttl(key: string, callback?: (err: Error, res: number) => void): Pipeline;

        persist(key: string, callback?: (err: Error, res: 0 | 1) => void): Pipeline;

        slaveof(host: string, port: number, callback?: (err: Error, res: string) => void): Pipeline;

        debug(...args: any[]): Pipeline;

        config(...args: any[]): Pipeline;

        subscribe(...channels: any[]): Pipeline;

        unsubscribe(...channels: string[]): Pipeline;

        psubscribe(...patterns: string[]): Pipeline;

        punsubscribe(...patterns: string[]): Pipeline;

        publish(channel: string, message: string, callback?: (err: Error, res: number) => void): Pipeline;

        watch(...keys: string[]): Pipeline;

        unwatch(callback?: (err: Error, res: string) => void): Pipeline;

        cluster(...args: any[]): Pipeline;

        restore(...args: any[]): Pipeline;

        migrate(...args: any[]): Pipeline;

        dump(key: string, callback?: (err: Error, res: string) => void): Pipeline;

        object(subcommand: string, ...args: any[]): Pipeline;

        client(...args: any[]): Pipeline;

        eval(...args: any[]): Pipeline;

        evalsha(...args: any[]): Pipeline;

        script(...args: any[]): Pipeline;

        quit(callback?: (err: Error, res: string) => void): Pipeline;

        scan(cursor: number, ...args: any[]): Pipeline;

        hscan(key: string, cursor: number, ...args: any[]): Pipeline;

        zscan(key: string, cursor: number, ...args: any[]): Pipeline;

        pfmerge(destkey: string, ...sourcekeys: string[]): Pipeline;

        pfadd(key: string, ...elements: string[]): Pipeline;

        pfcount(...keys: string[]): Pipeline;
    }

    interface Cluster extends NodeJS.EventEmitter, Commander {
        new(nodes: Array<{ host: string; port: number; }>, options?: ClusterOptions): Redis;
        connect(callback: () => void): Promise<any>;
        disconnect(): void;
        nodes(role: string): Redis[];
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
        reconnectOnError?(error: Error): boolean;
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
        tls?: {
            ca: Buffer;
        };
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

    interface ClusterOptions {
        clusterRetryStrategy?(times: number): number;
        enableOfflineQueue?: boolean;
        enableReadyCheck?: boolean;
        scaleReads?: string;
        maxRedirections?: number;
        retryDelayOnFailover?: number;
        retryDelayOnClusterDown?: number;
        retryDelayOnTryAgain?: number;
        redisOptions?: RedisOptions;
    }

    interface MultiOptions {
        pipeline: boolean;
    }
}
