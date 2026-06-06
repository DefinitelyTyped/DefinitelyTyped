import { AnimationClip, Bone, Object3D, Skeleton, Vector3 } from "three";

export interface RetargetOptions {
    preserveBoneMatrix?: boolean | undefined;
    preserveHipPosition?: boolean | undefined;
    useTargetMatrix?: boolean | undefined;
    hip?: string | undefined;
    hipInfluence?: Vector3 | undefined;
    scale?: number | undefined;
    names?: { [boneName: string]: string } | undefined;
    getBoneName?: ((bone: Bone) => string) | undefined;
    hipPosition?: Vector3 | undefined;
}

declare function retarget(target: Object3D | Skeleton, source: Object3D | Skeleton, options?: RetargetOptions): void;

export interface RetargetClipOptions extends RetargetOptions {
    useFirstFramePosition?: boolean | undefined;
    fps?: number | undefined;
    trim?: [number, number] | undefined;
}

declare function retargetClip(
    target: Skeleton | Object3D,
    source: Skeleton | Object3D,
    clip: AnimationClip,
    options?: RetargetClipOptions,
): AnimationClip;

declare function clone(source: Object3D): Object3D;

export { clone, retarget, retargetClip };
