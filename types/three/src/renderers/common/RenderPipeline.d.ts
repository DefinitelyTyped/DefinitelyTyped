import Pipeline from "./Pipeline.js";
import ProgrammableStage from "./ProgrammableStage.js";
/**
 * Class for representing render pipelines.
 *
 * @private
 * @augments Pipeline
 */
declare class RenderPipeline extends Pipeline {
    vertexProgram: ProgrammableStage;
    fragmentProgram: ProgrammableStage;
    /**
     * Constructs a new render pipeline.
     *
     * @param {String} cacheKey - The pipeline's cache key.
     * @param {ProgrammableStage} vertexProgram - The pipeline's vertex shader.
     * @param {ProgrammableStage} fragmentProgram - The pipeline's fragment shader.
     */
    constructor(cacheKey: string, vertexProgram: ProgrammableStage, fragmentProgram: ProgrammableStage);
}
export default RenderPipeline;
