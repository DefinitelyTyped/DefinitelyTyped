import { AnimationClip } from "../animation/AnimationClip.js";
import { Loader } from "./Loader.js";
import { LoadingManager } from "./LoadingManager.js";

export class AnimationLoader extends Loader<AnimationClip[]> {
    constructor(manager?: LoadingManager);

    parse(json: readonly unknown[]): AnimationClip[];
}
