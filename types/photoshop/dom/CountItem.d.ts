import { CountItems } from "./collections/CountItems";
export declare class CountItem {
    /**
     * The itemIndex of the CountItem as received from the descriptor.
     */
    readonly itemIndex: number;
    /**
     * The index of the Group the CountItem belongs to.
     */
    readonly groupIndex: number;
    /**
     * The class name of the referenced CountItem object
     * @minVersion 24.1
     */
    get typename(): "CountItem";
    /**
     * The document collection in which we will find this and all other CountItems collected.
     * @minVersion 24.1
     */
    get parent(): CountItems;
    /**
     * The position of the CountItem as an object with x and y properties in pixels.
     * @minVersion 24.1
     */
    get position(): {
        x: number;
        y: number;
    };
    /**
     * Moves the CountItem to a new position.
     * @param position : Object with x and y properties in pixels;
     * @minVersion 24.1
     */
    move(position: {
        x: number;
        y: number;
    }): void;
    /**
     * Removes the CountItem from the document.
     * @minVersion 24.1
     */
    remove(): void;
}
