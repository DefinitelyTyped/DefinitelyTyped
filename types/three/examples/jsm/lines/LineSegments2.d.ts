import { Mesh } from '../../../src/Three.js';

import { LineMaterial } from './LineMaterial.js';
import { LineSegmentsGeometry } from './LineSegmentsGeometry.js';

export class LineSegments2 extends Mesh {
    geometry: LineSegmentsGeometry;
    material: LineMaterial;

    constructor(geometry?: LineSegmentsGeometry, material?: LineMaterial);
    readonly isLineSegments2: true;

    computeLineDistances(): this;
}
