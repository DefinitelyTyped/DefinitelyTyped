import { CountItem } from "../CountItem";
import { Document } from "../Document";
import { SolidColor } from "../objects/SolidColor";
/**
 * A collections class allowing access to the document's CountItem.
 */
export declare class CountItems extends Array<CountItem> {
    /**
     * @ignore
     */
    private readonly _docId;
    /**
     * @ignore
     */
    private proxy;
    /**
     * @ignore
     * Used to access the CountItems in the collection
     */
    [index: number]: CountItem;
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
     * The CountItems collection's typename.
     * @minVersion 24.1
     */
    get typename(): "CountItems";
    /**
     * Number of [[CountItem]] elements in this collection.
     * @minVersion 24.1
     */
    get length(): number;
    /**
     * The owner [[Document]] of this CountItems collection.
     * @minVersion 24.1
     */
    get parent(): Document;
    /**
     * Adds a new [[CountItem]] to the collection.
     *
     * ```javascript
     * app.activeDocument.countItems.add({x: 20, y: 20});
     * ```
     *
     * @param position: Object with x and y properties.
     * @param position.x: The x coordinate of the new CountItem in pixels.
     * @param position.y: The y coordinate of the new CountItem in pixels.
     * @minVersion 24.1
     */
    add(position: {
        x: number;
        y: number;
    }): CountItem;
    /**
     * Clears all [[CountItem]] objects from this collection.
     *
     * ```javascript
     * app.activeDocument.countItems.removeAllFromActiveGroup();
     * ```
     * @minVersion 24.1
     */
    removeAllFromActiveGroup(): void;
    /**
     * Retrieves all [[CountItem]] objects from this collection.
     *
     * ```javascript
     * app.activeDocument.countItems.getAll();
     * ```
     * @minVersion 24.1
     */
    getAll(): CountItem[];
    /**
     * Creates a new Count Item group.
     * @param groupName: The name of the group to be created.
     * @minVersion 24.1
     */
    createGroup(groupName: string): void;
    /**
     * Renames the currently active Count Item group.
     * @param groupName: The new name of the group.
     * @minVersion 24.1
     */
    renameActiveGroup(groupName: string): void;
    /**
     * Removes a Count Item group by its index.
     * @param index: The index of the group to be removed.
     * @minVersion 24.1
     */
    removeGroupByIndex(index: number): void;
    /**
     * Toggles the visibility of the currently selected Count Item group.
     * @param isVisible: Whether the group should be visible or not.
     * @minVersion 24.1
     */
    toggleActiveGroupVisibility(isVisible: boolean): void;
    /**
     * Activates a Count Item group by its index.
     * @param index: The index of the group to be activated.
     * @minVersion 24.1
     */
    activateGroupByIndex(index: number): void;
    /**
     * Sets the Count Item marker (the dot) size.
     * @param size: The marker size @range 1..10 @default 2
     * @minVersion 24.1
     */
    setActiveMarkerSize(size: number): void;
    /**
     * Sets the Count Item label (the number) size.
     * @param size: The marker size @range 8..72 @default 8
     * @minVersion 24.1
     */
    setActiveLabelSize(size: number): void;
    /**
     * Sets the Color of the Count Item marker and label.
     * @param color: The color as a [[SolidColor]] object.
     * @minVersion 24.1
     */
    setActiveColor(color: SolidColor): void;
}
