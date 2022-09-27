/**
 * This module provides a redis client allowing users to interact with redis,
 * directly from their k6 scripts.
 *
 * https://k6.io/docs/javascript-api/k6-redis/
 */

/**
 * `Client` is a Redis client to interact with a Redis server or cluster.
 *
 * It exposes a promise-based API, allowing users to interact with Redis in an asynchronous manner.
 *
 * https://k6.io/docs/javascript-api/k6-redis/client
 */
export class Client {
    protected __brand: never;

    /**
     * Instantiate a new Redis client.
     *
     * @param options - Options.
     * @returns instantiated Client
     */
    constructor(options: Options);

    /**
     * Sets the value of a key, with a time to live (ttl) value equal to
     * the provided expiration.
     *
     * If the key already exists, it is overwritten.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-set
     *
     * @param key - key to set
     * @param value - value to set
     * @param expiration - time to live in seconds. `0` means no expiration.
     * @returns a promise that resolves to "OK" if the operation succeeded.
     */
    set(key: string, value: any, expiration: number): Promise<string>;

    /**
     * Gets the value of a key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-get
     *
     * @param key - key to get
     * @returns a promise that resolves to the value of the key.
     */
    get(key: string): Promise<string>;

    /**
     * Atomically sets the value of a key and returns the value
     * previously stored at that key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-getset
     *
     * @param key - key to get and set
     * @param value - value to set
     * @returns a promise that resolves to the old value of the key.
     */
    getSet(key: string, value: any): Promise<string>;

    /**
     * Removes the specified keys.
     *
     * A key is ignored if it does not exist.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-del
     *
     * @param keys - keys to delete
     * @returns a promise that resolves to the number of keys that were removed.
     */
    del(keys: string[]): Promise<number>;

    /**
     * Get the value of a key and delete it.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-getdel
     *
     * @param key - the key to get and delete
     * @returns a promise that resolves to the value of the key that was deleted.
     */
    getDel(key: string): Promise<string>;

    /**
     * Returns the number of the provided keys arguments that exist.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-exists
     *
     * @param keys - the keys to check the existence of
     * @returns a promise that resolves to the number of keys that exist.
     */
    exists(keys: string[]): Promise<number>;

    /**
     * Increments the numerical value stored at key by one.
     *
     * If the key does not exist, it is set to 0 before performing the operation.
     * If the key exists but cannot be treated as a number, the returned promise will be rejected.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-incr
     *
     * @param key - key to increment the value of
     * @returns a promise that resolves to the value of the key after the increment.
     */
    incr(key: string): Promise<number>;

    /**
     * Increments the numerical value stored at key by the provided increment.
     *
     * If the key does not exist, it is set to 0 before performing the operation.
     * If the key exists but cannot be treated as a number, the returned promise will be rejected.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-incrby
     *
     * @param key - key to increment the value of
     * @param increment - amount to increment the value of the key by
     * @returns a promise that resolves to the value of the key after the increment.
     */
    incrBy(key: string, increment: number): Promise<number>;

    /**
     * Decrements the numerical value stored at key by one.
     *
     * If the key does not exist, it is set to 0 before performing the operation.
     * If the key exists but cannot be treated as a number, the returned promise will be rejected.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-decr
     *
     * @param key - key to decrement the value of
     * @returns a promise that resolves to the value of the key after the decrement.
     */
    decr(key: string): Promise<number>;

    /**
     * Decrements the numerical value stored at key by the provided decrement.
     *
     * If the key does not exist, it is set to 0 before performing the operation.
     * If the key exists but cannot be treated as a number, the returned promise will be rejected.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-decrby
     *
     * @param key - key to decrement the value of
     * @param decrement - amount to decrement the value of the key by
     * @returns a promise that resolves to the value of the key after the decrement.
     */
    decrBy(key: string, decrement: number): Promise<number>;

    /**
     * Returns a random key from the keyspace.
     *
     * If the database is empty, the returned promise will be rejected.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-randomkey
     *
     * @returns a promise that resolves to a random key.
     */
    randomKey(): Promise<string>;

