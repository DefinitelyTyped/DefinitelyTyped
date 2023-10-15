import * as Constants from "./Constants";
import { Document } from "./Document";
/**
 * Represents a single guide in the document.
 * @minVersion 23.0
 */
export declare class Guide {
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * The class name of the referenced object: *"Guide"*.
     * @minVersion 23.0
     */
    get typename(): "Guide";
    /**
     * For use with batchPlay operations. This guide ID, along with its document ID
     * can be used to represent this guide for the lifetime of this document or the guide.
     * @minVersion 23.0
     */
    get id(): number;
    /**
     * The ID of the document of this guide.
     * @minVersion 23.0
     */
    get docId(): number;
    /**
     * Owner document of this guide.
     * @minVersion 23.0
     */
    get parent(): Document;
    /**
     * Indicates whether the guide is vertical or horizontal.
     * @minVersion 23.0
     */
    get direction(): Constants.Direction;
    set direction(direction: Constants.Direction);
    /**
     * Position of the guide measured from the ruler origin in pixels. The value can be a decimal.
     *
     * Note: the user can move the ruler origin which will affect the position value of the guides.
     *
     * ***Fixes in Photoshop 24.0:***
     * - *Return correct value when resolution is not 72 PPI*
     *
     * @minVersion 23.0
     */
    get coordinate(): number;
    /**
     * Position of the guide measured from the ruler origin in pixels. The value can be a decimal.
     *
     * Note: the user can move the ruler origin which will affect the position value of the guides.
     *
     * ***Fixes in Photoshop 24.0:***
     * - *Sets correct value when resolution is not 72 PPI*
     */
    set coordinate(coordinate: number);
    /**
     * Deletes the guide from the document.
     * @minVersion 23.0
     */
    delete(): void;
}
