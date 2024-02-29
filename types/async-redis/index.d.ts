import { ClientOpts, RedisClient, ServerInfo } from "redis";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Omitted = Omit<RedisClient, keyof Commands>;

interface OverloadedCommand<T, U> {
    (...args: T[]): Promise<U>;
}

interface OverloadedKeyCommand<T, U> {
    (...args: Array<string | T>): Promise<U>;
}

interface OverloadedListCommand<T, U> {
    (...args: T[]): Promise<U>;
}

interface OverloadedSetCommand<T, U> {
    (args: [string, ...T[]]): Promise<U>;
}

interface OverloadedLastCommand<T1, T2, U> {
    (...args: Array<T1 | T2>): Promise<U>;
}

interface Commands {
    monitor(): Promise<undefined>;
    MONITOR(): Promise<undefined>;

    /**
     * Get information and statistics about the server.
     */
    info(section?: string | string[]): Promise<ServerInfo>;
    INFO(section?: string | string[]): Promise<ServerInfo>;

    /**
     * Ping the server.
     */
    ping(message?: string): Promise<string>;
    PING(message?: string): Promise<string>;

    /**
     * Post a message to a channel.
     */
    publish(channel: string, value: string): Promise<number>;
    PUBLISH(channel: string, value: string): Promise<number>;

    /**
     * Authenticate to the server.
     */
    auth(password: string): Promise<string>;
    AUTH(password: string): Promise<string>;

    /**
     * KILL - Kill the connection of a client.
     * LIST - Get the list of client connections.
     * GETNAME - Get the current connection name.
     * PAUSE - Stop processing commands from clients for some time.
     * REPLY - Instruct the server whether to reply to commands.
     * SETNAME - Set the current connection name.
     */
    client: OverloadedCommand<string, any>;
    CLIENT: OverloadedCommand<string, any>;

    /**
     * Set multiple hash fields to multiple values.
     */
    hmset: OverloadedSetCommand<string | number, "OK">;
    HMSET: OverloadedSetCommand<string | number, "OK">;

    /**
     * Listen for messages published to the given channels.
     */
    subscribe: OverloadedListCommand<string, string>;
    SUBSCRIBE: OverloadedListCommand<string, string>;

    /**
     * Stop listening for messages posted to the given channels.
     */
    unsubscribe: OverloadedListCommand<string, string>;
    UNSUBSCRIBE: OverloadedListCommand<string, string>;

    /**
     * Listen for messages published to channels matching the given patterns.
     */
    psubscribe: OverloadedListCommand<string, string>;
    PSUBSCRIBE: OverloadedListCommand<string, string>;

    /**
     * Stop listening for messages posted to channels matching the given patterns.
     */
    punsubscribe: OverloadedListCommand<string, string>;
    PUNSUBSCRIBE: OverloadedListCommand<string, string>;

    /**
     * Append a value to a key.
     */
    append(key: string, value: string): Promise<number>;
    APPEND(key: string, value: string): Promise<number>;

    /**
     * Asynchronously rewrite the append-only file.
     */
    bgrewriteaof(): Promise<"OK">;
    BGREWRITEAOF(): Promise<"OK">;

    /**
     * Asynchronously save the dataset to disk.
     */
    bgsave(): Promise<string>;
    BGSAVE(): Promise<string>;

    /**
     * Count set bits in a string.
     */
    bitcount(key: string): Promise<number>;
    bitcount(key: string, start: number, end: number): Promise<number>;
    BITCOUNT(key: string): Promise<number>;
    BITCOUNT(key: string, start: number, end: number): Promise<number>;

    /**
     * Perform arbitrary bitfield integer operations on strings.
     */
    bitfield: OverloadedKeyCommand<string | number, [number, number]>;
    BITFIELD: OverloadedKeyCommand<string | number, [number, number]>;

    /**
     * Perform bitwise operations between strings.
     */
    bitop(operation: string, destkey: string, ...args: string[]): Promise<number>;
    BITOP(operation: string, destkey: string, ...args: string[]): Promise<number>;

    /**
     * Find first bit set or clear in a string.
     */
    bitpos(key: string, bit: number, start?: number, end?: number): Promise<number>;
    BITPOS(key: string, bit: number, start?: number, end?: number): Promise<number>;

