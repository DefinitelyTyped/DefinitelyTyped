import { Line } from "../../../src/Three.js";

import { LineSegmentsGeometry } from "./LineSegmentsGeometry.js";

export class LineGeometry extends LineSegmentsGeometry {
    constructor();
    readonly isLineGeometry: true;

    fromLine(line: Line): this;
}
