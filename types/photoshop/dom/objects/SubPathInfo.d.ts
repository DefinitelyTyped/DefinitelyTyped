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
 */
export declare class SubPathInfo {
    /** True if the path describes an enclosed area. */
    closed: boolean;
    entireSubPath: PathPointInfo[];
    /**
     * The subpath's operation on other subpaths. Specifies how to combine the shapes if
     *  the destination path already has a selection.
     */
    operation: Constants.ShapeOperation;
    /**
     * The class name of the referenced object
     * @default "SubPathInfo"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
