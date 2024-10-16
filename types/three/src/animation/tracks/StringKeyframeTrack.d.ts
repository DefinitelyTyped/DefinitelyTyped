import { KeyframeTrack } from "../KeyframeTrack.js";

export class StringKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<any>);

    /**
     * @default 'string'
     */
    ValueTypeName: string;
}
