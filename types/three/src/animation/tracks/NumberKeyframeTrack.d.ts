import { KeyframeTrack } from '../KeyframeTrack.js';
import { InterpolationModes } from '../../constants.js';

export class NumberKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'number'
     */
    ValueTypeName: string;
}
