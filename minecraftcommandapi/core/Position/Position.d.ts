import { PositionType } from './';
/**
 * @name IPosition
 * @description
 * A position which can be either absolute or relative.
 */
export interface IPosition {
    /**
     * @name X
     * @description
     * The coordinate on the X-Axis
     */
    X: Number;
    /**
     * @name Y
     * @description
     * The coordinate on the Y-Axis
     */
    Y: Number;
    /**
     * @name Z
     * @description
     * The coordinate on the Z-Axis
     */
    Z: Number;
    /**
     * @name Type
     * @description
     * The type of the position, which can be either absolute or relative
     */
    Type: PositionType;
}
/**
 * @name Position
 * @description
 * Represents one position, containing X, Y, Z coordinates
 * to identify the current position
 */
export declare class Position implements IPosition {
    private x;
    private y;
    private z;
    private type;
    /**
     * @param {Number} x The coordinate on the X-Axis
     * @param {Number} y The coordinate on the Y-Axis
     * @param {Number} z The coordinate on the Z-Axis
     * @param {PositionType} type  The type of the position, which can be either absolute or relative
     */
    constructor(x: Number, y: Number, z: Number, type: PositionType);
    /**
     * @returns The X-Coordinate of the position.
     */
    /**
     * @param {Number} value The x coordinate which get set
     */
    X: Number;
    /**
     * @returns The Y-Coordinate of the position.
     */
    /**
     * @param {Number} value The y coordinate which get set
     */
    Y: Number;
    /**
     * @returns The Z-Coordinate of the position.
     */
    /**
     * @param {Number} value The z coordinate which should get set
     */
    Z: Number;
    /**
     * @returns The type of the position, which can be either relative or absolute.
     */
    /**
     * @param {PositionType} value The type of the position, which can be either relative or absolute.
     */
    Type: PositionType;
}
