import { PathItem } from "../PathItem";
import { SubPathItem } from "../SubPathItem";
/**
 * A collection of [[SubPathItem]] objects that make up a [[PathItem]]. Access this object in the
 * [[PathItem.subPathItems]] collection property.
 *
 *  - Use [[SubPathInfo]] to create subpaths; the properties are writeable.
 *  - Use the [[SubPathItem]] object to retrieve information about existing subpaths. The properties are read-only.
 */
export declare class SubPathItems extends Array<SubPathItem> {
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
    private proxy;
    /**
     * Used to access the guides in the collection.
     * @minVersion 23.3
     */
    [index: number]: SubPathItem;
    /**
     * @ignore
     */
    constructor(pathId: number, docId: number);
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
     * The PathItem that contains this SubPathItem.
     * @minVersion 23.3
     */
    get parent(): PathItem;
}
