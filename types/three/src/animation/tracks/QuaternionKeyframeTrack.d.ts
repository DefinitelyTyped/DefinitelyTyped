import { KeyframeTrack } from '../KeyframeTrack.js';
import { InterpolationModes } from '../../constants.js';

export class QuaternionKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'quaternion'
     */
    ValueTypeName: string;
}
