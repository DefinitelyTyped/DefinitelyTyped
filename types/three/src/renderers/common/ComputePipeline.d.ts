import Pipeline from "./Pipeline.js";
import ProgrammableStage from "./ProgrammableStage.js";

/**
 * Class for representing compute pipelines.
 *
 * @private
 * @augments Pipeline
 */
declare class ComputePipeline extends Pipeline {
    /**
     * Constructs a new render pipeline.
     *
     * @param {string} cacheKey - The pipeline's cache key.
     * @param {ProgrammableStage} computeProgram - The pipeline's compute shader.
     */
    constructor(cacheKey: string, computeProgram: ProgrammableStage);
    /**
     * The pipeline's compute shader.
     *
     * @type {ProgrammableStage}
     */
    computeProgram: ProgrammableStage;
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isComputePipeline: boolean;
}

export default ComputePipeline;
