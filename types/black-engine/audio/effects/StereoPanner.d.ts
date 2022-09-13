export class StereoPanner extends SoundEffect {
    private mGainL;
    private mGainR;
    private mSplitter;
    private mMerger;
    private mValue;
    set pan(arg: number);
    get pan(): number;
}
import { SoundEffect } from '../SoundEffect';
