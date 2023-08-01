import { Mesh } from '../../../src/Three.js';

import { LineMaterial } from './LineMaterial.js';
import { LineSegmentsGeometry } from './LineSegmentsGeometry.js';

export class Wireframe extends Mesh {
    constructor(geometry?: LineSegmentsGeometry, material?: LineMaterial);
    readonly isWireframe: true;

    computeLineDistances(): this;
}