    /**
     * Remove and get the first element in a list, or block until one is available.
     */
    blpop: OverloadedLastCommand<string, number, [string, string]>;
    BLPOP: OverloadedLastCommand<string, number, [string, string]>;

    /**
     * Remove and get the last element in a list, or block until one is available.
     */
    brpop: OverloadedLastCommand<string, number, [string, string]>;
    BRPOP: OverloadedLastCommand<string, number, [string, string]>;

    /**
     * Pop a value from a list, push it to another list and return it; or block until one is available.
     */
    brpoplpush(source: string, destination: string, timeout: number): Promise<string | null>;
    BRPOPLPUSH(source: string, destination: string, timeout: number): Promise<string | null>;

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
    cluster: OverloadedCommand<string, any>;
    CLUSTER: OverloadedCommand<string, any>;

    /**
     * Get array of Redis command details.
     *
     * COUNT - Get total number of Redis commands.
     * GETKEYS - Extract keys given a full Redis command.
     * INFO - Get array of specific REdis command details.
     */
    command(): Array<[string, number, string[], number, number, number]>;
    COMMAND(): Array<[string, number, string[], number, number, number]>;

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
    config: OverloadedCommand<string, boolean>;
    CONFIG: OverloadedCommand<string, boolean>;

    /**
     * Return the number of keys in the selected database.
     */
    dbsize(): Promise<number>;
    DBSIZE(): Promise<number>;

    /**
     * OBJECT - Get debugging information about a key.
     * SEGFAULT - Make the server crash.
     */
    debug: OverloadedCommand<string, boolean>;
    DEBUG: OverloadedCommand<string, boolean>;

    /**
     * Decrement the integer value of a key by one.
     */
    decr(key: string): Promise<number>;
    DECR(key: string): Promise<number>;

    /**
     * Decrement the integer value of a key by the given number.
     */
    decrby(key: string, decrement: number): Promise<number>;
    DECRBY(key: string, decrement: number): Promise<number>;

    /**
     * Delete a key.
     */
    del: OverloadedCommand<string, number>;
    DEL: OverloadedCommand<string, number>;

    /**
     * Discard all commands issued after MULTI.
     */
    discard(): Promise<"OK">;
    DISCARD(): Promise<"OK">;

    /**
     * Return a serialized version of the value stored at the specified key.
     */
    dump(key: string): Promise<string>;
    DUMP(key: string): Promise<string>;

    /**
     * Echo the given string.
     */
    echo<T extends string>(message: T): Promise<T>;
    ECHO<T extends string>(message: T): Promise<T>;

    /**
     * Execute a Lua script server side.
     */
    eval: OverloadedCommand<string | number, any>;
    EVAL: OverloadedCommand<string | number, any>;

    /**
     * Execute a Lue script server side.
     */
    evalsha: OverloadedCommand<string | number, any>;
    EVALSHA: OverloadedCommand<string | number, any>;

    /**
     * Determine if a key exists.
     */
    exists: OverloadedCommand<string, number>;
    EXISTS: OverloadedCommand<string, number>;

    /**
     * Set a key's time to live in seconds.
     */
    expire(key: string, seconds: number): Promise<number>;
    EXPIRE(key: string, seconds: number): Promise<number>;

    /**
     * Set the expiration for a key as a UNIX timestamp.
     */
    expireat(key: string, timestamp: number): Promise<number>;
    EXPIREAT(key: string, timestamp: number): Promise<number>;

    /**
     * Remove all keys from all databases.
     */
    flushall(async?: "ASYNC"): Promise<string>;
    FLUSHALL(async?: "ASYNC"): Promise<string>;

    /**
     * Remove all keys from the current database.
     */
    flushdb(): Promise<"OK">;
    flushdb(async: "ASYNC"): Promise<string>;
    FLUSHDB(): Promise<"OK">;
    FLUSHDB(async: "ASYNC"): Promise<string>;

    /**
     * Add one or more geospatial items in the geospatial index represented using a sorted set.
     */
    geoadd: OverloadedKeyCommand<string | number, number>;
    GEOADD: OverloadedKeyCommand<string | number, number>;

    /**
     * Returns members of a geospatial index as standard geohash strings.
     */
    geohash: OverloadedKeyCommand<string, string>;
    GEOHASH: OverloadedKeyCommand<string, string>;

