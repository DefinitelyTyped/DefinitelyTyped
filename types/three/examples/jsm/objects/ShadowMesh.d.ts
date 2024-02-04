import { BufferGeometry, Matrix4, Mesh, MeshBasicMaterial, Plane, Vector4 } from "../../../src/Three.js";

export class ShadowMesh extends Mesh<BufferGeometry, MeshBasicMaterial> {
    readonly isShadowMesh: true;
    meshMatrix: Matrix4;

    constructor(mesh: Mesh);

    update(plane: Plane, lightPosition4D: Vector4): void;
}
