export class Sound extends Component {
    constructor(name: string, channel?: string, spatialEffect?: boolean, rolloff?: number);
    private mSoundClip;
    private mRolloff;
    private mPlayOnAdded;
    private mStopOnRemove;
    private mSoundInstance;
    private mCompleteBinding;
    private mSpatialEffect;
    private mChannelName;
    play(volume?: number, loop?: boolean, overwrite?: boolean): SoundInstance;
    set spatialEffect(arg: boolean);
    get spatialEffect(): boolean;
    stop(): void;
    private __onSoundComplete;
    onAdded(gameObject: any): void;
    onRemoved(gameObject: any): void;
    set playOnAdded(arg: boolean);
    get playOnAdded(): boolean;
    set stopOnRemove(arg: boolean);
    get stopOnRemove(): boolean;
}
import { Component } from '../core/Component';
import { SoundInstance } from './SoundInstance';