    /**
     * Returns longitude and latitude of members of a geospatial index.
     */
    geopos: OverloadedKeyCommand<string, Array<[number, number]>>;
    GEOPOS: OverloadedKeyCommand<string, Array<[number, number]>>;

    /**
     * Returns the distance between two members of a geospatial index.
     */
    geodist: OverloadedKeyCommand<string, string>;
    GEODIST: OverloadedKeyCommand<string, string>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a point.
     */
    georadius: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>>;
    GEORADIUS: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>>;

    /**
     * Query a sorted set representing a geospatial index to fetch members matching a given maximum distance from a member.
     */
    georadiusbymember: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>>;
    GEORADIUSBYMEMBER: OverloadedKeyCommand<string | number, Array<string | [string, string | [string, string]]>>;

    /**
     * Get the value of a key.
     */
    get(key: string): Promise<string | null>;
    GET(key: string): Promise<string | null>;

    /**
     * Returns the bit value at offset in the string value stored at key.
     */
    getbit(key: string, offset: number): Promise<number>;
    GETBIT(key: string, offset: number): Promise<number>;

    /**
     * Get a substring of the string stored at a key.
     */
    getrange(key: string, start: number, end: number): Promise<string>;
    GETRANGE(key: string, start: number, end: number): Promise<string>;

    /**
     * Set the string value of a key and return its old value.
     */
    getset(key: string, value: string): Promise<string>;
    GETSET(key: string, value: string): Promise<string>;

    /**
     * Delete on or more hash fields.
     */
    hdel: OverloadedKeyCommand<string, number>;
    HDEL: OverloadedKeyCommand<string, number>;

    /**
     * Determine if a hash field exists.
     */
    hexists(key: string, field: string): Promise<number>;
    HEXISTS(key: string, field: string): Promise<number>;

    /**
     * Get the value of a hash field.
     */
    hget(key: string, field: string): Promise<string>;
    HGET(key: string, field: string): Promise<string>;

    /**
     * Get all fields and values in a hash.
     */
    hgetall(key: string): Promise<{ [key: string]: string }>;
    HGETALL(key: string): Promise<{ [key: string]: string }>;

    /**
     * Increment the integer value of a hash field by the given number.
     */
    hincrby(key: string, field: string, increment: number): Promise<number>;
    HINCRBY(key: string, field: string, increment: number): Promise<number>;

    /**
     * Increment the float value of a hash field by the given amount.
     */
    hincrbyfloat(key: string, field: string, increment: number): Promise<string>;
    HINCRBYFLOAT(key: string, field: string, increment: number): Promise<string>;

    /**
     * Get all the fields of a hash.
     */
    hkeys(key: string): Promise<string[]>;
    HKEYS(key: string): Promise<string[]>;

    /**
     * Get the number of fields in a hash.
     */
    hlen(key: string): Promise<number>;
    HLEN(key: string): Promise<number>;

    /**
     * Get the values of all the given hash fields.
     */
    hmget: OverloadedKeyCommand<string, string[]>;
    HMGET: OverloadedKeyCommand<string, string[]>;

    /**
     * Set the string value of a hash field.
     */
    hset: OverloadedSetCommand<string, number>;
    HSET: OverloadedSetCommand<string, number>;

    /**
     * Set the value of a hash field, only if the field does not exist.
     */
    hsetnx(key: string, field: string, value: string): Promise<number>;
    HSETNX(key: string, field: string, value: string): Promise<number>;

    /**
     * Get the length of the value of a hash field.
     */
    hstrlen(key: string, field: string): Promise<number>;
    HSTRLEN(key: string, field: string): Promise<number>;

    /**
     * Get all the values of a hash.
     */
    hvals(key: string): Promise<string[]>;
    HVALS(key: string): Promise<string[]>;

    /**
     * Increment the integer value of a key by one.
     */
    incr(key: string): Promise<number>;
    INCR(key: string): Promise<number>;

    /**
     * Increment the integer value of a key by the given amount.
     */
    incrby(key: string, increment: number): Promise<number>;
    INCRBY(key: string, increment: number): Promise<number>;

    /**
     * Increment the float value of a key by the given amount.
     */
    incrbyfloat(key: string, increment: number): Promise<string>;
    INCRBYFLOAT(key: string, increment: number): Promise<string>;

