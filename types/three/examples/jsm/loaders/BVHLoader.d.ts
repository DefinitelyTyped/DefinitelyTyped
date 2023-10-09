import { AnimationClip, Skeleton, Loader, LoadingManager } from '../../../src/Three.js';

export interface BVH {
    clip: AnimationClip;
    skeleton: Skeleton;
}

export class BVHLoader extends Loader<BVH> {
    constructor(manager?: LoadingManager);
    animateBonePositions: boolean;
    animateBoneRotations: boolean;

    parse(text: string): BVH;
}
