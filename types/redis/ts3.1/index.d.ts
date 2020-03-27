/// <reference types="node" />

import { EventEmitter } from 'events';
import { Duplex } from 'stream';

export interface RetryStrategyOptions {
    error: NodeJS.ErrnoException;
    total_retry_time: number;
    times_connected: number;
    attempt: number;
}

export type RetryStrategy = (options: RetryStrategyOptions) => number | Error;

export interface ClientOpts {
    host?: string;
    port?: number;
    path?: string;
    url?: string;
    parser?: string;
    string_numbers?: boolean;
    return_buffers?: boolean;
    detect_buffers?: boolean;
    socket_keepalive?: boolean;
    socket_initial_delay?: number;
    no_ready_check?: boolean;
    enable_offline_queue?: boolean;
    retry_max_delay?: number;
    connect_timeout?: number;
    max_attempts?: number;
    retry_unfulfilled_commands?: boolean;
    auth_pass?: string;
    password?: string;
    db?: string | number;
    family?: string;
    rename_commands?: { [command: string]: string } | null;
    tls?: any;
    prefix?: string;
    retry_strategy?: RetryStrategy;
}

export type Callback<T> = (err: Error | null, reply: T) => void;

export interface ServerInfo {
    redis_version: string;
    versions: number[];
}

export interface OverloadedCommand<T, U, R> {
    (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb?: Callback<U>): R;
    (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb?: Callback<U>): R;
    (arg1: T, arg2: T, arg3: T, arg4: T, cb?: Callback<U>): R;
    (arg1: T, arg2: T, arg3: T, cb?: Callback<U>): R;
    (arg1: T, arg2: T | T[], cb?: Callback<U>): R;
    (arg1: T | T[], cb?: Callback<U>): R;
    (...args: Array<T | Callback<U>>): R;
}

export interface OverloadedKeyCommand<T, U, R> {
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb?: Callback<U>): R;
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb?: Callback<U>): R;
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, cb?: Callback<U>): R;
    (key: string, arg1: T, arg2: T, arg3: T, cb?: Callback<U>): R;
    (key: string, arg1: T, arg2: T, cb?: Callback<U>): R;
    (key: string, arg1: T | T[], cb?: Callback<U>): R;
    (key: string, ...args: Array<T | Callback<U>>): R;
    (...args: Array<string | T | Callback<U>>): R;
}

export interface OverloadedListCommand<T, U, R> {
    (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb?: Callback<U>): R;
    (arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb?: Callback<U>): R;
    (arg1: T, arg2: T, arg3: T, arg4: T, cb?: Callback<U>): R;
    (arg1: T, arg2: T, arg3: T, cb?: Callback<U>): R;
    (arg1: T, arg2: T, cb?: Callback<U>): R;
    (arg1: T | T[], cb?: Callback<U>): R;
    (...args: Array<T | Callback<U>>): R;
}

export interface OverloadedSetCommand<T, U, R> {
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, arg6: T, cb?: Callback<U>): R;
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, arg5: T, cb?: Callback<U>): R;
    (key: string, arg1: T, arg2: T, arg3: T, arg4: T, cb?: Callback<U>): R;
    (key: string, arg1: T, arg2: T, arg3: T, cb?: Callback<U>): R;
    (key: string, arg1: T, arg2: T, cb?: Callback<U>): R;
    (key: string, arg1: T | { [key: string]: T } | T[], cb?: Callback<U>): R;
    (key: string, ...args: Array<T | Callback<U>>): R;
    (args: [string, ...T[]], cb?: Callback<U>): R;
}

export interface OverloadedLastCommand<T1, T2, U, R> {
    (arg1: T1, arg2: T1, arg3: T1, arg4: T1, arg5: T1, arg6: T2, cb?: Callback<U>): R;
    (arg1: T1, arg2: T1, arg3: T1, arg4: T1, arg5: T2, cb?: Callback<U>): R;
    (arg1: T1, arg2: T1, arg3: T1, arg4: T2, cb?: Callback<U>): R;
    (arg1: T1, arg2: T1, arg3: T2, cb?: Callback<U>): R;
    (arg1: T1, arg2: T2 | Array<T1 | T2>, cb?: Callback<U>): R;
    (args: Array<T1 | T2>, cb?: Callback<U>): R;
    (...args: Array<T1 | T2 | Callback<U>>): R;
}

export interface Commands<R> {
    /**
     * Listen for all requests received by the server in real time.
     */
    monitor(cb?: Callback<undefined>): R;
    MONITOR(cb?: Callback<undefined>): R;

    /**
     * Get information and statistics about the server.
     */
    info(cb?: Callback<ServerInfo>): R;
    info(section?: string | string[], cb?: Callback<ServerInfo>): R;
    INFO(cb?: Callback<ServerInfo>): R;
    INFO(section?: string | string[], cb?: Callback<ServerInfo>): R;

    /**
     * Ping the server.
     */
    ping(callback?: Callback<string>): R;
    ping(message: string, callback?: Callback<string>): R;
    PING(callback?: Callback<string>): R;
    PING(message: string, callback?: Callback<string>): R;

    /**
     * Post a message to a channel.
     */
    publish(channel: string, value: string, cb?: Callback<number>): R;
    PUBLISH(channel: string, value: string, cb?: Callback<number>): R;

    /**
     * Authenticate to the server.
     */
    auth(password: string, callback?: Callback<string>): R;
    AUTH(password: string, callback?: Callback<string>): R;

    /**
     * KILL - Kill the connection of a client.
     * LIST - Get the list of client connections.
     * GETNAME - Get the current connection name.
     * PAUSE - Stop processing commands from clients for some time.
     * REPLY - Instruct the server whether to reply to commands.
     * SETNAME - Set the current connection name.
     */
    client: OverloadedCommand<string, any, R>;
    CLIENT: OverloadedCommand<string, any, R>;

