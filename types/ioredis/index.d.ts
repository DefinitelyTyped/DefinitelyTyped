// Type definitions for ioredis
// Project: https://github.com/luin/ioredis
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================
    import * as Redis from "ioredis";
    var redis = new Redis();
 =============================================== */

/// <reference types="node" />

interface RedisStatic {
    new (port?: number, host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    new (host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    new (options: IORedis.RedisOptions): IORedis.Redis;
    new (url: string): IORedis.Redis;
    (port?: number, host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    (host?: string, options?: IORedis.RedisOptions): IORedis.Redis;
    (options: IORedis.RedisOptions): IORedis.Redis;
    (url: string): IORedis.Redis;
    Cluster: IORedis.Cluster;
}

declare var IORedis: RedisStatic;
export = IORedis;

declare module IORedis {
    interface Commander {
        new (): Commander;
        getBuiltinCommands(): string[];
        createBuiltinCommand(commandName: string): {};
        defineCommand(name: string, definition: {
            numberOfKeys?: number;
            lua?: string;
        }): any;
        sendCommand(): void;
    }

    interface Redis extends NodeJS.EventEmitter, Commander {
        status: string;
        connect(callback?: Function): Promise<any>;
        disconnect(): void;
        duplicate(): Redis;
        monitor(calback: (error: Error, monitor: NodeJS.EventEmitter) => void): Promise<NodeJS.EventEmitter>;

        send_command(command: string, ...args: any[]): any;
        auth(password: string, callback?: ResCallbackT<any>): any;
        ping(callback?: ResCallbackT<number>): any;
        append(key: string, value: string, callback?: ResCallbackT<number>): any;
        bitcount(key: string, callback?: ResCallbackT<number>): any;
        bitcount(key: string, start: number, end: number, callback?: ResCallbackT<number>): any;
        set(key: string, value: string, callback?: ResCallbackT<string>): any;
        get(key: string, callback?: ResCallbackT<string>): any;
        exists(key: string, value: string, callback?: ResCallbackT<number>): any;
        publish(channel: string, value: any): any;
        subscribe(channel: string): any;
        get(args: any[], callback?: ResCallbackT<string>): any;
        get(...args: any[]): any;
        getBuffer(key: string, callback?: ResCallbackT<Buffer>): any;
        set(args: any[], callback?: ResCallbackT<string>): any;
        set(...args: any[]): any;
        setnx(args: any[], callback?: ResCallbackT<any>): any;
        setnx(...args: any[]): any;
        setex(args: any[], callback?: ResCallbackT<any>): any;
        setex(...args: any[]): any;
        append(args: any[], callback?: ResCallbackT<any>): any;
        append(...args: any[]): any;
        strlen(args: any[], callback?: ResCallbackT<any>): any;
        strlen(...args: any[]): any;
        del(args: any[], callback?: ResCallbackT<any>): any;
        del(...args: any[]): any;
        exists(args: any[], callback?: ResCallbackT<any>): any;
        exists(...args: any[]): any;
        setbit(args: any[], callback?: ResCallbackT<any>): any;
        setbit(...args: any[]): any;
        getbit(args: any[], callback?: ResCallbackT<any>): any;
        getbit(...args: any[]): any;
        setrange(args: any[], callback?: ResCallbackT<any>): any;
        setrange(...args: any[]): any;
        getrange(args: any[], callback?: ResCallbackT<any>): any;
        getrange(...args: any[]): any;
        substr(args: any[], callback?: ResCallbackT<any>): any;
        substr(...args: any[]): any;
        incr(args: any[], callback?: ResCallbackT<any>): any;
        incr(...args: any[]): any;
        decr(args: any[], callback?: ResCallbackT<any>): any;
        decr(...args: any[]): any;
        mget(args: any[], callback?: ResCallbackT<any>): any;
        mget(...args: any[]): any;
        rpush(...args: any[]): any;
        lpush(args: any[], callback?: ResCallbackT<any>): any;
        lpush(...args: any[]): any;
        rpushx(args: any[], callback?: ResCallbackT<any>): any;
        rpushx(...args: any[]): any;
        lpushx(args: any[], callback?: ResCallbackT<any>): any;
        lpushx(...args: any[]): any;
        linsert(args: any[], callback?: ResCallbackT<any>): any;
        linsert(...args: any[]): any;
        rpop(args: any[], callback?: ResCallbackT<any>): any;
        rpop(...args: any[]): any;
        lpop(args: any[], callback?: ResCallbackT<any>): any;
        lpop(...args: any[]): any;
        brpop(args: any[], callback?: ResCallbackT<any>): any;
        brpop(...args: any[]): any;
        brpoplpush(args: any[], callback?: ResCallbackT<any>): any;
        brpoplpush(...args: any[]): any;
        blpop(args: any[], callback?: ResCallbackT<any>): any;
        blpop(...args: any[]): any;
        llen(args: any[], callback?: ResCallbackT<any>): any;
        llen(...args: any[]): any;
        lindex(args: any[], callback?: ResCallbackT<any>): any;
        lindex(...args: any[]): any;
        lset(args: any[], callback?: ResCallbackT<any>): any;
        lset(...args: any[]): any;
        lrange(args: any[], callback?: ResCallbackT<any>): any;
        lrange(...args: any[]): any;
        ltrim(args: any[], callback?: ResCallbackT<any>): any;
        ltrim(...args: any[]): any;
        lrem(args: any[], callback?: ResCallbackT<any>): any;
        lrem(...args: any[]): any;
        rpoplpush(args: any[], callback?: ResCallbackT<any>): any;
        rpoplpush(...args: any[]): any;
        sadd(args: any[], callback?: ResCallbackT<any>): any;
        sadd(...args: any[]): any;
        srem(args: any[], callback?: ResCallbackT<any>): any;
        srem(...args: any[]): any;
        smove(args: any[], callback?: ResCallbackT<any>): any;
        smove(...args: any[]): any;
        sismember(args: any[], callback?: ResCallbackT<any>): any;
        sismember(...args: any[]): any;
        scard(args: any[], callback?: ResCallbackT<any>): any;
        scard(...args: any[]): any;
        spop(args: any[], callback?: ResCallbackT<any>): any;
        spop(...args: any[]): any;
        srandmember(args: any[], callback?: ResCallbackT<any>): any;
        srandmember(...args: any[]): any;
        sinter(args: any[], callback?: ResCallbackT<any>): any;
        sinter(...args: any[]): any;
        sinterstore(args: any[], callback?: ResCallbackT<any>): any;
        sinterstore(...args: any[]): any;
        sunion(args: any[], callback?: ResCallbackT<any>): any;
        sunion(...args: any[]): any;
        sunionstore(args: any[], callback?: ResCallbackT<any>): any;
        sunionstore(...args: any[]): any;
        sdiff(args: any[], callback?: ResCallbackT<any>): any;
        sdiff(...args: any[]): any;
        sdiffstore(args: any[], callback?: ResCallbackT<any>): any;
        sdiffstore(...args: any[]): any;
        smembers(args: any[], callback?: ResCallbackT<any>): any;
        smembers(...args: any[]): any;
        zadd(args: any[], callback?: ResCallbackT<any>): any;
        zadd(...args: any[]): any;
        zincrby(args: any[], callback?: ResCallbackT<any>): any;
        zincrby(...args: any[]): any;
        zrem(args: any[], callback?: ResCallbackT<any>): any;
        zrem(...args: any[]): any;
        zremrangebyscore(args: any[], callback?: ResCallbackT<any>): any;
        zremrangebyscore(...args: any[]): any;
        zremrangebyrank(args: any[], callback?: ResCallbackT<any>): any;
        zremrangebyrank(...args: any[]): any;
        zunionstore(args: any[], callback?: ResCallbackT<any>): any;
        zunionstore(...args: any[]): any;
        zinterstore(args: any[], callback?: ResCallbackT<any>): any;
        zinterstore(...args: any[]): any;
        zrange(args: any[], callback?: ResCallbackT<any>): any;
        zrange(...args: any[]): any;
        zrangebyscore(args: any[], callback?: ResCallbackT<any>): any;
        zrangebyscore(...args: any[]): any;
        zrevrangebyscore(args: any[], callback?: ResCallbackT<any>): any;
        zrevrangebyscore(...args: any[]): any;
        zcount(args: any[], callback?: ResCallbackT<any>): any;
        zcount(...args: any[]): any;
        zrevrange(args: any[], callback?: ResCallbackT<any>): any;
        zrevrange(...args: any[]): any;
        zcard(args: any[], callback?: ResCallbackT<any>): any;
        zcard(...args: any[]): any;
        zscore(args: any[], callback?: ResCallbackT<any>): any;
        zscore(...args: any[]): any;
        zrank(args: any[], callback?: ResCallbackT<any>): any;
        zrank(...args: any[]): any;
        zrevrank(args: any[], callback?: ResCallbackT<any>): any;
        zrevrank(...args: any[]): any;
        hset(args: any[], callback?: ResCallbackT<any>): any;
        hset(...args: any[]): any;
        hsetnx(args: any[], callback?: ResCallbackT<any>): any;
        hsetnx(...args: any[]): any;
        hget(args: any[], callback?: ResCallbackT<any>): any;
        hget(...args: any[]): any;
        hmset(args: any[], callback?: ResCallbackT<any>): any;
        hmset(key: string, hash: any, callback?: ResCallbackT<any>): any;
        hmset(...args: any[]): any;
        hmget(args: any[], callback?: ResCallbackT<any>): any;
        hmget(...args: any[]): any;
        hincrby(args: any[], callback?: ResCallbackT<any>): any;
        hincrby(...args: any[]): any;
        hincrbyfloat(args: any[], callback?: ResCallbackT<any>): any;
        hincrbyfloat(...args: any[]): any;
        hdel(args: any[], callback?: ResCallbackT<any>): any;
        hdel(...args: any[]): any;
        hlen(args: any[], callback?: ResCallbackT<any>): any;
        hlen(...args: any[]): any;
        hkeys(args: any[], callback?: ResCallbackT<any>): any;
        hkeys(...args: any[]): any;
        hvals(args: any[], callback?: ResCallbackT<any>): any;
        hvals(...args: any[]): any;
        hgetall(args: any[], callback?: ResCallbackT<any>): any;
        hgetall(...args: any[]): any;
        hgetall(key: string, callback?: ResCallbackT<any>): any;
        hexists(args: any[], callback?: ResCallbackT<any>): any;
        hexists(...args: any[]): any;
        incrby(args: any[], callback?: ResCallbackT<any>): any;
        incrby(...args: any[]): any;
        incrbyfloat(args: any[], callback?: ResCallbackT<any>): any;
        incrbyfloat(...args: any[]): any;
        decrby(args: any[], callback?: ResCallbackT<any>): any;
        decrby(...args: any[]): any;
        getset(args: any[], callback?: ResCallbackT<any>): any;
        getset(...args: any[]): any;
        mset(args: any[], callback?: ResCallbackT<any>): any;
        mset(...args: any[]): any;
        msetnx(args: any[], callback?: ResCallbackT<any>): any;
        msetnx(...args: any[]): any;
        randomkey(args: any[], callback?: ResCallbackT<any>): any;
        randomkey(...args: any[]): any;
        select(args: any[], callback?: ResCallbackT<any>): void;
        select(...args: any[]): void;
        move(args: any[], callback?: ResCallbackT<any>): any;
        move(...args: any[]): any;
        rename(args: any[], callback?: ResCallbackT<any>): any;
        rename(...args: any[]): any;
        renamenx(args: any[], callback?: ResCallbackT<any>): any;
        renamenx(...args: any[]): any;
        expire(args: any[], callback?: ResCallbackT<any>): any;
        expire(...args: any[]): any;
        pexpire(args: any[], callback?: ResCallbackT<any>): any;
        pexpire(...args: any[]): any;
        expireat(args: any[], callback?: ResCallbackT<any>): any;
        expireat(...args: any[]): any;
        pexpireat(args: any[], callback?: ResCallbackT<any>): any;
        pexpireat(...args: any[]): any;
        keys(args: any[], callback?: ResCallbackT<any>): any;
        keys(...args: any[]): any;
        dbsize(args: any[], callback?: ResCallbackT<any>): any;
        dbsize(...args: any[]): any;
        auth(args: any[], callback?: ResCallbackT<any>): void;
        auth(...args: any[]): void;
        ping(args: any[], callback?: ResCallbackT<any>): any;
        ping(...args: any[]): any;
        echo(args: any[], callback?: ResCallbackT<any>): any;
        echo(...args: any[]): any;
        save(args: any[], callback?: ResCallbackT<any>): any;
        save(...args: any[]): any;
        bgsave(args: any[], callback?: ResCallbackT<any>): any;
        bgsave(...args: any[]): any;
        bgrewriteaof(args: any[], callback?: ResCallbackT<any>): any;
        bgrewriteaof(...args: any[]): any;
        shutdown(args: any[], callback?: ResCallbackT<any>): any;
        shutdown(...args: any[]): any;
        lastsave(args: any[], callback?: ResCallbackT<any>): any;
        lastsave(...args: any[]): any;
        type(args: any[], callback?: ResCallbackT<any>): any;
        type(...args: any[]): any;
        multi(args: any[], callback?: ResCallbackT<any>): Pipeline;
        multi(...args: any[]): Pipeline;
        exec(args: any[], callback?: ResCallbackT<any>): any;
        exec(...args: any[]): any;
        discard(args: any[], callback?: ResCallbackT<any>): any;
        discard(...args: any[]): any;
        sync(args: any[], callback?: ResCallbackT<any>): any;
        sync(...args: any[]): any;
        flushdb(args: any[], callback?: ResCallbackT<any>): any;
        flushdb(...args: any[]): any;
        flushall(args: any[], callback?: ResCallbackT<any>): any;
        flushall(...args: any[]): any;
        sort(args: any[], callback?: ResCallbackT<any>): any;
        sort(...args: any[]): any;
        info(args: any[], callback?: ResCallbackT<any>): any;
        info(...args: any[]): any;
        time(args: any[], callback?: ResCallbackT<any>): any;
        time(...args: any[]): any;
        monitor(args: any[], callback?: ResCallbackT<any>): any;
        monitor(...args: any[]): any;
        ttl(args: any[], callback?: ResCallbackT<any>): any;
        ttl(...args: any[]): any;
        persist(args: any[], callback?: ResCallbackT<any>): any;
        persist(...args: any[]): any;
        slaveof(args: any[], callback?: ResCallbackT<any>): any;
        slaveof(...args: any[]): any;
        debug(args: any[], callback?: ResCallbackT<any>): any;
        debug(...args: any[]): any;
        config(args: any[], callback?: ResCallbackT<any>): any;
        config(...args: any[]): any;
        subscribe(args: any[], callback?: ResCallbackT<any>): any;
        subscribe(...args: any[]): any;
        unsubscribe(args: any[], callback?: ResCallbackT<any>): any;
        unsubscribe(...args: any[]): any;
        psubscribe(args: any[], callback?: ResCallbackT<any>): any;
        psubscribe(...args: any[]): any;
        punsubscribe(args: any[], callback?: ResCallbackT<any>): any;
        punsubscribe(...args: any[]): any;
        publish(args: any[], callback?: ResCallbackT<any>): any;
        publish(...args: any[]): any;
        watch(args: any[], callback?: ResCallbackT<any>): any;
        watch(...args: any[]): any;
        unwatch(args: any[], callback?: ResCallbackT<any>): any;
        unwatch(...args: any[]): any;
        cluster(args: any[], callback?: ResCallbackT<any>): any;
        cluster(...args: any[]): any;
        restore(args: any[], callback?: ResCallbackT<any>): any;
        restore(...args: any[]): any;
        migrate(args: any[], callback?: ResCallbackT<any>): any;
        migrate(...args: any[]): any;
        dump(args: any[], callback?: ResCallbackT<any>): any;
        dump(...args: any[]): any;
        object(args: any[], callback?: ResCallbackT<any>): any;
        object(...args: any[]): any;
        client(args: any[], callback?: ResCallbackT<any>): any;
        client(...args: any[]): any;
        eval(args: any[], callback?: ResCallbackT<any>): any;
        eval(...args: any[]): any;
        evalsha(args: any[], callback?: ResCallbackT<any>): any;
        evalsha(...args: any[]): any;
        script(args: any[], callback?: ResCallbackT<any>): any;
        script(...args: any[]): any;
        script(key: string, callback?: ResCallbackT<any>): any;
        quit(args: any[], callback?: ResCallbackT<any>): any;
        quit(...args: any[]): any;
        scan(...args: any[]): any;
        scan(args: any[], callback?: ResCallbackT<any>): any;
        hscan(...args: any[]): any;
        hscan(args: any[], callback?: ResCallbackT<any>): any;
        zscan(...args: any[]): any;
        zscan(args: any[], callback?: ResCallbackT<any>): any;

        pipeline(): Pipeline;
        pipeline(commands: string[][]): Pipeline;

        scanStream(options?: IORedis.ScanStreamOption): NodeJS.EventEmitter;
        hscanStream(key: string, options?: IORedis.ScanStreamOption): NodeJS.EventEmitter;
        zscanStream(key: string, options?: IORedis.ScanStreamOption): NodeJS.EventEmitter;
    }

    interface Pipeline {
        exec(callback?: ResCallbackT<any[]>): any;

        get(args: any[], callback?: ResCallbackT<string>): Pipeline;
        get(...args: any[]): Pipeline;
        set(args: any[], callback?: ResCallbackT<string>): Pipeline;
        set(...args: any[]): Pipeline;
        setnx(args: any[], callback?: ResCallbackT<any>): Pipeline;
        setnx(...args: any[]): Pipeline;
        setex(args: any[], callback?: ResCallbackT<any>): Pipeline;
        setex(...args: any[]): Pipeline;
        append(args: any[], callback?: ResCallbackT<any>): Pipeline;
        append(...args: any[]): Pipeline;
        strlen(args: any[], callback?: ResCallbackT<any>): Pipeline;
        strlen(...args: any[]): Pipeline;
        del(args: any[], callback?: ResCallbackT<any>): Pipeline;
        del(...args: any[]): Pipeline;
        exists(args: any[], callback?: ResCallbackT<any>): Pipeline;
        exists(...args: any[]): Pipeline;
        setbit(args: any[], callback?: ResCallbackT<any>): Pipeline;
        setbit(...args: any[]): Pipeline;
        getbit(args: any[], callback?: ResCallbackT<any>): Pipeline;
        getbit(...args: any[]): Pipeline;
        setrange(args: any[], callback?: ResCallbackT<any>): Pipeline;
        setrange(...args: any[]): Pipeline;
        getrange(args: any[], callback?: ResCallbackT<any>): Pipeline;
        getrange(...args: any[]): Pipeline;
        substr(args: any[], callback?: ResCallbackT<any>): Pipeline;
        substr(...args: any[]): Pipeline;
        incr(args: any[], callback?: ResCallbackT<any>): Pipeline;
        incr(...args: any[]): Pipeline;
        decr(args: any[], callback?: ResCallbackT<any>): Pipeline;
        decr(...args: any[]): Pipeline;
        mget(args: any[], callback?: ResCallbackT<any>): Pipeline;
        mget(...args: any[]): Pipeline;
        rpush(...args: any[]): Pipeline;
        lpush(args: any[], callback?: ResCallbackT<any>): Pipeline;
        lpush(...args: any[]): Pipeline;
        rpushx(args: any[], callback?: ResCallbackT<any>): Pipeline;
        rpushx(...args: any[]): Pipeline;
        lpushx(args: any[], callback?: ResCallbackT<any>): Pipeline;
        lpushx(...args: any[]): Pipeline;
        linsert(args: any[], callback?: ResCallbackT<any>): Pipeline;
        linsert(...args: any[]): Pipeline;
        rpop(args: any[], callback?: ResCallbackT<any>): Pipeline;
        rpop(...args: any[]): Pipeline;
        lpop(args: any[], callback?: ResCallbackT<any>): Pipeline;
        lpop(...args: any[]): Pipeline;
        brpop(args: any[], callback?: ResCallbackT<any>): Pipeline;
        brpop(...args: any[]): Pipeline;
        brpoplpush(args: any[], callback?: ResCallbackT<any>): Pipeline;
        brpoplpush(...args: any[]): Pipeline;
        blpop(args: any[], callback?: ResCallbackT<any>): Pipeline;
        blpop(...args: any[]): Pipeline;
        llen(args: any[], callback?: ResCallbackT<any>): Pipeline;
        llen(...args: any[]): Pipeline;
        lindex(args: any[], callback?: ResCallbackT<any>): Pipeline;
        lindex(...args: any[]): Pipeline;
        lset(args: any[], callback?: ResCallbackT<any>): Pipeline;
        lset(...args: any[]): Pipeline;
        lrange(args: any[], callback?: ResCallbackT<any>): Pipeline;
        lrange(...args: any[]): Pipeline;
        ltrim(args: any[], callback?: ResCallbackT<any>): Pipeline;
        ltrim(...args: any[]): Pipeline;
        lrem(args: any[], callback?: ResCallbackT<any>): Pipeline;
        lrem(...args: any[]): Pipeline;
        rpoplpush(args: any[], callback?: ResCallbackT<any>): Pipeline;
        rpoplpush(...args: any[]): Pipeline;
        sadd(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sadd(...args: any[]): Pipeline;
        srem(args: any[], callback?: ResCallbackT<any>): Pipeline;
        srem(...args: any[]): Pipeline;
        smove(args: any[], callback?: ResCallbackT<any>): Pipeline;
        smove(...args: any[]): Pipeline;
        sismember(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sismember(...args: any[]): Pipeline;
        scard(args: any[], callback?: ResCallbackT<any>): Pipeline;
        scard(...args: any[]): Pipeline;
        spop(args: any[], callback?: ResCallbackT<any>): Pipeline;
        spop(...args: any[]): Pipeline;
        srandmember(args: any[], callback?: ResCallbackT<any>): Pipeline;
        srandmember(...args: any[]): Pipeline;
        sinter(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sinter(...args: any[]): Pipeline;
        sinterstore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sinterstore(...args: any[]): Pipeline;
        sunion(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sunion(...args: any[]): Pipeline;
        sunionstore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sunionstore(...args: any[]): Pipeline;
        sdiff(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sdiff(...args: any[]): Pipeline;
        sdiffstore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sdiffstore(...args: any[]): Pipeline;
        smembers(args: any[], callback?: ResCallbackT<any>): Pipeline;
        smembers(...args: any[]): Pipeline;
        zadd(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zadd(...args: any[]): Pipeline;
        zincrby(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zincrby(...args: any[]): Pipeline;
        zrem(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zrem(...args: any[]): Pipeline;
        zremrangebyscore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zremrangebyscore(...args: any[]): Pipeline;
        zremrangebyrank(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zremrangebyrank(...args: any[]): Pipeline;
        zunionstore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zunionstore(...args: any[]): Pipeline;
        zinterstore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zinterstore(...args: any[]): Pipeline;
        zrange(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zrange(...args: any[]): Pipeline;
        zrangebyscore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zrangebyscore(...args: any[]): Pipeline;
        zrevrangebyscore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zrevrangebyscore(...args: any[]): Pipeline;
        zcount(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zcount(...args: any[]): Pipeline;
        zrevrange(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zrevrange(...args: any[]): Pipeline;
        zcard(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zcard(...args: any[]): Pipeline;
        zscore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zscore(...args: any[]): Pipeline;
        zrank(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zrank(...args: any[]): Pipeline;
        zrevrank(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zrevrank(...args: any[]): Pipeline;
        hset(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hset(...args: any[]): Pipeline;
        hsetnx(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hsetnx(...args: any[]): Pipeline;
        hget(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hget(...args: any[]): Pipeline;
        hmset(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hmset(key: string, hash: any, callback?: ResCallbackT<any>): Pipeline;
        hmset(...args: any[]): Pipeline;
        hmget(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hmget(...args: any[]): Pipeline;
        hincrby(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hincrby(...args: any[]): Pipeline;
        hincrbyfloat(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hincrbyfloat(...args: any[]): Pipeline;
        hdel(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hdel(...args: any[]): Pipeline;
        hlen(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hlen(...args: any[]): Pipeline;
        hkeys(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hkeys(...args: any[]): Pipeline;
        hvals(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hvals(...args: any[]): Pipeline;
        hgetall(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hgetall(...args: any[]): Pipeline;
        hgetall(key: string, callback?: ResCallbackT<any>): Pipeline;
        hexists(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hexists(...args: any[]): Pipeline;
        incrby(args: any[], callback?: ResCallbackT<any>): Pipeline;
        incrby(...args: any[]): Pipeline;
        incrbyfloat(args: any[], callback?: ResCallbackT<any>): Pipeline;
        incrbyfloat(...args: any[]): Pipeline;
        decrby(args: any[], callback?: ResCallbackT<any>): Pipeline;
        decrby(...args: any[]): Pipeline;
        getset(args: any[], callback?: ResCallbackT<any>): Pipeline;
        getset(...args: any[]): Pipeline;
        mset(args: any[], callback?: ResCallbackT<any>): Pipeline;
        mset(...args: any[]): Pipeline;
        msetnx(args: any[], callback?: ResCallbackT<any>): Pipeline;
        msetnx(...args: any[]): Pipeline;
        randomkey(args: any[], callback?: ResCallbackT<any>): Pipeline;
        randomkey(...args: any[]): Pipeline;
        select(args: any[], callback?: ResCallbackT<any>): void;
        select(...args: any[]): Pipeline;
        move(args: any[], callback?: ResCallbackT<any>): Pipeline;
        move(...args: any[]): Pipeline;
        rename(args: any[], callback?: ResCallbackT<any>): Pipeline;
        rename(...args: any[]): Pipeline;
        renamenx(args: any[], callback?: ResCallbackT<any>): Pipeline;
        renamenx(...args: any[]): Pipeline;
        expire(args: any[], callback?: ResCallbackT<any>): Pipeline;
        expire(...args: any[]): Pipeline;
        pexpire(args: any[], callback?: ResCallbackT<any>): Pipeline;
        pexpire(...args: any[]): Pipeline;
        expireat(args: any[], callback?: ResCallbackT<any>): Pipeline;
        expireat(...args: any[]): Pipeline;
        pexpireat(args: any[], callback?: ResCallbackT<any>): Pipeline;
        pexpireat(...args: any[]): Pipeline;
        keys(args: any[], callback?: ResCallbackT<any>): Pipeline;
        keys(...args: any[]): Pipeline;
        dbsize(args: any[], callback?: ResCallbackT<any>): Pipeline;
        dbsize(...args: any[]): Pipeline;
        auth(args: any[], callback?: ResCallbackT<any>): void;
        auth(...args: any[]): void;
        ping(args: any[], callback?: ResCallbackT<any>): Pipeline;
        ping(...args: any[]): Pipeline;
        echo(args: any[], callback?: ResCallbackT<any>): Pipeline;
        echo(...args: any[]): Pipeline;
        save(args: any[], callback?: ResCallbackT<any>): Pipeline;
        save(...args: any[]): Pipeline;
        bgsave(args: any[], callback?: ResCallbackT<any>): Pipeline;
        bgsave(...args: any[]): Pipeline;
        bgrewriteaof(args: any[], callback?: ResCallbackT<any>): Pipeline;
        bgrewriteaof(...args: any[]): Pipeline;
        shutdown(args: any[], callback?: ResCallbackT<any>): Pipeline;
        shutdown(...args: any[]): Pipeline;
        lastsave(args: any[], callback?: ResCallbackT<any>): Pipeline;
        lastsave(...args: any[]): Pipeline;
        type(args: any[], callback?: ResCallbackT<any>): Pipeline;
        type(...args: any[]): Pipeline;
        multi(args: any[], callback?: ResCallbackT<any>): Pipeline;
        multi(...args: any[]): Pipeline;
        exec(args: any[], callback?: ResCallbackT<any>): Pipeline;
        exec(...args: any[]): Pipeline;
        discard(args: any[], callback?: ResCallbackT<any>): Pipeline;
        discard(...args: any[]): Pipeline;
        sync(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sync(...args: any[]): Pipeline;
        flushdb(args: any[], callback?: ResCallbackT<any>): Pipeline;
        flushdb(...args: any[]): Pipeline;
        flushall(args: any[], callback?: ResCallbackT<any>): Pipeline;
        flushall(...args: any[]): Pipeline;
        sort(args: any[], callback?: ResCallbackT<any>): Pipeline;
        sort(...args: any[]): Pipeline;
        info(args: any[], callback?: ResCallbackT<any>): Pipeline;
        info(...args: any[]): Pipeline;
        time(args: any[], callback?: ResCallbackT<any>): Pipeline;
        time(...args: any[]): Pipeline;
        monitor(args: any[], callback?: ResCallbackT<any>): Pipeline;
        monitor(...args: any[]): Pipeline;
        ttl(args: any[], callback?: ResCallbackT<any>): Pipeline;
        ttl(...args: any[]): Pipeline;
        persist(args: any[], callback?: ResCallbackT<any>): Pipeline;
        persist(...args: any[]): Pipeline;
        slaveof(args: any[], callback?: ResCallbackT<any>): Pipeline;
        slaveof(...args: any[]): Pipeline;
        debug(args: any[], callback?: ResCallbackT<any>): Pipeline;
        debug(...args: any[]): Pipeline;
        config(args: any[], callback?: ResCallbackT<any>): Pipeline;
        config(...args: any[]): Pipeline;
        subscribe(args: any[], callback?: ResCallbackT<any>): Pipeline;
        subscribe(...args: any[]): Pipeline;
        unsubscribe(args: any[], callback?: ResCallbackT<any>): Pipeline;
        unsubscribe(...args: any[]): Pipeline;
        psubscribe(args: any[], callback?: ResCallbackT<any>): Pipeline;
        psubscribe(...args: any[]): Pipeline;
        punsubscribe(args: any[], callback?: ResCallbackT<any>): Pipeline;
        punsubscribe(...args: any[]): Pipeline;
        publish(args: any[], callback?: ResCallbackT<any>): Pipeline;
        publish(...args: any[]): Pipeline;
        watch(args: any[], callback?: ResCallbackT<any>): Pipeline;
        watch(...args: any[]): Pipeline;
        unwatch(args: any[], callback?: ResCallbackT<any>): Pipeline;
        unwatch(...args: any[]): Pipeline;
        cluster(args: any[], callback?: ResCallbackT<any>): Pipeline;
        cluster(...args: any[]): Pipeline;
        restore(args: any[], callback?: ResCallbackT<any>): Pipeline;
        restore(...args: any[]): Pipeline;
        migrate(args: any[], callback?: ResCallbackT<any>): Pipeline;
        migrate(...args: any[]): Pipeline;
        dump(args: any[], callback?: ResCallbackT<any>): Pipeline;
        dump(...args: any[]): Pipeline;
        object(args: any[], callback?: ResCallbackT<any>): Pipeline;
        object(...args: any[]): Pipeline;
        client(args: any[], callback?: ResCallbackT<any>): Pipeline;
        client(...args: any[]): Pipeline;
        eval(args: any[], callback?: ResCallbackT<any>): Pipeline;
        eval(...args: any[]): Pipeline;
        evalsha(args: any[], callback?: ResCallbackT<any>): Pipeline;
        evalsha(...args: any[]): Pipeline;
        quit(args: any[], callback?: ResCallbackT<any>): Pipeline;
        quit(...args: any[]): Pipeline;
        scan(...args: any[]): Pipeline;
        scan(args: any[], callback?: ResCallbackT<any>): Pipeline;
        hscan(...args: any[]): Pipeline;
        hscan(args: any[], callback?: ResCallbackT<any>): Pipeline;
        zscan(...args: any[]): Pipeline;
        zscan(args: any[], callback?: ResCallbackT<any>): Pipeline;
    }

    interface Cluster extends NodeJS.EventEmitter, Commander {
        new (nodes: { host: string; port: number; }[], options?: IORedis.ClusterOptions): Redis;
        connect(callback: Function): Promise<any>;
        disconnect(): void;
        nodes(role: string): Redis[];
    }

    interface ResCallbackT<R> {
        (err: Error, res: R): void;
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
        retryStrategy?: (times: number) => number | false;
        reconnectOnError?: (error: Error) => boolean;
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
        sentinels?: { host: string; port: number; }[];
        name?: string;
        /**
         * Enable READONLY mode for the connection. Only available for cluster mode.
         * default: false.
         */
        readOnly?: boolean;
        /**
        * If you are using the hiredis parser, it's highly recommended to enable this option. Create another instance with dropBufferSupport disabled for other commands that you want to return binary instead of string:
        */
        dropBufferSupport?: boolean;
    }

    interface ScanStreamOption {
        match?: string;
        count?: number;
    }

    interface ClusterOptions {
        clusterRetryStrategy?: (times: number) => number;
        enableOfflineQueue?: boolean;
        enableReadyCheck?: boolean;
        scaleReads?: string;
        maxRedirections?: number;
        retryDelayOnFailover?: number;
        retryDelayOnClusterDown?: number;
        retryDelayOnTryAgain?: number;
        redisOptions?: RedisOptions;
    }
}
