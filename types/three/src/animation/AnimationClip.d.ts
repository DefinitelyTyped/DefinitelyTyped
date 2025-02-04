import { AnimationBlendMode } from "../constants.js";
import { Object3D } from "../core/Object3D.js";
import { Vector3 } from "../math/Vector3.js";
import { Bone } from "../objects/Bone.js";
import { Mesh } from "../objects/Mesh.js";
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

export class AnimationClip {
    constructor(name?: string, duration?: number, tracks?: KeyframeTrack[], blendMode?: AnimationBlendMode);

    name: string;
    tracks: KeyframeTrack[];

    /**
     * @default THREE.NormalAnimationBlendMode
     */
    blendMode: AnimationBlendMode;

    /**
     * @default -1
     */
    duration: number;
    uuid: string;
    results: any[];

    resetDuration(): AnimationClip;
    trim(): AnimationClip;
    validate(): boolean;
    optimize(): AnimationClip;
    clone(): this;
    toJSON(): AnimationClipJSON;

    static CreateFromMorphTargetSequence(
        name: string,
        morphTargetSequence: MorphTarget[],
        fps: number,
        noLoop: boolean,
    ): AnimationClip;
    static findByName(objectOrClipArray: AnimationClip[] | Object3D | Mesh, name: string): AnimationClip;
    static CreateClipsFromMorphTargetSequences(
        morphTargets: MorphTarget[],
        fps: number,
        noLoop: boolean,
    ): AnimationClip[];
    static parse(json: AnimationClipJSON): AnimationClip;
    static parseAnimation(animation: AnimationClipJSON, bones: Bone[]): AnimationClip;
    static toJSON(clip: AnimationClip): AnimationClipJSON;
}
