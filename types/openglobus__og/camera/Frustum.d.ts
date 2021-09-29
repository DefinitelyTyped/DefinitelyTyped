/**
 * Frustum object, part of the camera object.
 * @class
 */
export class Frustum {
    constructor(options?: {});
    /**
     * Frustum planes.
     * @private
     * @type {Array.<Array.<number>>}
     */
    private _f;
    /**
     * Camera projection matrix.
     * @protected
     * @type {og.Mat4}
     */
    protected _projectionMatrix: any;
    /**
     * Camera inverse projection matrix.
     * @protected
     * @type {og.Mat4}
     */
    protected _inverseProjectionMatrix: any;
    /**
     * Product of projection and view matrices.
     * @protected
     * @type {og.Mat4}
     */
    protected _projectionViewMatrix: any;
    /**
     * Inverse projectionView Matrix.
     * @protected
     * @type {og.Mat4}
     */
    protected _inverseProjectionViewMatrix: any;
    /**
     * Projection frustum left value.
     * @public
     */
    public left: number;
    /**
     * Projection frustum right value.
     * @public
     */
    public right: number;
    /**
     * Projection frustum bottom value.
     * @public
     */
    public bottom: number;
    /**
     * Projection frustum top value.
     * @public
     */
    public top: number;
    /**
     * Projection frustum near value.
     * @public
     */
    public near: number;
    /**
     * Projection frustum far value.
     * @public
     */
    public far: number;
    _cameraFrustumIndex: any;
    getRightPlane(): number[];
    getLeftPlane(): number[];
    getBottomPlane(): number[];
    getTopPlane(): number[];
    getBackwardPlane(): number[];
    getForwardPlane(): number[];
    getProjectionViewMatrix(): any;
    getProjectionMatrix(): any;
    getInverseProjectionMatrix(): any;
    /**
     * Sets up camera projection matrix.
     * @public
     * @param {nnumber} angle - Camera's view angle.
     * @param {number} aspect - Screen aspect ration.
     * @param {number} near - Near camera distance.
     * @param {number} far - Far camera distance.
     */
    public setProjectionMatrix(angle: any, aspect: number, near: number, far: number): void;
    /**
     * Camera's projection matrix values.
     * @public
     * @param {Mat4} projectionView - projectionView matrix.
     */
    public setViewMatrix(viewMatrix: any): void;
    /**
     * Returns true if a point in the frustum.
     * @public
     * @param {og.Vec3} point - Cartesian point.
     * @returns {boolean} -
     */
    public containsPoint(point: any): boolean;
    /**
     * Returns true if the frustum contains a bonding sphere, but bottom plane exclude.
     * @public
     * @param {og.bv.Sphere} sphere - Bounding sphere.
     * @returns {boolean} -
     */
    public containsSphereBottomExc(sphere: any): boolean;
    containsSphereButtom(sphere: any): boolean;
    /**
     * Returns true if the frustum contains a bonding sphere.
     * @public
     * @param {og.bv.Sphere} sphere - Bounding sphere.
     * @returns {boolean} -
     */
    public containsSphere(sphere: any): boolean;
    /**
     * Returns true if the frustum contains a bonding sphere.
     * @public
     * @param {Vec3} center - Sphere center.
     * @param {number} radius - Sphere radius.
     * @returns {boolean} -
     */
    public containsSphere2(center: any, radius: number): boolean;
    /**
     * Returns true if the frustum contains a bounding box.
     * @public
     * @param {og.bv.Box} box - Bounding box.
     * @returns {boolean} -
     */
    public containsBox(box: any): boolean;
}
