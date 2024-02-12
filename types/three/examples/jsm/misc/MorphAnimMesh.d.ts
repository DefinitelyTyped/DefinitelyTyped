import { AnimationAction, AnimationMixer, BufferGeometry, Material, Mesh } from "../../../src/Three.js";

export class MorphAnimMesh extends Mesh {
    constructor(geometry: BufferGeometry, material: Material);
    mixer: AnimationMixer;
    activeAction: AnimationAction | null;

    setDirectionForward(): void;
    setDirectionBackward(): void;
    playAnimation(label: string, fps: number): void;
    updateAnimation(delta: number): void;
    copy(source: MorphAnimMesh, recursive?: boolean): this;
}
