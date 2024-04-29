import { ColorRepresentation, LineSegments } from "three";
import { Octree } from "../math/Octree.js";

export class OctreeHelper extends LineSegments {
    constructor(octree: Octree, color?: ColorRepresentation);

    octree: Octree;
    color: ColorRepresentation;

    /**
     * @default 'OctreeHelper'
     */
    type: "OctreeHelper" | string;

    update(): void;
    dispose(): void;
}
