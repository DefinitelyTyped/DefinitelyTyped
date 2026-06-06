import { AnimationActionLoopStyles, AnimationBlendMode } from "../constants.js";
import { Object3D } from "../core/Object3D.js";
import { AnimationClip } from "./AnimationClip.js";
import { AnimationMixer } from "./AnimationMixer.js";

/**
 * An instance of `AnimationAction` schedules the playback of an animation which is
 * stored in {@link AnimationClip}.
 */
export class AnimationAction {
    /**
     * Constructs a new animation action.
     *
     * @param {AnimationMixer} mixer - The mixer that is controlled by this action.
     * @param {AnimationClip} clip - The animation clip that holds the actual keyframes.
     * @param {?Object3D} [localRoot=null] - The root object on which this action is performed.
     * @param {(NormalAnimationBlendMode|AdditiveAnimationBlendMode)} [blendMode] - The blend mode.
     */
    constructor(
        mixer: AnimationMixer,
        clip: AnimationClip,
        localRoot?: Object3D | null,
        blendMode?: AnimationBlendMode,
    );
    /**
     * Defines how the animation is blended/combined when two or more animations
     * are simultaneously played.
     */
    blendMode: AnimationBlendMode;
    /**
     * The loop mode, set via {@link AnimationAction#setLoop}.
     *
     * @default LoopRepeat
     */
    loop: AnimationActionLoopStyles;
    /**
     * The local time of this action (in seconds, starting with `0`).
     *
     * The value gets clamped or wrapped to `[0,clip.duration]` (according to the
     * loop state).
     *
     * @default Infinity
     */
    time: number;
    /**
     * Scaling factor for the {@link AnimationAction#time}. A value of `0` causes the
     * animation to pause. Negative values cause the animation to play backwards.
     *
     * @default 1
     */
    timeScale: number;
    /**
     * The degree of influence of this action (in the interval `[0, 1]`). Values
     * between `0` (no impact) and `1` (full impact) can be used to blend between
     * several actions.
     *
     * @default 1
     */
    weight: number;
    /**
     * The number of repetitions of the performed clip over the course of this action.
     * Can be set via {@link AnimationAction#setLoop}.
     *
     * Setting this number has no effect if {@link AnimationAction#loop} is set to
     * `THREE:LoopOnce`.
     *
     * @default Infinity
     */
    repetitions: number;
    /**
     * If set to `true`, the playback of the action is paused.
     *
     * @default false
     */
    paused: boolean;
    /**
     * If set to `false`, the action is disabled so it has no impact.
     *
     * When the action is re-enabled, the animation continues from its current
     * time (setting `enabled` to `false` doesn't reset the action).
     *
     * @default true
     */
    enabled: boolean;
    /**
     * If set to true the animation will automatically be paused on its last frame.
     *
     * If set to false, {@link AnimationAction#enabled} will automatically be switched
     * to `false` when the last loop of the action has finished, so that this action has
     * no further impact.
     *
     * Note: This member has no impact if the action is interrupted (it
     * has only an effect if its last loop has really finished).
     *
     * @default false
     */
    clampWhenFinished: boolean;
    /**
     * Enables smooth interpolation without separate clips for start, loop and end.
     *
     * @default true
     */
    zeroSlopeAtStart: boolean;
    /**
     * Enables smooth interpolation without separate clips for start, loop and end.
     *
     * @default true
     */
    zeroSlopeAtEnd: boolean;
    /**
     * Starts the playback of the animation.
     *
     * @return {AnimationAction} A reference to this animation action.
     */
    play(): AnimationAction;
    /**
     * Stops the playback of the animation.
     *
     * @return {AnimationAction} A reference to this animation action.
     */
    stop(): AnimationAction;
    /**
     * Resets the playback of the animation.
     *
     * @return {AnimationAction} A reference to this animation action.
     */
    reset(): AnimationAction;
    /**
     * Returns `true` if the animation is running.
     *
     * @return {boolean} Whether the animation is running or not.
     */
    isRunning(): boolean;
    /**
     * Returns `true` when {@link AnimationAction#play} has been called.
     *
     * @return {boolean} Whether the animation is scheduled or not.
     */
    isScheduled(): boolean;
    /**
     * Defines the time when the animation should start.
     *
     * @param {number} time - The start time in seconds.
     * @return {AnimationAction} A reference to this animation action.
     */
    startAt(time: number): AnimationAction;
    /**
     * Configures the loop settings for this action.
     *
     * @param {(LoopRepeat|LoopOnce|LoopPingPong)} mode - The loop mode.
     * @param {number} repetitions - The number of repetitions.
     * @return {AnimationAction} A reference to this animation action.
     */
    setLoop(mode: AnimationActionLoopStyles, repetitions: number): AnimationAction;
    /**
     * Sets the effective weight of this action.
     *
     * An action has no effect and thus an effective weight of zero when the
     * action is disabled.
     *
     * @param {number} weight - The weight to set.
     * @return {AnimationAction} A reference to this animation action.
     */
    setEffectiveWeight(weight: number): AnimationAction;
    /**
     * Returns the effective weight of this action.
     *
     * @return {number} The effective weight.
     */
    getEffectiveWeight(): number;
    /**
     * Fades the animation in by increasing its weight gradually from `0` to `1`,
     * within the passed time interval.
     *
     * @param {number} duration - The duration of the fade.
     * @return {AnimationAction} A reference to this animation action.
     */
    fadeIn(duration: number): AnimationAction;
    /**
     * Fades the animation out by decreasing its weight gradually from `1` to `0`,
     * within the passed time interval.
     *
     * @param {number} duration - The duration of the fade.
     * @return {AnimationAction} A reference to this animation action.
     */
    fadeOut(duration: number): AnimationAction;
    /**
     * Causes this action to fade in and the given action to fade out,
     * within the passed time interval.
     *
     * @param {AnimationAction} fadeOutAction - The animation action to fade out.
     * @param {number} duration - The duration of the fade.
     * @param {boolean} [warp=false] - Whether warping should be used or not.
     * @return {AnimationAction} A reference to this animation action.
     */
    crossFadeFrom(fadeOutAction: AnimationAction, duration: number, warp?: boolean): AnimationAction;
    /**
     * Causes this action to fade out and the given action to fade in,
     * within the passed time interval.
     *
     * @param {AnimationAction} fadeInAction - The animation action to fade in.
     * @param {number} duration - The duration of the fade.
     * @param {boolean} [warp=false] - Whether warping should be used or not.
     * @return {AnimationAction} A reference to this animation action.
     */
    crossFadeTo(fadeInAction: AnimationAction, duration: number, warp?: boolean): AnimationAction;
    /**
     * Stops any fading which is applied to this action.
     *
     * @return {AnimationAction} A reference to this animation action.
     */
    stopFading(): AnimationAction;
    /**
     * Sets the effective time scale of this action.
     *
     * An action has no effect and thus an effective time scale of zero when the
     * action is paused.
     *
     * @param {number} timeScale - The time scale to set.
     * @return {AnimationAction} A reference to this animation action.
     */
    setEffectiveTimeScale(timeScale: number): AnimationAction;
    /**
     * Returns the effective time scale of this action.
     *
     * @return {number} The effective time scale.
     */
    getEffectiveTimeScale(): number;
    /**
     * Sets the duration for a single loop of this action.
     *
     * @param {number} duration - The duration to set.
     * @return {AnimationAction} A reference to this animation action.
     */
    setDuration(duration: number): AnimationAction;
    /**
     * Synchronizes this action with the passed other action.
     *
     * @param {AnimationAction} action - The action to sync with.
     * @return {AnimationAction} A reference to this animation action.
     */
    syncWith(action: AnimationAction): AnimationAction;
    /**
     * Decelerates this animation's speed to `0` within the passed time interval.
     *
     * @param {number} duration - The duration.
     * @return {AnimationAction} A reference to this animation action.
     */
    halt(duration: number): AnimationAction;
    /**
     * Changes the playback speed, within the passed time interval, by modifying
     * {@link AnimationAction#timeScale} gradually from `startTimeScale` to
     * `endTimeScale`.
     *
     * @param {number} startTimeScale - The start time scale.
     * @param {number} endTimeScale - The end time scale.
     * @param {number} duration - The duration.
     * @return {AnimationAction} A reference to this animation action.
     */
    warp(startTimeScale: number, endTimeScale: number, duration: number): AnimationAction;
    /**
     * Stops any scheduled warping which is applied to this action.
     *
     * @return {AnimationAction} A reference to this animation action.
     */
    stopWarping(): AnimationAction;
    /**
     * Returns the animation mixer of this animation action.
     *
     * @return {AnimationMixer} The animation mixer.
     */
    getMixer(): AnimationMixer;
    /**
     * Returns the animation clip of this animation action.
     *
     * @return {AnimationClip} The animation clip.
     */
    getClip(): AnimationClip;
    /**
     * Returns the root object of this animation action.
     *
     * @return {Object3D} The root object.
     */
    getRoot(): Object3D;
    _scheduleFading(duration: number, weightNow: number, weightThen: number): this;
}
