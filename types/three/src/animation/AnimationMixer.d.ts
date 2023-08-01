import { AnimationClip } from './AnimationClip.js';
import { AnimationAction } from './AnimationAction.js';
import { AnimationBlendMode } from '../constants.js';
import { EventDispatcher } from './../core/EventDispatcher.js';
import { Object3D } from '../core/Object3D.js';
import { AnimationObjectGroup } from './AnimationObjectGroup.js';

export class AnimationMixer extends EventDispatcher {
    constructor(root: Object3D | AnimationObjectGroup);

    /**
     * @default 0
     */
    time: number;

    /**
     * @default 1.0
     */
    timeScale: number;

    clipAction(
        clip: AnimationClip,
        root?: Object3D | AnimationObjectGroup,
        blendMode?: AnimationBlendMode,
    ): AnimationAction;
    existingAction(clip: AnimationClip, root?: Object3D | AnimationObjectGroup): AnimationAction | null;
    stopAllAction(): AnimationMixer;
    update(deltaTime: number): AnimationMixer;
    setTime(timeInSeconds: number): AnimationMixer;
    getRoot(): Object3D | AnimationObjectGroup;
    uncacheClip(clip: AnimationClip): void;
    uncacheRoot(root: Object3D | AnimationObjectGroup): void;
    uncacheAction(clip: AnimationClip, root?: Object3D | AnimationObjectGroup): void;
}
