import { SubPathItem } from "../SubPathItem";
import { PathItem } from "../PathItem";
/**
 * A collection of [[SubPathItem]] objects that make up a [[PathItem]]. Access this object in the
 * [[PathItem.subPathItems]] collection property.
 *
 *  - Use [[SubPathInfo]] to create subpaths; the properties are writeable.
 *  - Use the [[SubPathItem]] object to retrieve information about existing subpaths. The properties are read-only.
 *
 * *Added in Photoshop 23.3*
 */
export declare class SubPathItems {
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
     * Used to access the guides in the collection
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
     * Number of elements in this collection
     */
    get length(): number;
    /**
     * The containing path item.
     */
    get parent(): PathItem;
}
