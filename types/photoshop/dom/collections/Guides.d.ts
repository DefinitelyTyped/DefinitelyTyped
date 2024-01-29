import * as Constants from "../Constants";
import { Document } from "../Document";
import { Guide } from "../Guide";
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
export declare class Guides extends Array<Guide> {
    /**
     * @ignore
     */
    readonly _docId: number;
    /**
     * @ignore
     */
    private proxy;
    /**
     * Used to access the guides in the collection.
     * @minVersion 23.0
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
     * Number of [[Guide]] elements in this collection.
     * @minVersion 23.0
     */
    get length(): number;
    /**
     * The owner document of this Guide collection.
     * @minVersion 23.0
     */
    get parent(): Document;
    /**
     * Ruler origin defines where coordinates [0,0] are located.
     * Point coordinates are calculated from left top corner of the canvas.
     * @ignore
     */
    /**
     * Adds a guide for the collection at the given coordinate and direction
     *
     * ***Fixes in Photoshop 24.0:***
     * - *Correct coordinate when resolution is not 72 PPI*
     * - *Returns valid instance of guide*
     *
     * @param direction Indicates whether the guide is vertical or horizontal
     * @param coordinate Position of the guide measured from the ruler origin in pixels.
     * The value can be a decimal.
     *
     * Note: the user can move the ruler origin which will affect the position value of the guides.
     * @minVersion 23.0
     */
    add(direction: Constants.Direction, coordinate: number): Guide;
    /**
     * Clears all guides from this collection.
     * @minVersion 23.0
     */
    removeAll(): void;
}