    /**
     * Returns the values of all the specified keys.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-mget
     *
     * @param keys - the keys to get the values of
     * @returns a promise that resolves to an array of the values of the keys.
     */
    mget(keys: string[]): Promise<any[]>;

    /**
     * Sets a timeout on a key. After the timeout has expired, the key will automatically be deleted.
     *
     * Calling expire with a non-positive timeout value will result in the being deleted rather
     * than expired.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-expire
     *
     * @param key - key to set the time to live of
     * @param seconds - value to set the time to live of the key to (in seconds)
     * @returns a promise that resolves to true if the operation succeeded, false otherwise.
     */
    expire(key: string, seconds: number): Promise<boolean>;

    /**
     * Returns the remaining time to live of a key that has a timeout.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-ttl
     *
     * @param key - the key to get the time to live of
     * @returns a promise that resolves to the time to live of the key, in seconds.
     */
    ttl(key: string): Promise<number>;

    /**
     * Removes the existing timeout on a key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-persist
     *
     * @param key - the key to remove the timeout of.
     * @returns a promise that resolves to true if the operation succeeded, false otherwise.
     */
    persist(key: string): Promise<boolean>;

    /**
     * Prepends values to a list, creating the list if it does not already exist.
     *
     * If the key exists but does not hold a list, the returned promise will be rejected.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-lpush
     *
     * @param key - key holding the list to prepend to
     * @param values - values to prepend to the list
     * @returns a promise that resolves to the number of elements in the list after the prepend operation.
     */
    lpsuh(key: string, values: any[]): Promise<number>;

    /**
     * Appends values to a list, creating the list if it does not already exist.
     *
     * If the key exists but does not hold a list, the returned promise will be rejected.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-rpush
     *
     * @param key - key holding the list to append to
     * @param values - values to append to the list
     * @returns a promise that resolves to the number of elements in the list after the append operation.
     */
    rpush(key: string, values: any[]): Promise<number>;

    /**
     * Removes and returns the value at the head of the list stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-lpop
     *
     * @param key - key holding the list to pop the head of
     * @returns a promise that resolves to the value that was popped.
     */
    lpop(key: string): Promise<string>;

    /**
     * Removes and returns the value at the tail of the list stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-rpop
     *
     * @param key - key holding the list to pop the tail of
     * @returns a promise that resolves to the value that was popped.
     */
    rpop(key: string): Promise<string>;

    /**
     * Returns the elements stored in the list from start to end.
     *
     * The offsets are zero-based. These offsets can be negative numbers indicating
     * offsets starting at the end of the list.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-lrange
     *
     * @param key - key holding the list to get the range of
     * @param start - index of the first element to return
     * @param stop - index of the last element to return
     * @returns a promise that resolves to an array of the values in the specified range.
     */
    lrange(key: string, start: number, stop: number): Promise<string[]>;

    /**
     * Returns the element at the specified in the list stored at key.
     *
     * The offsets are zero-based. These offsets can be negative numbers indicating
     * offsets starting at the end of the list.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-lindex
     *
     * @param key - key holding the list to get the element of
     * @param index - index of the element to get
     * @returns a promise that resolves to the value of the element at the specified index.
     */
    lindex(key: string, index: number): Promise<string>;

    /**
     * Sets the value of an element in the list stored at key to new value.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-lset
     *
     * @param key - key holding the list to set the element of
     * @param index - index of the element to set
     * @param element - value to set the element to
     * @returns a promise that resolves to the 'OK' string if the operation succeeded
     */
    lset(key: string, index: number, element: string): Promise<string>;

    /**
     * Removes the first `count` occurrences of `value` from the list stored at `key`.
     *
     *  If the `count` is positive, elements are removed the from head of the list (from left to right)
     * If the `count` is 0, all occurrences of `value` are removed.
     * If the `count` is negative, elements are removed from the tail of the list (from right to left).
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-lrem
     *
     * @param key - key holding the list to remove the element of
     * @param count - the number of elements matching the value to remove
     * @param value - the value to remove
     * @returns a promise that resolves to the number of elements removed.
     */
    lrem(key: string, count: number, value: string): Promise<number>;

