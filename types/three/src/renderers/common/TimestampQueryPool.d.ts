/**
 * Abstract base class of a timestamp query pool.
 *
 * @abstract
 */
declare abstract class TimestampQueryPool {
    /**
     * Creates a new timestamp query pool.
     *
     * @param {number} [maxQueries=256] - Maximum number of queries this pool can hold.
     */
    constructor(maxQueries?: number);
    /**
     * Whether to track timestamps or not.
     *
     * @type {boolean}
     * @default true
     */
    trackTimestamp: boolean;
    /**
     * Maximum number of queries this pool can hold.
     *
     * @type {number}
     * @default 256
     */
    maxQueries: number;
    /**
     * How many queries allocated so far.
     *
     * @type {number}
     * @default 0
     */
    currentQueryIndex: number;
    /**
     * Tracks offsets for different contexts.
     *
     * @type {Map<string, number>}
     */
    queryOffsets: Map<string, number>;
    /**
     * Whether the pool has been disposed or not.
     *
     * @type {boolean}
     * @default false
     */
    isDisposed: boolean;
    /**
     * The total frame duration until the next update.
     *
     * @type {number}
     * @default 0
     */
    lastValue: number;
    /**
     * Stores all timestamp frames.
     *
     * @type {Array<number>}
     */
    frames: number[];
    /**
     * This property is used to avoid multiple concurrent resolve operations.
     * The WebGL backend uses it as a boolean flag. In context of WebGPU, it holds
     * the promise of the current resolve operation.
     *
     * @type {boolean|Promise<number>}
     * @default false
     */
    pendingResolve: boolean | Promise<number>;
    /**
     * Stores the latest timestamp for each render context.
     *
     * @type {Map<string, number>}
     */
    timestamps: Map<string, number>;
    /**
     * Returns all timestamp frames.
     *
     * @return {Array<number>} The timestamp frames.
     */
    getTimestampFrames(): number[];
    /**
     * Returns the timestamp for a given render context.
     *
     * @param {string} uid - A unique identifier for the render context.
     * @return {?number} The timestamp, or undefined if not available.
     */
    getTimestamp(uid: string): number | null;
    /**
     * Returns whether a timestamp is available for a given render context.
     *
     * @param {string} uid - A unique identifier for the render context.
     * @return {boolean} True if a timestamp is available, false otherwise.
     */
    hasTimestamp(uid: string): boolean;
    /**
     * Allocate queries for a specific uid.
     *
     * @abstract
     * @param {string} uid - A unique identifier for the render context.
     * @param {number} frameId - The current frame identifier.
     * @returns {?number}
     */
    abstract allocateQueriesForContext(uid: string, frameId: number): number | null;
    /**
     * Resolve all timestamps and return data (or process them).
     *
     * @abstract
     * @async
     * @returns {Promise<number>|number} The resolved timestamp value.
     */
    abstract resolveQueriesAsync(): Promise<number> | number;
    /**
     * Dispose of the query pool.
     *
     * @abstract
     */
    abstract dispose(): void;
}

export default TimestampQueryPool;
