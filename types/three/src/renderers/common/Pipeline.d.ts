/**
 * Abstract class for representing pipelines.
 *
 * @private
 * @abstract
 */
declare class Pipeline {
    cacheKey: string;
    usedTimes: number;
    /**
     * Constructs a new pipeline.
     *
     * @param {String} cacheKey - The pipeline's cache key.
     */
    constructor(cacheKey: string);
}
export default Pipeline;
