import { Line2NodeMaterial } from "three/webgpu";
import { LineGeometry } from "../LineGeometry.js";
import { LineSegments2 } from "./LineSegments2.js";

declare class Line2 extends LineSegments2 {
    geometry: LineGeometry;
    material: Line2NodeMaterial;

    readonly isLine2: true;

    constructor(geometry?: LineGeometry, material?: Line2NodeMaterial);
}

export { Line2 };
