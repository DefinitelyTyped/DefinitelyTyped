import { Material } from './../materials/Material';
import { Matrix4 } from './../math/Matrix4';
import { Vector3 } from './../math/Vector3';
import { Skeleton } from './Skeleton';
import { Mesh } from './Mesh';
import { BufferGeometry } from '../core/BufferGeometry';

export class SkinnedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> extends Mesh<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial, useVertexTexture?: boolean);

    bindMode: string;
    bindMatrix: Matrix4;
    bindMatrixInverse: Matrix4;
    skeleton: Skeleton;
    readonly isSkinnedMesh: true;

    bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;
    pose(): void;
    normalizeSkinWeights(): void;
    updateMatrixWorld(force?: boolean): void;
    boneTransform(index: number, target: Vector3): Vector3;
}
