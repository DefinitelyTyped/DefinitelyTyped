import { LineGeometry } from "./LineGeometry.js";
import { LineMaterial } from "./LineMaterial.js";
import { LineSegments2 } from "./LineSegments2.js";

export class Line2 extends LineSegments2 {
    geometry: LineGeometry;
    material: LineMaterial;

    constructor(geometry?: LineGeometry, material?: LineMaterial);
    readonly isLine2: true;
}