    /**
     * Find all keys matching the given pattern.
     */
    keys(pattern: string): Promise<string[]>;
    KEYS(pattern: string): Promise<string[]>;

    /**
     * Get the UNIX time stamp of the last successful save to disk.
     */
    lastsave(): Promise<number>;
    LASTSAVE(): Promise<number>;

    /**
     * Get an element from a list by its index.
     */
    lindex(key: string, index: number): Promise<string>;
    LINDEX(key: string, index: number): Promise<string>;

    /**
     * Insert an element before or after another element in a list.
     */
    linsert(key: string, dir: "BEFORE" | "AFTER", pivot: string, value: string): Promise<string>;
    LINSERT(key: string, dir: "BEFORE" | "AFTER", pivot: string, value: string): Promise<string>;

    /**
     * Get the length of a list.
     */
    llen(key: string): Promise<number>;
    LLEN(key: string): Promise<number>;

    /**
     * Remove and get the first element in a list.
     */
    lpop(key: string): Promise<string>;
    LPOP(key: string): Promise<string>;

    /**
     * Prepend one or multiple values to a list.
     */
    lpush: OverloadedKeyCommand<string, number>;
    LPUSH: OverloadedKeyCommand<string, number>;

    /**
     * Prepend a value to a list, only if the list exists.
     */
    lpushx(key: string, value: string): Promise<number>;
    LPUSHX(key: string, value: string): Promise<number>;

    /**
     * Get a range of elements from a list.
     */
    lrange(key: string, start: number, stop: number): Promise<string[]>;
    LRANGE(key: string, start: number, stop: number): Promise<string[]>;

    /**
     * Remove elements from a list.
     */
    lrem(key: string, count: number, value: string): Promise<number>;
    LREM(key: string, count: number, value: string): Promise<number>;

    /**
     * Set the value of an element in a list by its index.
     */
    lset(key: string, index: number, value: string): Promise<"OK">;
    LSET(key: string, index: number, value: string): Promise<"OK">;

    /**
     * Trim a list to the specified range.
     */
    ltrim(key: string, start: number, stop: number): Promise<"OK">;
    LTRIM(key: string, start: number, stop: number): Promise<"OK">;

    /**
     * Get the values of all given keys.
     */
    mget: OverloadedCommand<string, string[]>;
    MGET: OverloadedCommand<string, string[]>;

    /**
     * Atomically tranfer a key from a Redis instance to another one.
     */
    migrate: OverloadedCommand<string, boolean>;
    MIGRATE: OverloadedCommand<string, boolean>;

    /**
     * Move a key to another database.
     */
    move(key: string, db: string | number): Promise<void>;
    MOVE(key: string, db: string | number): Promise<void>;

    /**
     * Set multiple keys to multiple values.
     */
    mset: OverloadedCommand<string, boolean>;
    MSET: OverloadedCommand<string, boolean>;

    /**
     * Set multiple keys to multiple values, only if none of the keys exist.
     */
    msetnx: OverloadedCommand<string, boolean>;
    MSETNX: OverloadedCommand<string, boolean>;

    /**
     * Inspect the internals of Redis objects.
     */
    object: OverloadedCommand<string, any>;
    OBJECT: OverloadedCommand<string, any>;

    /**
     * Remove the expiration from a key.
     */
    persist(key: string): Promise<number>;
    PERSIST(key: string): Promise<number>;

    /**
     * Remove a key's time to live in milliseconds.
     */
    pexpire(key: string, milliseconds: number): Promise<number>;
    PEXPIRE(key: string, milliseconds: number): Promise<number>;

    /**
     * Set the expiration for a key as a UNIX timestamp specified in milliseconds.
     */
    pexpireat(key: string, millisecondsTimestamp: number): Promise<number>;
    PEXPIREAT(key: string, millisecondsTimestamp: number): Promise<number>;

    /**
     * Adds the specified elements to the specified HyperLogLog.
     */
    pfadd: OverloadedKeyCommand<string, number>;
    PFADD: OverloadedKeyCommand<string, number>;

    /**
     * Return the approximated cardinality of the set(s) observed by the HyperLogLog at key(s).
     */
    pfcount: OverloadedCommand<string, number>;
    PFCOUNT: OverloadedCommand<string, number>;

    /**
     * Merge N different HyperLogLogs into a single one.
     */
    pfmerge: OverloadedCommand<string, boolean>;
    PFMERGE: OverloadedCommand<string, boolean>;

