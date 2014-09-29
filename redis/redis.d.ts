// Type definitions for redis
// Project: https://github.com/mranney/node_redis
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, Peter Harris <https://github.com/CodeAnimal>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/redis.d.ts

declare module "redis" {
  export function createClient(port_arg: number, host_arg?: string, options?: ClientOpts): RedisClient;
  export function createClient(unix_socket: string, options?: ClientOpts): RedisClient;
  export function createClient(options?: ClientOpts): RedisClient;
	export function print(err: Error, reply: any): void;
	export var debug_mode: boolean;

	interface MessageHandler {
		(channel: string, message: any): void;
	}

  interface CommandT<R> { //This is a placeholder to be used eventually, to not have to define each command twice, or four times if all caps versions are to be implemented.
    (args: any[], callback?: ResCallbackT<R>): void;
    (...args: any[]): void;
  }

  interface ResCallbackT<R> {
    (err: Error, res: R): void;
  }

	interface ServerInfo {
		redis_version: string;
		versions: number[];
	}

	interface ClientOpts {
		parser: string;
		return_buffers?: boolean;
		detect_buffers?: boolean;
		socket_nodelay?: boolean;
		no_ready_check?: boolean;
		enable_offline_queue?: boolean;
		retry_max_delay?: number;
		connect_timeout?: number;
		max_attempts?: number;
		auth_pass?: boolean;
	}

	interface RedisClient {
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
    auth(password: string, callback?: ResCallbackT<any>): void;
    ping(callback?: ResCallbackT<number>): void;

    // Strings (http://redis.io/commands#strings)
    append(key: string, value: string, callback?: ResCallbackT<number>): void;
    bitcount(key: string, callback?: ResCallbackT<number>): void;
    bitcount(key: string, start: number, end: number, callback?: ResCallbackT<number>): void;
    set(key: string, value: string, callback?: ResCallbackT<string>): void;
    get(key: string, callback?: ResCallbackT<string>): void;
    exists(key: string, value: string, callback?: ResCallbackT<number>): void;

    publish(channel: string, value: any): void;
    subscribe(channel: string): void;
    on(channel: string, handler: MessageHandler): void;

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

