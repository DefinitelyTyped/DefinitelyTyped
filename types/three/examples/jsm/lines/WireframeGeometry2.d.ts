import { BufferGeometry } from "three";

import { LineSegmentsGeometry } from "./LineSegmentsGeometry.js";

export class WireframeGeometry2 extends LineSegmentsGeometry {
    constructor(geometry: BufferGeometry);
    readonly isWireframeGeometry2: boolean;
}
