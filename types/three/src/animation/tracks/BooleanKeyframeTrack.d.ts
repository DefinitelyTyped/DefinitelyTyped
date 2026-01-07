import { KeyframeTrack } from "../KeyframeTrack.js";

/**
 * A track for boolean keyframe values.
 */
export class BooleanKeyframeTrack extends KeyframeTrack {
    /**
     * Constructs a new boolean keyframe track.
     *
     * This keyframe track type has no `interpolation` parameter because the
     * interpolation is always discrete.
     *
     * @param {string} name - The keyframe track's name.
     * @param {Array<number>} times - A list of keyframe times.
     * @param {Array<boolean>} values - A list of keyframe values.
     */
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<boolean>);
}
