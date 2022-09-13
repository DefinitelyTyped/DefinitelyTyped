import { Guide } from "../Guide";
import * as Constants from "../Constants";
/**
 * A collections class allowing for array access into a document's guides
 *
 * Access this collection through [[Document.guides]] property. For example,
 * following adds a new guide to the collection:
 *
 * ```javascript
 * app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
 * ```
 */
export declare class Guides {
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
    [index: number]: Guide;
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
     * Number of [[Guide]] elements in this collection
     */
    get length(): number;
    /**
     * The owner document of this Guide collection
     */
    get parent(): Document;
    /**
     * Adds a guide for the collection at the given coordinate and direction
     */
    add(direction: Constants.Direction, coordinate: number): void;
    /**
     * Clears all guides from this collection
     */
    removeAll(): void;
}
