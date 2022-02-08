import { PathPoint } from "../PathPoint";
import { SubPathItem } from "../SubPathItem";
/**
 * A collection of [[PathPoint]] objects that define a subpath, kept in the [[SubPathItem.pathPoints]] property.
 *
 * *Added in Photoshop 23.3*
 */
export declare class PathPoints {
    /**
     * @ignore
     */
    readonly _docId: number;
    /**
     * @ignore
     */
    readonly _pathId: number;
    /**
     * @ignore
     */
    readonly _subPathIndex: number;
    /**
     * @ignore
     */
    private proxy;
    /**
     * Used to access the guides in the collection
     */
    [index: number]: PathPoint;
    /**
     * @ignore
     */
    constructor(index: number, pathId: number, docId: number);
    /**
     * @ignore
     */
    handler(): {
        get: (obj: any, key: any) => any;
    };
    /**
     * Number of elements in this collection
     */
    get length(): number;
    /**
     * The containing subpath object.
     */
    get parent(): SubPathItem;
}