    /**
     * Set multiple hash fields to multiple values.
     */
    hmset: OverloadedSetCommand<string | number, 'OK', R>;
    HMSET: OverloadedSetCommand<string | number, 'OK', R>;

    /**
     * Listen for messages published to the given channels.
     */
    subscribe: OverloadedListCommand<string, string, R>;
    SUBSCRIBE: OverloadedListCommand<string, string, R>;

    /**
     * Stop listening for messages posted to the given channels.
     */
    unsubscribe: OverloadedListCommand<string, string, R>;
    UNSUBSCRIBE: OverloadedListCommand<string, string, R>;

    /**
     * Listen for messages published to channels matching the given patterns.
     */
    psubscribe: OverloadedListCommand<string, string, R>;
    PSUBSCRIBE: OverloadedListCommand<string, string, R>;

    /**
     * Stop listening for messages posted to channels matching the given patterns.
     */
    punsubscribe: OverloadedListCommand<string, string, R>;
    PUNSUBSCRIBE: OverloadedListCommand<string, string, R>;

    /**
     * Append a value to a key.
     */
    append(key: string, value: string, cb?: Callback<number>): R;
    APPEND(key: string, value: string, cb?: Callback<number>): R;

    /**
     * Asynchronously rewrite the append-only file.
     */
    bgrewriteaof(cb?: Callback<'OK'>): R;
    BGREWRITEAOF(cb?: Callback<'OK'>): R;

    /**
     * Asynchronously save the dataset to disk.
     */
    bgsave(cb?: Callback<string>): R;
    BGSAVE(cb?: Callback<string>): R;

    /**
     * Count set bits in a string.
     */
    bitcount(key: string, cb?: Callback<number>): R;
    bitcount(key: string, start: number, end: number, cb?: Callback<number>): R;
    BITCOUNT(key: string, cb?: Callback<number>): R;
    BITCOUNT(key: string, start: number, end: number, cb?: Callback<number>): R;

    /**
     * Perform arbitrary bitfield integer operations on strings.
     */
    bitfield: OverloadedKeyCommand<string | number, [number, number], R>;
    BITFIELD: OverloadedKeyCommand<string | number, [number, number], R>;

    /**
     * Perform bitwise operations between strings.
     */
    bitop(operation: string, destkey: string, key1: string, key2: string, key3: string, cb?: Callback<number>): R;
    bitop(operation: string, destkey: string, key1: string, key2: string, cb?: Callback<number>): R;
    bitop(operation: string, destkey: string, key: string, cb?: Callback<number>): R;
    bitop(operation: string, destkey: string, ...args: Array<string | Callback<number>>): R;
    BITOP(operation: string, destkey: string, key1: string, key2: string, key3: string, cb?: Callback<number>): R;
    BITOP(operation: string, destkey: string, key1: string, key2: string, cb?: Callback<number>): R;
    BITOP(operation: string, destkey: string, key: string, cb?: Callback<number>): R;
    BITOP(operation: string, destkey: string, ...args: Array<string | Callback<number>>): R;

    /**
     * Find first bit set or clear in a string.
     */
    bitpos(key: string, bit: number, start: number, end: number, cb?: Callback<number>): R;
    bitpos(key: string, bit: number, start: number, cb?: Callback<number>): R;
    bitpos(key: string, bit: number, cb?: Callback<number>): R;
    BITPOS(key: string, bit: number, start: number, end: number, cb?: Callback<number>): R;
    BITPOS(key: string, bit: number, start: number, cb?: Callback<number>): R;
    BITPOS(key: string, bit: number, cb?: Callback<number>): R;

    /**
     * Remove and get the first element in a list, or block until one is available.
     */
    blpop: OverloadedLastCommand<string, number, [string, string], R>;
    BLPOP: OverloadedLastCommand<string, number, [string, string], R>;

    /**
     * Remove and get the last element in a list, or block until one is available.
     */
    brpop: OverloadedLastCommand<string, number, [string, string], R>;
    BRPOP: OverloadedLastCommand<string, number, [string, string], R>;

    /**
     * Pop a value from a list, push it to another list and return it; or block until one is available.
     */
    brpoplpush(source: string, destination: string, timeout: number, cb?: Callback<string | null>): R;
    BRPOPLPUSH(source: string, destination: string, timeout: number, cb?: Callback<string | null>): R;

    /**
     * ADDSLOTS - Assign new hash slots to receiving node.
     * COUNT-FAILURE-REPORTS - Return the number of failure reports active for a given node.
     * COUNTKEYSINSLOT - Return the number of local keys in the specified hash slot.
     * DELSLOTS - Set hash slots as unbound in receiving node.
     * FAILOVER - Forces a slave to perform a manual failover of its master.
     * FORGET - Remove a node from the nodes table.
     * GETKEYSINSLOT - Return local key names in the specified hash slot.
     * INFO - Provides info about Redis Cluster node state.
     * KEYSLOT - Returns the hash slot of the specified key.
     * MEET - Force a node cluster to handshake with another node.
     * NODES - Get cluster config for the node.
     * REPLICATE - Reconfigure a node as a slave of the specified master node.
     * RESET - Reset a Redis Cluster node.
     * SAVECONFIG - Forces the node to save cluster state on disk.
     * SET-CONFIG-EPOCH - Set the configuration epoch in a new node.
     * SETSLOT - Bind a hash slot to a specified node.
     * SLAVES - List slave nodes of the specified master node.
     * SLOTS - Get array of Cluster slot to node mappings.
     */
    cluster: OverloadedCommand<string, any, this>;
    CLUSTER: OverloadedCommand<string, any, this>;

