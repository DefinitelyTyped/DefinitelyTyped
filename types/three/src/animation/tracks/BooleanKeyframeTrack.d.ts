import { KeyframeTrack } from "../KeyframeTrack.js";

export class BooleanKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>);

    /**
     * @default 'bool'
     */
    ValueTypeName: string;
}
