import { PathItem } from "../PathItem";
import { SubPathInfo } from "../objects/SubPathInfo";
/**
 * The collection of [[PathItem]] objects in a document.
 *
 * Access through the [[Document.pathItems]] collection property. To create new paths,
 * see [[PathPointInfo]] and [[SubPathInfo]] classes and pass them to [[PathItems.add]]() method.
 *
 * *Added in Photoshop 23.3*
 */
export declare class PathItems {
    /**
     * @ignore
     */
    readonly _docId: number;
    /**
     * @ignore
     */
    private proxy;
    /**
     * Used to access the guides in the collection
     */
    [index: number]: PathItem;
    /**
     * @ignore
     */
    constructor(docId: number);
    /**
     * @ignore
     */
    handler(): {
        get: (obj: any, key: any) => any;
    };
    /**
     * Number of [[PathItem]] objects in this collection
     */
    get length(): number;
    /**
     * The owner document of this PathItem collection
     */
    get parent(): Document;
    /**
     * Creates a new path item object and adds it to this collection.
     *
     * A new [[SubPathItem]] object is created for each [[SubPathInfo]] object provided in `entirePath`,
     * and those [[SubPathItem]] objects are added to the [[PathItem.subPathItems]] collection of the returned
     * [[PathItem]].
     */
    add(name: string, entirePath: SubPathInfo[]): PathItem;
    /**
     * Clears all guides from this collection
     */
    removeAll(): void;
    getByName(name: string): PathItem;
}
