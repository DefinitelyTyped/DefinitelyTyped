/**
 * Abstract base class of a timestamp query pool.
 *
 * @abstract
 */
declare abstract class TimestampQueryPool {
    trackTimestamp: boolean;
    maxQueries: number;
    currentQueryIndex: number;
    queryOffsets: Map<number, number>;
    isDisposed: boolean;
    lastValue: number;
    frames: number[];
    pendingResolve: boolean;
    timestamps: Map<string, number>;
    /**
     * Creates a new timestamp query pool.
     *
     * @param {number} [maxQueries=256] - Maximum number of queries this pool can hold.
     */
    constructor(maxQueries?: number);
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
    getTimestamp(uid: string): number;
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
    abstract resolveQueriesAsync(): Promise<number>;
    /**
     * Dispose of the query pool.
     *
     * @abstract
     */
    abstract dispose(): void;
}
export default TimestampQueryPool;
