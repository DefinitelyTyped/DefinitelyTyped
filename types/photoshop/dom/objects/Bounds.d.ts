/**
 * Defines a rectangle. This is a WIP.
 *
 * @targetfolder objects
 * @optionobject
 */
export declare class Bounds {
    private _left;
    private _right;
    private _top;
    private _bottom;
    /**
     * Coordinate of the left edge.
     * @minVersion 22.5
     */
    get left(): number;
    set left(coordinate: number);
    /**
     * Coordinate of the right edge.
     * @minVersion 22.5
     */
    get right(): number;
    set right(coordinate: number);
    /**
     * Coordinate of the top edge.
     * @minVersion 22.5
     */
    get top(): number;
    set top(coordinate: number);
    /**
     * Coordinate of the bottom edge.
     * @minVersion 22.5
     */
    get bottom(): number;
    set bottom(coordinate: number);
    /**
     * Calculated width.
     * @minVersion 22.5
     */
    get width(): number;
    /**
     * Calculated height.
     * @minVersion 22.5
     */
    get height(): number;
    /**
     * The class name of the referenced object: *"Bounds"*.
     * @minVersion 22.5
     */
    get typename(): "Bounds";
    /** @ignore */
    constructor();
}