    /**
     * Get array of Redis command details.
     *
     * COUNT - Get total number of Redis commands.
     * GETKEYS - Extract keys given a full Redis command.
     * INFO - Get array of specific REdis command details.
     */
    command(cb?: Callback<Array<[string, number, string[], number, number, number]>>): R;
    COMMAND(cb?: Callback<Array<[string, number, string[], number, number, number]>>): R;

    /**
     * Get array of Redis command details.
     *
     * COUNT - Get array of Redis command details.
     * GETKEYS - Extract keys given a full Redis command.
     * INFO - Get array of specific Redis command details.
     * GET - Get the value of a configuration parameter.
     * REWRITE - Rewrite the configuration file with the in memory configuration.
     * SET - Set a configuration parameter to the given value.
     * RESETSTAT - Reset the stats returned by INFO.
     */
    config: OverloadedCommand<string, boolean, R>;
    CONFIG: OverloadedCommand<string, boolean, R>;

    /**
     * Return the number of keys in the selected database.
     */
    dbsize(cb?: Callback<number>): R;
    DBSIZE(cb?: Callback<number>): R;

    /**
     * OBJECT - Get debugging information about a key.
     * SEGFAULT - Make the server crash.
     */
    debug: OverloadedCommand<string, boolean, R>;
    DEBUG: OverloadedCommand<string, boolean, R>;

    /**
     * Decrement the integer value of a key by one.
     */
    decr(key: string, cb?: Callback<number>): R;
    DECR(key: string, cb?: Callback<number>): R;

    /**
     * Decrement the integer value of a key by the given number.
     */
    decrby(key: string, decrement: number, cb?: Callback<number>): R;
    DECRBY(key: string, decrement: number, cb?: Callback<number>): R;

    /**
     * Delete a key.
     */
    del: OverloadedCommand<string, number, R>;
    DEL: OverloadedCommand<string, number, R>;

    /**
     * Discard all commands issued after MULTI.
     */
    discard(cb?: Callback<'OK'>): R;
    DISCARD(cb?: Callback<'OK'>): R;

    /**
     * Return a serialized version of the value stored at the specified key.
     */
    dump(key: string, cb?: Callback<string>): R;
    DUMP(key: string, cb?: Callback<string>): R;

    /**
     * Echo the given string.
     */
    echo<T extends string>(message: T, cb?: Callback<T>): R;
    ECHO<T extends string>(message: T, cb?: Callback<T>): R;

    /**
     * Execute a Lua script server side.
     */
    eval: OverloadedCommand<string | number, any, R>;
    EVAL: OverloadedCommand<string | number, any, R>;

    /**
     * Execute a Lue script server side.
     */
    evalsha: OverloadedCommand<string | number, any, R>;
    EVALSHA: OverloadedCommand<string | number, any, R>;

    /**
     * Determine if a key exists.
     */
    exists: OverloadedCommand<string, number, R>;
    EXISTS: OverloadedCommand<string, number, R>;

    /**
     * Set a key's time to live in seconds.
     */
    expire(key: string, seconds: number, cb?: Callback<number>): R;
    EXPIRE(key: string, seconds: number, cb?: Callback<number>): R;

    /**
     * Set the expiration for a key as a UNIX timestamp.
     */
    expireat(key: string, timestamp: number, cb?: Callback<number>): R;
    EXPIREAT(key: string, timestamp: number, cb?: Callback<number>): R;

    /**
     * Remove all keys from all databases.
     */
    flushall(cb?: Callback<string>): R;
    flushall(async: "ASYNC", cb?: Callback<string>): R;
    FLUSHALL(cb?: Callback<string>): R;
    FLUSHALL(async: 'ASYNC', cb?: Callback<string>): R;

    /**
     * Remove all keys from the current database.
     */
    flushdb(cb?: Callback<'OK'>): R;
    flushdb(async: "ASYNC", cb?: Callback<string>): R;
    FLUSHDB(cb?: Callback<'OK'>): R;
    FLUSHDB(async: 'ASYNC', cb?: Callback<string>): R;

    /**
     * Add one or more geospatial items in the geospatial index represented using a sorted set.
     */
    geoadd: OverloadedKeyCommand<string | number, number, R>;
    GEOADD: OverloadedKeyCommand<string | number, number, R>;

    /**
     * Returns members of a geospatial index as standard geohash strings.
     */
    geohash: OverloadedKeyCommand<string, string, R>;
    GEOHASH: OverloadedKeyCommand<string, string, R>;

    /**
     * Returns longitude and latitude of members of a geospatial index.
     */
    geopos: OverloadedKeyCommand<string, Array<[number, number]>, R>;
    GEOPOS: OverloadedKeyCommand<string, Array<[number, number]>, R>;

    /**
     * Returns the distance between two members of a geospatial index.
     */
    geodist: OverloadedKeyCommand<string, string, R>;
    GEODIST: OverloadedKeyCommand<string, string, R>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point.
     */
    georadius: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>, R>;
    GEORADIUS: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>, R>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member.
     */
    georadiusbymember: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>, R>;
    GEORADIUSBYMEMBER: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>, R>;

    /**
     * Get the value of a key.
     */
    get(key: string, cb?: Callback<string>): R;
    GET(key: string, cb?: Callback<string>): R;

    /**
     * Returns the bit value at offset in the string value stored at key.
     */
    getbit(key: string, offset: number, cb?: Callback<number>): R;
    GETBIT(key: string, offset: number, cb?: Callback<number>): R;

    /**
     * Get a substring of the string stored at a key.
     */
    getrange(key: string, start: number, end: number, cb?: Callback<string>): R;
    GETRANGE(key: string, start: number, end: number, cb?: Callback<string>): R;

