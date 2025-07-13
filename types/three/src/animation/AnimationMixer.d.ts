import { AnimationBlendMode } from "../constants.js";
import { EventDispatcher } from "../core/EventDispatcher.js";
import { Object3D } from "../core/Object3D.js";
import { AnimationAction } from "./AnimationAction.js";
import { AnimationClip } from "./AnimationClip.js";
import { AnimationObjectGroup } from "./AnimationObjectGroup.js";

export interface AnimationMixerEventMap {
    loop: { action: AnimationAction; loopDelta: number };
    finished: { action: AnimationAction; direction: number };
}

/**
 * `AnimationMixer` is a player for animations on a particular object in
 * the scene. When multiple objects in the scene are animated independently,
 * one `AnimationMixer` may be used for each object.
 */
export class AnimationMixer extends EventDispatcher<AnimationMixerEventMap> {
    /**
     * Constructs a new animation mixer.
     *
     * @param {Object3D} root - The object whose animations shall be played by this mixer.
     */
    constructor(root: Object3D | AnimationObjectGroup);
    /**
     * The global mixer time (in seconds; starting with `0` on the mixer's creation).
     *
     * @default 0
     */
    time: number;
    /**
     * A scaling factor for the global time.
     *
     * Note: Setting this member to `0` and later back to `1` is a
     * possibility to pause/unpause all actions that are controlled by this
     * mixer.
     *
     * @default 1
     */
    timeScale: number;
    /**
     * Returns an instance of {@link AnimationAction} for the passed clip.
     *
     * If an action fitting the clip and root parameters doesn't yet exist, it
     * will be created by this method. Calling this method several times with the
     * same clip and root parameters always returns the same action.
     *
     * @param {AnimationClip|string} clip - An animation clip or alternatively the name of the animation clip.
     * @param {Object3D} [optionalRoot] - An alternative root object.
     * @param {(NormalAnimationBlendMode|AdditiveAnimationBlendMode)} [blendMode] - The blend mode.
     * @return {?AnimationAction} The animation action.
     */
    clipAction(
        clip: AnimationClip,
        optionalRoot?: Object3D | AnimationObjectGroup,
        blendMode?: AnimationBlendMode,
    ): AnimationAction;
    clipAction(
        clip: AnimationClip | string,
        optionalRoot?: Object3D | AnimationObjectGroup,
        blendMode?: AnimationBlendMode,
    ): AnimationAction | null;
    /**
     * Returns an existing animation action for the passed clip.
     *
     * @param {AnimationClip|string} clip - An animation clip or alternatively the name of the animation clip.
     * @param {Object3D} [optionalRoot] - An alternative root object.
     * @return {?AnimationAction} The animation action. Returns `null` if no action was found.
     */
    existingAction(
        clip: AnimationClip | string,
        optionalRoot?: Object3D | AnimationObjectGroup,
    ): AnimationAction | null;
    /**
     * Deactivates all previously scheduled actions on this mixer.
     *
     * @return {AnimationMixer} A reference to thi animation mixer.
     */
    stopAllAction(): AnimationMixer;
    /**
     * Advances the global mixer time and updates the animation.
     *
     * This is usually done in the render loop by passing the delta
     * time from {@link Clock} or {@link Timer}.
     *
     * @param {number} deltaTime - The delta time in seconds.
     * @return {AnimationMixer} A reference to thi animation mixer.
     */
    update(deltaTime: number): AnimationMixer;
    /**
     * Sets the global mixer to a specific time and updates the animation accordingly.
     *
     * This is useful when you need to jump to an exact time in an animation. The
     * input parameter will be scaled by {@link AnimationMixer#timeScale}
     *
     * @param {number} time - The time to set in seconds.
     * @return {AnimationMixer} A reference to thi animation mixer.
     */
    setTime(time: number): AnimationMixer;
    /**
     * Returns this mixer's root object.
     *
     * @return {Object3D} The mixer's root object.
     */
    getRoot(): Object3D | AnimationObjectGroup;
    /**
     * Deallocates all memory resources for a clip. Before using this method make
     * sure to call {@link AnimationAction#stop} for all related actions.
     *
     * @param {AnimationClip} clip - The clip to uncache.
     */
    uncacheClip(clip: AnimationClip): void;
    /**
     * Deallocates all memory resources for a root object. Before using this
     * method make sure to call {@link AnimationAction#stop} for all related
     * actions or alternatively {@link AnimationMixer#stopAllAction} when the
     * mixer operates on a single root.
     *
     * @param {Object3D} root - The root object to uncache.
     */
    uncacheRoot(root: Object3D | AnimationObjectGroup): void;
    /**
     * Deallocates all memory resources for an action. The action is identified by the
     * given clip and an optional root object. Before using this method make
     * sure to call {@link AnimationAction#stop} to deactivate the action.
     *
     * @param {AnimationClip|string} clip - An animation clip or alternatively the name of the animation clip.
     * @param {Object3D} [optionalRoot] - An alternative root object.
     */
    uncacheAction(clip: AnimationClip | string, optionalRoot?: Object3D | AnimationObjectGroup): void;
}
