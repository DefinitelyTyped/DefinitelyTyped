import { KeyframeTrack } from '../KeyframeTrack.js';
import { InterpolationModes } from '../../constants.js';

export class VectorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: ArrayLike<number>, values: ArrayLike<number>, interpolation?: InterpolationModes);

    /**
     * @default 'vector'
     */
    ValueTypeName: string;
}
