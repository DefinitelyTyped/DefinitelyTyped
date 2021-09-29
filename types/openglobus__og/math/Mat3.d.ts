/**
 * Mat3 factory.
 * @static
 * @return {og.Mat3}
 */
export function mat3(): any;
export class Mat3 {
    /**
     * Sets column-major order array matrix.
     * @public
     * @param {Array.<number>} m - Matrix array.
     * @returns {og.Mat3}
     */
    public set(m: Array<number>): any;
    /**
     * Duplicates a Mat3 instance.
     * @public
     * @returns {og.Mat3}
     */
    public clone(): any;
    /**
     * Copy matrix.
     * @public
     * @param {og.Mat3} a - Matrix to copy.
     * @returns {og.Mat3}
     */
    public copy(a: any): any;
    /**
     * Creates trasposed matrix from the current.
     * @public
     * @returns {og.Mat3}
     */
    public transposeTo(): any;
    /**
     * Sets matrix to identity.
     * @public
     * @returns {og.Mat3}
     */
    public setIdentity(): any;
    /**
     * Multiply to 3d vector.
     * @public
     * @params {og.Vec3} p - 3d vector.
     * @returns {og.Vec3}
     */
    public mulVec(p: any): any;
    /**
     * Converts to 4x4 matrix.
     * @public
     * @returns {og.Mat4}
     */
    public toMatrix4(): any;
}
