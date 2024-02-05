import { InterpolationModes } from "../../constants.js";
import { KeyframeTrack } from "../KeyframeTrack.js";

export class StringKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>, interpolation?: InterpolationModes);

    /**
     * @default 'string'
     */
    ValueTypeName: string;
}
