import NodeAttribute from "../../nodes/core/NodeAttribute.js";

/**
 * Class for representing programmable stages which are vertex,
 * fragment or compute shaders. Unlike fixed-function states (like blending),
 * they represent the programmable part of a pipeline.
 *
 * @private
 */
declare class ProgrammableStage {
    /**
     * Constructs a new programmable stage.
     *
     * @param {string} code - The shader code.
     * @param {('vertex'|'fragment'|'compute')} stage - The type of stage.
     * @param {string} name - The name of the shader.
     * @param {?Array<Object>} [transforms=null] - The transforms (only relevant for compute stages with WebGL 2 which uses Transform Feedback).
     * @param {?Array<Object>} [attributes=null] - The attributes (only relevant for compute stages with WebGL 2 which uses Transform Feedback).
     */
    constructor(
        code: string,
        stage: "vertex" | "fragment" | "compute",
        name: string,
        transforms?: unknown[] | null,
        attributes?: NodeAttribute[] | null,
    );
    /**
     * The id of the programmable stage.
     *
     * @type {number}
     */
    id: number;
    /**
     * The shader code.
     *
     * @type {string}
     */
    code: string;
    /**
     * The type of stage.
     *
     * @type {string}
     */
    stage: "vertex" | "fragment" | "compute";
    /**
     * The name of the stage.
     * This is used for debugging purposes.
     *
     * @type {string}
     */
    name: string;
    /**
     * The transforms (only relevant for compute stages with WebGL 2 which uses Transform Feedback).
     *
     * @type {?Array<Object>}
     */
    transforms: unknown[] | null;
    /**
     * The attributes (only relevant for compute stages with WebGL 2 which uses Transform Feedback).
     *
     * @type {?Array<Object>}
     */
    attributes: NodeAttribute[] | null;
    /**
     * How often the programmable stage is currently in use.
     *
     * @type {number}
     * @default 0
     */
    usedTimes: number;
}

export default ProgrammableStage;