    /**
     * Set the string value of a key and return its old value.
     */
    getset(key: string, value: string, cb?: Callback<string>): R;
    GETSET(key: string, value: string, cb?: Callback<string>): R;

    /**
     * Delete on or more hash fields.
     */
    hdel: OverloadedKeyCommand<string, number, R>;
    HDEL: OverloadedKeyCommand<string, number, R>;

    /**
     * Determine if a hash field exists.
     */
    hexists(key: string, field: string, cb?: Callback<number>): R;
    HEXISTS(key: string, field: string, cb?: Callback<number>): R;

    /**
     * Get the value of a hash field.
     */
    hget(key: string, field: string, cb?: Callback<string>): R;
    HGET(key: string, field: string, cb?: Callback<string>): R;

    /**
     * Get all fields and values in a hash.
     */
    hgetall(key: string, cb?: Callback<{ [key: string]: string }>): R;
    HGETALL(key: string, cb?: Callback<{ [key: string]: string }>): R;

    /**
     * Increment the integer value of a hash field by the given number.
     */
    hincrby(key: string, field: string, increment: number, cb?: Callback<number>): R;
    HINCRBY(key: string, field: string, increment: number, cb?: Callback<number>): R;

    /**
     * Increment the float value of a hash field by the given amount.
     */
    hincrbyfloat(key: string, field: string, increment: number, cb?: Callback<string>): R;
    HINCRBYFLOAT(key: string, field: string, increment: number, cb?: Callback<string>): R;

    /**
     * Get all the fields of a hash.
     */
    hkeys(key: string, cb?: Callback<string[]>): R;
    HKEYS(key: string, cb?: Callback<string[]>): R;

    /**
     * Get the number of fields in a hash.
     */
    hlen(key: string, cb?: Callback<number>): R;
    HLEN(key: string, cb?: Callback<number>): R;

    /**
     * Get the values of all the given hash fields.
     */
    hmget: OverloadedKeyCommand<string, string[], R>;
    HMGET: OverloadedKeyCommand<string, string[], R>;

    /**
     * Set the string value of a hash field.
     */
    hset(key: string, field: string, value: string, cb?: Callback<number>): R;
    HSET(key: string, field: string, value: string, cb?: Callback<number>): R;

    /**
     * Set the value of a hash field, only if the field does not exist.
     */
    hsetnx(key: string, field: string, value: string, cb?: Callback<number>): R;
    HSETNX(key: string, field: string, value: string, cb?: Callback<number>): R;

    /**
     * Get the length of the value of a hash field.
     */
    hstrlen(key: string, field: string, cb?: Callback<number>): R;
    HSTRLEN(key: string, field: string, cb?: Callback<number>): R;

    /**
     * Get all the values of a hash.
     */
    hvals(key: string, cb?: Callback<string[]>): R;
    HVALS(key: string, cb?: Callback<string[]>): R;

    /**
     * Increment the integer value of a key by one.
     */
    incr(key: string, cb?: Callback<number>): R;
    INCR(key: string, cb?: Callback<number>): R;

    /**
     * Increment the integer value of a key by the given amount.
     */
    incrby(key: string, increment: number, cb?: Callback<number>): R;
    INCRBY(key: string, increment: number, cb?: Callback<number>): R;

    /**
     * Increment the float value of a key by the given amount.
     */
    incrbyfloat(key: string, increment: number, cb?: Callback<string>): R;
    INCRBYFLOAT(key: string, increment: number, cb?: Callback<string>): R;

    /**
     * Find all keys matching the given pattern.
     */
    keys(pattern: string, cb?: Callback<string[]>): R;
    KEYS(pattern: string, cb?: Callback<string[]>): R;

    /**
     * Get the UNIX time stamp of the last successful save to disk.
     */
    lastsave(cb?: Callback<number>): R;
    LASTSAVE(cb?: Callback<number>): R;

    /**
     * Get an element from a list by its index.
     */
    lindex(key: string, index: number, cb?: Callback<string>): R;
    LINDEX(key: string, index: number, cb?: Callback<string>): R;

    /**
     * Insert an element before or after another element in a list.
     */
    linsert(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string, cb?: Callback<string>): R;
    LINSERT(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string, cb?: Callback<string>): R;

    /**
     * Get the length of a list.
     */
    llen(key: string, cb?: Callback<number>): R;
    LLEN(key: string, cb?: Callback<number>): R;

    /**
     * Remove and get the first element in a list.
     */
    lpop(key: string, cb?: Callback<string>): R;
    LPOP(key: string, cb?: Callback<string>): R;

    /**
     * Prepend one or multiple values to a list.
     */
    lpush: OverloadedKeyCommand<string, number, R>;
    LPUSH: OverloadedKeyCommand<string, number, R>;

    /**
     * Prepend a value to a list, only if the list exists.
     */
    lpushx(key: string, value: string, cb?: Callback<number>): R;
    LPUSHX(key: string, value: string, cb?: Callback<number>): R;

    /**
     * Get a range of elements from a list.
     */
    lrange(key: string, start: number, stop: number, cb?: Callback<string[]>): R;
    LRANGE(key: string, start: number, stop: number, cb?: Callback<string[]>): R;

    /**
     * Remove elements from a list.
     */
    lrem(key: string, count: number, value: string, cb?: Callback<number>): R;
    LREM(key: string, count: number, value: string, cb?: Callback<number>): R;

    /**
     * Set the value of an element in a list by its index.
     */
    lset(key: string, index: number, value: string, cb?: Callback<'OK'>): R;
    LSET(key: string, index: number, value: string, cb?: Callback<'OK'>): R;

