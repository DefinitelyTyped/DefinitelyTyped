import { InterpolationModes } from "../../constants.js";
import { KeyframeTrack } from "../KeyframeTrack.js";

/**
 * A track for color keyframe values.
 */
export class ColorKeyframeTrack extends KeyframeTrack {
    /**
     * Constructs a new color keyframe track.
     *
     * @param {string} name - The keyframe track's name.
     * @param {Array<number>} times - A list of keyframe times.
     * @param {Array<number>} values - A list of keyframe values.
     * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
     */
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);
}
