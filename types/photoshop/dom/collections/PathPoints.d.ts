import { PathPoint } from "../PathPoint";
import { SubPathItem } from "../SubPathItem";
/**
 * A collection of [[PathPoint]] objects that define a subpath, kept in the [[SubPathItem.pathPoints]] property.
 */
export declare class PathPoints extends Array<PathPoint> {
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
     * Used to access the guides in the collection.
     * @minVersion 23.3
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
     * Number of elements in this collection.
     * @minVersion 23.3
     */
    get length(): number;
    /**
     * The SubPathItem that contains this PathPoints collection.
     * @minVersion 23.3
     */
    get parent(): SubPathItem;
}