    /**
     * Trim a list to the specified range.
     */
    ltrim(key: string, start: number, stop: number, cb?: Callback<'OK'>): R;
    LTRIM(key: string, start: number, stop: number, cb?: Callback<'OK'>): R;

    /**
     * Get the values of all given keys.
     */
    mget: OverloadedCommand<string, string[], R>;
    MGET: OverloadedCommand<string, string[], R>;

    /**
     * Atomically tranfer a key from a Redis instance to another one.
     */
    migrate: OverloadedCommand<string, boolean, R>;
    MIGRATE: OverloadedCommand<string, boolean, R>;

    /**
     * Move a key to another database.
     */
    move(key: string, db: string | number): R;
    MOVE(key: string, db: string | number): R;

    /**
     * Set multiple keys to multiple values.
     */
    mset: OverloadedCommand<string, boolean, R>;
    MSET: OverloadedCommand<string, boolean, R>;

    /**
     * Set multiple keys to multiple values, only if none of the keys exist.
     */
    msetnx: OverloadedCommand<string, boolean, R>;
    MSETNX: OverloadedCommand<string, boolean, R>;

    /**
     * Inspect the internals of Redis objects.
     */
    object: OverloadedCommand<string, any, R>;
    OBJECT: OverloadedCommand<string, any, R>;

    /**
     * Remove the expiration from a key.
     */
    persist(key: string, cb?: Callback<number>): R;
    PERSIST(key: string, cb?: Callback<number>): R;

    /**
     * Remove a key's time to live in milliseconds.
     */
    pexpire(key: string, milliseconds: number, cb?: Callback<number>): R;
    PEXPIRE(key: string, milliseconds: number, cb?: Callback<number>): R;

    /**
     * Set the expiration for a key as a UNIX timestamp specified in milliseconds.
     */
    pexpireat(key: string, millisecondsTimestamp: number, cb?: Callback<number>): R;
    PEXPIREAT(key: string, millisecondsTimestamp: number, cb?: Callback<number>): R;

    /**
     * Adds the specified elements to the specified HyperLogLog.
     */
    pfadd: OverloadedKeyCommand<string, number, R>;
    PFADD: OverloadedKeyCommand<string, number, R>;

    /**
     * Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
     */
    pfcount: OverloadedCommand<string, number, R>;
    PFCOUNT: OverloadedCommand<string, number, R>;

    /**
     * Merge N different HyperLogLogs into a single one.
     */
    pfmerge: OverloadedCommand<string, boolean, R>;
    PFMERGE: OverloadedCommand<string, boolean, R>;

    /**
     * Set the value and expiration in milliseconds of a key.
     */
    psetex(key: string, milliseconds: number, value: string, cb?: Callback<'OK'>): R;
    PSETEX(key: string, milliseconds: number, value: string, cb?: Callback<'OK'>): R;

    /**
     * Inspect the state of the Pub/Sub subsytem.
     */
    pubsub: OverloadedCommand<string, number, R>;
    PUBSUB: OverloadedCommand<string, number, R>;

    /**
     * Get the time to live for a key in milliseconds.
     */
    pttl(key: string, cb?: Callback<number>): R;
    PTTL(key: string, cb?: Callback<number>): R;

    /**
     * Close the connection.
     */
    quit(cb?: Callback<'OK'>): R;
    QUIT(cb?: Callback<'OK'>): R;

    /**
     * Return a random key from the keyspace.
     */
    randomkey(cb?: Callback<string>): R;
    RANDOMKEY(cb?: Callback<string>): R;

    /**
     * Enables read queries for a connection to a cluster slave node.
     */
    readonly(cb?: Callback<string>): R;
    READONLY(cb?: Callback<string>): R;

    /**
     * Disables read queries for a connection to cluster slave node.
     */
    readwrite(cb?: Callback<string>): R;
    READWRITE(cb?: Callback<string>): R;

    /**
     * Rename a key.
     */
    rename(key: string, newkey: string, cb?: Callback<'OK'>): R;
    RENAME(key: string, newkey: string, cb?: Callback<'OK'>): R;

    /**
     * Rename a key, only if the new key does not exist.
     */
    renamenx(key: string, newkey: string, cb?: Callback<number>): R;
    RENAMENX(key: string, newkey: string, cb?: Callback<number>): R;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     */
    restore(key: string, ttl: number, serializedValue: string, cb?: Callback<'OK'>): R;
    RESTORE(key: string, ttl: number, serializedValue: string, cb?: Callback<'OK'>): R;

    /**
     * Return the role of the instance in the context of replication.
     */
    role(cb?: Callback<[string, number, Array<[string, string, string]>]>): R;
    ROLE(cb?: Callback<[string, number, Array<[string, string, string]>]>): R;

    /**
     * Remove and get the last element in a list.
     */
    rpop(key: string, cb?: Callback<string>): R;
    RPOP(key: string, cb?: Callback<string>): R;

    /**
     * Remove the last element in a list, prepend it to another list and return it.
     */
    rpoplpush(source: string, destination: string, cb?: Callback<string>): R;
    RPOPLPUSH(source: string, destination: string, cb?: Callback<string>): R;

    /**
     * Append one or multiple values to a list.
     */
    rpush: OverloadedKeyCommand<string, number, R>;
    RPUSH: OverloadedKeyCommand<string, number, R>;

    /**
     * Append a value to a list, only if the list exists.
     */
    rpushx(key: string, value: string, cb?: Callback<number>): R;
    RPUSHX(key: string, value: string, cb?: Callback<number>): R;

    /**
     * Append one or multiple members to a set.
     */
    sadd: OverloadedKeyCommand<string, number, R>;
    SADD: OverloadedKeyCommand<string, number, R>;

    /**
     * Synchronously save the dataset to disk.
     */
    save(cb?: Callback<string>): R;
    SAVE(cb?: Callback<string>): R;

