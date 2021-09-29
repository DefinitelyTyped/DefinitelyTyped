/**
 * Base prototype for billboard and label classes.
 * @class
 * @param {Object} [options] - Options:
 * @param {og.Vec3|Array.<number>} [options.position] - Billboard spatial position.
 * @param {number} [options.rotation] - Screen angle rotaion.
 * @param {og.Vec4|string|Array.<number>} [options.color] - Billboard color.
 * @param {og.Vec3|Array.<number>} [options.alignedAxis] - Billboard aligned vector.
 * @param {og.Vec3|Array.<number>} [options.offset] - Billboard center screen offset.
 * @param {boolean} [options.visibility] - Visibility.
 */
export class BaseBillboard {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(options: any);
    /**
     * Object unic identifier.
     * @public
     * @readonly
     * @type {number}
     */
    public readonly id: number;
    /**
     * Billboard center cartesian position.
     * @protected
     * @type {og.Vec3}
     */
    protected _position: any;
    _positionHigh: Vec3;
    _positionLow: Vec3;
    /**
     * Screen space rotation angle.
     * @protected
     * @type {number}
     */
    protected _rotation: number;
    /**
     * RGBA color.
     * @protected
     * @type {og.Vec4}
     */
    protected _color: any;
    /**
     * Cartesian aligned axis vector.
     * @protected
     * @type {og.Vec3}
     */
    protected _alignedAxis: any;
    /**
     * Billboard center screen space offset. Where x,y - screen space offset and z - depth offset.
     * @protected
     * @type {og.math.Vecto3}
     */
    protected _offset: any;
    /**
     * Billboard visibility.
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
     * Sets billboard position.
     * @public
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} z - Z coordinate.
     */
    public setPosition(x: number, y: number, z: number): void;
    /**
     * Sets billboard position.
     * @public
     * @param {og.Vec3} position - Cartesian coordinates.
     */
    public setPosition3v(position: any): void;
    /**
     * Returns billboard position.
     * @public
     * @returns {og.Vec3}
     */
    public getPosition(): any;
    /**
     * Sets screen space offset.
     * @public
     * @param {number} x - X offset.
     * @param {number} y - Y offset.
     * @param {number} [z] - Z offset.
     */
    public setOffset(x: number, y: number, z?: number): void;
    /**
     * Sets screen space offset.
     * @public
     * @param {og.Vec2} offset - Offset size.
     */
    public setOffset3v(offset: any): void;
    /**
     * Returns billboard screen space offset size.
     * @public
     * @returns {og.Vec3}
     */
    public getOffset(): any;
    /**
     * Sets billboard screen space rotation in radians.
     * @public
     * @param {number} rotation - Screen space rotation in radians.
     */
    public setRotation(rotation: number): void;
    /**
     * Gets screen space rotation.
     * @public
     * @returns {number}
     */
    public getRotation(): number;
    /**
     * Sets billboard opacity.
     * @public
     * @param {number} a - Billboard opacity.
     */
    public setOpacity(a: number): void;
    /**
     * Sets RGBA color. Each channel from 0.0 to 1.0.
     * @public
     * @param {number} r - Red.
     * @param {number} g - Green.
     * @param {number} b - Blue.
     * @param {number} a - Alpha.
     */
    public setColor(r: number, g: number, b: number, a: number): void;
    /**
     * Sets RGBA color. Each channel from 0.0 to 1.0.
     * @public
     * @param {og.Vec4} color - RGBA vector.
     */
    public setColor4v(color: any): void;
    /**
     * Sets billboard color.
     * @public
     * @param {string} color - HTML style color.
     */
    public setColorHTML(color: string): void;
    /**
     * Returns RGBA color.
     * @public
     * @returns {og.Vec4}
     */
    public getColor(): any;
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
     * Sets billboard cartesian aligned vector.
     * @public
     * @param {number} x - Aligned vector X coordinate.
     * @param {number} y - Aligned vector Y coordinate.
     * @param {number} z - Aligned vector Z coordinate.
     */
    public setAlignedAxis(x: number, y: number, z: number): void;
    /**
     * Sets billboard aligned vector.
     * @public
     * @param {og.math.Vecto3} alignedAxis - Vector to align.
     */
    public setAlignedAxis3v(alignedAxis: any): void;
    /**
     * Returns aligned vector.
     * @public
     * @returns {og.Vec3}
     */
    public getAlignedAxis(): any;
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