    /**
     * Returns the length of the list stored at the key.
     *
     * If the key does not exist, it is interpreted as an empty list and 0 is returned.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-llen
     *
     * @param key - key holding the list to get the length  of
     * @returns a promise that resolves to the length of the list.
     */
    llen(key: string): Promise<number>;

    /**
     * Sets the value of a hash field to the specified value.
     *
     * If the key does not exist, a new key holding a hash is created.
     * If the field already exists, it is overwritten.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-hset
     *
     * @param key - key holding the hash to set the field's value of
     * @param field - field to set the value of
     * @param value - value to set the field to
     * @returns a promise that resolves to the the number of fields that were changed.
     */
    hset(key: string, field: string, value: string): Promise<number>;

    /**
     * Sets the value of a hash field to the specified value, if and only if the field does not yet exist.
     *
     * If the key does not exist, a new key holding a hash is created.
     * If the field already exists, the returned promise will be rejected.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-hsetnx
     *
     * @param key - key holding the hash to set the field's value of
     * @param field - field to set the value of
     * @param value - value to set the field to
     * @returns a promise that resolves to true if the hash field was set, false otherwise.
     */
    hsetnx(key: string, field: string, value: string): Promise<boolean>;

    /**
     *
     * Returns the value of the specified hash field.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-hget
     *
     * @param key - key holding the hash to get the field's value of
     * @param field - field to get the value of
     * @returns a promise that resolves to the value of the hash field.
     */
    hget(key: string, field: string): Promise<string>;

    /**
     * Deletes the specified fields from the hash stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-hdel
     *
     * @param key - key holding the hash to delete the fields of
     * @param fields - fields to delete from the hash
     * @returns a promise that resolves to the number of fields that were deleted.
     */
    hdel(key: string, fields: string[]): Promise<number>;

    /**
     * Returns all fields and values of the hash stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-hgetall
     *
     * @param key - the key holding the hash to get the fields of
     * @returns a promise that resolves to an object of field/value pairs.
     */
    hgetall(key: string): Promise<{ [key: string]: string }>;

    /**
     * Returns all fields of the hash stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-hkeys
     *
     * @param key - the key holding the hash to get the fields of
     * @returns a promise that resolves to an array of field names.
     */
    hkeys(key: string): Promise<string[]>;

    /**
     * Returns all values of the hash stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-hvals
     *
     * @param key - the key holding the hash to get the fields' values of
     * @returns a promise that resolves to an array of field values.
     */
    hvals(key: string): Promise<string[]>;

    /**
     * Return the number of fields contained in the hash stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-hlen
     *
     * @param key - the key holding the hash to get the number of fields of
     * @returns a promise that resolves to the number of fields in the hash.
     */
    hlen(key: string): Promise<number>;

    /**
     * Increments the numberical value stored at the hash field by the specified amount.
     *
     * If the key does not exist, a new key holding a hash is created.
     * If the field does not exist, it is set to 0 before the operation is performed.
     * If the field does not hold a nummerical value, the returned promise will be rejected.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-hincrby
     *
     * @param key - the key holding the hash to get the number of fields of
     * @param field - the hash's field to increment the value of
     * @param increment - the amount to increment the value by
     * @returns a promise that resolves to the value of the field after the increment.
     */
    hincrby(key: string, field: string, increment: number): Promise<number>;

    /**
     * Adds the specified elements to the set stored at key.
     *
     * Specified elements that are already a member of the set are ignored.
     * If the key does not exist, a new set is created before adding the specified elements.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-sadd
     *
     * @param key - the key holding the set to add a member to
     * @param members - the members to add to the set
     * @returns a promise that resolves to the number of members that were added to the set; excluding those that were already present.
     */
    sadd(key: string, members: any[]): Promise<number>;