    /**
     * Get the number of members in a set.
     */
    scard(key: string, cb?: Callback<number>): R;
    SCARD(key: string, cb?: Callback<number>): R;

    /**
     * DEBUG - Set the debug mode for executed scripts.
     * EXISTS - Check existence of scripts in the script cache.
     * FLUSH - Remove all scripts from the script cache.
     * KILL - Kill the script currently in execution.
     * LOAD - Load the specified Lua script into the script cache.
     */
    script: OverloadedCommand<string, any, R>;
    SCRIPT: OverloadedCommand<string, any, R>;

    /**
     * Subtract multiple sets.
     */
    sdiff: OverloadedCommand<string, string[], R>;
    SDIFF: OverloadedCommand<string, string[], R>;

    /**
     * Subtract multiple sets and store the resulting set in a key.
     */
    sdiffstore: OverloadedKeyCommand<string, number, R>;
    SDIFFSTORE: OverloadedKeyCommand<string, number, R>;

    /**
     * Change the selected database for the current connection.
     */
    select(index: number | string, cb?: Callback<string>): R;
    SELECT(index: number | string, cb?: Callback<string>): R;

    /**
     * Set the string value of a key.
     */
    set(key: string, value: string, cb?: Callback<'OK'>): R;
    set(key: string, value: string, flag: string, cb?: Callback<'OK'>): R;
    set(key: string, value: string, mode: string, duration: number, cb?: Callback<'OK' | undefined>): R;
    set(key: string, value: string, mode: string, duration: number, flag: string, cb?: Callback<'OK' | undefined>): R;
    SET(key: string, value: string, cb?: Callback<'OK'>): R;
    SET(key: string, value: string, flag: string, cb?: Callback<'OK'>): R;
    SET(key: string, value: string, mode: string, duration: number, cb?: Callback<'OK' | undefined>): R;
    SET(key: string, value: string, mode: string, duration: number, flag: string, cb?: Callback<'OK' | undefined>): R;

    /**
     * Sets or clears the bit at offset in the string value stored at key.
     */
    setbit(key: string, offset: number, value: string, cb?: Callback<number>): R;
    SETBIT(key: string, offset: number, value: string, cb?: Callback<number>): R;

    /**
     * Set the value and expiration of a key.
     */
    setex(key: string, seconds: number, value: string, cb?: Callback<string>): R;
    SETEX(key: string, seconds: number, value: string, cb?: Callback<string>): R;

    /**
     * Set the value of a key, only if the key does not exist.
     */
    setnx(key: string, value: string, cb?: Callback<number>): R;
    SETNX(key: string, value: string, cb?: Callback<number>): R;

    /**
     * Overwrite part of a string at key starting at the specified offset.
     */
    setrange(key: string, offset: number, value: string, cb?: Callback<number>): R;
    SETRANGE(key: string, offset: number, value: string, cb?: Callback<number>): R;

    /**
     * Synchronously save the dataset to disk and then shut down the server.
     */
    shutdown: OverloadedCommand<string, string, R>;
    SHUTDOWN: OverloadedCommand<string, string, R>;

    /**
     * Intersect multiple sets.
     */
    sinter: OverloadedKeyCommand<string, string[], R>;
    SINTER: OverloadedKeyCommand<string, string[], R>;

    /**
     * Intersect multiple sets and store the resulting set in a key.
     */
    sinterstore: OverloadedCommand<string, number, R>;
    SINTERSTORE: OverloadedCommand<string, number, R>;

    /**
     * Determine if a given value is a member of a set.
     */
    sismember(key: string, member: string, cb?: Callback<number>): R;
    SISMEMBER(key: string, member: string, cb?: Callback<number>): R;

    /**
     * Make the server a slave of another instance, or promote it as master.
     */
    slaveof(host: string, port: string | number, cb?: Callback<string>): R;
    SLAVEOF(host: string, port: string | number, cb?: Callback<string>): R;

    /**
     * Manages the Redis slow queries log.
     */
    slowlog: OverloadedCommand<string, Array<[number, number, number, string[]]>, R>;
    SLOWLOG: OverloadedCommand<string, Array<[number, number, number, string[]]>, R>;

    /**
     * Get all the members in a set.
     */
    smembers(key: string, cb?: Callback<string[]>): R;
    SMEMBERS(key: string, cb?: Callback<string[]>): R;

    /**
     * Move a member from one set to another.
     */
    smove(source: string, destination: string, member: string, cb?: Callback<number>): R;
    SMOVE(source: string, destination: string, member: string, cb?: Callback<number>): R;

    /**
     * Sort the elements in a list, set or sorted set.
     */
    sort: OverloadedCommand<string, string[], R>;
    SORT: OverloadedCommand<string, string[], R>;

    /**
     * Remove and return one or multiple random members from a set.
     */
    spop(key: string, cb?: Callback<string>): R;
    spop(key: string, count: number, cb?: Callback<string[]>): R;
    SPOP(key: string, cb?: Callback<string>): R;
    SPOP(key: string, count: number, cb?: Callback<string[]>): R;

    /**
     * Get one or multiple random members from a set.
     */
    srandmember(key: string, cb?: Callback<string>): R;
    srandmember(key: string, count: number, cb?: Callback<string[]>): R;
    SRANDMEMBER(key: string, cb?: Callback<string>): R;
    SRANDMEMBER(key: string, count: number, cb?: Callback<string[]>): R;

    /**
     * Remove one or more members from a set.
     */
    srem: OverloadedKeyCommand<string, number, R>;
    SREM: OverloadedKeyCommand<string, number, R>;

