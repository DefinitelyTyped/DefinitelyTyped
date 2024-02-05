import { LineSegments, Object3D } from "../../../src/Three.js";

export class VertexNormalsHelper extends LineSegments {
    constructor(object: Object3D, size?: number, hex?: number);

    object: Object3D;
    size: number;

    update(): void;

    dispose(): void;
}
