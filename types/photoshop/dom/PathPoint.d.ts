import * as Constants from "./Constants";
import { SubPathItem } from "./SubPathItem";
/**
 * Represents the anchor and control-handle endpoints for a path segment. Each point (the anchor point, left-direction
 *  point, and right-direction point) is an array containing X and Y position coordinates.
 *
 *  - Use the `PathPoint` object to retrieve information about the points that describe existing path segments. The
 * properties are read-only. Access [[PathPoint]] objects through the [[SubPathItem.pathPoints]] property.
 *
 *  - Use [[PathPointInfo]] with [[PathItems.add]]() to create path points. The properties are writeable.
 *
 * For paths that are straight segments (not curved), the coordinates of all three points are the same. For curved
 * segments, the coordinates are different. The difference between the anchor point and the left or right
 * direction points determines the arc of the curve. Use the left direction point to bend the curve "outward" or
 * make it convex; or use the right direction point to bend the curve "inward" or make it concave.
 *
 * *Added in Photoshop 23.3*
 */
export declare class PathPoint {
    /**
     * @ignore
     */
    constructor(index: number, subPathIndex: number, pathId: number, docId: number);
    /**
     * The class name of the referenced object: *"PathPoint"*.
     * @minVersion 23.3
     */
    get typename(): "PathPoint";
    /**
     * The containing SubPath object.
     * @minVersion 23.3
     */
    get parent(): SubPathItem;
    /**
     * The coordinates of the anchor point of the curve, in `[horizontal, vertical]` format.
     * @minVersion 23.3
     */
    get anchor(): number[];
    /**
     * The role (corner or smooth) this point plays in the containing path segment.
     * @minVersion 23.3
     */
    get kind(): Constants.PointKind;
    /**
     * The location of the left-direction endpoint ('in' position), in `[horizontal, vertical]` format.
     * @minVersion 23.3
     */
    get leftDirection(): number[];
    /**
     * The location of the right-direction endpoint ('out' position), in `[horizontal, vertical]` format.
     * @minVersion 23.3
     */
    get rightDirection(): number[];
}