    /**
     * Get the length of the value stored in a key.
     */
    strlen(key: string, cb?: Callback<number>): R;
    STRLEN(key: string, cb?: Callback<number>): R;

    /**
     * Add multiple sets.
     */
    sunion: OverloadedCommand<string, string[], R>;
    SUNION: OverloadedCommand<string, string[], R>;

    /**
     * Add multiple sets and store the resulting set in a key.
     */
    sunionstore: OverloadedCommand<string, number, R>;
    SUNIONSTORE: OverloadedCommand<string, number, R>;

    /**
     * Internal command used for replication.
     */
    sync(cb?: Callback<undefined>): R;
    SYNC(cb?: Callback<undefined>): R;

    /**
     * Return the current server time.
     */
    time(cb?: Callback<[string, string]>): R;
    TIME(cb?: Callback<[string, string]>): R;

    /**
     * Get the time to live for a key.
     */
    ttl(key: string, cb?: Callback<number>): R;
    TTL(key: string, cb?: Callback<number>): R;

    /**
     * Determine the type stored at key.
     */
    type(key: string, cb?: Callback<string>): R;
    TYPE(key: string, cb?: Callback<string>): R;

    /**
     * Forget about all watched keys.
     */
    unwatch(cb?: Callback<'OK'>): R;
    UNWATCH(cb?: Callback<'OK'>): R;

    /**
     * Wait for the synchronous replication of all the write commands sent in the context of the current connection.
     */
    wait(numslaves: number, timeout: number, cb?: Callback<number>): R;
    WAIT(numslaves: number, timeout: number, cb?: Callback<number>): R;

    /**
     * Watch the given keys to determine execution of the MULTI/EXEC block.
     */
    watch: OverloadedCommand<string, 'OK', R>;
    WATCH: OverloadedCommand<string, 'OK', R>;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists.
     */
    zadd: OverloadedKeyCommand<string | number, number, R>;
    ZADD: OverloadedKeyCommand<string | number, number, R>;

    /**
     * Get the number of members in a sorted set.
     */
    zcard(key: string, cb?: Callback<number>): R;
    ZCARD(key: string, cb?: Callback<number>): R;

    /**
     * Count the members in a sorted set with scores between the given values.
     */
    zcount(key: string, min: number | string, max: number | string, cb?: Callback<number>): R;
    ZCOUNT(key: string, min: number | string, max: number | string, cb?: Callback<number>): R;

    /**
     * Increment the score of a member in a sorted set.
     */
    zincrby(key: string, increment: number, member: string, cb?: Callback<string>): R;
    ZINCRBY(key: string, increment: number, member: string, cb?: Callback<string>): R;

    /**
     * Intersect multiple sorted sets and store the resulting sorted set in a new key.
     */
    zinterstore: OverloadedCommand<string | number, number, R>;
    ZINTERSTORE: OverloadedCommand<string | number, number, R>;

    /**
     * Count the number of members in a sorted set between a given lexicographic range.
     */
    zlexcount(key: string, min: string, max: string, cb?: Callback<number>): R;
    ZLEXCOUNT(key: string, min: string, max: string, cb?: Callback<number>): R;

    /**
     * Return a range of members in a sorted set, by index.
     */
    zrange(key: string, start: number, stop: number, cb?: Callback<string[]>): R;
    zrange(key: string, start: number, stop: number, withscores: string, cb?: Callback<string[]>): R;
    ZRANGE(key: string, start: number, stop: number, cb?: Callback<string[]>): R;
    ZRANGE(key: string, start: number, stop: number, withscores: string, cb?: Callback<string[]>): R;

