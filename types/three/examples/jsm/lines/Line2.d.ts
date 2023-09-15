import { LineGeometry } from './LineGeometry.js';
import { LineSegments2 } from './LineSegments2.js';
import { LineMaterial } from './LineMaterial.js';

export class Line2 extends LineSegments2 {
    geometry: LineGeometry;
    material: LineMaterial;

    constructor(geometry?: LineGeometry, material?: LineMaterial);
    readonly isLine2: true;
}