    /**
     * Set the value and expiration in milliseconds of a key.
     */
    psetex(key: string, milliseconds: number, value: string): Promise<"OK">;
    PSETEX(key: string, milliseconds: number, value: string): Promise<"OK">;

    /**
     * Inspect the state of the Pub/Sub subsytem.
     */
    pubsub: OverloadedCommand<string, number>;
    PUBSUB: OverloadedCommand<string, number>;

    /**
     * Get the time to live for a key in milliseconds.
     */
    pttl(key: string): Promise<number>;
    PTTL(key: string): Promise<number>;

    /**
     * Close the connection.
     */
    quit(): Promise<"OK">;
    QUIT(): Promise<"OK">;

    /**
     * Return a random key from the keyspace.
     */
    randomkey(): Promise<string>;
    RANDOMKEY(): Promise<string>;

    /**
     * Enables read queries for a connection to a cluster slave node.
     */
    readonly(): Promise<string>;
    READONLY(): Promise<string>;

    /**
     * Disables read queries for a connection to cluster slave node.
     */
    readwrite(): Promise<string>;
    READWRITE(): Promise<string>;

    /**
     * Rename a key.
     */
    rename(key: string, newkey: string): Promise<"OK">;
    RENAME(key: string, newkey: string): Promise<"OK">;

    /**
     * Rename a key, only if the new key does not exist.
     */
    renamenx(key: string, newkey: string): Promise<number>;
    RENAMENX(key: string, newkey: string): Promise<number>;

    /**
     * Create a key using the provided serialized value, previously obtained using DUMP.
     */
    restore(key: string, ttl: number, serializedValue: string): Promise<"OK">;
    RESTORE(key: string, ttl: number, serializedValue: string): Promise<"OK">;

    /**
     * Return the role of the instance in the context of replication.
     */
    role(): Promise<[string, number, Array<[string, string, string]>]>;
    ROLE(): Promise<[string, number, Array<[string, string, string]>]>;

    /**
     * Remove and get the last element in a list.
     */
    rpop(key: string): Promise<string>;
    RPOP(key: string): Promise<string>;

    /**
     * Remove the last element in a list, prepend it to another list and return it.
     */
    rpoplpush(source: string, destination: string): Promise<string>;
    RPOPLPUSH(source: string, destination: string): Promise<string>;

    /**
     * Append one or multiple values to a list.
     */
    rpush: OverloadedKeyCommand<string, number>;
    RPUSH: OverloadedKeyCommand<string, number>;

    /**
     * Append a value to a list, only if the list exists.
     */
    rpushx(key: string, value: string): Promise<number>;
    RPUSHX(key: string, value: string): Promise<number>;

    /**
     * Append one or multiple members to a set.
     */
    sadd: OverloadedKeyCommand<string, number>;
    SADD: OverloadedKeyCommand<string, number>;

    /**
     * Synchronously save the dataset to disk.
     */
    save(): Promise<string>;
    SAVE(): Promise<string>;

    /**
     * Get the number of members in a set.
     */
    scard(key: string): Promise<number>;
    SCARD(key: string): Promise<number>;

    /**
     * DEBUG - Set the debug mode for executed scripts.
     * EXISTS - Check existence of scripts in the script cache.
     * FLUSH - Remove all scripts from the script cache.
     * KILL - Kill the script currently in execution.
     * LOAD - Load the specified Lua script into the script cache.
     */
    script: OverloadedCommand<string, any>;
    SCRIPT: OverloadedCommand<string, any>;

    /**
     * Subtract multiple sets.
     */
    sdiff: OverloadedCommand<string, string[]>;
    SDIFF: OverloadedCommand<string, string[]>;

    /**
     * Subtract multiple sets and store the resulting set in a key.
     */
    sdiffstore: OverloadedKeyCommand<string, number>;
    SDIFFSTORE: OverloadedKeyCommand<string, number>;

    /**
     * Change the selected database for the current connection.
     */
    select(index: number | string): Promise<string>;
    SELECT(index: number | string): Promise<string>;

