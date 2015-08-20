// Type definitions for redis
// Project: https://github.com/mranney/node_redis
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, Peter Harris <https://github.com/CodeAnimal>, TANAKA Koichi <https://github.com/MugeSo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/redis.d.ts

/// <reference path="../node/node.d.ts" />

declare module "redis" {
    export function createClient(port_arg:number, host_arg?:string, options?:ClientOpts):RedisClient;
    export function createClient(unix_socket:string, options?:ClientOpts):RedisClient;
    export function createClient(options?:ClientOpts):RedisClient;

    export function print(err:Error, reply:any):void;

    export var debug_mode:boolean;

    interface MessageHandler {
        (channel:string, message:any): void;
    }

    interface CommandT<R> { //This is a placeholder to be used eventually, to not have to define each command twice, or four times if all caps versions are to be implemented.
        (args:any[], callback?:ResCallbackT<R>): void;
        (...args:any[]): void;
    }

    interface ResCallbackT<R> {
        (err:Error, res:R): void;
    }

    interface ServerInfo {
        redis_version: string;
        versions: number[];
    }

    interface ClientOpts {
        parser?: string;
        return_buffers?: boolean;
        detect_buffers?: boolean;
        socket_nodelay?: boolean;
        socket_keepalive?: boolean;
        no_ready_check?: boolean;
        enable_offline_queue?: boolean;
        retry_max_delay?: number;
        connect_timeout?: number;
        max_attempts?: number;
        auth_pass?: string;
        family?: string;
        command_queue_high_water?: number;
        command_queue_low_water?: number;
    }

    interface RedisClient extends NodeJS.EventEmitter {
        // event: connect
        // event: error
        // event: message
        // event: pmessage
        // event: subscribe
        // event: psubscribe
        // event: unsubscribe
        // event: punsubscribe

        connected: boolean;
        retry_delay: number;
        retry_backoff: number;
        command_queue: any[];
        offline_queue: any[];
        server_info: ServerInfo;

        end(): void;

        // Connection (http://redis.io/commands#connection)
        auth(password:string, callback?:ResCallbackT<any>): boolean;
        ping(callback?:ResCallbackT<number>): boolean;

        // Strings (http://redis.io/commands#strings)
        append(key:string, value:string, callback?:ResCallbackT<number>): boolean;
        bitcount(key:string, callback?:ResCallbackT<number>): boolean;
        bitcount(key:string, start:number, end:number, callback?:ResCallbackT<number>): boolean;
        set(key:string, value:string, callback?:ResCallbackT<string>): boolean;
        get(key:string, callback?:ResCallbackT<string>): boolean;
        exists(key:string, value:string, callback?:ResCallbackT<number>): boolean;

        publish(channel:string, value:any): boolean;
        subscribe(channel:string): boolean;

        /*
         commands = set_union([
         "get", "set", "setnx", "setex", "append", "strlen", "del", "exists", "setbit", "getbit", "setrange", "getrange", "substr",
         "incr", "decr", "mget", "rpush", "lpush", "rpushx", "lpushx", "linsert", "rpop", "lpop", "brpop", "brpoplpush", "blpop", "llen", "lindex",
         "lset", "lrange", "ltrim", "lrem", "rpoplpush", "sadd", "srem", "smove", "sismember", "scard", "spop", "srandmember", "sinter", "sinterstore",
         "sunion", "sunionstore", "sdiff", "sdiffstore", "smembers", "zadd", "zincrby", "zrem", "zremrangebyscore", "zremrangebyrank", "zunionstore",
         "zinterstore", "zrange", "zrangebyscore", "zrevrangebyscore", "zcount", "zrevrange", "zcard", "zscore", "zrank", "zrevrank", "hset", "hsetnx",
         "hget", "hmset", "hmget", "hincrby", "hdel", "hlen", "hkeys", "hvals", "hgetall", "hexists", "incrby", "decrby", "getset", "mset", "msetnx",
         "randomkey", "select", "move", "rename", "renamenx", "expire", "expireat", "keys", "dbsize", "auth", "ping", "echo", "save", "bgsave",
         "bgrewriteaof", "shutdown", "lastsave", "type", "multi", "exec", "discard", "sync", "flushdb", "flushall", "sort", "info", "monitor", "ttl",
         "persist", "slaveof", "debug", "config", "subscribe", "unsubscribe", "psubscribe", "punsubscribe", "publish", "watch", "unwatch", "cluster",
         "restore", "migrate", "dump", "object", "client", "eval", "evalsha"], require("./lib/commands"));
         */

