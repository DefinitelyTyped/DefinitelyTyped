export class MasterAudio extends System {
    private mContext;
    private mCurrentListener;
    private mChannels;
    private mMasterChannel;
    private mIsPendingResume;
    private mPendingResume;
    private mResumeTimeout;
    __initialize(): void;
    private __unlock;
    createChannel(name: string): SoundChannel;
    getChannel(name: string): SoundChannel | null;
    _resolveChannel(snd: SoundInstance): SoundChannel;
    play(
        nameOrSound: string | SoundAtlasClip,
        channel?: string,
        volume?: number,
        loop?: boolean,
        pan?: number,
    ): SoundInstance;
    stopAll(channelName?: string | null): void;
    pauseAll(channelName?: string | null): void;
    resumeAll(channelName?: string | null): void;
    set masterVolume(arg: number);
    get masterVolume(): number;
    get context(): AudioContext;
    get masterChannel(): SoundChannel;
    set currentListener(arg: SoundListener);
    get currentListener(): SoundListener;
    set resumeTimeout(arg: number);
    get resumeTimeout(): number;
    looseListener(): void;
    _newGainNode(): GainNode;
}
import { System } from '../core/System';
import { SoundAtlasClip } from './SoundAtlasClip';
import { SoundChannel } from './SoundChannel';
import { SoundInstance } from './SoundInstance';
import { SoundListener } from './SoundListener';
