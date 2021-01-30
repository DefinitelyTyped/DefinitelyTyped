import { KeyframeTrack } from './../KeyframeTrack';
import { InterpolationModes } from '../../constants';

export class NumberKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[], interpolation?: InterpolationModes);

    /**
     * @default 'number'
     */
    ValueTypeName: string;
}
