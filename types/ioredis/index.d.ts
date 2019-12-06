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

declare namespace IORedis {
    type KeyType = string | Buffer;

    type BooleanResponse = 1 | 0;

    type ValueType = string | Buffer | number | any[];

    interface CreatedCommand {
        string(this: BaseConnection, ...args: any[]): Promise<any>;
        buffer(this: BaseConnection, ...args: any[]): Promise<any>;
    }

    interface Commander {
        getBuiltinCommands(): string[];
        createBuiltinCommand(commandName: string): CreatedCommand;
        defineCommand(name: string, definition: {
            numberOfKeys?: number;
            lua?: string;
        }): void;
    }

    interface Command {
        setArgumentTransformer(name: string, fn: (args: ValueType[]) => ValueType[]): void;
        setReplyTransformer(name: string, fn: (result: any) => any): void;
    }

    type ClientListOp = 'normal' | 'master' | 'replica' | 'pubsub';

    type ReplySetting = 'ON' | 'OFF' | 'SKIP';

    type ClientUnblockSetting = 'ERROR' | 'TIMEOUT';

    type Callback<T> = (err: Error | null, value: T) => void;

    type XGroupOp = 'CREATE' | 'SETUP' | 'DESTROY' | 'DELCONSUMER';

    interface Commands {
        bitcount(key: KeyType, callback?: Callback<number>): Promise<number>;
        bitcount(key: KeyType, start: number, end: number, callback?: Callback<number>): Promise<number>;

        get(key: KeyType, callback?: Callback<string | null>): Promise<string | null>;

        getBuffer(key: KeyType, callback?: Callback<Buffer>): Promise<Buffer>;

        set(key: KeyType, value: ValueType, callback?: Callback<Ok>): Promise<Ok>;
        set(key: KeyType, value: ValueType, setMode: string | any[], callback?: Callback<Ok>): Promise<Ok>;
        set(key: KeyType, value: ValueType, expiryMode: string, time: number | string, callback?: Callback<Ok>): Promise<Ok>;
        set(key: KeyType, value: ValueType, expiryMode: string, time: number | string, setMode: number | string, callback?: Callback<Ok>): Promise<Ok>;

        setBuffer(key: KeyType, value: ValueType, callback?: Callback<Buffer>): Promise<Buffer>;
        setBuffer(key: KeyType, value: ValueType, setMode: string, callback?: Callback<Buffer>): Promise<Buffer>;
        setBuffer(key: KeyType, value: ValueType, expiryMode: string, time: number, callback?: Callback<Buffer>): Promise<Buffer>;
        setBuffer(key: KeyType, value: ValueType, expiryMode: string, time: number | string, setMode: number | string, callback?: Callback<Buffer>): Promise<Buffer>;

