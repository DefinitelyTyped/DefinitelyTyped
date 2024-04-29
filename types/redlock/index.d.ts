import * as Promise from "bluebird";
import { EventEmitter } from "events";

export = Redlock;

declare namespace Redlock {
    type Callback<T> = (err: any, value?: T) => void;

    /**
     * An object of this type is returned when a resource is successfully locked.
     * It contains convenience methods `unlock` and `extend` which perform
     * the associated Redlock method on itself.
     */
    class Lock {
        redlock: Redlock;
        resource: string;
        value: string | null;
        expiration: number;
        attempts: number;
        constructor(redlock: Redlock, resource: string, value: string | null, expiration: number, attempts: number);
        unlock(callback?: Callback<void>): Promise<void>;
        extend(ttl: number, callback?: Callback<Lock>): Promise<Lock>;
    }

    /**
     * Function that returns the LUA script to run on the
     * Redis server to lock a resource.
     *
     * @param origScript - Redblock's default LUA script to lock a resource.
     */
    type LockScriptFunction = (origScript: string) => string;

    /**
     * Function that returns the LUA script to run on the
     * Redis server to unlock a resource.
     *
     * @param origScript - Redblock's default LUA script to unlock a resource.
     */
    type UnlockScriptFunction = LockScriptFunction;

    /**
     * Function that returns the LUA script to run on the
     * Redis server to extend the ttl of a locked resource.
     *
     * @param origScript - Redblock's default LUA script to extend a lock's ttl.
     */
    type ExtendScriptFunction = LockScriptFunction;

    interface Options {
        /**
         * The expected clock drift; for more details
         * see http://redis.io/topics/distlock
         *
         * Default is 0.01
         */
        driftFactor?: number | undefined;
        /**
         * The max number of times Redlock will attempt
         * to lock a resource before erroring.
         *
         * Default is 10
         */
        retryCount?: number | undefined;
        /**
         * The time in milliseconds between attempts.
         *
         * Default is 200
         */
        retryDelay?: number | undefined;
        /**
         * The max time in ms randomly added to retries
         * to improve performance under high contention
         * see https://www.awsarchitectureblog.com/2015/03/backoff.html
         *
         * Default is 100
         */
        retryJitter?: number | undefined;
        /**
         * LUA script to run on the Redis server to lock a resource.
         * https://redis.io/commands/eval
         *
         * Redlock has a default script.
         * Only override if you know it's necessary to do so.
         */
        lockScript?: LockScriptFunction | string | undefined;
        /**
         * LUA script to run on the Redis server to unlock a resource.
         * https://redis.io/commands/eval
         *
         * Redlock has a default script.
         * Only override if you know it's necessary to do so.
         */
        unlockScript?: UnlockScriptFunction | string | undefined;
        /**
         * LUA script to run on the Redis server to extend a lock's ttl.
         * https://redis.io/commands/eval
         *
         * Redlock has a default script.
         * Only override if you know it's necessary to do so.
         */
        extendScript?: ExtendScriptFunction | string | undefined;
    }

    /**
     * This error is returned when there is an error locking a resource.
     */
    class LockError extends Error {
        readonly name: "LockError";
        attempts: number;
        constructor(message?: string);
    }

    type EvalArg = string | number;

    interface CompatibleRedisClient {
        eval(args: EvalArg[], callback?: (err: Error | null, res: any) => void): any;
    }
}

/**
 * Inherit all the EventEmitter methods, like `on`, and `off`.
 */
declare class Redlock extends EventEmitter {
    /**
     * Attach a reference to LockError, which allows the application to use instanceof to ensure type.
     */
    LockError: typeof Redlock.LockError;
    /**
     * Attach a reference to Lock, which allows the application to use instanceof to ensure type.
     */
    Lock: typeof Redlock.Lock;
    driftFactor: number;
    retryCount: number;
    retryDelay: number;
    retryJitter: number;
    servers: Redlock.CompatibleRedisClient[];

