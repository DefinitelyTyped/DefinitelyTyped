import { Coordinate } from '../coordinate';
import { Extent } from '../extent';
import Projection from '../proj/Projection';

/**
 * Single triangle; consists of 3 source points and 3 target points.
 */
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
        opt_destinationResolution: number,
    );
    /**
     * Calculates extent of the 'source' coordinates from all the triangles.
     */
    calculateSourceExtent(): Extent;
    getTriangles(): Triangle[];
}
