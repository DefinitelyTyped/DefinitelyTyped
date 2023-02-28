export class SoundClip {
    constructor(nativeBuffer: AudioBuffer, offset?: number, duration?: number, isSubClip?: boolean);
    private mNativeBuffer;
    private mStartOffset;
    private mDuration;
    private mIsSubClip;
    play(channel?: string, volume?: number, loop?: boolean, pan?: number): SoundInstance;
    collectWaveData(blockNum: number): Float32Array;
    private __averagePeak;
    get native(): AudioBuffer;
    get offset(): number;
    get duration(): number;
    get isSubClip(): boolean;
}
import { SoundInstance } from './SoundInstance';
