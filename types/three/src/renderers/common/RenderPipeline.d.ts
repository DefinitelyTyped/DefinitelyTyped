import Pipeline from "./Pipeline.js";
import ProgrammableStage from "./ProgrammableStage.js";
declare class RenderPipeline extends Pipeline {
    vertexProgram: ProgrammableStage;
    fragmentProgram: ProgrammableStage;
    constructor(cacheKey: string, vertexProgram: ProgrammableStage, fragmentProgram: ProgrammableStage);
}
export default RenderPipeline;
