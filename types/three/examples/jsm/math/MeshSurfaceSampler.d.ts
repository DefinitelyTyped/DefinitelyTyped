import { BufferGeometry, Color, Mesh, Vector2, Vector3 } from "../../../src/Three.js";

export class MeshSurfaceSampler {
    distribution: Float32Array | null;
    geometry: BufferGeometry;
    positionAttribute: Float32Array;
    weightAttribute: string | null;

    constructor(mesh: Mesh);
    binarySearch(x: number): number;
    build(): this;
    sample(targetPosition: Vector3, targetNormal?: Vector3, targetColor?: Color, targetUV?: Vector2): this;
    sampleFace(
        faceIndex: number,
        targetPosition: Vector3,
        targetNormal?: Vector3,
        targetColor?: Color,
        targetUV?: Vector2,
    ): this;
    setWeightAttribute(name: string | null): this;
}
