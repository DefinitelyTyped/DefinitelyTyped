import RenderContext from "./RenderContext.js";
declare abstract class TimestampQueryPool {
    trackTimestamp: boolean;
    maxQueries: number;
    currentQueryIndex: number;
    queryOffsets: Map<number, number>;
    isDisposed: boolean;
    lastValue: number;
    pendingResolve: boolean;
    constructor(maxQueries?: number);
    /**
     * Allocate queries for a specific renderContext.
     *
     * @abstract
     */
    abstract allocateQueriesForContext(renderContext: RenderContext): number | null;
    /**
     * Resolve all timestamps and return data (or process them).
     *
     * @abstract
     * @returns {Promise<Number>|Number} The resolved timestamp value.
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
