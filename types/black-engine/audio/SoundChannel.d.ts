export class SoundChannel {
    constructor(name: string);
    private mName;
    private mGain;
    private mSounds;
    private mEffects;
    attachSound(soundInstance: SoundInstance): void;
    detachSound(soundInstance: SoundInstance): void;
    stopAll(): void;
    pauseAll(): void;
    resumeAll(): void;
    addEffect(effect: SoundEffect): SoundEffect;
    removeEffect(effect: SoundEffect): SoundEffect;
    removeAllEffects(): void;
    private __reconnectSounds;
    set volume(arg: number);
    get volume(): number;
    get _inputNode(): AudioNode;
    get _outputNode(): AudioNode;
}
import { SoundInstance } from './SoundInstance';
import { SoundEffect } from './SoundEffect';
