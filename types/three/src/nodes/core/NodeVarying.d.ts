import { InterpolationSamplingMode, InterpolationSamplingType } from "../../constants.js";
import NodeVar from "./NodeVar.js";
/**
 * {@link NodeBuilder} is going to create instances of this class during the build process
 * of nodes. They represent the final shader varyings that are going to be generated
 * by the builder. An array of node varyings is maintained in {@link NodeBuilder#varyings} for
 * this purpose.
 *
 * @augments NodeVar
 */
declare class NodeVarying extends NodeVar {
    needsInterpolation: boolean;
    readonly isNodeVarying: true;
    interpolationType: InterpolationSamplingType | null;
    interpolationSampling: InterpolationSamplingMode | null;
    /**
     * Constructs a new node varying.
     *
     * @param {string} name - The name of the varying.
     * @param {string} type - The type of the varying.
     * @param {?string} interpolationType - The interpolation type of the varying.
     * @param {?string} interpolationSampling - The interpolation sampling type of the varying.
     */
    constructor(
        name: string,
        type: string,
        interpolationType?: InterpolationSamplingType | null,
        interpolationSampling?: InterpolationSamplingMode | null,
    );
}
export default NodeVarying;
