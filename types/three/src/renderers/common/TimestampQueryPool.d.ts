import RenderContext from "./RenderContext.js";
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
    pendingResolve: boolean;
    /**
     * Creates a new timestamp query pool.
     *
     * @param {number} [maxQueries=256] - Maximum number of queries this pool can hold.
     */
    constructor(maxQueries?: number);
    /**
     * Allocate queries for a specific renderContext.
     *
     * @abstract
     * @param {Object} renderContext - The render context to allocate queries for.
     * @returns {?number}
     */
    abstract allocateQueriesForContext(renderContext: RenderContext): number | null;
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
