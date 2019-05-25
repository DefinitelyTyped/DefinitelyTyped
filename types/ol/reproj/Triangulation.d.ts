import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import Projection from 'ol/proj/Projection';
export interface Triangle {
    source: Coordinate[];
    target: Coordinate[];
}
export default class Triangulation {
    constructor(sourceProj: Projection, targetProj: Projection, targetExtent: Extent, maxSourceExtent: Extent, errorThreshold: number);
    calculateSourceExtent(): Extent;
    getTriangles(): Triangle[];
}
