import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';

export class AudioLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (audioBuffer: AudioBuffer) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<AudioBuffer>;
}
