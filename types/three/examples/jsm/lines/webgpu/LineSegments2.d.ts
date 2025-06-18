import { Line2NodeMaterial, Mesh } from "three/webgpu";
import { LineSegmentsGeometry } from "../LineSegmentsGeometry.js";

declare class LineSegments2 extends Mesh {
    geometry: LineSegmentsGeometry;
    material: Line2NodeMaterial;

    readonly isLineSegments2: true;

    constructor(geometry?: LineSegmentsGeometry, material?: Line2NodeMaterial);

    computeLineDistances(): this;
}

export { LineSegments2 };
