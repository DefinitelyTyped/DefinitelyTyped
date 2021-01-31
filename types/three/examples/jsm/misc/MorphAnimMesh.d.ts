import { AnimationAction, AnimationMixer, BufferGeometry, Material, Mesh } from '../../../src/Three';

export class MorphAnimMesh<Geom extends BufferGeometry, Mat extends Material[] | Material> extends Mesh {
    constructor(geometry: Geom, material: Mat);
    mixer: AnimationMixer;
    activeAction: AnimationAction | null;

    setDirectionForward(): void;
    setDirectionBackward(): void;
    playAnimation(label: string, fps: number): void;
    updateAnimation(delta: number): void;
    copy<SourceMesh extends MorphAnimMesh<BufferGeometry, Material>>(source: SourceMesh): this;
}
