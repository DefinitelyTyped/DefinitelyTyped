/**
 * Vector 2d object creator.
 * @function
 * @param {number} [x] - First cvalue.
 * @param {number} [y] - Second value.
 * @returns {og.math.Vec2}
 */
export function vec2(x?: number, y?: number): any;
/**
 * Class represents a 3d vector.
 * @class
 * @param {number} [x] - First value.
 * @param {number} [y] - Second value.
 */
export class Vec2 {
    /** @const */
    static get UP(): Vec2;
    /** @const */
    static get DOWN(): Vec2;
    /** @const */
    static get RIGHT(): Vec2;
    /** @const */
    static get LEFT(): Vec2;
    /** @const */
    static get ZERO(): Vec2;
    /**
     * Returns summary vector.
     * @static
     * @param {og.math.Vec2} a - First vector.
     * @param {og.math.Vec2} b - Second vector.
     * @returns {og.math.Vec2} - Summary vector.
     */
    static add(a: any, b: any): any;
    /**
     * Returns two vectors subtraction.
     * @static
     * @param {og.math.Vec2} a - First vector.
     * @param {og.math.Vec2} b - Second vector.
     * @returns {og.math.Vec2} - Vectors subtraction.
     */
    static sub(a: any, b: any): any;
    /**
     * Returns scaled vector.
     * @static
     * @param {og.math.Vec2} a - Input vector.
     * @param {number} scale - Scale value.
     * @returns {og.math.Vec2}
     */
    static scale(a: any, scale: number): any;
    /**
     * Returns two vectors production.
     * @static
     * @param {og.math.Vec2} a - First vector.
     * @param {og.math.Vec2} b - Second vector.
     * @returns {og.math.Vec2}
     */
    static mul(a: any, b: any): any;
    /**
     * Returns vector components division product one to another.
     * @static
     * @param {og.math.Vec2} a - First vector.
     * @param {og.math.Vec2} b - Second vector.
     * @returns {og.math.Vec2}
     */
    static div(a: any, b: any): any;
    /**
     * Get projection of the first vector to the second.
     * @static
     * @param {og.math.Vec2} b - First vector.
     * @param {og.math.Vec2} a - Second vector.
     * @returns {og.math.Vec2}
     */
    static proj_b_to_a(b: any, a: any): any;
    /**
     * Gets angle between two vectors.
     * @static
     * @param {og.math.Vec2} a - First vector.
     * @param {og.math.Vec2} b - Second vector.
     * @returns {number}
     */
    static angle(a: any, b: any): number;
    /**
     * Makes vectors normalized and orthogonal to each other.
     * @static
     * @param {og.math.Vec2} normal - Normal vector.
     * @param {og.math.Vec2} tangent - Tangent vector.
     * @returns {og.math.Vec2}
     */
    static orthoNormalize(normal: any, tangent: any): any;
    static get LERP_DELTA(): number;
    constructor(x: any, y: any);
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
     * Converts to 3d vector, third value is 0.0.
     * @public
     * @returns {og.Vec3}
     */
    public toVector3(): any;
    /**
     * Returns clone vector.
     * @public
     * @returns {og.math.Vec2}
     */
    public clone(): any;
    /**
     * Compares with vector. Returns true if it equals another.
     * @public
     * @param {og.math.Vec2} p - Vector to compare.
     * @returns {boolean}
     */
    public equal(p: any): boolean;
    /**
     * Copy input vector's values.
     * @param {og.math.Vec2} point2 - Vector to copy.
     * @returns {og.math.Vec2}
     */
    copy(point2: any): any;
    /**
     * Gets vector's length.
     * @public
     * @returns {number}
     */
    public length(): number;
    /**
     * Returns squared vector's length.
     * @public
     * @returns {number}
     */
    public length2(): number;
    /**
     * Adds vector to the current.
     * @public
     * @param {og.math.Vec2}
     * @returns {og.math.Vec2}
     */
    public addA(v: any): any;
    /**
     * Summarize two vectors.
     * @public
     * @param {og.math.Vec2}
     * @returns {og.math.Vec2}
     */
    public add(v: any): any;
    /**
     * Subtract vector from the current where results saved on the current instance.
     * @public
     * @param {og.math.Vec2} v - Subtract vector.
     * @returns {og.math.Vec2}
     */
    public subA(v: any): any;
    /**
     * Subtract vector from the current.
     * @public
     * @param {og.math.Vec2} v - Subtract vector.
     * @returns {og.math.Vec2}
     */
    public sub(v: any): any;
    /**
     * Scale current vector.
     * @public
     * @param {number} scale - Scale value.
     * @returns {og.math.Vec2}
     */
    public scale(scale: number): any;
    /**
     * Scale current vector to another instance.
     * @public
     * @param {number} scale - Scale value.
     * @returns {og.math.Vec2}
     */
    public scaleTo(scale: number): any;
    /**
     * Multiply current vector object to another and store result in the current instance.
     * @public
     * @param {og.math.Vec2} vec - Multiply vector.
     * @returns {og.math.Vec2}
     */
    public mulA(vec: any): any;
    /**
     * Multiply current vector object to another and returns new vector instance.
     * @public
     * @param {og.math.Vec2} vec - Multiply vector.
     * @returns {og.math.Vec2}
     */
    public mul(vec: any): any;
    /**
     * Divide current vector's components to another. Results stores in the current vector object.
     * @public
     * @param {og.math.Vec2}
     * @returns {og.math.Vec2}
     */
    public divA(vec: any): any;
    /**
     * Gets vectors dot production.
     * @public
     * @param {og.math.Vec2} v - Another vector.
     * @returns {number}
     */
    public dot(v: any): number;
    /**
     * Gets vectors dot production.
     * @public
     * @param {Array.<number,number>} arr - Array vector.
     * @returns {number}
     */
    public dotArr(arr: Array<number>): number;
    /**
     * Gets vectors cross production.
     * @public
     * @param {og.math.Vec2} v - Another vector.
     * @returns {og.math.Vec2}
     */
    public cross(v: any): any;
    /**
     * Sets vector to zero.
     * @public
     * @returns {og.math.Vec2}
     */
    public clear(): any;
    /**
     * Returns normalized vector.
     * @public
     * @returns {og.math.Vec2}
     */
    public normal(): any;
    /**
     * Normalize current vector.
     * @public
     * @returns {og.math.Vec2}
     */
    public normalize(): any;
    /**
     * Converts vector to a number array.
     * @public
     * @returns {Array.<number,number>}
     */
    public toVec(): Array<number>;
    /**
     * Gets distance to point.
     * @public
     * @param {og.math.Vec2} p - Distant point.
     * @returns {number}
     */
    public distance(p: any): number;
    /**
     * Sets vector's values.
     * @public
     * @param {number} x - Value X.
     * @param {number} y - Value Y.
     * @returns {og.math.Vec2}
     */
    public set(x: number, y: number): any;
    /**
     * Negate current vector.
     * @public
     * @returns {og.math.Vec2}
     */
    public negate(): any;
    /**
     * Negate current vector to another instance.
     * @public
     * @returns {og.math.Vec2}
     */
    public negateTo(): any;
    /**
     * Gets projected point coordinates of the current vector on the ray.
     * @public
     * @param {og.math.Vec2} pos - Ray position.
     * @param {og.math.Vec2} direction - Ray direction.
     * @returns {og.math.Vec2}
     */
    public projToRay(pos: any, direction: any): any;
    /**
     * Gets angle between two vectors.
     * @public
     * @param {og.math.Vec2} a - Another vector.
     * @returns {number}
     */
    public angle(a: any): number;
    /**
     * Returns two vectors linear interpolation.
     * @public
     * @param {og.math.Vec2} v2 - End vector.
     * @param {number} l - Interpolate value.
     * @returns {og.math.Vec2}
     */
    public lerp(v1: any, v2: any, l: number): any;
    /**
     * Spherically interpolates between two vectors.
     * Interpolates between current and v2 vector by amount t. The difference between this and linear interpolation (aka, "lerp") is that
     * the vectors are treated as directions rather than points in space. The direction of the returned vector is interpolated
     * by the angle and its magnitude is interpolated between the magnitudes of from and to.
     * @public
     * @param {og.math.Vec2} v2 -
     * @param {number} t - The parameter t is clamped to the range [0, 1].
     * @returns {og.math.Vec2}
     */
    public slerp(v2: any, t: number): any;
}