    /**
     * Set the string value of a key.
     */
    set(key: string, value: string, flag?: string): Promise<"OK">;
    set(key: string, value: string, mode: string, duration: number, flag?: string): Promise<"OK" | undefined>;
    set(key: string, value: string, flag: string, mode: string, duration: number): Promise<"OK" | undefined>;
    SET(key: string, value: string, flag?: string): Promise<"OK">;
    SET(key: string, value: string, mode: string, duration: number, flag?: string): Promise<"OK" | undefined>;
    SET(key: string, value: string, flag: string, mode: string, duration: number): Promise<"OK" | undefined>;

    /**
     * Sets or clears the bit at offset in the string value stored at key.
     */
    setbit(key: string, offset: number, value: string): Promise<number>;
    SETBIT(key: string, offset: number, value: string): Promise<number>;

    /**
     * Set the value and expiration of a key.
     */
    setex(key: string, seconds: number, value: string): Promise<string>;
    SETEX(key: string, seconds: number, value: string): Promise<string>;

    /**
     * Set the value of a key, only if the key does not exist.
     */
    setnx(key: string, value: string): Promise<number>;
    SETNX(key: string, value: string): Promise<number>;

    /**
     * Overwrite part of a string at key starting at the specified offset.
     */
    setrange(key: string, offset: number, value: string): Promise<number>;
    SETRANGE(key: string, offset: number, value: string): Promise<number>;

    /**
     * Synchronously save the dataset to disk and then shut down the server.
     */
    shutdown: OverloadedCommand<string, string>;
    SHUTDOWN: OverloadedCommand<string, string>;

    /**
     * Intersect multiple sets.
     */
    sinter: OverloadedKeyCommand<string, string[]>;
    SINTER: OverloadedKeyCommand<string, string[]>;

    /**
     * Intersect multiple sets and store the resulting set in a key.
     */
    sinterstore: OverloadedCommand<string, number>;
    SINTERSTORE: OverloadedCommand<string, number>;

    /**
     * Determine if a given value is a member of a set.
     */
    sismember(key: string, member: string): Promise<number>;
    SISMEMBER(key: string, member: string): Promise<number>;

    /**
     * Make the server a slave of another instance, or promote it as master.
     */
    slaveof(host: string, port: string | number): Promise<string>;
    SLAVEOF(host: string, port: string | number): Promise<string>;

    /**
     * Manages the Redis slow queries log.
     */
    slowlog: OverloadedCommand<string, Array<[number, number, number, string[]]>>;
    SLOWLOG: OverloadedCommand<string, Array<[number, number, number, string[]]>>;

    /**
     * Get all the members in a set.
     */
    smembers(key: string): Promise<string[]>;
    SMEMBERS(key: string): Promise<string[]>;

    /**
     * Move a member from one set to another.
     */
    smove(source: string, destination: string, member: string): Promise<number>;
    SMOVE(source: string, destination: string, member: string): Promise<number>;

    /**
     * Sort the elements in a list, set or sorted set.
     */
    sort: OverloadedCommand<string, string[]>;
    SORT: OverloadedCommand<string, string[]>;

    /**
     * Remove and return one or multiple random members from a set.
     */
    spop(key: string): Promise<string>;
    spop(key: string, count: number): Promise<string[]>;
    SPOP(key: string): Promise<string>;
    SPOP(key: string, count: number): Promise<string[]>;

    /**
     * Get one or multiple random members from a set.
     */
    srandmember(key: string): Promise<string>;
    srandmember(key: string, count: number): Promise<string[]>;
    SRANDMEMBER(key: string): Promise<string>;
    SRANDMEMBER(key: string, count: number): Promise<string[]>;

    /**
     * Remove one or more members from a set.
     */
    srem: OverloadedKeyCommand<string, number>;
    SREM: OverloadedKeyCommand<string, number>;

    /**
     * Get the length of the value stored in a key.
     */
    strlen(key: string): Promise<number>;
    STRLEN(key: string): Promise<number>;

    /**
     * Add multiple sets.
     */
    sunion: OverloadedCommand<string, string[]>;
    SUNION: OverloadedCommand<string, string[]>;

    /**
     * Add multiple sets and store the resulting set in a key.
     */
    sunionstore: OverloadedCommand<string, number>;
    SUNIONSTORE: OverloadedCommand<string, number>;

    /**
     * Internal command used for replication.
     */
    sync(): Promise<undefined>;
    SYNC(): Promise<undefined>;

