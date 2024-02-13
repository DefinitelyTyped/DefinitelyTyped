import { LineSegments, Object3D } from "../../../src/Three.js";

export class VertexTangentsHelper extends LineSegments {
    constructor(object: Object3D, size?: number, hex?: number);

    object: Object3D;
    size: number;

    update(): void;

    dispose(): void;
}
