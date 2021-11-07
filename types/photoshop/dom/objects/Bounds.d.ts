/**
 * Defines a rectangle. This is a WIP
 *
 * @targetfolder objects
 * @optionobject
 */
export declare class Bounds {
    /**
     * Coordinates of the left edge
     */
    left: number;
    /**
     * Coordinates of the right edge
     */
    right: number;
    /**
     * Coordinates of the top edge
     */
    top: number;
    /**
     * Coordinates of the bottom edge
     */
    bottom: number;
    /**
     * Calculated width
     */
    get width(): number;
    /**
     * Calculated height
     */
    get height(): number;
    /**
     * The class name of the referenced object
     * @default "Bounds"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
