/**
 * Vector 3d object creator.
 * @function
 * @param {number} [x] - First cvalue.
 * @param {number} [y] - Second value.
 * @param {number} [z] - Third value.
 * @returns {og.Vec3} -
 */
export function vec3(x?: number, y?: number, z?: number): any;
/**
 * Class represents a 3d vector.
 * @class
 * @param {number} [x] - First value.
 * @param {number} [y] - Second value.
 * @param {number} [z] - Third value.
 */
export class Vec3 {
    /** @const */
    static get UP(): Vec3;
    /** @const */
    static get DOWN(): Vec3;
    /** @const */
    static get RIGHT(): Vec3;
    /** @const */
    static get LEFT(): Vec3;
    /** @const */
    static get FORWARD(): Vec3;
    /** @const */
    static get BACKWARD(): Vec3;
    /** @const */
    static get ZERO(): Vec3;
    /** @const */
    static get UNIT_X(): Vec3;
    /** @const */
    static get UNIT_Y(): Vec3;
    /** @const */
    static get UNIT_Z(): Vec3;
    /**
     * Separate 63 bit Vec3 to two Vec3 32 bit float values.
     * @function
     * @param {number} value - Double type value.
     * @param {Vec3} high - Out vector high values.
     * @param {Vec3} low - Out vector low values.
     * @returns {Array.<number,number>} Encoded array.
     */
    static doubleToTwoFloats(v: any, high: Vec3, low: Vec3): Array<number, number>;
    /**
     * Separate 63 bit Vec3 to two Vec3 32 bit float values.
     * @function
     * @param {number} value - Double type value.
     * @param {Float32Array} high - Out vector high values.
     * @param {Float32Array} low - Out vector low values.
     * @returns {Array.<number,number>} Encoded array.
     */
    static doubleToTwoFloat32Array(v: any, high: Float32Array, low: Float32Array): Array<number, number>;
    /**
     * Creates 3d vector from array.
     * @function
     * @param {Array.<number,number,number>} arr - Input array
     * @returns {og.Vec3} -
     */
    static fromVec(arr: Array<number, number, number>): any;
    /**
     * Gets angle between two vectors.
     * @static
     * @param {og.Vec3} a - First vector.
     * @param {og.Vec3} b - Second vector.
     * @returns {number} -
     */
    static angle(a: any, b: any): number;
    /**
     * Returns two vectors linear interpolation.
     * @static
     * @param {og.Vec3} v1 - Start vector.
     * @param {og.Vec3} v2 - End vector.
     * @param {number} l - Interpolate value.
     * @returns {og.Vec3} -
     */
    static lerp(v1: any, v2: any, l: number): any;
    /**
     * Returns summary vector.
     * @static
     * @param {og.Vec3} a - First vector.
     * @param {og.Vec3} b - Second vector.
     * @returns {og.Vec3} - Summary vector.
     */
    static add(a: any, b: any): any;
    /**
     * Returns two vectors subtraction.
     * @static
     * @param {og.Vec3} a - First vector.
     * @param {og.Vec3} b - Second vector.
     * @returns {og.Vec3} - Vectors subtraction.
     */
    static sub(a: any, b: any): any;
    /**
     * Returns scaled vector.
     * @static
     * @param {og.Vec3} a - Input vector.
     * @param {number} scale - Scale value.
     * @returns {og.Vec3} -
     */
    static scale(a: any, scale: number): any;
    /**
     * Returns two vectors production.
     * @static
     * @param {og.Vec3} a - First vector.
     * @param {og.Vec3} b - Second vector.
     * @returns {og.Vec3} -
     */
    static mul(a: any, b: any): any;
    /**
     * Returns true if two vectors are non collinear.
     * @public
     * @param {og.Vec3} a - First vector.
     * @param {og.Vec3} b - Second vector.
     * @returns {og.Vec3} -
     */
    public static noncollinear(a: any, b: any): any;
    /**
     * Get projection of the vector to plane where n - normal to the plane.
     * @static
     * @param {og.Vec3} b - Vector to project.
     * @param {og.Vec3} n - Plane normal.
    * @param {og.Vec3} [def] - Default value for non existed result.
     * @returns {og.Vec3} -
     */
    static proj_b_to_plane(b: any, n: any, def?: any): any;
    /**
     * Get projection of the first vector to the second.
     * @static
     * @param {og.Vec3} b - First vector.
     * @param {og.Vec3} a - Second vector.
     * @returns {og.Vec3} -
     */
    static proj_b_to_a(b: any, a: any): any;
    /**
     * Makes vectors normalized and orthogonal to each other.
     * Normalizes normal. Normalizes tangent and makes sure it is orthogonal to normal (that is, angle between them is 90 degrees).
     * @static
     * @param {og.Vec3} normal - Normal vector.
     * @param {og.Vec3} tangent - Tangent vector.
     * @returns {og.Vec3} -
     */
    static orthoNormalize(normal: any, tangent: any): any;
    /**
     * Returns vector components division product one to another.
     * @static
     * @param {og.Vec3} a - First vector.
     * @param {og.Vec3} b - Second vector.
     * @returns {og.Vec3} -
     */
    static div(a: any, b: any): any;
    static get LERP_DELTA(): number;
    constructor(x: any, y: any, z: any);
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
     * Converts to 4d vector, Fourth value is 1.0.
     * @public
     * @returns {og.Vec4} -
     */
    public toVec4(): any;
    /**
     * Returns clone vector.
     * @public
     * @returns {og.Vec3} -
     */
    public clone(): any;
    /**
     * Converts vector to text string.
     * @public
     * @returns {string} -
     */
    public toString(): string;
    /**
     * Returns true if vector's values are zero.
     * @public
     * @returns {boolean} -
     */
    public isZero(): boolean;
    /**
     * Get projection of the first vector to the second.
     * @static
     * @param {og.Vec3} a - Project vector.
     * @returns {og.Vec3} -
     */
    projToVec(a: any): any;
    /**
     * Compares with vector. Returns true if it equals another.
     * @public
     * @param {og.Vec3} p - Vector to compare.
     * @returns {boolean} -
     */
    public equal(p: any): boolean;
    /**
     * Copy input vector's values.
     * @param {og.Vec3} point3 - Vector to copy.
     * @returns {og.Vec3} -
     */
    copy(point3: any): any;
    /**
     * Gets vector's length.
     * @public
     * @returns {number} -
     */
    public length(): number;
    /**
     * Returns squared vector's length.
     * @public
     * @returns {number} -
     */
    public length2(): number;
    /**
     * Converts vector's values to a quaternion object.
     * @public
     * @returns {og.Quat} -
     */
    public getQuat(): any;
    /**
     * Adds vector to the current.
     * @public
     * @param {og.Vec3} point3 - Point to add.
     * @returns {og.Vec3} -
     */
    public addA(point3: any): any;
    /**
     * Gets two vectors summarization.
     * @public
     * @param {og.Vec3} point3 - Vector to add.
     * @returns {og.Vec3} Returns a sum vector.
     */
    public add(point3: any): any;
    /**
     * Subtract vector from the current.
     * @public
     * @param {og.Vec3} point3 - Subtract vector.
     * @returns {og.Vec3} -
     */
    public subA(point3: any): any;
    /**
     * Gets vector subtraction.
     * @public
     * @param {og.Vec3} point3 - Subtract vector.
     * @return {og.Vec3} Returns new instance of a subtraction
     */
    public sub(point3: any): any;
    /**
     * Scale current vector.
     * @public
     * @param {number} scale - Scale value.
     * @returns {og.Vec3} -
     */
    public scale(scale: number): any;
    /**
     * Scale current vector to another instance.
     * @public
     * @param {number} scale - Scale value.
     * @returns {og.Vec3} -
     */
    public scaleTo(scale: number): any;
    /**
     * Multiply current vector object to another and store result in the current instance.
     * @public
     * @param {og.Vec3} vec - Multiply vector.
     * @returns {og.Vec3} -
     */
    public mulA(vec: any): any;
    /**
     * Multiply current vector object to another and returns new vector instance.
     * @public
     * @param {og.Vec3} vec - Multiply vector.
     * @returns {og.Vec3} -
     */
    public mul(vec: any): any;
    /**
     * Divide current vector's components to another. Results stores in the current vector object.
     * @public
     * @param {og.Vec3} vec - Div vector.
     * @returns {og.Vec3} -
     */
    public divA(vec: any): any;
    /**
     * Divide current vector's components to another and returns new vector instance.
     * @public
     * @param {og.Vec3} vec - Div vector.
     * @returns {og.Vec3} -
     */
    public div(vec: any): any;
    /**
     * Gets vectors dot production.
     * @public
     * @param {og.Vec3} point3 - Another vector.
     * @returns {number} -
     */
    public dot(point3: any): number;
    /**
     * Gets vectors dot production.
     * @public
     * @param {Array.<number,number,number>} arr - Array vector.
     * @returns {number} -
     */
    public dotArr(arr: Array<number, number, number>): number;
    /**
     * Gets vectors cross production.
     * @public
     * @param {og.Vec3} point3 - Another vector.
     * @returns {og.Vec3} -
     */
    public cross(point3: any): any;
    /**
     * Sets vector to zero.
     * @public
     * @returns {og.Vec3} -
     */
    public clear(): any;
    /**
     * Returns normalized vector.
     * @public
     * @returns {og.Vec3} -
     */
    public getNormal(): any;
    /**
     * Returns normalized vector.
     * @deprecated
     * @public
     * @returns {og.Vec3} -
     */
    public normal(): any;
    /**
     * Returns normalized negate vector.
     * @public
     * @returns {og.Vec3} -
     */
    public normalNegate(): any;
    /**
     * Returns normalized negate scale vector.
     * @public
     * @returns {og.Vec3} -
     */
    public normalNegateScale(scale: any): any;
    /**
     * Returns normalized scale vector.
     * @public
     * @returns {og.Vec3} -
     */
    public normalScale(scale: any): any;
    /**
     * Normalize current vector.
     * @public
     * @returns {og.Vec3} -
     */
    public normalize(): any;
    /**
     * Converts vector to a number array.
     * @public
     * @returns {Array.<number,number,number>} -
     * @deprecated
     */
    public toVec(): Array<number, number, number>;
    /**
     * Converts vector to a number array.
     * @public
     * @returns {Array.<number,number,number>} -
     */
    public toArray(): Array<number, number, number>;
    /**
     * Gets distance to point.
     * @public
     * @param {og.Vec3} point3 - Distant point.
     * @returns {number} -
     */
    public distance(point3: any): number;
    /**
     * Sets vector's values.
     * @public
     * @param {number} x - Value X.
     * @param {number} y - Value Y.
     * @param {number} z - Value Z.
     * @returns {og.Vec3} -
     */
    public set(x: number, y: number, z: number): any;
    /**
     * Negate current vector.
     * @public
     * @returns {og.Vec3} -
     */
    public negate(): any;
    /**
     * Negate current vector to another instance.
     * @public
     * @returns {og.Vec3} -
     */
    public negateTo(): any;
    /**
     * Gets projected point coordinates of the current vector on the ray.
     * @public
     * @param {og.Vec3} pos - Ray position.
     * @param {og.Vec3} direction - Ray direction.
     * @returns {og.Vec3} -
     */
    public projToRay(pos: any, direction: any): any;
    /**
     * Gets angle between two vectors.
     * @public
     * @param {og.Vec3} a - Another vector.
     * @returns {number} -
     */
    public angle(a: any): number;
    /**
     * Returns two vectors linear interpolation.
     * @public
     * @param {og.Vec3} v2 - End vector.
     * @param {number} l - Interpolate value.
     * @returns {og.Vec3} -
     */
    public lerp(v2: any, l: number): any;
    /**
     * Returns vector interpolation by v(t) = v1 * t + v2 * (1 - t)
     * @public
     * @param {og.Vec3} v2 - End vector.
     * @param {number} t - Interpolate value.
     * @returns {og.Vec3} -
     */
    public smerp(v2: any, t: number): any;
    /**
     * Spherically interpolates between two vectors.
     * Interpolates between current and v2 vector by amount t. The difference between this and linear interpolation (aka, "lerp") is that
     * the vectors are treated as directions rather than points in space. The direction of the returned vector is interpolated
     * by the angle and its magnitude is interpolated between the magnitudes of from and to.
     * @public
     * @param {og.Vec3} v2 -
     * @param {number} t - The parameter t is clamped to the range [0, 1].
     * @returns {og.Vec3} -
     */
    public slerp(v2: any, t: number): any;
    /**
     * Gets the shortest arc quaternion to rotate this vector to the destination vector.
     * @param {Vec3} dest -
     * @param {Vec3} fallbackAxis -
     * @returns {Quat} -
     * @todo: TEST IT!
     */
    getRotationTo(dest: Vec3, fallbackAxis: Vec3): Quat;
}
import { Quat } from "./Quat.js";
