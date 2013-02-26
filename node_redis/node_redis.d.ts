// Type definitions for node_redis 0.8
// Project: https://github.com/mranney/node_redis
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module 'redis' {
    export var debug_mode: bool;
    export function createClient(): RedisClient;
    export function createClient(port: number, host: string, options?: RedisOptions): RedisClient;
    export function print(err: string, reply?: string);

    interface RedisOptions {
        parser?: string;
        return_buffers?: bool;
        detect_buffers?: bool;
        socket_nodelay?: bool;
        no_ready_check?: bool;
        enable_offline_queue?: bool;
    }

    interface Command {
        (...args: any[]): Commands;
    }
    
    interface Commands {

        get: Command;
        set: Command;
        setnx: Command;
        setex: Command;
        append: Command;
        strlen: Command;
        del: Command;
        exists: Command;
        setbit: Command;
        getbit: Command;
        setrange: Command;
        getrange: Command;
        substr: Command;
        incr: Command;
        decr: Command;
        mget: Command;

        rpush: Command;
        lpush: Command;
        rpushx: Command;
        lpushx: Command;
        linsert: Command;
        rpop: Command;
        lpop: Command;
        brpop: Command;
        brpoplpush: Command;
        blpop: Command;
        llen: Command;
        lindex: Command;
        lset: Command;
        lrange: Command;
        ltrim: Command;
        lrem: Command;
        rpoplpush: Command;

        sadd: Command;
        srem: Command;
        smove: Command;
        sismember: Command;
        scard: Command;
        spop: Command;
        srandmember: Command;
        sinter: Command;
        sinterstore: Command;
        sunion: Command;
        sunionstore: Command;
        sdiff: Command;
        sdiffstore: Command;
        smembers: Command;

        zadd: Command;
        zincrby: Command;
        zrem: Command;
        zremrangebyscore: Command;
        zremrangebyrank: Command;
        zunionstore: Command;
        zinterstore: Command;
        zrange: Command;
        zrangebyscore: Command;
        zrevrangebyscore: Command;
        zcount: Command;
        zrevrange: Command;
        zcard: Command;
        zscore: Command;
        zrank: Command;
        zrevrank: Command;

        hset: Command;
        hsetnx: Command;
        hget: Command;
        hmset: Command;
        hmget: Command;
        hincrby: Command;
        hdel: Command;
        hlen: Command;
        hkeys: Command;
        hvals: Command;
        hgetall: Command;
        hexists: Command;
        
        incrby: Command;
        decrby: Command;
        getset: Command;
        mset: Command;
        msetnx: Command;
        randomkey: Command;
        select: Command;
        move: Command;
        rename: Command;
        renamenx: Command;
        expire: Command;
        expireat: Command;
        keys: Command;
        dbsize: Command;
        auth: Command;
        ping: Command;
        echo: Command;
        save: Command;
        bgsave: Command;
        bgrewriteaof: Command;
        shutdown: Command;
        lastsave: Command;
        type: Command;
        multi: Command;
        exec: Command;
        discard: Command;
        sync: Command;
        flushdb: Command;
        flushall: Command;
        sort: Command;
        info: Command;
        monitor: Command;
        ttl: Command;
        persist: Command;
        slaveof: Command;
        debug: Command;
        config: Command;
        subscribe: Command;
        unsubscribe: Command;
        psubscribe: Command;
        punsubscribe: Command;
        publish: Command;
        watch: Command;
        unwatch: Command;
        cluster: Command;
        restore: Command;
        migrate: Command;
        dump: Command;
        object: Command;
        client: Command;
        eval: Command;
        evalsha: Command;

        quit: Command;

        /////////////////

        GET: Command;
        SET: Command;
        SETNX: Command;
        SETEX: Command;
        APPEND: Command;
        STRLEN: Command;
        DEL: Command;
        EXISTS: Command;
        SETBIT: Command;
        GETBIT: Command;
        SETRANGE: Command;
        GETRANGE: Command;
        SUBSTR: Command;
        INCR: Command;
        DECR: Command;
        MGET: Command;

        RPUSH: Command;
        LPUSH: Command;
        RPUSHX: Command;
        LPUSHX: Command;
        LINSERT: Command;
        RPOP: Command;
        LPOP: Command;
        BRPOP: Command;
        BRPOPLPUSH: Command;
        BLPOP: Command;
        LLEN: Command;
        LINDEX: Command;
        LSET: Command;
        LRANGE: Command;
        LTRIM: Command;
        LREM: Command;
        RPOPLPUSH: Command;

        SADD: Command;
        SREM: Command;
        SMOVE: Command;
        SISMEMBER: Command;
        SCARD: Command;
        SPOP: Command;
        SRANDMEMBER: Command;
        SINTER: Command;
        SINTERSTORE: Command;
        SUNION: Command;
        SUNIONSTORE: Command;
        SDIFF: Command;
        SDIFFSTORE: Command;
        SMEMBERS: Command;

        ZADD: Command;
        ZINCRBY: Command;
        ZREM: Command;
        ZREMRANGEBYSCORE: Command;
        ZREMRANGEBYRANK: Command;
        ZUNIONSTORE: Command;
        ZINTERSTORE: Command;
        ZRANGE: Command;
        ZRANGEBYSCORE: Command;
        ZREVRANGEBYSCORE: Command;
        ZCOUNT: Command;
        ZREVRANGE: Command;
        ZCARD: Command;
        ZSCORE: Command;
        ZRANK: Command;
        ZREVRANK: Command;

        HSET: Command;
        HSETNX: Command;
        HGET: Command;
        HMSET: Command;
        HMGET: Command;
        HINCRBY: Command;
        HDEL: Command;
        HLEN: Command;
        HKEYS: Command;
        HVALS: Command;
        HGETALL: Command;
        HEXISTS: Command;
        
        INCRBY: Command;
        DECRBY: Command;
        GETSET: Command;
        MSET: Command;
        MSETNX: Command;
        RANDOMKEY: Command;
        SELECT: Command;
        MOVE: Command;
        RENAME: Command;
        RENAMENX: Command;
        EXPIRE: Command;
        EXPIREAT: Command;
        KEYS: Command;
        DBSIZE: Command;
        AUTH: Command;
        PING: Command;
        ECHO: Command;
        SAVE: Command;
        BGSAVE: Command;
        BGREWRITEAOF: Command;
        SHUTDOWN: Command;
        LASTSAVE: Command;
        TYPE: Command;
        MULTI: Command;
        EXEC: Command;
        DISCARD: Command;
        SYNC: Command;
        FLUSHDB: Command;
        FLUSHALL: Command;
        SORT: Command;
        INFO: Command;
        MONITOR: Command;
        TTL: Command;
        PERSIST: Command;
        SLAVEOF: Command;
        DEBUG: Command;
        CONFIG: Command;
        SUBSCRIBE: Command;
        UNSUBSCRIBE: Command;
        PSUBSCRIBE: Command;
        PUNSUBSCRIBE: Command;
        PUBLISH: Command;
        WATCH: Command;
        UNWATCH: Command;
        CLUSTER: Command;
        RESTORE: Command;
        MIGRATE: Command;
        DUMP: Command;
        OBJECT: Command;
        CLIENT: Command;
        EVAL: Command;
        EVALSHA: Command;

        QUIT: Command;
    }

    interface Multi extends Commands {
    }

    interface RedisClient extends Commands {

        initialize_retry_vars(): void;
        flush_and_error(message: string): void;
        on_error(message: string): void;
        do_auth(): void;
        on_connect(): void;
        init_parser(): void;
        on_ready(): void;
        on_info_cmd(err, res): void;
        ready_check(): void;
        send_offline_queue(): void;
        connection_gone(why: string): void;
        on_data(data): void;
        return_error(err): void;
        return_reply(reply): void;
        send_command(command: string, args: any[], callback?: Function);
        send_command(command: string, ...args: any[]);
        pub_sub_command(command: { command: string; args: any[]; });

        port: number;
        host: string;
        reply_parser;
        stream;

        server_info;
        connected: bool;
        command_queue: any[];
        offline_queue: any[];
        retry_delay : number;
        retry_backoff: number;

        auth(password: string, callback: Function): void;
        AUTH(password: string, callback: Function): void;

        end(): RedisClient;

        on(eventName: string, callback: Function): void; 
        once(eventName: string, callback: Function): void;
        removeListener(eventName: string, callback: Function): void;

        multi(commands?: any[]): Multi;
        MULTI(): Multi;
    }
}