import Pipeline from "./Pipeline.js";
import ProgrammableStage from "./ProgrammableStage.js";

/**
 * Class for representing render pipelines.
 *
 * @private
 * @augments Pipeline
 */
declare class RenderObjectPipeline extends Pipeline {
    /**
     * Constructs a new render object pipeline.
     *
     * @param {string} cacheKey - The pipeline's cache key.
     * @param {ProgrammableStage} vertexProgram - The pipeline's vertex shader.
     * @param {ProgrammableStage} fragmentProgram - The pipeline's fragment shader.
     */
    constructor(cacheKey: string, vertexProgram: ProgrammableStage, fragmentProgram: ProgrammableStage);
    /**
     * The pipeline's vertex shader.
     *
     * @type {ProgrammableStage}
     */
    vertexProgram: ProgrammableStage;
    /**
     * The pipeline's fragment shader.
     *
     * @type {ProgrammableStage}
     */
    fragmentProgram: ProgrammableStage;
}

export default RenderObjectPipeline;