        get(args:any[], callback?:ResCallbackT<string>): boolean;
        get(...args:any[]): boolean;
        set(args:any[], callback?:ResCallbackT<string>): boolean;
        set(...args:any[]): boolean;
        setnx(args:any[], callback?:ResCallbackT<any>): boolean;
        setnx(...args:any[]): boolean;
        setex(args:any[], callback?:ResCallbackT<any>): boolean;
        setex(...args:any[]): boolean;
        append(args:any[], callback?:ResCallbackT<any>): boolean;
        append(...args:any[]): boolean;
        strlen(args:any[], callback?:ResCallbackT<any>): boolean;
        strlen(...args:any[]): boolean;
        del(args:any[], callback?:ResCallbackT<any>): boolean;
        del(...args:any[]): boolean;
        exists(args:any[], callback?:ResCallbackT<any>): boolean;
        exists(...args:any[]): boolean;
        setbit(args:any[], callback?:ResCallbackT<any>): boolean;
        setbit(...args:any[]): boolean;
        getbit(args:any[], callback?:ResCallbackT<any>): boolean;
        getbit(...args:any[]): boolean;
        setrange(args:any[], callback?:ResCallbackT<any>): boolean;
        setrange(...args:any[]): boolean;
        getrange(args:any[], callback?:ResCallbackT<any>): boolean;
        getrange(...args:any[]): boolean;
        substr(args:any[], callback?:ResCallbackT<any>): boolean;
        substr(...args:any[]): boolean;
        incr(args:any[], callback?:ResCallbackT<any>): boolean;
        incr(...args:any[]): boolean;
        decr(args:any[], callback?:ResCallbackT<any>): boolean;
        decr(...args:any[]): boolean;
        mget(args:any[], callback?:ResCallbackT<any>): boolean;
        mget(...args:any[]): boolean;
        rpush(...args:any[]): boolean;
        lpush(args:any[], callback?:ResCallbackT<any>): boolean;
        lpush(...args:any[]): boolean;
        rpushx(args:any[], callback?:ResCallbackT<any>): boolean;
        rpushx(...args:any[]): boolean;
        lpushx(args:any[], callback?:ResCallbackT<any>): boolean;
        lpushx(...args:any[]): boolean;
        linsert(args:any[], callback?:ResCallbackT<any>): boolean;
        linsert(...args:any[]): boolean;
        rpop(args:any[], callback?:ResCallbackT<any>): boolean;
        rpop(...args:any[]): boolean;
        lpop(args:any[], callback?:ResCallbackT<any>): boolean;
        lpop(...args:any[]): boolean;
        brpop(args:any[], callback?:ResCallbackT<any>): boolean;
        brpop(...args:any[]): boolean;
        brpoplpush(args:any[], callback?:ResCallbackT<any>): boolean;
        brpoplpush(...args:any[]): boolean;
        blpop(args:any[], callback?:ResCallbackT<any>): boolean;
        blpop(...args:any[]): boolean;
        llen(args:any[], callback?:ResCallbackT<any>): boolean;
        llen(...args:any[]): boolean;
        lindex(args:any[], callback?:ResCallbackT<any>): boolean;
        lindex(...args:any[]): boolean;
        lset(args:any[], callback?:ResCallbackT<any>): boolean;
        lset(...args:any[]): boolean;
        lrange(args:any[], callback?:ResCallbackT<any>): boolean;
        lrange(...args:any[]): boolean;
        ltrim(args:any[], callback?:ResCallbackT<any>): boolean;
        ltrim(...args:any[]): boolean;
        lrem(args:any[], callback?:ResCallbackT<any>): boolean;
        lrem(...args:any[]): boolean;
        rpoplpush(args:any[], callback?:ResCallbackT<any>): boolean;
        rpoplpush(...args:any[]): boolean;
        sadd(args:any[], callback?:ResCallbackT<any>): boolean;
        sadd(...args:any[]): boolean;
        srem(args:any[], callback?:ResCallbackT<any>): boolean;
        srem(...args:any[]): boolean;
        smove(args:any[], callback?:ResCallbackT<any>): boolean;
        smove(...args:any[]): boolean;
        sismember(args:any[], callback?:ResCallbackT<any>): boolean;
        sismember(...args:any[]): boolean;
        scard(args:any[], callback?:ResCallbackT<any>): boolean;
        scard(...args:any[]): boolean;
        spop(args:any[], callback?:ResCallbackT<any>): boolean;
        spop(...args:any[]): boolean;
        srandmember(args:any[], callback?:ResCallbackT<any>): boolean;
        srandmember(...args:any[]): boolean;
        sinter(args:any[], callback?:ResCallbackT<any>): boolean;
        sinter(...args:any[]): boolean;
        sinterstore(args:any[], callback?:ResCallbackT<any>): boolean;
        sinterstore(...args:any[]): boolean;
        sunion(args:any[], callback?:ResCallbackT<any>): boolean;
        sunion(...args:any[]): boolean;
        sunionstore(args:any[], callback?:ResCallbackT<any>): boolean;
        sunionstore(...args:any[]): boolean;
        sdiff(args:any[], callback?:ResCallbackT<any>): boolean;
        sdiff(...args:any[]): boolean;
        sdiffstore(args:any[], callback?:ResCallbackT<any>): boolean;
        sdiffstore(...args:any[]): boolean;
        smembers(args:any[], callback?:ResCallbackT<any>): boolean;
        smembers(...args:any[]): boolean;
        zadd(args:any[], callback?:ResCallbackT<any>): boolean;
        zadd(...args:any[]): boolean;
        zincrby(args:any[], callback?:ResCallbackT<any>): boolean;
        zincrby(...args:any[]): boolean;
        zrem(args:any[], callback?:ResCallbackT<any>): boolean;
        zrem(...args:any[]): boolean;
        zremrangebyscore(args:any[], callback?:ResCallbackT<any>): boolean;
        zremrangebyscore(...args:any[]): boolean;
        zremrangebyrank(args:any[], callback?:ResCallbackT<any>): boolean;
        zremrangebyrank(...args:any[]): boolean;
        zunionstore(args:any[], callback?:ResCallbackT<any>): boolean;
        zunionstore(...args:any[]): boolean;
        zinterstore(args:any[], callback?:ResCallbackT<any>): boolean;
        zinterstore(...args:any[]): boolean;
        zrange(args:any[], callback?:ResCallbackT<any>): boolean;
        zrange(...args:any[]): boolean;
        zrangebyscore(args:any[], callback?:ResCallbackT<any>): boolean;
        zrangebyscore(...args:any[]): boolean;
        zrevrangebyscore(args:any[], callback?:ResCallbackT<any>): boolean;
        zrevrangebyscore(...args:any[]): boolean;
        zcount(args:any[], callback?:ResCallbackT<any>): boolean;
        zcount(...args:any[]): boolean;
        zrevrange(args:any[], callback?:ResCallbackT<any>): boolean;
        zrevrange(...args:any[]): boolean;
        zcard(args:any[], callback?:ResCallbackT<any>): boolean;
        zcard(...args:any[]): boolean;
        zscore(args:any[], callback?:ResCallbackT<any>): boolean;
        zscore(...args:any[]): boolean;
        zrank(args:any[], callback?:ResCallbackT<any>): boolean;
        zrank(...args:any[]): boolean;
        zrevrank(args:any[], callback?:ResCallbackT<any>): boolean;
        zrevrank(...args:any[]): boolean;
        hset(args:any[], callback?:ResCallbackT<any>): boolean;
        hset(...args:any[]): boolean;
        hsetnx(args:any[], callback?:ResCallbackT<any>): boolean;
        hsetnx(...args:any[]): boolean;
        hget(args:any[], callback?:ResCallbackT<any>): boolean;
        hget(...args:any[]): boolean;
        hmset(args:any[], callback?:ResCallbackT<any>): boolean;
        hmset(key:string, hash:any, callback?:ResCallbackT<any>): boolean;
        hmset(...args:any[]): boolean;
        hmget(args:any[], callback?:ResCallbackT<any>): boolean;
        hmget(...args:any[]): boolean;
        hincrby(args:any[], callback?:ResCallbackT<any>): boolean;
        hincrby(...args:any[]): boolean;
        hdel(args:any[], callback?:ResCallbackT<any>): boolean;
        hdel(...args:any[]): boolean;
        hlen(args:any[], callback?:ResCallbackT<any>): boolean;
        hlen(...args:any[]): boolean;
        hkeys(args:any[], callback?:ResCallbackT<any>): boolean;
        hkeys(...args:any[]): boolean;
        hvals(args:any[], callback?:ResCallbackT<any>): boolean;
        hvals(...args:any[]): boolean;
        hgetall(args:any[], callback?:ResCallbackT<any>): boolean;
        hgetall(...args:any[]): boolean;
        hgetall(key:string, callback?:ResCallbackT<any>): boolean;
        hexists(args:any[], callback?:ResCallbackT<any>): boolean;
        hexists(...args:any[]): boolean;
        incrby(args:any[], callback?:ResCallbackT<any>): boolean;
        incrby(...args:any[]): boolean;
        decrby(args:any[], callback?:ResCallbackT<any>): boolean;
        decrby(...args:any[]): boolean;
        getset(args:any[], callback?:ResCallbackT<any>): boolean;
        getset(...args:any[]): boolean;
        mset(args:any[], callback?:ResCallbackT<any>): boolean;
        mset(...args:any[]): boolean;
        msetnx(args:any[], callback?:ResCallbackT<any>): boolean;
        msetnx(...args:any[]): boolean;
        randomkey(args:any[], callback?:ResCallbackT<any>): boolean;
        randomkey(...args:any[]): boolean;
        select(args:any[], callback?:ResCallbackT<any>): void;
        select(...args:any[]): boolean;
        move(args:any[], callback?:ResCallbackT<any>): boolean;
        move(...args:any[]): boolean;
        rename(args:any[], callback?:ResCallbackT<any>): boolean;
        rename(...args:any[]): boolean;
        renamenx(args:any[], callback?:ResCallbackT<any>): boolean;
        renamenx(...args:any[]): boolean;
        expire(args:any[], callback?:ResCallbackT<any>): boolean;
        expire(...args:any[]): boolean;
        expireat(args:any[], callback?:ResCallbackT<any>): boolean;
        expireat(...args:any[]): boolean;
        keys(args:any[], callback?:ResCallbackT<any>): boolean;
        keys(...args:any[]): boolean;
        dbsize(args:any[], callback?:ResCallbackT<any>): boolean;
        dbsize(...args:any[]): boolean;
        auth(args:any[], callback?:ResCallbackT<any>): void;
        auth(...args:any[]): void;
        ping(args:any[], callback?:ResCallbackT<any>): boolean;
        ping(...args:any[]): boolean;
        echo(args:any[], callback?:ResCallbackT<any>): boolean;
        echo(...args:any[]): boolean;
        save(args:any[], callback?:ResCallbackT<any>): boolean;
        save(...args:any[]): boolean;
        bgsave(args:any[], callback?:ResCallbackT<any>): boolean;
        bgsave(...args:any[]): boolean;
        bgrewriteaof(args:any[], callback?:ResCallbackT<any>): boolean;
        bgrewriteaof(...args:any[]): boolean;
        shutdown(args:any[], callback?:ResCallbackT<any>): boolean;
        shutdown(...args:any[]): boolean;
        lastsave(args:any[], callback?:ResCallbackT<any>): boolean;
        lastsave(...args:any[]): boolean;
        type(args:any[], callback?:ResCallbackT<any>): boolean;
        type(...args:any[]): boolean;
        multi(args:any[], callback?:ResCallbackT<any>): boolean;
        multi(...args:any[]): boolean;
        exec(args:any[], callback?:ResCallbackT<any>): boolean;
        exec(...args:any[]): boolean;
        discard(args:any[], callback?:ResCallbackT<any>): boolean;
        discard(...args:any[]): boolean;
        sync(args:any[], callback?:ResCallbackT<any>): boolean;
        sync(...args:any[]): boolean;
        flushdb(args:any[], callback?:ResCallbackT<any>): boolean;
        flushdb(...args:any[]): boolean;
        flushall(args:any[], callback?:ResCallbackT<any>): boolean;
        flushall(...args:any[]): boolean;
        sort(args:any[], callback?:ResCallbackT<any>): boolean;
        sort(...args:any[]): boolean;
        info(args:any[], callback?:ResCallbackT<any>): boolean;
        info(...args:any[]): boolean;
        monitor(args:any[], callback?:ResCallbackT<any>): boolean;
        monitor(...args:any[]): boolean;
        ttl(args:any[], callback?:ResCallbackT<any>): boolean;
        ttl(...args:any[]): boolean;
        persist(args:any[], callback?:ResCallbackT<any>): boolean;
        persist(...args:any[]): boolean;
        slaveof(args:any[], callback?:ResCallbackT<any>): boolean;
        slaveof(...args:any[]): boolean;
        debug(args:any[], callback?:ResCallbackT<any>): boolean;
        debug(...args:any[]): boolean;
        config(args:any[], callback?:ResCallbackT<any>): boolean;
        config(...args:any[]): boolean;
        subscribe(args:any[], callback?:ResCallbackT<any>): boolean;
        subscribe(...args:any[]): boolean;
        unsubscribe(args:any[], callback?:ResCallbackT<any>): boolean;
        unsubscribe(...args:any[]): boolean;
        psubscribe(args:any[], callback?:ResCallbackT<any>): boolean;
        psubscribe(...args:any[]): boolean;
        punsubscribe(args:any[], callback?:ResCallbackT<any>): boolean;
        punsubscribe(...args:any[]): boolean;
        publish(args:any[], callback?:ResCallbackT<any>): boolean;
        publish(...args:any[]): boolean;
        watch(args:any[], callback?:ResCallbackT<any>): boolean;
        watch(...args:any[]): boolean;
        unwatch(args:any[], callback?:ResCallbackT<any>): boolean;
        unwatch(...args:any[]): boolean;
        cluster(args:any[], callback?:ResCallbackT<any>): boolean;
        cluster(...args:any[]): boolean;
        restore(args:any[], callback?:ResCallbackT<any>): boolean;
        restore(...args:any[]): boolean;
        migrate(args:any[], callback?:ResCallbackT<any>): boolean;
        migrate(...args:any[]): boolean;
        dump(args:any[], callback?:ResCallbackT<any>): boolean;
        dump(...args:any[]): boolean;
        object(args:any[], callback?:ResCallbackT<any>): boolean;
        object(...args:any[]): boolean;
        client(args:any[], callback?:ResCallbackT<any>): boolean;
        client(...args:any[]): boolean;
        eval(args:any[], callback?:ResCallbackT<any>): boolean;
        eval(...args:any[]): boolean;
        evalsha(args:any[], callback?:ResCallbackT<any>): boolean;
        evalsha(...args:any[]): boolean;
        quit(args:any[], callback?:ResCallbackT<any>): boolean;
        quit(...args:any[]): boolean;
    }
}
