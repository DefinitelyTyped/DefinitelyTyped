import { Coordinate } from '../coordinate';
import { Extent } from '../extent';
import Projection from '../proj/Projection';

export interface Triangle {
    source: Coordinate[];
    target: Coordinate[];
}
export default class Triangulation {
    constructor(
        sourceProj: Projection,
        targetProj: Projection,
        targetExtent: Extent,
        maxSourceExtent: Extent,
        errorThreshold: number,
    );
    calculateSourceExtent(): Extent;
    getTriangles(): Triangle[];
}