    /**
     * Return the current server time.
     */
    time(): Promise<[string, string]>;
    TIME(): Promise<[string, string]>;

    /**
     * Get the time to live for a key.
     */
    ttl(key: string): Promise<number>;
    TTL(key: string): Promise<number>;

    /**
     * Determine the type stored at key.
     */
    type(key: string): Promise<string>;
    TYPE(key: string): Promise<string>;

    /**
     * Deletes a key in a non-blocking manner.
     * Very similar to DEL, but actual memory reclamation
     * happens in a different thread, making this non-blocking.
     */
    unlink: OverloadedCommand<string, number>;
    UNLINK: OverloadedCommand<string, number>;

    /**
     * Forget about all watched keys.
     */
    unwatch(): Promise<"OK">;
    UNWATCH(): Promise<"OK">;

    /**
     * Wait for the synchronous replication of all the write commands sent in the context of the current connection.
     */
    wait(numslaves: number, timeout: number): Promise<number>;
    WAIT(numslaves: number, timeout: number): Promise<number>;

    /**
     * Watch the given keys to determine execution of the MULTI/EXEC block.
     */
    watch: OverloadedCommand<string, "OK">;
    WATCH: OverloadedCommand<string, "OK">;

    /**
     * Add one or more members to a sorted set, or update its score if it already exists.
     */
    zadd: OverloadedKeyCommand<string | number, number>;
    ZADD: OverloadedKeyCommand<string | number, number>;

    /**
     * Get the number of members in a sorted set.
     */
    zcard(key: string): Promise<number>;
    ZCARD(key: string): Promise<number>;

    /**
     * Count the members in a sorted set with scores between the given values.
     */
    zcount(key: string, min: number | string, max: number | string): Promise<number>;
    ZCOUNT(key: string, min: number | string, max: number | string): Promise<number>;

    /**
     * Increment the score of a member in a sorted set.
     */
    zincrby(key: string, increment: number, member: string): Promise<string>;
    ZINCRBY(key: string, increment: number, member: string): Promise<string>;

    /**
     * Intersect multiple sorted sets and store the resulting sorted set in a new key.
     */
    zinterstore: OverloadedCommand<string | number, number>;
    ZINTERSTORE: OverloadedCommand<string | number, number>;

    /**
     * Count the number of members in a sorted set between a given lexicographic range.
     */
    zlexcount(key: string, min: string, max: string): Promise<number>;
    ZLEXCOUNT(key: string, min: string, max: string): Promise<number>;

    /**
     * Return a range of members in a sorted set, by index.
     */
    zrange(key: string, start: number, stop: number, withscores?: string): Promise<string[]>;
    ZRANGE(key: string, start: number, stop: number, withscores?: string): Promise<string[]>;

