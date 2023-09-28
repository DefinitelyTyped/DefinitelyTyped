import { AnimationClip, Object3D, Skeleton } from '../../../src/Three.js';

export function clone(source: Object3D): Object3D;

export function retarget(target: Object3D | Skeleton, source: Object3D | Skeleton, options: {}): void;

export function retargetClip(
    target: Skeleton | Object3D,
    source: Skeleton | Object3D,
    clip: AnimationClip,
    options: {},
): AnimationClip;