    /**
     * Return a range of members in a sorted set, by lexicographical range.
     */
    zrangebylex(key: string, min: string, max: string, cb?: Callback<string[]>): R;
    zrangebylex(key: string, min: string, max: string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;
    ZRANGEBYLEX(key: string, min: string, max: string, cb?: Callback<string[]>): R;
    ZRANGEBYLEX(key: string, min: string, max: string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;

    /**
     * Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
     */
    zrevrangebylex(key: string, min: string, max: string, cb?: Callback<string[]>): R;
    zrevrangebylex(key: string, min: string, max: string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;
    ZREVRANGEBYLEX(key: string, min: string, max: string, cb?: Callback<string[]>): R;
    ZREVRANGEBYLEX(key: string, min: string, max: string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;

    /**
     * Return a range of members in a sorted set, by score.
     */
    zrangebyscore(key: string, min: number | string, max: number | string, cb?: Callback<string[]>): R;
    zrangebyscore(key: string, min: number | string, max: number | string, withscores: string, cb?: Callback<string[]>): R;
    zrangebyscore(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;
    zrangebyscore(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;
    ZRANGEBYSCORE(key: string, min: number | string, max: number | string, cb?: Callback<string[]>): R;
    ZRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, cb?: Callback<string[]>): R;
    ZRANGEBYSCORE(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;
    ZRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;

    /**
     * Determine the index of a member in a sorted set.
     */
    zrank(key: string, member: string, cb?: Callback<number | null>): R;
    ZRANK(key: string, member: string, cb?: Callback<number | null>): R;

    /**
     * Remove one or more members from a sorted set.
     */
    zrem: OverloadedKeyCommand<string, number, R>;
    ZREM: OverloadedKeyCommand<string, number, R>;

    /**
     * Remove all members in a sorted set between the given lexicographical range.
     */
    zremrangebylex(key: string, min: string, max: string, cb?: Callback<number>): R;
    ZREMRANGEBYLEX(key: string, min: string, max: string, cb?: Callback<number>): R;

    /**
     * Remove all members in a sorted set within the given indexes.
     */
    zremrangebyrank(key: string, start: number, stop: number, cb?: Callback<number>): R;
    ZREMRANGEBYRANK(key: string, start: number, stop: number, cb?: Callback<number>): R;

    /**
     * Remove all members in a sorted set within the given indexes.
     */
    zremrangebyscore(key: string, min: string | number, max: string | number, cb?: Callback<number>): R;
    ZREMRANGEBYSCORE(key: string, min: string | number, max: string | number, cb?: Callback<number>): R;

    /**
     * Return a range of members in a sorted set, by index, with scores ordered from high to low.
     */
    zrevrange(key: string, start: number, stop: number, cb?: Callback<string[]>): R;
    zrevrange(key: string, start: number, stop: number, withscores: string, cb?: Callback<string[]>): R;
    ZREVRANGE(key: string, start: number, stop: number, cb?: Callback<string[]>): R;
    ZREVRANGE(key: string, start: number, stop: number, withscores: string, cb?: Callback<string[]>): R;

    /**
     * Return a range of members in a sorted set, by score, with scores ordered from high to low.
     */
    zrevrangebyscore(key: string, min: number | string, max: number | string, cb?: Callback<string[]>): R;
    zrevrangebyscore(key: string, min: number | string, max: number | string, withscores: string, cb?: Callback<string[]>): R;
    zrevrangebyscore(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;
    zrevrangebyscore(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;
    ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, cb?: Callback<string[]>): R;
    ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, cb?: Callback<string[]>): R;
    ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;
    ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores: string, limit: string, offset: number, count: number, cb?: Callback<string[]>): R;

    /**
     * Determine the index of a member in a sorted set, with scores ordered from high to low.
     */
    zrevrank(key: string, member: string, cb?: Callback<number | null>): R;
    ZREVRANK(key: string, member: string, cb?: Callback<number | null>): R;

    /**
     * Get the score associated with the given member in a sorted set.
     */
    zscore(key: string, member: string, cb?: Callback<string>): R;
    ZSCORE(key: string, member: string, cb?: Callback<string>): R;

    /**
     * Add multiple sorted sets and store the resulting sorted set in a new key.
     */
    zunionstore: OverloadedCommand<string | number, number, R>;
    ZUNIONSTORE: OverloadedCommand<string | number, number, R>;

    /**
     * Incrementally iterate the keys space.
     */
    scan: OverloadedCommand<string, [string, string[]], R>;
    SCAN: OverloadedCommand<string, [string, string[]], R>;

    /**
     * Incrementally iterate Set elements.
     */
    sscan: OverloadedKeyCommand<string, [string, string[]], R>;
    SSCAN: OverloadedKeyCommand<string, [string, string[]], R>;

    /**
     * Incrementally iterate hash fields and associated values.
     */
    hscan: OverloadedKeyCommand<string, [string, string[]], R>;
    HSCAN: OverloadedKeyCommand<string, [string, string[]], R>;

    /**
     * Incrementally iterate sorted sets elements and associated scores.
     */
    zscan: OverloadedKeyCommand<string, [string, string[]], R>;
    ZSCAN: OverloadedKeyCommand<string, [string, string[]], R>;
}

export const RedisClient: new (options: ClientOpts) => RedisClient;

export interface RedisClient extends Commands<boolean>, EventEmitter {
    connected: boolean;
    command_queue_length: number;
    offline_queue_length: number;
    retry_delay: number;
    retry_backoff: number;
    command_queue: any[];
    offline_queue: any[];
    connection_id: number;
    server_info: ServerInfo;
    stream: Duplex;

    on(event: 'message' | 'message_buffer', listener: (channel: string, message: string) => void): this;
    on(event: 'pmessage' | 'pmessage_buffer', listener: (pattern: string, channel: string, message: string) => void): this;
    on(event: 'subscribe' | 'unsubscribe', listener: (channel: string, count: number) => void): this;
    on(event: 'psubscribe' | 'punsubscribe', listener: (pattern: string, count: number) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;

    /**
     * Client methods.
     */

    end(flush?: boolean): void;
    unref(): void;

    cork(): void;
    uncork(): void;

    duplicate(options?: ClientOpts, cb?: Callback<RedisClient>): RedisClient;

    sendCommand(command: string, cb?: Callback<any>): boolean;
    sendCommand(command: string, args?: any[], cb?: Callback<any>): boolean;
    send_command(command: string, cb?: Callback<any>): boolean;
    send_command(command: string, args?: any[], cb?: Callback<any>): boolean;

    addCommand(command: string): void;
    add_command(command: string): void;

    /**
     * Mark the start of a transaction block.
     */
    multi(args?: Array<Array<string | number | Callback<any>>>): Multi;
    MULTI(args?: Array<Array<string | number | Callback<any>>>): Multi;

    batch(args?: Array<Array<string | number | Callback<any>>>): Multi;
    BATCH(args?: Array<Array<string | number | Callback<any>>>): Multi;
}

export const Multi: new () => Multi;

export interface Multi extends Commands<Multi> {
    exec(cb?: Callback<any[]>): boolean;
    EXEC(cb?: Callback<any[]>): boolean;

    exec_atomic(cb?: Callback<any[]>): boolean;
    EXEC_ATOMIC(cb?: Callback<any[]>): boolean;
}

export let debug_mode: boolean;

export function createClient(port: number, host?: string, options?: ClientOpts): RedisClient;
export function createClient(unix_socket: string, options?: ClientOpts): RedisClient;
export function createClient(redis_url: string, options?: ClientOpts): RedisClient;
export function createClient(options?: ClientOpts): RedisClient;

export function print(err: Error | null, reply: any): void;

export class RedisError extends Error { }
export class ReplyError extends RedisError { }
export class AbortError extends RedisError { }
export class ParserError extends RedisError {
    offset: number;
    buffer: Buffer;
}
export class AggregateError extends AbortError { }