    /**
     * Return a range of members in a sorted set, by lexicographical range.
     */
    zrangebylex(key: string, min: string, max: string): Promise<string[]>;
    zrangebylex(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string[]>;
    ZRANGEBYLEX(key: string, min: string, max: string): Promise<string[]>;
    ZRANGEBYLEX(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string[]>;

    /**
     * Return a range of members in a sorted set, by lexicographical range, ordered from higher to lower strings.
     */
    zrevrangebylex(key: string, min: string, max: string): Promise<string[]>;
    zrevrangebylex(
        key: string,
        min: string,
        max: string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string[]>;
    ZREVRANGEBYLEX(key: string, min: string, max: string): Promise<string[]>;
    ZREVRANGEBYLEX(
        key: string,
        min: string,
        max: string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string[]>;

    /**
     * Return a range of members in a sorted set, by score.
     */
    zrangebyscore(key: string, min: number | string, max: number | string, withscores?: string): Promise<string[]>;
    zrangebyscore(
        key: string,
        min: number | string,
        max: number | string,
        withscores: string,
        limit: string,
        offset: number,
        count?: number,
    ): Promise<string[]>;
    ZRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores?: string): Promise<string[]>;
    ZRANGEBYSCORE(
        key: string,
        min: number | string,
        max: number | string,
        withscores: string,
        limit: string,
        offset: number,
        count?: number,
    ): Promise<string[]>;

    /**
     * Determine the index of a member in a sorted set.
     */
    zrank(key: string, member: string): Promise<number | null>;
    ZRANK(key: string, member: string): Promise<number | null>;

    /**
     * Remove one or more members from a sorted set.
     */
    zrem: OverloadedKeyCommand<string, number>;
    ZREM: OverloadedKeyCommand<string, number>;

    /**
     * Remove all members in a sorted set between the given lexicographical range.
     */
    zremrangebylex(key: string, min: string, max: string): Promise<number>;
    ZREMRANGEBYLEX(key: string, min: string, max: string): Promise<number>;

    /**
     * Remove all members in a sorted set within the given indexes.
     */
    zremrangebyrank(key: string, start: number, stop: number): Promise<number>;
    ZREMRANGEBYRANK(key: string, start: number, stop: number): Promise<number>;

    /**
     * Remove all members in a sorted set within the given indexes.
     */
    zremrangebyscore(key: string, min: string | number, max: string | number): Promise<number>;
    ZREMRANGEBYSCORE(key: string, min: string | number, max: string | number): Promise<number>;

    /**
     * Return a range of members in a sorted set, by index, with scores ordered from high to low.
     */
    zrevrange(key: string, start: number, stop: number, withscores?: string): Promise<string[]>;
    ZREVRANGE(key: string, start: number, stop: number, withscores?: string): Promise<string[]>;

    /**
     * Return a range of members in a sorted set, by score, with scores ordered from high to low.
     */
    zrevrangebyscore(key: string, min: number | string, max: number | string, withscores?: string): Promise<string[]>;
    zrevrangebyscore(
        key: string,
        min: number | string,
        max: number | string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string[]>;
    zrevrangebyscore(
        key: string,
        min: number | string,
        max: number | string,
        withscores: string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string[]>;
    ZREVRANGEBYSCORE(key: string, min: number | string, max: number | string, withscores?: string): Promise<string[]>;
    ZREVRANGEBYSCORE(
        key: string,
        min: number | string,
        max: number | string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string[]>;
    ZREVRANGEBYSCORE(
        key: string,
        min: number | string,
        max: number | string,
        withscores: string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string[]>;

    /**
     * Determine the index of a member in a sorted set, with scores ordered from high to low.
     */
    zrevrank(key: string, member: string): Promise<number | null>;
    ZREVRANK(key: string, member: string): Promise<number | null>;

    /**
     * Get the score associated with the given member in a sorted set.
     */
    zscore(key: string, member: string): Promise<string>;
    ZSCORE(key: string, member: string): Promise<string>;

    /**
     * Add multiple sorted sets and store the resulting sorted set in a new key.
     */
    zunionstore: OverloadedCommand<string | number, number>;
    ZUNIONSTORE: OverloadedCommand<string | number, number>;

    /**
     * Incrementally iterate the keys space.
     */
    scan: OverloadedCommand<string, [string, string[]]>;
    SCAN: OverloadedCommand<string, [string, string[]]>;

    /**
     * Incrementally iterate Set elements.
     */
    sscan: OverloadedKeyCommand<string, [string, string[]]>;
    SSCAN: OverloadedKeyCommand<string, [string, string[]]>;

    /**
     * Incrementally iterate hash fields and associated values.
     */
    hscan: OverloadedKeyCommand<string, [string, string[]]>;
    HSCAN: OverloadedKeyCommand<string, [string, string[]]>;

    /**
     * Incrementally iterate sorted sets elements and associated scores.
     */
    zscan: OverloadedKeyCommand<string, [string, string[]]>;
    ZSCAN: OverloadedKeyCommand<string, [string, string[]]>;
}

interface AsyncRedisClient extends Omitted, Commands {}

interface AsyncRedisConstructor {
    new(port: number, host?: string, options?: ClientOpts): AsyncRedisClient;
    new(unix_socket: string, options?: ClientOpts): AsyncRedisClient;
    new(redis_url: string, options?: ClientOpts): AsyncRedisClient;
    new(options?: ClientOpts): AsyncRedisClient;

    createClient(port: number, host?: string, options?: ClientOpts): AsyncRedisClient;
    createClient(unix_socket: string, options?: ClientOpts): AsyncRedisClient;
    createClient(redis_url: string, options?: ClientOpts): AsyncRedisClient;
    createClient(options?: ClientOpts): AsyncRedisClient;

    decorate: (client: RedisClient) => AsyncRedisClient;
}

declare const AsyncRedis: AsyncRedisConstructor;
export = AsyncRedis;
