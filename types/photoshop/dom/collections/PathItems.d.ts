import { SubPathInfo } from "../objects/SubPathInfo";
import { PathItem } from "../PathItem";
/**
 * The collection of [[PathItem]] objects in a document.
 *
 * Access through the [[Document.pathItems]] collection property. To create new paths,
 * see [[PathPointInfo]] and [[SubPathInfo]] classes and pass them to [[PathItems.add]]() method.
 */
export declare class PathItems extends Array<PathItem> {
    /**
     * @ignore
     */
    readonly _docId: number;
    /**
     * @ignore
     */
    private proxy;
    /**
     * Used to access the paths in the collection.
     * @minVersion 23.3
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
     * Number of [[PathItem]] objects in this collection.
     * @minVersion 23.3
     */
    get length(): number;
    /**
     * The owner document of this PathItem collection.
     * @minVersion 23.3
     */
    get parent(): Document;
    /**
     * Creates a new path item object and adds it to this collection.
     *
     * A new [[SubPathItem]] object is created for each [[SubPathInfo]] object provided in `entirePath`,
     * and those [[SubPathItem]] objects are added to the [[PathItem.subPathItems]] collection of the returned
     * [[PathItem]].
     * @minVersion 23.3
     */
    add(name: string, entirePath: SubPathInfo[]): PathItem;
    /**
     * Removes all paths from this collection.
     * @minVersion 23.3
     */
    removeAll(): void;
    /**
     * Retrieve the first PathItem matching the given name.
     * @param name Name to find
     * @minVersion 23.3
     */
    getByName(name: string): PathItem;
}
