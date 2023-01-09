import { Mesh, Plane, Vector4, Matrix4, MeshBasicMaterial, BufferGeometry } from '../../../src/Three';

export class ShadowMesh extends Mesh<BufferGeometry, MeshBasicMaterial> {
    readonly isShadowMesh: true;
    meshMatrix: Matrix4;

    constructor(mesh: Mesh);

    update(plane: Plane, lightPosition4D: Vector4): void;
}
