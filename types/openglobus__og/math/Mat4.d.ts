/**
 * Mat4 factory.
 * @static
 * @returns {og.Mat4} -
 */
export function mat4(): any;
export class Mat4 {
    /**
     * Sets column-major order array matrix.
     * @public
     * @param {Array.<number>} m - Matrix array.
     * @returns {og.Mat4} -
     */
    public set(m: Array<number>): any;
    /**
     * Duplicates a Matrix3 instance.
     * @public
     * @returns {og.Mat4} -
     */
    public clone(): any;
    /**
     * Copy matrix.
     * @public
     * @param {og.Mat3} a - Matrix to copy.
     */
    public copy(a: any): void;
    /**
     * Converts to 3x3 matrix.
     * @public
     * @returns {og.Mat3} -
     */
    public toMatrix3(): any;
    /**
     * Multiply to 3d vector.
     * @public
     * @param {og.Vec3} p - 3d vector.
     * @returns {og.Vec3} -
     */
    public mulVec3(p: any): any;
    /**
     * Multiply to 4d vector.
     * @public
     * @param {og.Vec4} p - 4d vector.
     * @returns {og.Vec4} -
     */
    public mulVec4(p: any): any;
    /**
     * Creates an inversed 3x3 matrix of the current.
     * @public
     * @returns {og.Mat3} -
     */
    public toInverseMatrix3(): any;
    /**
     * Creates an inversed matrix of the current.
     * @public
     * @returns {og.Mat4} -
     */
    public inverseTo(res: any): any;
    /**
     * Creates a trasposed matrix of the current.
     * @public
     * @returns {og.Mat4} -
     */
    public transposeTo(): any;
    /**
     * Sets matrix to identity.
     * @public
     * @returns {og.Mat4} -
     */
    public setIdentity(): any;
    /**
     * Computes the product of two matrices.
     * @public
     * @param {og.Mat4} mx - Matrix to multiply.
     * @returns {og.Mat4} -
     */
    public mul(mx: any): any;
    /**
     * Add translation vector to the current matrix.
     * @public
     * @param {og.Vec3} v - Translate vector.
     * @returns {og.Mat4} -
     */
    public translate(v: any): any;
    /**
     * Sets translation matrix to the position.
     * @public
     * @param {og.Vec3} v - Translate to position.
     * @returns {og.Mat4} -
     */
    public translateToPosition(v: any): any;
    /**
     * Rotate currrent matrix around the aligned axis and angle.
     * @public
     * @param {og.Vec3} u - Aligned axis.
     * @param {number} angle - Aligned axis angle in radians.
     * @returns {og.Mat4} -
     * @todo: OPTIMIZE: reveal multiplication
     */
    public rotate(u: any, angle: number): any;
    /**
     * Sets current rotation matrix around the aligned axis and angle.
     * @public
     * @param {og.Vec3} u - Aligned axis.
     * @param {number} angle - Aligned axis angle in radians.
     * @returns {og.Mat4} -
     */
    public setRotation(u: any, angle: number): any;
    /**
     * Gets the rotation matrix from one vector to another.
     * @public
     * @param {og.Vec3} a - Firtst vector.
     * @param {og.Vec3} b - Second vector.
     * @returns {og.Mat4} -
     */
    public rotateBetweenVectors(a: any, b: any): any;
    /**
     * Scale current matrix to the vector values.
     * @public
     * @param {og.Vec3} v - Scale vector.
     * @returns {og.Mat4} -
     */
    public scale(v: any): any;
    /**
     * Sets perspective projection matrix frustum values.
     * @public
     * @param {number} left -
     * @param {number} right -
     * @param {number} bottom -
     * @param {number} top -
     * @param {number} near -
     * @param {number} far -
     * @returns {og.Mat4} -
     */
    public setPerspective(left: number, right: number, bottom: number, top: number, near: number, far: number): any;
    /**
     * Creates current orthographic projection matrix.
     * @public
     * @param {number} left -
     * @param {number} right -
     * @param {number} bottom -
     * @param {number} top -
     * @param {number} near -
     * @param {number} far -
     * @return {og.Mat4} -
     */
    public setOrtho(left: number, right: number, bottom: number, top: number, near: number, far: number): any;
    /**
     * Sets current rotation matrix by euler's angles.
     * @public
     * @param {number} ax - Rotation angle in radians arond X axis.
     * @param {number} ay - Rotation angle in radians arond Y axis.
     * @param {number} az - Rotation angle in radians arond Z axis.
     * @returns {og.Mat4} -
     */
    public eulerToMatrix(ax: number, ay: number, az: number): any;
}
