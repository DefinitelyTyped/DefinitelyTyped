import NodeAttribute from "../../nodes/core/NodeAttribute.js";
/**
 * Class for representing programmable stages which are vertex,
 * fragment or compute shaders. Unlike fixed-function states (like blending),
 * they represent the programmable part of a pipeline.
 *
 * @private
 */
declare class ProgrammableStage {
    id: number;
    code: string;
    stage: "compute" | "vertex" | "fragment";
    name: string;
    attributes: NodeAttribute[] | null;
    usedTimes: number;
    /**
     * Constructs a new programmable stage.
     *
     * @param {String} code - The shader code.
     * @param {('vertex'|'fragment'|'compute')} stage - The type of stage.
     * @param {String} name - The name of the shader.
     * @param {Array<Object>?} [transforms=null] - The transforms (only relevant for compute stages with WebGL 2 which uses Transform Feedback).
     * @param {Array<Object>?} [attributes=null] - The attributes (only relevant for compute stages with WebGL 2 which uses Transform Feedback).
     */
    constructor(
        code: string,
        stage: "compute" | "vertex" | "fragment",
        name: string,
        transforms?: null,
        attributes?: NodeAttribute[] | null,
    );
}
export default ProgrammableStage;
