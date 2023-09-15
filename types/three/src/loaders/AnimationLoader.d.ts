import { LoadingManager } from './LoadingManager.js';
import { Loader } from './Loader.js';
import { AnimationClip } from '../animation/AnimationClip.js';

export class AnimationLoader extends Loader<AnimationClip[]> {
    constructor(manager?: LoadingManager);

    parse(json: readonly unknown[]): AnimationClip[];
}
