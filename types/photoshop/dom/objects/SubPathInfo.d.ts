import * as Constants from "../Constants";
import { PathPointInfo } from "./PathPointInfo";
/**
 * An array of [[PathPointInfo]] objects that describes a straight or curved segment of a path, used to create
 * a [[SubPathItem]].
 *
 * Pass an array of these objects to the [[PathItems.add]]() method. This method creates a [[SubPathItem]] object
 * for each `SubPathInfo` object, and creates and returns a new [[PathItem]] object for the path represented by
 * all of the subpaths.
 *
 *  - Use `SubPathInfo` to create subpaths; the properties are read-write.
 *
 *  - Use the [[SubPathItem]] object to retrieve information about existing subpaths. The properties are read-only.
 * @minVersion 23.3
 */
export declare class SubPathInfo {
    private _closed;
    private _entireSubPath;
    private _operation;
    /**
     * True if the path describes an enclosed area.
     * @minVersion 23.3
     */
    get closed(): boolean;
    set closed(value: boolean);
    /**
     * An array composed of the sub-path's [[PathPoint]] objects.
     *
     * @minVersion 23.3
     */
    get entireSubPath(): PathPointInfo[];
    set entireSubPath(value: PathPointInfo[]);
    /**
     * The subpath's operation on other subpaths. Specifies how to combine the shapes if
     * the destination path already has a selection.
     * @minVersion 23.3
     */
    get operation(): Constants.ShapeOperation;
    set operation(value: Constants.ShapeOperation);
    /**
     * The class name of the referenced object: *"SubPathInfo"*.
     * @minVersion 23.3
     */
    get typename(): "SubPathInfo";
    /** @ignore */
    constructor();
}
