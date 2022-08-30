export class SoundAtlasAsset extends Asset {
    constructor(name: string, soundUrl: string, dataUrl: string);
    private mSoundUrl;
    private mDataUrl;
    private mAudioXHR;
    private mDataXHR;
    onLoaderRequested(factory: any): void;
}
import { Asset } from './Asset';
