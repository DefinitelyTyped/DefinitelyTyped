export class DistortionEffect extends SoundEffect {
    constructor(value?: number);
    private mWaveShaperNode;
    private mSamples;
    private mCurve;
    private mValue;
    set distortion(arg: number);
    get distortion(): number;
    private __makeDistortionCurve;
}
import { SoundEffect } from '../SoundEffect';
