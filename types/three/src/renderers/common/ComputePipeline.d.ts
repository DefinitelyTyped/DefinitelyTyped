import Pipeline from "./Pipeline.js";
import ProgrammableStage from "./ProgrammableStage.js";
/**
 * Class for representing compute pipelines.
 *
 * @private
 * @augments Pipeline
 */
declare class ComputePipeline extends Pipeline {
    computeProgram: ProgrammableStage;
    readonly isComputePipeline: true;
    /**
     * Constructs a new render pipeline.
     *
     * @param {String} cacheKey - The pipeline's cache key.
     * @param {ProgrammableStage} computeProgram - The pipeline's compute shader.
     */
    constructor(cacheKey: string, computeProgram: ProgrammableStage);
}
export default ComputePipeline;
