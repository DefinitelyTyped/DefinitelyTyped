/**
 * Abstract class for representing pipelines.
 *
 * @private
 * @abstract
 */
declare class Pipeline {
    /**
     * Constructs a new pipeline.
     *
     * @param {string} cacheKey - The pipeline's cache key.
     */
    constructor(cacheKey: string);
    /**
     * The pipeline's cache key.
     *
     * @type {string}
     */
    cacheKey: string;
    /**
     * How often the pipeline is currently in use.
     *
     * @type {number}
     * @default 0
     */
    usedTimes: number;
}

export default Pipeline;