        setnx(key: KeyType, value: ValueType, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        setex(key: KeyType, seconds: number, value: ValueType, callback?: Callback<Ok>): Promise<Ok>;

        psetex(key: KeyType, milliseconds: number, value: ValueType, callback?: Callback<Ok>): Promise<Ok>;

        append(key: KeyType, value: ValueType, callback?: Callback<number>): Promise<number>;

        strlen(key: KeyType, callback?: Callback<number>): Promise<number>;

        del(keys: KeyType | KeyType[], callback?: Callback<number>): Promise<number>;

        unlink(keys: KeyType | KeyType[], callback?: Callback<number>): Promise<number>;

        exists(keys: KeyType | KeyType[], callback?: Callback<number>): Promise<number>;

        setbit(key: KeyType, offset: number, value: ValueType, callback?: Callback<number>): Promise<number>;

        getbit(key: KeyType, offset: number, callback?: Callback<number>): Promise<number>;

        setrange(key: KeyType, offset: number, value: ValueType, callback?: Callback<number>): Promise<number>;

        getrange(key: KeyType, start: number, end: number, callback?: Callback<string>): Promise<string>;

        substr(key: KeyType, start: number, end: number, callback?: Callback<string>): Promise<string>;

        incr(key: KeyType, callback?: Callback<number>): Promise<number>;

        decr(key: KeyType, callback?: Callback<number>): Promise<number>;

        mget(keys: KeyType[], callback?: Callback<Array<string | null>>): Promise<Array<string | null>>;

        rpush(key: KeyType, values: ValueType | ValueType[], callback?: Callback<number>): Promise<number>;

        rpushBuffer(key: KeyType, values: Buffer | Buffer[], callback?: Callback<number>): Promise<number>;

        lpush(key: KeyType, values: ValueType | ValueType[], callback?: Callback<number>): Promise<number>;

        rpushx(key: KeyType, value: ValueType, callback?: Callback<number>): Promise<number>;

        lpushx(key: KeyType, value: ValueType, callback?: Callback<number>): Promise<number>;

        linsert(key: KeyType, direction: "BEFORE" | "AFTER", pivot: string, value: ValueType, callback?: Callback<number>): Promise<number>;

        rpop(key: KeyType, callback?: Callback<string>): Promise<string>;

        lpop(key: KeyType, callback?: Callback<string>): Promise<string>;

        lpopBuffer(key: KeyType, callback?: Callback<Buffer>): Promise<Buffer>;

        brpop(keys: KeyType | KeyType[], callback?: Callback<[string, string]>): Promise<[string, string]>;

        blpop(keys: KeyType | KeyType[], callback?: Callback<[string, string]>): Promise<[string, string]>;

        brpoplpush(source: string, destination: string, timeout: number, callback?: Callback<string>): Promise<string>;

        llen(key: KeyType, callback?: Callback<number>): Promise<number>;

        lindex(key: KeyType, index: number, callback?: Callback<string>): Promise<string>;

        lset(key: KeyType, index: number, value: ValueType, callback?: Callback<Ok>): Promise<Ok>;

        lrange(key: KeyType, start: number, stop: number, callback?: Callback<string[]>): Promise<string[]>;

        lrangeBuffer(key: KeyType, start: number, stop: number, callback?: Callback<Buffer[]>): Promise<Buffer[]>;

        ltrim(key: KeyType, start: number, stop: number, callback?: Callback<Ok>): Promise<Ok>;

        lrem(key: KeyType, count: number, value: ValueType, callback?: Callback<number>): Promise<number>;

        rpoplpush(source: string, destination: string, callback?: Callback<string>): Promise<string>;

        rpoplpushBuffer(source: string, destination: string, callback?: Callback<Buffer>): Promise<Buffer>;

        sadd(key: KeyType, members: ValueType | ValueType[], callback?: Callback<number>): Promise<number>;

        srem(key: KeyType, members: ValueType | ValueType[], callback?: Callback<number>): Promise<number>;

        smove(source: string, destination: string, member: string, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        sismember(key: KeyType, member: string, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        scard(key: KeyType, callback?: Callback<number>): Promise<number>;

        spop(key: KeyType, callback?: Callback<string | null>): Promise<string | null>;
        spop(key: KeyType, count: number, callback?: Callback<string[]>): Promise<string[]>;

        srandmember(key: KeyType, callback?: Callback<string | null>): Promise<string | null>;
        srandmember(key: KeyType, count: number, callback?: Callback<string[]>): Promise<string[]>;

        sinter(keys: KeyType[], callback?: Callback<string[]>): Promise<string[]>;

        sinterstore(destination: string, keys: KeyType[], callback?: Callback<number>): Promise<number>;

        sunion(keys: KeyType[], callback?: Callback<string[]>): Promise<string[]>;

        sunionstore(destination: string, keys: KeyType[], callback?: Callback<number>): Promise<number>;

        sdiff(keys: KeyType[], callback?: Callback<string[]>): Promise<string[]>;

        sdiffstore(destination: string, keys: KeyType[], callback?: Callback<number>): Promise<number>;

        smembers(key: KeyType, callback?: Callback<string[]>): Promise<string[]>;

        zadd(key: KeyType, args: string[], callback?: Callback<number | string>): Promise<number | string>;

        zaddBuffer(key: KeyType, score1: number, member1: Buffer, callback?: Callback<string | number>): Promise<string | number>;

        zincrby(key: KeyType, increment: number, member: string, callback?: Callback<string>): Promise<string>;

        zrem(key: KeyType, members: ValueType | ValueType[], callback?: Callback<number>): Promise<number>;

        zremrangebyscore(key: KeyType, min: number | string, max: number | string, callback?: Callback<number>): Promise<number>;

        zremrangebyrank(key: KeyType, start: number, stop: number, callback?: Callback<number>): Promise<number>;

        zunionstore(destination: string, numkeys: number, key: KeyType, args: string[], callback?: Callback<number>): Promise<number>;

        zinterstore(destination: string, numkeys: number, key: KeyType, args: string[], callback?: Callback<number>): Promise<number>;

        zrange(key: KeyType, start: number, stop: number, callback?: Callback<string[]>): Promise<string[]>;
        zrange(key: KeyType, start: number, stop: number, withScores: "WITHSCORES", callback?: Callback<string[]>): Promise<string[]>;

        zrevrange(key: KeyType, start: number, stop: number, callback?: Callback<string[]>): Promise<string[]>;
        zrevrange(key: KeyType, start: number, stop: number, withScores: "WITHSCORES", callback?: Callback<string[]>): Promise<string[]>;

        zrangebyscore(key: KeyType, min: number, max: number, withScores?: "WITHSCORES", callback?: Callback<string[]>): Promise<string[]>;
        zrangebyscore(key: KeyType, min: number, max: number, withScores: "WITHSCORES", limit: "LIMIT", offset: number, count: number, callback?: Callback<string[]>): Promise<string[]>;
        zrangebyscore(key: KeyType, min: number, max: number, limit: "LIMIT", offset: number, count: number, callback?: Callback<string[]>): Promise<string[]>;

        zrevrangebyscore(key: KeyType, min: number, max: number, withScores?: "WITHSCORES", callback?: Callback<string[]>): Promise<string[]>;
        zrevrangebyscore(key: KeyType, min: number, max: number, withScores: "WITHSCORES", limit: "LIMIT", offset: number, count: number, callback?: Callback<string[]>): Promise<string[]>;
        zrevrangebyscore(key: KeyType, min: number, max: number, limit: "LIMIT", offset: number, count: number, callback?: Callback<string[]>): Promise<string[]>;

        zcount(key: KeyType, min: number | string, max: number | string, callback?: Callback<number>): Promise<number>;

        zcard(key: KeyType, callback?: Callback<number>): Promise<number>;

        zscore(key: KeyType, member: string, callback?: Callback<string>): Promise<string>;

        zrank(key: KeyType, member: string, callback?: Callback<number | null>): Promise<number | null>;

        zrevrank(key: KeyType, member: string, callback?: Callback<number | null>): Promise<number | null>;

        hset(key: KeyType, field: string, value: ValueType, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;
        hsetBuffer(key: KeyType, field: string, value: ValueType, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        hsetnx(key: KeyType, field: string, value: ValueType, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        hget(key: KeyType, field: string, callback?: Callback<string | null>): Promise<string | null>;
        hgetBuffer(key: KeyType, field: string, callback?: Callback<Buffer>): Promise<Buffer>;

        hmset(key: KeyType, args: object | Map<string, ValueType> | ValueType[], callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        hmget(key: KeyType, fields: KeyType[], callback?: Callback<Array<string | null>>): Promise<Array<string | null>>;

        hincrby(key: KeyType, field: string, increment: number, callback?: Callback<number>): Promise<number>;

        hincrbyfloat(key: KeyType, field: string, increment: number, callback?: Callback<number>): Promise<number>;

        hdel(key: KeyType, fields: string | string[], callback?: Callback<number>): Promise<number>;

        hlen(key: KeyType, callback?: Callback<number>): Promise<number>;

        hkeys(key: KeyType, callback?: Callback<string[]>): Promise<string[]>;

        hvals(key: KeyType, callback?: Callback<string[]>): Promise<string[]>;

        hgetall(key: KeyType, callback?: Callback<{ [key: string]: string }>): Promise<{ [key: string]: string }>;

        hexists(key: KeyType, field: string, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        incrby(key: KeyType, increment: number, callback?: Callback<number>): Promise<number>;

        incrbyfloat(key: KeyType, increment: number, callback?: Callback<number>): Promise<number>;

        decrby(key: KeyType, decrement: number, callback?: Callback<number>): Promise<number>;

        getset(key: KeyType, value: ValueType, callback?: Callback<string | null>): Promise<string | null>;

        mset(args: object | Map<string, ValueType> | ValueType[], callback?: Callback<Ok>): Promise<Ok>;

        msetnx(args: object | Map<string, ValueType> | ValueType[], callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        randomkey(callback?: Callback<string>): Promise<string>;

        select(index: number, callback?: Callback<string>): Promise<string>;

        move(key: KeyType, db: string, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        rename(key: KeyType, newkey: KeyType, callback?: Callback<Ok>): Promise<Ok>;

        renamenx(key: KeyType, newkey: KeyType, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        expire(key: KeyType, seconds: number, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        pexpire(key: KeyType, milliseconds: number, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        expireat(key: KeyType, timestamp: number, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        pexpireat(key: KeyType, millisecondsTimestamp: number, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        keys(pattern: string, callback?: Callback<string[]>): Promise<string[]>;

        dbsize(callback?: Callback<number>): Promise<number>;

        auth(password: string, callback?: Callback<string>): Promise<string>;

        ping(callback?: Callback<string>): Promise<string>;
        ping(message: string, callback?: Callback<string>): Promise<string>;

        echo(message: string, callback?: Callback<string>): Promise<string>;

        save(callback?: Callback<string>): Promise<string>;

        bgsave(callback?: Callback<string>): Promise<string>;

        bgrewriteaof(callback?: Callback<string>): Promise<string>;

        shutdown(save: "SAVE" | "NOSAVE", callback?: Callback<never>): Promise<never>;

        lastsave(callback?: Callback<number>): Promise<number>;

        type(key: KeyType, callback?: Callback<string>): Promise<string>;

        multi(commands?: string[][], options?: MultiOptions): Pipeline;
        multi(options: { pipeline: false }, callback?: Callback<string>): Promise<string>;

        exec(callback?: Callback<Array<[Error | null, string]>>): Promise<Array<[Error | null, string]>>;

        discard(callback?: Callback<string>): Promise<string>;

        sync(callback?: Callback<any>): Promise<any>;

        flushdb(callback?: Callback<string>): Promise<string>;

        flushall(callback?: Callback<string>): Promise<string>;

        sort(key: KeyType, args: string | string[], callback?: Callback<string[] | number>): Promise<string[] | number>;

        info(callback?: Callback<string>): Promise<string>;
        info(section: string, callback?: Callback<string>): Promise<string>;

        time(callback?: Callback<[string, string]>): Promise<[string, string]>;

        monitor(callback?: Callback<EventEmitter>): Promise<EventEmitter>;

        ttl(key: KeyType, callback?: Callback<number>): Promise<number>;

        pttl(key: KeyType, callback?: Callback<number>): Promise<number>;

        persist(key: KeyType, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        slaveof(host: string, port: number, callback?: Callback<string>): Promise<string>;

        debug(args: ValueType | ValueType[], callback?: Callback<any>): Promise<any>;

        config(op: 'GET', cfg: any[], callback?: Callback<[string, string]>): Promise<[string, string]>;
        config(op: 'REWRITE', callback?: Callback<Ok>): Promise<Ok>;
        config(op: 'SET', key: string, value: ValueType, callback?: Callback<Ok>): Promise<Ok>;

        subscribe(channels: string | string[], callback?: Callback<number>): Promise<number>;

        unsubscribe(channels: string | string[], callback?: Callback<number>): Promise<number>;

        psubscribe(patterns: string | string[], callback?: Callback<number>): Promise<number>;

        punsubscribe(patterns: string | string[], callback?: Callback<number>): Promise<number>;

        publish(channel: string, message: string, callback?: Callback<number>): Promise<number>;

        publishBuffer(channel: string, message: Buffer, callback?: Callback<number>): Promise<number>;

        watch(keys: KeyType | KeyType[], callback?: Callback<Ok>): Promise<Ok>;

        unwatch(callback?: Callback<string>): Promise<string>;

        cluster(...args: ValueType[]): Promise<any>;

        restore(args: ValueType | ValueType[], callback?: Callback<Ok>): Promise<Ok>;

        migrate(args: ValueType | ValueType[], callback?: Callback<Ok | 'NOKEY'>): Promise<Ok | 'NOKEY'>;

        dump(key: KeyType, callback?: Callback<string>): Promise<string>;

        object(subcommand: string, args: ValueType | ValueType[], callback?: Callback<any>): Promise<any>;

        client(op: 'ID', callback: Callback<number>): Promise<number>;
        client(op: 'KILL', args: ValueType | ValueType[], callback?: Callback<Ok | number>): Promise<Ok | number>;
        client(op: 'LIST', type?: ClientListOp, callback?: Callback<string>): Promise<string>;
        client(op: 'GETNAME', callback?: Callback<string>): Promise<string>;
        client(op: 'PAUSE', timeout: number, callback?: Callback<Ok>): Promise<Ok>;
        client(op: 'REPLY', type: ReplySetting, callback?: Callback<never | Ok>): Promise<never | Ok>;
        client(op: 'SETNAME', name: string, callback?: Callback<string>): Promise<string>;
        client(op: 'UNBLOCK', id: string, timeoutSetting?: ClientUnblockSetting, callback?: Callback<BooleanResponse>): Promise<BooleanResponse>;

        eval(script: string, numKeys: number, ...args: ValueType[]): Promise<any>;
        // This overload exists specifically to retain compatibility to `redlock`
        // All arguments are by default flattened, declaring all possible permuatations
        // would be unreasonable (and probably impossible)
        eval(args: ValueType[], callback?: Callback<any>): Promise<any>;

        evalsha(scriptSha: string, numKeys: string, args: ValueType | ValueType[], callback?: Callback<any>): Promise<any>;

        script(args: ValueType | ValueType[], callback?: Callback<any>): Promise<any>;

        quit(callback?: Callback<string>): Promise<string>;

        scan(cursor: number, callback?: Callback<[string, string[]]>): Promise<[string, string[]]>;

        scan(cursor: number, matchOption: 'match' | 'MATCH', pattern: string, callback?: Callback<[string, string[]]>): Promise<[string, string[]]>;
        scan(cursor: number, countOption: 'count' | 'COUNT', count: number, callback?: Callback<[string, string[]]>): Promise<[string, string[]]>;

        scan(cursor: number, matchOption: 'match' | 'MATCH', pattern: string, countOption: 'count' | 'COUNT', count: number, callback?: Callback<[string, string[]]>): Promise<[string, string[]]>;
        scan(cursor: number, countOption: 'count' | 'COUNT', count: number, matchOption: 'match' | 'MATCH', pattern: string, callback?: Callback<[string, string[]]>): Promise<[string, string[]]>;

        sscan(key: KeyType, cursor: number, args: ValueType[], callback?: Callback<[string, string[]]>): Promise<[string, string[]]>;

        hscan(key: KeyType, cursor: number, args: ValueType[], callback?: Callback<[string, string[]]>): Promise<[string, string[]]>;

        zscan(key: KeyType, cursor: number, args: ValueType[], callback?: Callback<[string, string[]]>): Promise<[string, string[]]>;

        pfmerge(destkey: KeyType, sourcekeys: KeyType | KeyType[], callback?: Callback<Ok>): Promise<Ok>;

        pfadd(key: KeyType, elements: string | string[], callback?: Callback<number>): Promise<number>;

        pfcount(keys: KeyType | KeyType[], callback?: Callback<number>): Promise<number>;

        pipeline(commands?: string[][]): Pipeline;

        scanStream(options?: ScanStreamOption): Readable;
        sscanStream(key: KeyType, options?: ScanStreamOption): Readable;
        hscanStream(key: KeyType, options?: ScanStreamOption): Readable;
        zscanStream(key: KeyType, options?: ScanStreamOption): Readable;

        xack(key: KeyType, group: string, ids: string | string[], callback?: Callback<number>): Promise<number>;

        xadd(key: KeyType, id: string, args: string | string[], callback?: Callback<string>): Promise<string>;
        xadd(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', count: number, args: ValueType[], callback?: Callback<string>): Promise<string>;
        xadd(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', approximate: '~', count: number, args: ValueType[], callback?: Callback<string>): Promise<string>;

        xclaim(key: KeyType, group: string, consumer: string, minIdleTime: number, args: ValueType | ValueType[], callback?: Callback<Array<[string, string[]]>>): Promise<Array<[string, string[]]>>;

        xdel(key: KeyType, ids: string | string[], callback?: Callback<number>): Promise<number>;

        xgroup(op: XGroupOp, key: KeyType, groupName: string, idOrConsumerName?: string, callback?: Callback<Ok>): Promise<Ok>;

        xinfo(op: 'GROUPS' | 'STREAM', key: KeyType, callback?: Callback<any[]>): Promise<any[]>;
        xinfo(op: 'CONSUMERS', key: KeyType, groupName: string, callback?: Callback<any[]>): Promise<any[]>;

        xlen(key: KeyType, callback?: Callback<number>): Promise<number>;

        xpending(key: KeyType, group: string, args: ValueType | ValueType[], callback?: Callback<any>): Promise<any>;

        xrange(key: KeyType, start: string, end: string, callback?: Callback<Array<[string, string[]]>>): Promise<Array<[string, string[]]>>;
        xrange(key: KeyType, start: string, end: string, countOp: 'COUNT', count: number, callback?: Callback<Array<[string, string[]]>>): Promise<Array<[string, string[]]>>;

        xread(...args: ValueType[]): Array<[string, string[]]>;

        xreadgroup(groupOption: 'GROUP' | 'group', group: string, consumer: string, args: ValueType | ValueType[], callback?: Callback<any>): Promise<any>;

        xrevrange(key: KeyType, start: string, end: string, callback?: Callback<Array<[string, string[]]>>): Promise<Array<[string, string[]]>>;
        xrevrange(key: KeyType, start: string, end: string, countOp: 'COUNT', count: number, callback?: Callback<Array<[string, string[]]>>): Promise<Array<[string, string[]]>>;

        xtrim(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', count: number, callback?: Callback<number>): Promise<number>;
        xtrim(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', approximate: '~', count: number, callback?: Callback<number>): Promise<number>;
    }

    interface BaseConnection extends Commander, Commands {
        connect(callback?: Callback<void>): Promise<void>;
        disconnect(): void;
        duplicate(): Redis;
        send_command(command: string, args: ValueType | ValueType[], callback?: Callback<any>): Promise<any>;
        call(command: string, args: ValueType | ValueType[], callback?: Callback<any>): Promise<any>;
    }

    interface Redis extends EventEmitter, BaseConnection {
        status: string;
    }

    interface Pipeline {
        readonly redis: Redis;
        readonly isCluster: boolean;
        readonly options: RedisOptions;
        readonly length: number;

        bitcount(key: KeyType, callback?: Callback<number>): Pipeline;
        bitcount(key: KeyType, start: number, end: number, callback?: Callback<number>): Pipeline;

        get(key: KeyType, callback?: Callback<string>): Pipeline;
        getBuffer(key: KeyType, callback?: Callback<Buffer>): Pipeline;

        set(key: KeyType, value: ValueType, callback?: Callback<string>): Pipeline;
        set(key: KeyType, value: ValueType, setMode: string, callback?: Callback<string>): Pipeline;
        set(key: KeyType, value: ValueType, expiryMode: string, time: number, callback?: Callback<string>): Pipeline;
        set(key: KeyType, value: ValueType, expiryMode: string, time: number, setMode: string, callback?: Callback<string>): Pipeline;

        setBuffer(key: KeyType, value: ValueType, callback?: Callback<Buffer>): Pipeline;
        setBuffer(key: KeyType, value: ValueType, setMode: string, callback?: Callback<Buffer>): Pipeline;
        setBuffer(key: KeyType, value: ValueType, expiryMode: string, time: number, callback?: Callback<Buffer>): Pipeline;
        setBuffer(key: KeyType, value: ValueType, expiryMode: string, time: number, setMode: string, callback?: Callback<Buffer>): Pipeline;

        setnx(key: KeyType, value: ValueType, callback?: Callback<BooleanResponse>): Pipeline;

        setex(key: KeyType, seconds: number, value: ValueType, callback?: Callback<Ok>): Pipeline;

        psetex(key: KeyType, milliseconds: number, value: ValueType, callback?: Callback<Ok>): Pipeline;

        append(key: KeyType, value: ValueType, callback?: Callback<number>): Pipeline;

        strlen(key: KeyType, callback?: Callback<number>): Pipeline;

        del(...keys: KeyType[]): Pipeline;

        exists(...keys: KeyType[]): Pipeline;

        setbit(key: KeyType, offset: number, value: ValueType, callback?: Callback<number>): Pipeline;

        getbit(key: KeyType, offset: number, callback?: Callback<number>): Pipeline;

        setrange(key: KeyType, offset: number, value: ValueType, callback?: Callback<number>): Pipeline;

        getrange(key: KeyType, start: number, end: number, callback?: Callback<string>): Pipeline;

        substr(key: KeyType, start: number, end: number, callback?: Callback<string>): Pipeline;

        incr(key: KeyType, callback?: Callback<number>): Pipeline;

        decr(key: KeyType, callback?: Callback<number>): Pipeline;

        mget(...keys: KeyType[]): Pipeline;

        rpush(key: KeyType, ...values: ValueType[]): Pipeline;

        rpushBuffer(key: KeyType, ...values: Buffer[]): Pipeline;

        lpush(key: KeyType, ...values: ValueType[]): Pipeline;

        rpushx(key: KeyType, value: ValueType, callback?: Callback<number>): Pipeline;

        lpushx(key: KeyType, value: ValueType, callback?: Callback<number>): Pipeline;

        linsert(key: KeyType, direction: "BEFORE" | "AFTER", pivot: string, value: ValueType, callback?: Callback<number>): Pipeline;

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

        zadd(key: KeyType, ...args: string[]): Pipeline;

        zincrby(key: KeyType, increment: number, member: string, callback?: Callback<string>): Pipeline;

        zrem(key: KeyType, ...members: ValueType[]): Pipeline;

        zremrangebyscore(key: KeyType, min: number | string, max: number | string, callback?: Callback<number>): Pipeline;

        zremrangebyrank(key: KeyType, start: number, stop: number, callback?: Callback<number>): Pipeline;

        zunionstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

        zinterstore(destination: string, numkeys: number, key: KeyType, ...args: string[]): Pipeline;

        zrange(key: KeyType, start: number, stop: number, callback?: Callback<string[]>): Pipeline;
        zrange(key: KeyType, start: number, stop: number, withScores: "WITHSCORES", callback?: Callback<string[]>): Pipeline;

        zrevrange(key: KeyType, start: number, stop: number, callback?: Callback<string[]>): Pipeline;
        zrevrange(key: KeyType, start: number, stop: number, withScores: "WITHSCORES", callback?: Callback<string[]>): Pipeline;

        zrangebyscore(key: KeyType, min: number | string, max: number | string, ...args: string[]): Pipeline;

        zrevrangebyscore(key: KeyType, max: number | string, min: number | string, ...args: string[]): Pipeline;

        zcount(key: KeyType, min: number | string, max: number | string, callback?: Callback<number>): Pipeline;

        zcard(key: KeyType, callback?: Callback<number>): Pipeline;

        zscore(key: KeyType, member: string, callback?: Callback<number>): Pipeline;

        zrank(key: KeyType, member: string, callback?: Callback<number>): Pipeline;

        zrevrank(key: KeyType, member: string, callback?: Callback<number>): Pipeline;

        hset(key: KeyType, field: string, value: ValueType, callback?: Callback<BooleanResponse>): Pipeline;
        hsetBuffer(key: KeyType, field: string, value: ValueType, callback?: Callback<Buffer>): Pipeline;

        hsetnx(key: KeyType, field: string, value: ValueType, callback?: Callback<BooleanResponse>): Pipeline;

        hget(key: KeyType, field: string, callback?: Callback<string | string>): Pipeline;
        hgetBuffer(key: KeyType, field: string, callback?: Callback<Buffer>): Pipeline;

        hmset(key: KeyType, args: object | Map<string, ValueType> | ValueType[], callback?: Callback<BooleanResponse>): Pipeline;

        hmget(key: KeyType, ...fields: string[]): Pipeline;

        hincrby(key: KeyType, field: string, increment: number, callback?: Callback<number>): Pipeline;

        hincrbyfloat(key: KeyType, field: string, increment: number, callback?: Callback<number>): Pipeline;

        hdel(key: KeyType, ...fields: string[]): Pipeline;

        hlen(key: KeyType, callback?: Callback<number>): Pipeline;

        hkeys(key: KeyType, callback?: Callback<string[]>): Pipeline;

        hvals(key: KeyType, callback?: Callback<string[]>): Pipeline;

        hgetall(key: KeyType, callback?: Callback<{ [key: string]: string }>): Pipeline;

        hexists(key: KeyType, field: string, callback?: Callback<BooleanResponse>): Pipeline;

        incrby(key: KeyType, increment: number, callback?: Callback<number>): Pipeline;

        incrbyfloat(key: KeyType, increment: number, callback?: Callback<number>): Pipeline;

        decrby(key: KeyType, decrement: number, callback?: Callback<number>): Pipeline;

        getset(key: KeyType, value: ValueType, callback?: Callback<string>): Pipeline;

        mset(args: object | Map<string, ValueType> | ValueType[], callback?: Callback<Ok>): Pipeline;

        msetnx(args: object | Map<string, ValueType> | ValueType[], callback?: Callback<BooleanResponse>): Pipeline;

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

        ping(callback?: Callback<string>): Pipeline;
        ping(message: string, callback?: Callback<string>): Pipeline;

        echo(message: string, callback?: Callback<string>): Pipeline;

        save(callback?: Callback<string>): Pipeline;

        bgsave(callback?: Callback<string>): Pipeline;

        bgrewriteaof(callback?: Callback<string>): Pipeline;

        shutdown(save: "SAVE" | "NOSAVE", callback?: Callback<never>): Pipeline;

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

        debug(op: 'OBJECT' | 'SEGFAULT', key: string): Pipeline;

        config(op: 'GET', cfg: any[]): Pipeline;
        config(op: 'REWRITE'): Pipeline;
        config(op: 'SET', key: string, value: ValueType): Pipeline;

        subscribe(channels: string | string[], callback?: Callback<number>): Promise<number>;

        unsubscribe(channels: string | string[], callback?: Callback<number>): Promise<number>;

        psubscribe(patterns: string | string[], callback?: Callback<number>): Promise<number>;

        punsubscribe(patterns: string | string[], callback?: Callback<number>): Promise<number>;

        publish(channel: string, message: string, callback?: Callback<number>): Pipeline;

        watch(...keys: KeyType[]): Pipeline;

        unwatch(callback?: Callback<string>): Pipeline;

        cluster(...args: ValueType[]): Pipeline;

        restore(...args: ValueType[]): Pipeline;

        migrate(...args: ValueType[]): Pipeline;

        dump(key: KeyType, callback?: Callback<string>): Pipeline;

        object(subcommand: string, ...args: ValueType[]): Pipeline;

        client(op: 'ID', callback: Callback<number>): Pipeline;
        client(op: 'KILL', args: ValueType | ValueType[], callback?: Callback<Ok | number>): Pipeline;
        client(op: 'LIST', type?: ClientListOp, callback?: Callback<string>): Pipeline;
        client(op: 'GETNAME', callback?: Callback<string>): Pipeline;
        client(op: 'PAUSE', timeout: number, callback?: Callback<Ok>): Pipeline;
        client(op: 'REPLY', type: ReplySetting, callback?: Callback<never | Ok>): Pipeline;
        client(op: 'SETNAME', name: string, callback?: Callback<string>): Pipeline;
        client(op: 'UNBLOCK', id: string, timeoutSetting?: ClientUnblockSetting, callback?: Callback<BooleanResponse>): Pipeline;

        eval(script: string, numKeys: number, ...args: ValueType[]): Pipeline;

        evalsha(scriptSha: string, numKeys: string, ...args: ValueType[]): Pipeline;

        script(...args: ValueType[]): Pipeline;

        quit(callback?: Callback<string>): Pipeline;

        scan(cursor: number): Pipeline;

        scan(cursor: number, matchOption: 'match' | 'MATCH', pattern: string): Pipeline;
        scan(cursor: number, countOption: 'count' | 'COUNT', count: number): Pipeline;

        scan(cursor: number, matchOption: 'match' | 'MATCH', pattern: string, countOption: 'count' | 'COUNT', count: number): Pipeline;
        scan(cursor: number, countOption: 'count' | 'COUNT', count: number, matchOption: 'match' | 'MATCH', pattern: string): Pipeline;
        sscan(key: KeyType, cursor: number, ...args: ValueType[]): Pipeline;

        hscan(key: KeyType, cursor: number, ...args: ValueType[]): Pipeline;

        zscan(key: KeyType, cursor: number, ...args: ValueType[]): Pipeline;

        pfmerge(destkey: KeyType, ...sourcekeys: KeyType[]): Pipeline;

        pfadd(key: KeyType, ...elements: string[]): Pipeline;

        pfcount(...keys: KeyType[]): Pipeline;

        xack(key: KeyType, group: string, ...ids: string[]): Pipeline;

        xadd(key: KeyType, id: string, ...args: string[]): Pipeline;

        xclaim(key: KeyType, group: string, consumer: string, minIdleTime: number, id: string, ...args: ValueType[]): Pipeline;

        xdel(key: KeyType, ...ids: string[]): Pipeline;

        xgroup(op: XGroupOp, key: KeyType, groupName: string, idOrConsumerName?: string, callback?: Callback<Ok>): Pipeline;

        xinfo(op: 'GROUPS' | 'STREAM', key: KeyType, callback?: Callback<any[]>): Pipeline;
        xinfo(op: 'CONSUMERS', key: KeyType, groupName: string, callback?: Callback<any[]>): Pipeline;

        xlen(key: KeyType): Pipeline;

        xpending(key: KeyType, group: string, ...args: ValueType[]): Pipeline;

        xrange(key: KeyType, start: string, end: string, callback?: Callback<Array<[string, string[]]>>): Pipeline;
        xrange(key: KeyType, start: string, end: string, countOp: 'COUNT', count: number, callback?: Callback<Array<[string, string[]]>>): Pipeline;

        xread(...args: ValueType[]): Pipeline;

        xreadgroup(command: 'GROUP' | 'group', group: string, consumer: string,  ...args: ValueType[]): Pipeline;

        xrevrange(key: KeyType, start: string, end: string, callback?: Callback<Array<[string, string[]]>>): Pipeline;
        xrevrange(key: KeyType, start: string, end: string, countOp: 'COUNT', count: number, callback?: Callback<Array<[string, string[]]>>): Pipeline;

        xtrim(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', count: number, callback?: Callback<number>): Pipeline;
        xtrim(key: KeyType, maxLenOption: 'MAXLEN' | 'maxlen', approximate: '~', count: number, callback?: Callback<number>): Pipeline;
    }

    interface NodeConfiguration {
        host?: string;
        port?: number;
    }

    type ClusterNode = string | number | NodeConfiguration;

    type NodeRole = 'master' | 'slave' | 'all';

    type CallbackFunction<T = any> = (err?: NodeJS.ErrnoException | null, result?: T) => void;

    type Ok = 'OK';

    interface Cluster extends EventEmitter, BaseConnection {
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
        role?: "master" | "slave";
        /**
         * default: null.
         */
        name?: string;
        sentinelPassword?: string;
        sentinels?: Array<{ host: string; port: number; }>;
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
