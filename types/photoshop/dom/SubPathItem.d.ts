import { PathPoints } from "./collections/PathPoints";
import * as Constants from "./Constants";
import { PathItem } from "./PathItem";
/**
 * Represents a subpath; a collection of subpaths make up a [[PathItem]].
 *
 * Create these objects by passing [[SubPathInfo]] objects to [[PathItems.add]]() method. This method creates a
 * `SubPathItem` object for each [[SubPathInfo]] object, and creates and then returns a new [[PathItem]] object for the
 * path represented by all of the subpaths. Access these objects in the [[PathItem.subPathItems]] collection.
 *
 *  - Use the [[SubPathItem]] object to retrieve information about existing subpaths. The properties are read-only.
 *  - Use [[SubPathInfo]] to create subpaths; the properties are read-write.
 *
 * *Added in Photoshop 23.3*
 */
export declare class SubPathItem {
    /**
     * @ignore
     */
    constructor(index: number, pathId: number, docId: number);
    /**
     * The class name of the referenced object: *"SubPathItem"*.
     * @minVersion 23.3
     */
    get typename(): "SubPathItem";
    /**
     * The path that contains this subpath.
     * @minVersion 23.3
     */
    get parent(): PathItem;
    /**
     * How this `SubPathItem` behaves when it intersects another. Specifies how to combine the shapes
     * if the destination path already has a selection.
     * @minVersion 23.3
     */
    get operation(): Constants.ShapeOperation;
    /**
     * True if the path is closed.
     * @minVersion 23.3
     */
    get closed(): boolean;
    /**
     * The collection of the [[PathPoint]]s on this `SubPathItem`.
     * @minVersion 23.3
     */
    get pathPoints(): PathPoints;
}
