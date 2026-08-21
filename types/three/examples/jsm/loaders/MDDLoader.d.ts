import { AnimationClip, BufferAttribute, Loader, LoadingManager } from "three";

export interface MDD {
    morphTargets: BufferAttribute[];
    clip: AnimationClip;
}

export class MDDLoader extends Loader<MDD> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): MDD;
}
