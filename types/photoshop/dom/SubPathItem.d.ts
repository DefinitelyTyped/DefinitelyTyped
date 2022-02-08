import * as Constants from "./Constants";
import { PathItem } from "./PathItem";
import { PathPoints } from "./collections/PathPoints";
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
     * The class name of the referenced PathItem object
     */
    get typename(): string;
    /**
     * The path this subpath belongs to
     */
    get parent(): PathItem;
    /**
     * How this `SubPathItem` behaves when it intersects another. Specifies how to combine the shapes
     * if the destination path already has a selection.
     */
    get operation(): Constants.ShapeOperation;
    /**
     * True if the path is closed.
     */
    get closed(): boolean;
    /**
     * The collection of the [[PathPoint]]s on this `SubPathItem`.
     */
    get pathPoints(): PathPoints;
}
