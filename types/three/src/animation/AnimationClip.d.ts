import { AnimationBlendMode } from "../constants.js";
import { Object3D } from "../core/Object3D.js";
import { Vector3 } from "../math/Vector3.js";
import { Bone } from "../objects/Bone.js";
import { KeyframeTrack, KeyframeTrackJSON } from "./KeyframeTrack.js";

export interface AnimationClipJSON {
    name: string;
    duration: number;
    tracks: KeyframeTrackJSON[];
    uuid: string;
    blendMode: AnimationBlendMode;
}

export interface MorphTarget {
    name: string;
    vertices: Vector3[];
}

/**
 * A reusable set of keyframe tracks which represent an animation.
 */
export class AnimationClip {
    /**
     * Factory method for creating an animation clip from the given JSON.
     *
     * @static
     * @param {Object} json - The serialized animation clip.
     * @return {AnimationClip} The new animation clip.
     */
    static parse(json: AnimationClipJSON): AnimationClip;
    /**
     * Serializes the given animation clip into JSON.
     *
     * @static
     * @param {AnimationClip} clip - The animation clip to serialize.
     * @return {Object} The JSON object.
     */
    static toJSON(clip: AnimationClip): AnimationClipJSON;
    /**
     * Returns a new animation clip from the passed morph targets array of a
     * geometry, taking a name and the number of frames per second.
     *
     * Note: The fps parameter is required, but the animation speed can be
     * overridden via {@link AnimationAction#setDuration}.
     *
     * @static
     * @param {string} name - The name of the animation clip.
     * @param {Array<Object>} morphTargetSequence - A sequence of morph targets.
     * @param {number} fps - The Frames-Per-Second value.
     * @param {boolean} noLoop - Whether the clip should be no loop or not.
     * @return {AnimationClip} The new animation clip.
     */
    static CreateFromMorphTargetSequence(
        name: string,
        morphTargetSequence: Array<MorphTarget>,
        fps: number,
        noLoop: boolean,
    ): AnimationClip;
    /**
     * Searches for an animation clip by name, taking as its first parameter
     * either an array of clips, or a mesh or geometry that contains an
     * array named "animations" property.
     *
     * @static
     * @param {(Array<AnimationClip>|Object3D)} objectOrClipArray - The array or object to search through.
     * @param {string} name - The name to search for.
     * @return {?AnimationClip} The found animation clip. Returns `null` if no clip has been found.
     */
    static findByName(objectOrClipArray: Array<AnimationClip> | Object3D, name: string): AnimationClip | null;
    /**
     * Returns an array of new AnimationClips created from the morph target
     * sequences of a geometry, trying to sort morph target names into
     * animation-group-based patterns like "Walk_001, Walk_002, Run_001, Run_002...".
     *
     * See {@link MD2Loader#parse} as an example for how the method should be used.
     *
     * @static
     * @param {Array<Object>} morphTargets - A sequence of morph targets.
     * @param {number} fps - The Frames-Per-Second value.
     * @param {boolean} noLoop - Whether the clip should be no loop or not.
     * @return {Array<AnimationClip>} An array of new animation clips.
     */
    static CreateClipsFromMorphTargetSequences(
        morphTargets: Array<MorphTarget>,
        fps: number,
        noLoop: boolean,
    ): Array<AnimationClip>;
    /**
     * Parses the `animation.hierarchy` format and returns a new animation clip.
     *
     * @static
     * @deprecated since r175.
     * @param {Object} animation - A serialized animation clip as JSON.
     * @param {Array<Bones>} bones - An array of bones.
     * @return {?AnimationClip} The new animation clip.
     */
    static parseAnimation(animation: AnimationClipJSON, bones: Array<Bone>): AnimationClip | null;
    /**
     * Constructs a new animation clip.
     *
     * Note: Instead of instantiating an AnimationClip directly with the constructor, you can
     * use the static interface of this class for creating clips. In most cases though, animation clips
     * will automatically be created by loaders when importing animated 3D assets.
     *
     * @param {string} [name=''] - The clip's name.
     * @param {number} [duration=-1] - The clip's duration in seconds. If a negative value is passed,
     * the duration will be calculated from the passed keyframes.
     * @param {Array<KeyframeTrack>} tracks - An array of keyframe tracks.
     * @param {(NormalAnimationBlendMode|AdditiveAnimationBlendMode)} [blendMode=NormalAnimationBlendMode] - Defines how the animation
     * is blended/combined when two or more animations are simultaneously played.
     */
    constructor(name?: string, duration?: number, tracks?: Array<KeyframeTrack>, blendMode?: AnimationBlendMode);
    /**
     * The clip's name.
     */
    name: string;
    /**
     *  An array of keyframe tracks.
     */
    tracks: Array<KeyframeTrack>;
    /**
     * The clip's duration in seconds.
     */
    duration: number;
    /**
     * Defines how the animation is blended/combined when two or more animations
     * are simultaneously played.
     */
    blendMode: AnimationBlendMode;
    /**
     * The UUID of the animation clip.
     */
    readonly uuid: string;
    /**
     * Sets the duration of this clip to the duration of its longest keyframe track.
     *
     * @return {AnimationClip} A reference to this animation clip.
     */
    resetDuration(): AnimationClip;
    /**
     * Trims all tracks to the clip's duration.
     *
     * @return {AnimationClip} A reference to this animation clip.
     */
    trim(): AnimationClip;
    /**
     * Performs minimal validation on each track in the clip. Returns `true` if all
     * tracks are valid.
     *
     * @return {boolean} Whether the clip's keyframes are valid or not.
     */
    validate(): boolean;
    /**
     * Optimizes each track by removing equivalent sequential keys (which are
     * common in morph target sequences).
     *
     * @return {AnimationClip} A reference to this animation clip.
     */
    optimize(): AnimationClip;
    /**
     * Returns a new animation clip with copied values from this instance.
     *
     * @return {AnimationClip} A clone of this instance.
     */
    clone(): this;
    /**
     * Serializes this animation clip into JSON.
     *
     * @return {Object} The JSON object.
     */
    toJSON(): AnimationClipJSON;
}
