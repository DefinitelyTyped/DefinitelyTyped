import { ColorRepresentation, LineSegments } from '../../../src/Three';
import { Octree } from '../math/Octree';

export class OctreeHelper extends LineSegments {
    constructor(octree: Octree, color: ColorRepresentation);

    octree: Octree;
    color: ColorRepresentation;

    /**
     * @default 'OctreeHelper'
     */
    type: 'OctreeHelper' | string;
}
