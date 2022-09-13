import { WaveSurferParams } from '../types/params';
import MediaElement from './mediaelement';

export default class MediaElementWebAudio extends MediaElement {
    constructor(params: WaveSurferParams);

    createMediaElementSource(mediaElement: HTMLMediaElement): void;
    destroy(): void;
    init(): void;
    play(start?: number, end?: number): Promise<void>;
}