    /**
     * Removes the specified members from the set stored at key.
     *
     * Specified members that are not a member of this set are ignored.
     * If key does not exist, it is treated as an empty set and this command returns 0.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-srem
     *
     * @param key - the key holding the set to remove a member from
     * @param members - the members to remove from the set
     * @returns a promise that resolves to the number of members that were removed from the set.
     */
    srem(key: string, members: any[]): Promise<number>;

    /**
     * Returns whether or not the specified member is a member of the set stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-sismembers
     *
     * @param key - the key holding the set to check the belonging of
     * @param member - the member to check the belonging of
     * @returns a promise that resolves to true if the member is a member of the set, false otherwise.
     */
    sismember(key: string, member: any): Promise<boolean>;

    /**
     * Returns the members of the set stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-smembers
     *
     * @param key - the key holding the set to get the members of
     * @returns a promise that resolves to an array of members in the set.
     */
    smembers(key: string): Promise<string[]>;

    /**
     * Returns a random member of the set value stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-srandmember
     *
     * @param key - the key holding the set to get the random member of
     * @returns a promise that resolves to a random member of the set.
     */
    srandmember(key: string): Promise<string>;

    /**
     * Pops a random member from the set stored at key.
     *
     * https://k6.io/docs/javascript-api/k6-redis/client/client-spop
     *
     * @param key - the key holding the set to pop the random member of
     * @returns a promise that resolves to the popped member.
     */
    spop(key: string): Promise<string>;
}

/**
 * Options for configuring the redis Client.
 *
 * https://k6.io/docs/javascript-api/k6-redis/options
 */
export interface Options {
    /**
     * Array of addresses in the 'host:port' defining which connect Redis to connect to.
     * Supplying a single entry would connect the client to a single Redis instance.
     * Supplying multiple entries would connect the client to a cluster/sentinel nodes.
     */
    addrs: string[];

    /**
     * The id of the database to be selected after connecting to the server.
     * Only used when connecting to a single-node use.
     */
    db?: number;

    /**
     * Username to authenticate the client connection with.
     */
    username?: number;

    /**
     * Password to authenticate the client connection with.
     */
    password?: number;

    /**
     * Username to authenticate the client connection with when connecting to a sentinel.
     */
    sentinelUsername?: number;

    /**
     * Password to authenticate the client connection with when connecting to a sentinel.
     */
    sentinelPassword?: number;

    /**
     * The name of the master to connect to when connecting to a Redis cluster.
     */
    masterName?: number;

    /**
     * The maximum number of retries to attempt when connecting to a Redis server before giving up.
     */
    maxRetries?: number;

    /**
     * The minimum amount of time to wait between retries when connecting to a Redis server.
     */
    minRetryBackoff?: number;

    /**
     * The maximum amount of time to wait between retries when connecting to a Redis server.
     */
    maxRetryBackoff?: number;

    /**
     * The maximum amount of time to wait for a connection to a Redis server to be established.
     */
    dialTimeout?: number;

    /**
     * The maximum amount of time to wait for socket reads to succeed.
     * Use `-1` for no timeout.
     */
    readTimeout?: number;

    /**
     * The maximum amount of time to wait for a socket write to succeed.
     * Use `-1` for no timeout.
     */
    writeTimeout?: number;

    /**
     * The maximum number of socket connections to keep open in the connection pool.
     */
    poolSize?: number;

    /**
     * The minimum number of idle connections to keep open in the connection pool.
     */
    minIdleConns?: number;

    /**
     * The maximum number of idle connections to keep open in the connection pool.
     */
    maxIdleConns?: number;

    /**
     * The maximum amount of time a connection can be idle in the connection pool before being closed.
     */
    maxConnAge?: number;

    /**
     * The maximum amount of time to wait for a connection to the Redis server to be returned from the pool.
     */
    poolTimeout?: number;

    /**
     * The maximum amount of time the client waits for a connection to become active before timing out.
     */
    idleTimeout?: number;

    /**
     * The frequency at which the client checks for idle connections in the connection pool.
     * Use `-1` to disable the checks.
     */
    idleCheckFrequency?: number;
}
