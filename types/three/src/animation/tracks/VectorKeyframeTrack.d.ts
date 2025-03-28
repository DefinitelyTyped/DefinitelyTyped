import { InterpolationModes } from "../../constants.js";
import { KeyframeTrack } from "../KeyframeTrack.js";

/**
 * A track for vector keyframe values.
 */
export class VectorKeyframeTrack extends KeyframeTrack {
    /**
     * Constructs a new vector keyframe track.
     *
     * @param {string} name - The keyframe track's name.
     * @param {Array<number>} times - A list of keyframe times.
     * @param {Array<number>} values - A list of keyframe values.
     * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
     */
    constructor(name: string, times: Array<number>, values: Array<number>, interpolation?: InterpolationModes);
}
