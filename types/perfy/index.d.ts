// Type definitions for perfy 1.1
// Project: https://github.com/onury/perfy#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Perfy {
    /**
     * Initializes a new performance instance with the given name;
     * and marks the current high-resolution real time.
     * @param name - Unique name of the performance instance to be started.
     * Setting an existing name will overwrite this item. Use .exists() method to check for existence.
     * @param [autoDestroy=true] - Specifies whether this performance instance should be destroyed when .end() is called
     */
    start(name: string, autoDestroy?: boolean): this;
    /**
     * Ends the performance instance with the given name;
     * and calculates the elapsed high-resolution real time.
     * Note that if autoDestroy is not disabled when .start() is called; corresponding performance instance is immediately destroyed after returning the result
     * @param name - Unique name of the performance instance to be ended
     */
    end(name: string): PerfyResult;
    /**
     * Initializes a new performance instance right before executing the given function,
     * and automatically ends after the execution is done
     * @param name - Unique name of the performance instance.
     * Set this if you want the keep the instance for later use (such as getting the result at a later time).
     * @param fn - Function to be executed.
     * This function is invoked with an optional done argument which is only required
     * if you are running an asynchronous operation.
     * You should omit the done argument if it's a synchronous operation.
     */
    exec(name: string, fn: AsyncOperationFn): this;
    exec(fn: AsyncOperationFn): this;
    exec(fn: SyncOperationFn): PerfyResult;
    /**
     * Gets the calculated result of the performance instance for the given name.
     * To be used with non-destroyed, ended instances.
     * If instance is not yet ended or does not exist at all, returns null
     * @param name - Unique name of the performance instance.
     */
    result(name: string): PerfyResult | null;
    /**
     * Specifies whether a performance instance exists with the given name. This method will return false for an item, if called after .end(name) is called since the instance is destroyed
     * @param name - Unique name of the performance instance.
     */
    exists(name: string): boolean;
    /**
     * Destroys the performance instance with the given name.
     * @param name - Name of the performance instance to be destroyed.
     */
    destroy(name: string): this;
    /**
     * Destroys all existing performance instances.
     */
    destroyAll(): this;
    /**
     * Gets the names of existing performance instances.
     */
    names(): string[];
    /**
     * Gets the total number of existing performance instances.
     */
    count(): number;
}

type AsyncOperationFn = (done: () => PerfyResult) => void;
type SyncOperationFn = () => PerfyResult;

interface PerfyResult {
    /** Initialized name of the performance instance */
    readonly name: string;
    /** Seconds portion of the elapsed time. e.g. 1 */
    readonly seconds: number;
    /** Nanoseconds portion converted to milliseconds. 235.125283 */
    readonly milliseconds: number;
    /** Nanoseconds portion of the elapsed time. e.g. 235125283 */
    readonly nanoseconds: number;
    /** Number — Float representation of full elapsed time in seconds. e.g. 1.235 */
    readonly time: number;
    /** Alias of `time` */
    readonly fullSeconds: number;
    /** Float representation of full elapsed time in milliseconds. e.g. 1235.125 */
    readonly fullMilliseconds: number;
    /** Float representation of full elapsed time in nanoseconds. e.g. 1235125283 */
    readonly fullNanoseconds: number;
    /** Text summary shorthand for elapsed time */
    readonly summary: string;
    /** UTC start time of the execution (low-resolution). e.g. 1533302465251 */
    readonly startTime: number;
    /** UTC end time of the execution (low-resolution). e.g. 1533302466486 */
    readonly endTime: number;
}

declare const perfy: Perfy;

export = perfy;
