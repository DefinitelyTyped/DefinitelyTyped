/**
 * Vector 4d object creator.
 * @function
 * @param {number} [x] - First cvalue.
 * @param {number} [y] - Second value.
 * @param {number} [z] - Third value.
 * @param {number} [w] - Fourth value.
 * @returns {og.math.Vec4}
 */
export function vec4(x?: number, y?: number, z?: number, w?: number): any;
/**
 * Class represents a 4d vector.
 * @class
 * @param {number} [x] - First value.
 * @param {number} [y] - Second value.
 * @param {number} [z] - Third value.
 * @param {number} [w] - Fourth value.
 */
export class Vec4 {
    /**
     * Identity vector [0,0,0,1].
     * @const
     * @type {og.math.Vec4}
     */
    static get identity(): any;
    /**
     * Creates 4d vector from array.
     * @function
     * @param {Array.<number,number,number,number>}
     * @returns {og.math.Vec4}
     */
    static fromVec(arr: any): any;
    constructor(x: any, y: any, z: any, w: any);
    /**
     * @public
     * @type {number}
     */
    public x: number;
    /**
     * @public
     * @type {number}
     */
    public y: number;
    /**
     * @public
     * @type {number}
     */
    public z: number;
    /**
     * @public
     * @type {number}
     */
    public w: number;
    /**
     * Converts to 3d vector, without fourth value.
     * @public
     * @returns {og.Vec3}
     */
    public toVec3(): any;
    /**
     * Returns clone vector.
     * @public
     * @returns {og.math.Vec4}
     */
    public clone(v: any): any;
    /**
     * Compares with vector. Returns true if it equals another.
     * @public
     * @param {og.math.Vec4} p - Vector to compare.
     * @returns {boolean}
     */
    public equal(v: any): boolean;
    /**
     * Copy input vector's values.
     * @param {og.math.Vec4} v - Vector to copy.
     * @returns {og.math.Vec4}
     */
    copy(v: any): any;
    /**
     * Converts vector to a number array.
     * @public
     * @returns {Array.<number,number,number,number>}
     * @deprecated
     */
    public toVec(): Array<number, number, number, number>;
    /**
     * Converts vector to a number array.
     * @public
     * @returns {Array.<number,number,number,number>}
     */
    public toArray(): Array<number, number, number, number>;
    /**
     * Sets vector's values.
     * @public
     * @param {number} x - Value X.
     * @param {number} y - Value Y.
     * @param {number} z - Value Z.
     * @param {number} w - Value W.
     * @returns {og.math.Vec4}
     */
    public set(x: number, y: number, z: number, w: number): any;
    /**
     * Adds vector to the current.
     * @public
     * @param {og.math.Vec4}
     * @returns {og.math.Vec4}
     */
    public addA(v: any): any;
    /**
     * Subtract vector from the current.
     * @public
     * @param {og.math.Vec4} v - Subtract vector.
     * @returns {og.math.Vec4}
     */
    public subA(v: any): any;
    /**
     * Scale current vector.
     * @public
     * @param {number} scale - Scale value.
     * @returns {og.math.Vec4}
     */
    public scale(scale: number): any;
    /**
     * Makes vector affinity. Thereby fourh component becomes to 1.0.
     * @public
     * @returns {og.math.Vec4}
     */
    public affinity(): any;
    /**
     * Scale current vector to another instance.
     * @public
     * @param {number} scale - Scale value.
     * @returns {og.Vec3}
     */
    public scaleTo(scale: number): any;
    /**
     * Vector's edge function that returns vector where each component is 0.0 if it's smaller then edge and otherwise 1.0.
     * @public
     * @returns {og.math.Vec4}
     */
    public getStep(edge: any): any;
    /**
     * The vector fract function returns the vector of fractional parts of each value, i.e. x minus floor(x).
     * @public
     * @returns {og.math.Vec4}
     */
    public getFrac(v: any): any;
    /**
     * Gets vectors dot production.
     * @public
     * @param {og.math.Vec4} v - Another vector.
     * @returns {number} - Dot product.
     */
    public dot(v: any): number;
    /**
     * Returns true if vector's values are zero.
     * @public
     * @returns {boolean} -
     */
    public isZero(): boolean;
}
