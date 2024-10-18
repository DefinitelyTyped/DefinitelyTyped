import Pipeline from "./Pipeline.js";
import ProgrammableStage from "./ProgrammableStage.js";
declare class ComputePipeline extends Pipeline {
    computeProgram: ProgrammableStage;
    readonly isComputePipeline: true;
    constructor(cacheKey: string, computeProgram: ProgrammableStage);
}
export default ComputePipeline;
