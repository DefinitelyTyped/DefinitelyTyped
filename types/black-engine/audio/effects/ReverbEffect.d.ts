export class ReverbEffect extends SoundEffect {
    constructor(IRBuffer: AudioBuffer);
    private mConvolver;
    private mDry;
    private mWet;
    private mTone;
    set wet(arg: number);
    get wet(): number;
    set dry(arg: number);
    get dry(): number;
    set tone(arg: number);
    get tone(): number;
}
import { SoundEffect } from '../SoundEffect';
