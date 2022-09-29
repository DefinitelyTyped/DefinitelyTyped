export class SoundAtlasClip extends SoundClip {
    constructor(nativeBuffer: AudioBuffer, jsonObject: any);
    private mClips;
    addSubSound(name: string, offset?: number, duration?: number): SoundClip;
    removeSubSound(name: string): void;
    playSubSound(name: string, channel?: string, volume?: number, loop?: boolean, pan?: number): SoundInstance | null;
    get subSounds(): {
        [x: string]: SoundClip;
    };
}
import { SoundClip } from './SoundClip';
import { SoundInstance } from './SoundInstance';