    get(args: any[], callback?: ResCallbackT<string>): void;
    get(...args: any[]): void;
    set(args: any[], callback?: ResCallbackT<string>): void;
    set(...args: any[]): void;
    setnx(args: any[], callback?: ResCallbackT<any>): void;
    setnx(...args: any[]): void;
    setex(args: any[], callback?: ResCallbackT<any>): void;
    setex(...args: any[]): void;
    append(args: any[], callback?: ResCallbackT<any>): void;
    append(...args: any[]): void;
    strlen(args: any[], callback?: ResCallbackT<any>): void;
    strlen(...args: any[]): void;
    del(args: any[], callback?: ResCallbackT<any>): void;
    del(...args: any[]): void;
    exists(args: any[], callback?: ResCallbackT<any>): void;
    exists(...args: any[]): void;
    setbit(args: any[], callback?: ResCallbackT<any>): void;
    setbit(...args: any[]): void;
    getbit(args: any[], callback?: ResCallbackT<any>): void;
    getbit(...args: any[]): void;
    setrange(args: any[], callback?: ResCallbackT<any>): void;
    setrange(...args: any[]): void;
    getrange(args: any[], callback?: ResCallbackT<any>): void;
    getrange(...args: any[]): void;
    substr(args: any[], callback?: ResCallbackT<any>): void;
    substr(...args: any[]): void;
    incr(args: any[], callback?: ResCallbackT<any>): void;
    incr(...args: any[]): void;
    decr(args: any[], callback?: ResCallbackT<any>): void;
    decr(...args: any[]): void;
    mget(args: any[], callback?: ResCallbackT<any>): void;
    mget(...args: any[]): void;
    rpush(...args: any[]): void;
    lpush(args: any[], callback?: ResCallbackT<any>): void;
    lpush(...args: any[]): void;
    rpushx(args: any[], callback?: ResCallbackT<any>): void;
    rpushx(...args: any[]): void;
    lpushx(args: any[], callback?: ResCallbackT<any>): void;
    lpushx(...args: any[]): void;
    linsert(args: any[], callback?: ResCallbackT<any>): void;
    linsert(...args: any[]): void;
    rpop(args: any[], callback?: ResCallbackT<any>): void;
    rpop(...args: any[]): void;
    lpop(args: any[], callback?: ResCallbackT<any>): void;
    lpop(...args: any[]): void;
    brpop(args: any[], callback?: ResCallbackT<any>): void;
    brpop(...args: any[]): void;
    brpoplpush(args: any[], callback?: ResCallbackT<any>): void;
    brpoplpush(...args: any[]): void;
    blpop(args: any[], callback?: ResCallbackT<any>): void;
    blpop(...args: any[]): void;
    llen(args: any[], callback?: ResCallbackT<any>): void;
    llen(...args: any[]): void;
    lindex(args: any[], callback?: ResCallbackT<any>): void;
    lindex(...args: any[]): void;
    lset(args: any[], callback?: ResCallbackT<any>): void;
    lset(...args: any[]): void;
    lrange(args: any[], callback?: ResCallbackT<any>): void;
    lrange(...args: any[]): void;
    ltrim(args: any[], callback?: ResCallbackT<any>): void;
    ltrim(...args: any[]): void;
    lrem(args: any[], callback?: ResCallbackT<any>): void;
    lrem(...args: any[]): void;
    rpoplpush(args: any[], callback?: ResCallbackT<any>): void;
    rpoplpush(...args: any[]): void;
    sadd(args: any[], callback?: ResCallbackT<any>): void;
    sadd(...args: any[]): void;
    srem(args: any[], callback?: ResCallbackT<any>): void;
    srem(...args: any[]): void;
    smove(args: any[], callback?: ResCallbackT<any>): void;
    smove(...args: any[]): void;
    sismember(args: any[], callback?: ResCallbackT<any>): void;
    sismember(...args: any[]): void;
    scard(args: any[], callback?: ResCallbackT<any>): void;
    scard(...args: any[]): void;
    spop(args: any[], callback?: ResCallbackT<any>): void;
    spop(...args: any[]): void;
    srandmember(args: any[], callback?: ResCallbackT<any>): void;
    srandmember(...args: any[]): void;
    sinter(args: any[], callback?: ResCallbackT<any>): void;
    sinter(...args: any[]): void;
    sinterstore(args: any[], callback?: ResCallbackT<any>): void;
    sinterstore(...args: any[]): void;
    sunion(args: any[], callback?: ResCallbackT<any>): void;
    sunion(...args: any[]): void;
    sunionstore(args: any[], callback?: ResCallbackT<any>): void;
    sunionstore(...args: any[]): void;
    sdiff(args: any[], callback?: ResCallbackT<any>): void;
    sdiff(...args: any[]): void;
    sdiffstore(args: any[], callback?: ResCallbackT<any>): void;
    sdiffstore(...args: any[]): void;
    smembers(args: any[], callback?: ResCallbackT<any>): void;
    smembers(...args: any[]): void;
    zadd(args: any[], callback?: ResCallbackT<any>): void;
    zadd(...args: any[]): void;
    zincrby(args: any[], callback?: ResCallbackT<any>): void;
    zincrby(...args: any[]): void;
    zrem(args: any[], callback?: ResCallbackT<any>): void;
    zrem(...args: any[]): void;
    zremrangebyscore(args: any[], callback?: ResCallbackT<any>): void;
    zremrangebyscore(...args: any[]): void;
    zremrangebyrank(args: any[], callback?: ResCallbackT<any>): void;
    zremrangebyrank(...args: any[]): void;
    zunionstore(args: any[], callback?: ResCallbackT<any>): void;
    zunionstore(...args: any[]): void;
    zinterstore(args: any[], callback?: ResCallbackT<any>): void;
    zinterstore(...args: any[]): void;
    zrange(args: any[], callback?: ResCallbackT<any>): void;
    zrange(...args: any[]): void;
    zrangebyscore(args: any[], callback?: ResCallbackT<any>): void;
    zrangebyscore(...args: any[]): void;
    zrevrangebyscore(args: any[], callback?: ResCallbackT<any>): void;
    zrevrangebyscore(...args: any[]): void;
    zcount(args: any[], callback?: ResCallbackT<any>): void;
    zcount(...args: any[]): void;
    zrevrange(args: any[], callback?: ResCallbackT<any>): void;
    zrevrange(...args: any[]): void;
    zcard(args: any[], callback?: ResCallbackT<any>): void;
    zcard(...args: any[]): void;
    zscore(args: any[], callback?: ResCallbackT<any>): void;
    zscore(...args: any[]): void;
    zrank(args: any[], callback?: ResCallbackT<any>): void;
    zrank(...args: any[]): void;
    zrevrank(args: any[], callback?: ResCallbackT<any>): void;
    zrevrank(...args: any[]): void;
    hset(args: any[], callback?: ResCallbackT<any>): void;
    hset(...args: any[]): void;
    hsetnx(args: any[], callback?: ResCallbackT<any>): void;
    hsetnx(...args: any[]): void;
    hget(args: any[], callback?: ResCallbackT<any>): void;
    hget(...args: any[]): void;
    hmset(args: any[], callback?: ResCallbackT<any>): void;
    hmset(key: string, hash: any, callback?: ResCallbackT<any>): void;
    hmset(...args: any[]): void;
    hmget(args: any[], callback?: ResCallbackT<any>): void;
    hmget(...args: any[]): void;
    hincrby(args: any[], callback?: ResCallbackT<any>): void;
    hincrby(...args: any[]): void;
    hdel(args: any[], callback?: ResCallbackT<any>): void;
    hdel(...args: any[]): void;
    hlen(args: any[], callback?: ResCallbackT<any>): void;
    hlen(...args: any[]): void;
    hkeys(args: any[], callback?: ResCallbackT<any>): void;
    hkeys(...args: any[]): void;
    hvals(args: any[], callback?: ResCallbackT<any>): void;
    hvals(...args: any[]): void;
    hgetall(args: any[], callback?: ResCallbackT<any>): void;
    hgetall(...args: any[]): void;
    hgetall(key: string, callback?: ResCallbackT<any>): void;
    hexists(args: any[], callback?: ResCallbackT<any>): void;
    hexists(...args: any[]): void;
    incrby(args: any[], callback?: ResCallbackT<any>): void;
    incrby(...args: any[]): void;
    decrby(args: any[], callback?: ResCallbackT<any>): void;
    decrby(...args: any[]): void;
    getset(args: any[], callback?: ResCallbackT<any>): void;
    getset(...args: any[]): void;
    mset(args: any[], callback?: ResCallbackT<any>): void;
    mset(...args: any[]): void;
    msetnx(args: any[], callback?: ResCallbackT<any>): void;
    msetnx(...args: any[]): void;
    randomkey(args: any[], callback?: ResCallbackT<any>): void;
    randomkey(...args: any[]): void;
    select(args: any[], callback?: ResCallbackT<any>): void;
    select(...args: any[]): void;
    move(args: any[], callback?: ResCallbackT<any>): void;
    move(...args: any[]): void;
    rename(args: any[], callback?: ResCallbackT<any>): void;
    rename(...args: any[]): void;
    renamenx(args: any[], callback?: ResCallbackT<any>): void;
    renamenx(...args: any[]): void;
    expire(args: any[], callback?: ResCallbackT<any>): void;
    expire(...args: any[]): void;
    expireat(args: any[], callback?: ResCallbackT<any>): void;
    expireat(...args: any[]): void;
    keys(args: any[], callback?: ResCallbackT<any>): void;
    keys(...args: any[]): void;
    dbsize(args: any[], callback?: ResCallbackT<any>): void;
    dbsize(...args: any[]): void;
    auth(args: any[], callback?: ResCallbackT<any>): void;
    auth(...args: any[]): void;
    ping(args: any[], callback?: ResCallbackT<any>): void;
    ping(...args: any[]): void;
    echo(args: any[], callback?: ResCallbackT<any>): void;
    echo(...args: any[]): void;
    save(args: any[], callback?: ResCallbackT<any>): void;
    save(...args: any[]): void;
    bgsave(args: any[], callback?: ResCallbackT<any>): void;
    bgsave(...args: any[]): void;
    bgrewriteaof(args: any[], callback?: ResCallbackT<any>): void;
    bgrewriteaof(...args: any[]): void;
    shutdown(args: any[], callback?: ResCallbackT<any>): void;
    shutdown(...args: any[]): void;
    lastsave(args: any[], callback?: ResCallbackT<any>): void;
    lastsave(...args: any[]): void;
    type(args: any[], callback?: ResCallbackT<any>): void;
    type(...args: any[]): void;
    multi(args: any[], callback?: ResCallbackT<any>): void;
    multi(...args: any[]): void;
    exec(args: any[], callback?: ResCallbackT<any>): void;
    exec(...args: any[]): void;
    discard(args: any[], callback?: ResCallbackT<any>): void;
    discard(...args: any[]): void;
    sync(args: any[], callback?: ResCallbackT<any>): void;
    sync(...args: any[]): void;
    flushdb(args: any[], callback?: ResCallbackT<any>): void;
    flushdb(...args: any[]): void;
    flushall(args: any[], callback?: ResCallbackT<any>): void;
    flushall(...args: any[]): void;
    sort(args: any[], callback?: ResCallbackT<any>): void;
    sort(...args: any[]): void;
    info(args: any[], callback?: ResCallbackT<any>): void;
    info(...args: any[]): void;
    monitor(args: any[], callback?: ResCallbackT<any>): void;
    monitor(...args: any[]): void;
    ttl(args: any[], callback?: ResCallbackT<any>): void;
    ttl(...args: any[]): void;
    persist(args: any[], callback?: ResCallbackT<any>): void;
    persist(...args: any[]): void;
    slaveof(args: any[], callback?: ResCallbackT<any>): void;
    slaveof(...args: any[]): void;
    debug(args: any[], callback?: ResCallbackT<any>): void;
    debug(...args: any[]): void;
    config(args: any[], callback?: ResCallbackT<any>): void;
    config(...args: any[]): void;
    subscribe(args: any[], callback?: ResCallbackT<any>): void;
    subscribe(...args: any[]): void;
    unsubscribe(args: any[], callback?: ResCallbackT<any>): void;
    unsubscribe(...args: any[]): void;
    psubscribe(args: any[], callback?: ResCallbackT<any>): void;
    psubscribe(...args: any[]): void;
    punsubscribe(args: any[], callback?: ResCallbackT<any>): void;
    punsubscribe(...args: any[]): void;
    publish(args: any[], callback?: ResCallbackT<any>): void;
    publish(...args: any[]): void;
    watch(args: any[], callback?: ResCallbackT<any>): void;
    watch(...args: any[]): void;
    unwatch(args: any[], callback?: ResCallbackT<any>): void;
    unwatch(...args: any[]): void;
    cluster(args: any[], callback?: ResCallbackT<any>): void;
    cluster(...args: any[]): void;
    restore(args: any[], callback?: ResCallbackT<any>): void;
    restore(...args: any[]): void;
    migrate(args: any[], callback?: ResCallbackT<any>): void;
    migrate(...args: any[]): void;
    dump(args: any[], callback?: ResCallbackT<any>): void;
    dump(...args: any[]): void;
    object(args: any[], callback?: ResCallbackT<any>): void;
    object(...args: any[]): void;
    client(args: any[], callback?: ResCallbackT<any>): void;
    client(...args: any[]): void;
    eval(args: any[], callback?: ResCallbackT<any>): void;
    eval(...args: any[]): void;
    evalsha(args: any[], callback?: ResCallbackT<any>): void;
    evalsha(...args: any[]): void;
    quit(args: any[], callback?: ResCallbackT<any>): void;
    quit(...args: any[]): void;
	}
}