    /**
     * A redlock object is instantiated with an array of at least one redis client and an optional
     * `options` object. Properties of the Redlock object should NOT be changed after it is first
     * used, as doing so could have unintended consequences for live locks.
     *
     * @param clients - you should have one client for each independent redis node
     * @param options - optionally customize settings (advanced use only)
     */
    constructor(clients: Redlock.CompatibleRedisClient[], options?: Redlock.Options);

    /**
     * This method runs `.quit()` on all client connections.
     */
    quit(callback?: Redlock.Callback<void>): Promise<void>;

    /**
     * This method locks a resource using the redlock algorithm.
     *
     * ```js
     * redlock.lock(
     *   'some-resource',       // the resource to lock
     *   2000,                  // ttl in ms
     *   function(err, lock) {  // callback function (optional)
     *     ...
     *   }
     * )
     * ```
     *
     * @param resource - one or more resources to lock
     * @param ttl - how long to keep the lock (milliseconds)
     */
    acquire(resource: string | string[], ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;

    /**
     * This method locks a resource using the redlock algorithm.
     *
     * ```js
     * redlock.lock(
     *   'some-resource',       // the resource to lock
     *   2000,                  // ttl in ms
     *   function(err, lock) {  // callback function (optional)
     *     ...
     *   }
     * )
     * ```
     *
     * @param resource - one or more resources to lock
     * @param ttl - how long to keep the lock (milliseconds)
     */
    lock(resource: string | string[], ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;

    /**
     * This method locks a resource using the redlock algorithm,
     * and returns a bluebird disposer.
     *
     * ```js
     * using(
     *     redlock.disposer(
     *         'some-resource',       // the resource to lock
     *         2000                   // ttl in ms
     *     ),
     *     function(lock) {
     *         ...
     *     }
     * );
     * ```
     *
     * @param resource - one or more resources to lock
     * @param ttl - how long to keep the lock (milliseconds)
     * @param errorHandler -- handle any errors when disposer tries to unlock the resource
     */
    disposer(resource: string, ttl: number, errorHandler?: Redlock.Callback<void>): Promise.Disposer<Redlock.Lock>;

    /**
     * This method unlocks the provided lock from all servers still persisting it. It will fail
     * with an error if it is unable to release the lock on a quorum of nodes, but will make no
     * attempt to restore the lock on nodes that failed to release. It is safe to re-attempt an
     * unlock or to ignore the error, as the lock will automatically expire after its timeout.
     *
     * @param lock - the lock to release
     * @param callback - be notified once lock has been released by the clients
     */
    release(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;

    /**
     * This method unlocks the provided lock from all servers still persisting it. It will fail
     * with an error if it is unable to release the lock on a quorum of nodes, but will make no
     * attempt to restore the lock on nodes that failed to release. It is safe to re-attempt an
     * unlock or to ignore the error, as the lock will automatically expire after its timeout.
     *
     * @param lock - the lock to release
     * @param callback - be notified once lock has been released by the clients
     */
    unlock(lock: Redlock.Lock, callback?: Redlock.Callback<void>): Promise<void>;

    /**
     * This method extends a valid lock by the provided `ttl`.
     *
     * @param lock - the lock whose lease to extend
     * @param ttl - the new time to live value (milliseconds) from now
     * @param callback - be notified when lock's lease is extended
     */
    extend(lock: Redlock.Lock, ttl: number, callback?: Redlock.Callback<Redlock.Lock>): Promise<Redlock.Lock>;

    /*
     * Functions inherited from EventEmitter
     * https://nodejs.org/api/events.html#events_class_eventemitter
     */

    /**
     * Subscribe to `clientError` events.
     * Alias for `on(event, listener)` function.
     */
    addListener(event: "clientError", listener: (err: any) => void): this;

    /**
     * Subscribe to `clientError` events.
     * Your callback is invoked every time this event is emitted.
     */
    on(event: "clientError", listener: (err: any) => void): this;

    /**
     * Subscribe to `clientError` events.
     * Your callback is invoked only once for this event.
     */
    once(event: "clientError", listener: (err: any) => void): this;

    /**
     * Unsubscribe from the `clientError` event.
     */
    removeListener(event: "clientError", listener: (err: any) => void): this;
}
