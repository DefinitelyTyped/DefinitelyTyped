/**
 * Ray class.
 * @class
 * @param {Object} [options] - Options:
 * @param {og.Vec3|Array.<number>} [options.startPosition] - Ray start point position.
 * @param {og.Vec3|Array.<number>} [options.endPosition] - Ray end point position.
 * @param {og.Vec3|Array.<number>} [options.startColor] - Ray start point color.
 * @param {og.Vec3|Array.<number>} [options.endColor] - Ray end point color.
 * @param {boolean} [options.visibility] - Visibility.
 */
export class Ray {
    constructor(options: any);
    /**
     * Object unic identifier.
     * @public
     * @readonly
     * @type {number}
     */
    public readonly id: number;
    _thickness: any;
    _length: any;
    _lengthHighLow: Float32Array;
    _startPosition: any;
    _startPositionHigh: Vec3;
    _startPositionLow: Vec3;
    _endPosition: any;
    _endPositionHigh: Vec3;
    _endPositionLow: Vec3;
    _startColor: any;
    _endColor: any;
    /**
     * Ray visibility.
     * @protected
     * @type {boolean}
     */
    protected _visibility: boolean;
    /**
     * Entity instance that holds this billboard.
     * @protected
     * @type {og.Entity}
     */
    protected _entity: any;
    /**
     * Handler that stores and renders this billboard object.
     * @protected
     * @type {og.BillboardHandler}
     */
    protected _handler: any;
    /**
     * Billboard handler array index.
     * @protected
     * @type {number}
     */
    protected _handlerIndex: number;
    /**
     * Sets ray start position.
     * @public
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} z - Z coordinate.
     */
    public setStartPosition(x: number, y: number, z: number): void;
    /**
     * Sets ray start position.
     * @public
     * @param {og.Vec3} position - Cartesian coordinates.
     */
    public setStartPosition3v(position: any): void;
    /**
     * Sets ray end position.
     * @public
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} z - Z coordinate.
     */
    public setEndPosition(x: number, y: number, z: number): void;
    /**
     * Sets ray end position.
     * @public
     * @param {og.Vec3} position - Cartesian coordinates.
     */
    public setEndPosition3v(position: any): void;
    setLength(length: any): void;
    setThickness(thickness: any): void;
    setColors4v(startColor: any, endColor: any): void;
    setColorsHTML(startColor: any, endColor: any): void;
    /**
     * Returns ray start position.
     * @public
     * @returns {og.Vec3}
     */
    public getStartPosition(): any;
    /**
     * Returns ray end position.
     * @public
     * @returns {og.Vec3}
     */
    public getEndPosition(): any;
    /**
     * Sets billboard visibility.
     * @public
     * @param {boolean} visibility - Visibility flag.
     */
    public setVisibility(visibility: boolean): void;
    /**
     * Returns billboard visibility.
     * @public
     * @returns {boolean}
     */
    public getVisibility(): boolean;
    /**
     * Removes billboard from hander.
     * @public
     */
    public remove(): void;
    /**
     * Sets billboard picking color.
     * @public
     * @param {og.Vec3} color - Picking color.
     */
    public setPickingColor3v(color: any): void;
}
import { Vec3 } from "../math/Vec3.js";
