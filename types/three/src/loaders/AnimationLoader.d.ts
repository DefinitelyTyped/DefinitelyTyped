import { LoadingManager } from './LoadingManager.js';
import { Loader } from './Loader.js';
import { AnimationClip } from './../animation/AnimationClip.js';

export class AnimationLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (response: AnimationClip[]) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<AnimationClip[]>;
    parse(json: any): AnimationClip[];
}
