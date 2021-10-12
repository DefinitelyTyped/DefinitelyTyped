import { Document } from "./Document";
import * as Constants from "./Constants";
/**
 * @ignore
 */
export declare function PSGuide(id: number, docId: number): Guide;
/**
 * Represents a single history state in the History panel
 */
export declare class Guide {
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * The class name of the referenced Guide object
     */
    get typename(): string;
    /**
     * For use with batchPlay operations. This guide ID, along with its document ID
     * can be used to represent this guide for the lifetime of this document or the guide.
     */
    get id(): number;
    /**
     * The ID of the document of this guide.
     */
    get docId(): number;
    /**
     * Owner document of this guide
     */
    get parent(): Document;
    /**
     * Indicates whether the guide is vertical or horizontal
     */
    get direction(): Constants.Direction;
    set direction(direction: Constants.Direction);
    /**
     * Location of the guide from origin of image, in float units.
     *
     * In the future, we will accept a UnitValue here, supporting number input for floatUnit
     */
    get coordinate(): number;
    set coordinate(coordinate: number);
    /**
     * Deletes the guide from the document.
     */
    delete(): void;
}
