import { KeyframeTrack } from "../KeyframeTrack.js";

/**
 * A track for string keyframe values.
 */
export class StringKeyframeTrack extends KeyframeTrack {
    /**
     * Constructs a new string keyframe track.
     *
     * This keyframe track type has no `interpolation` parameter because the
     * interpolation is always discrete.
     *
     * @param {string} name - The keyframe track's name.
     * @param {Array<number>} times - A list of keyframe times.
     * @param {Array<string>} values - A list of keyframe values.
     */
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<string>);
}
