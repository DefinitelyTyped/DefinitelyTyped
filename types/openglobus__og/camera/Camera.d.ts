/**
 * Camera class.
 * @class
 * @param {og.Renderer} [renderer] - Renderer uses the camera instance.
 * @param {Object} [options] - Camera options:
 * @param {Object} [options.name] - Camera name.
 * @param {number} [options.viewAngle=38] - Camera angle of view. Default is 30.0
 * @param {number} [options.near=1] - Camera near plane distance. Default is 1.0
 * @param {number} [options.far=og.math.MAX] - Camera far plane distance. Deafult is og.math.MAX
 * @param {og.Vec3} [options.eye=[0,0,0]] - Camera eye position. Default (0,0,0)
 * @param {og.Vec3} [options.look=[0,0,0]] - Camera look position. Default (0,0,0)
 * @param {og.Vec3} [options.up=[0,1,0]] - Camera eye position. Default (0,1,0)
 *
 * @fires og.Camera#viewchange
 */
export class Camera {
    constructor(renderer: any, options: any);
    /**
     * Assigned renderer
     * @public
     * @type {og.Renderer}
     */
    public renderer: any;
    /**
     * Camera events handler
     * @public
     * @type {og.Events}
     */
    public events: any;
    /**
     * Camera position.
     * @public
     * @type {og.Vec3}
     */
    public eye: any;
    /**
     * Camera RTE high position
     * @public
     * @type {og.Vec3}
     */
    public eyeHigh: any;
    /**
     * Camera RTE low position
     * @public
     * @type {og.Vec3}
     */
    public eyeLow: any;
    /**
     * Aspect ratio.
     * @protected
     * @type {Number}
     */
    protected _aspect: number;
    /**
     * Camera view angle in degrees
     * @protected
     * @type {Number}
     */
    protected _viewAngle: number;
    /**
     * Camera normal matrix.
     * @protected
     * @type {og.Mat3}
     */
    protected _normalMatrix: any;
    /**
     * Camera view matrix.
     * @protected
     * @type {og.Mat4}
     */
    protected _viewMatrix: any;
    /**
     * Camera right vector.
     * @protected
     * @type {og.Vec3}
     */
    protected _u: any;
    /**
     * Camera up vector.
     * @protected
     * @type {og.Vec3}
     */
    protected _v: any;
    /**
     * Camera forward vector.
     * @protected
     * @type {og.Vec3}
     */
    protected _n: any;
    _pu: any;
    _pv: any;
    _pn: any;
    _peye: any;
    _moved: boolean;
    _tanViewAngle_hrad: number;
    _tanViewAngle_hradOneByHeight: number;
    frustums: Frustum[];
    nearFarArr: any[];
    frustumColors: any[];
    FARTHEST_FRUSTUM_INDEX: number;
    _currentFrustum: number;
    checkMoveEnd(): void;
    /**
     * Camera initialization.
     * @public
     * @param {og.Renderer} renderer - OpenGlobus renderer object.
     * @param {Object} [options] - Camera options:
     * @param {number} [options.viewAngle] - Camera angle of view. Default is 30.0
     * @param {number} [options.near] - Camera near plane distance. Default is 1.0
     * @param {number} [options.far] - Camera far plane distance. Deafult is og.math.MAX
     * @param {og.Vec3} [options.eye] - Camera eye position. Default (0,0,0)
     * @param {og.Vec3} [options.look] - Camera look position. Default (0,0,0)
     * @param {og.Vec3} [options.up] - Camera eye position. Default (0,1,0)
     */
    public _init(options?: {
        viewAngle?: number;
        near?: number;
        far?: number;
        eye?: any;
        look?: any;
        up?: any;
    }): void;
    getUp(): any;
    getDown(): any;
    getRight(): any;
    getLeft(): any;
    getForward(): any;
    getBackward(): any;
    /**
     * Updates camera view space
     * @public
     * @virtual
     */
    public update(): void;
    /**
     * Refresh camera matrices
     * @public
     */
    public refresh(): void;
    /**
     * Sets aspect ratio
     * @public
     * @param {Number} aspect - Camera aspect ratio
     */
    public setAspectRatio(aspect: number): void;
    /**
     * Returns aspect ratio
     * @public
     * @returns {number} - Aspect ratio
     */
    public getAspectRatio(): number;
    /**
     * Sets up camera projection
     * @public
     * @param {nnumber} angle - Camera's view angle
     * @param {number} aspect - Screen aspect ration
     */
    public _setProj(angle: any, aspect: number): void;
    _projSizeConst: number;
    /**
     * Sets camera view angle in degrees
     * @public
     * @param {number} angle - View angle
     */
    public setViewAngle(angle: number): void;
    /**
     * Gets camera view angle in degrees
     * @public
     * @returns {number} angle -
     */
    public getViewAngle(): number;
    /**
     * Sets camera to eye position
     * @public
     * @param {og.Vec3} eye - Camera position
     * @param {og.Vec3} look - Look point
     * @param {og.Vec3} up - Camera up vector
     * @returns {og.Camera} - This camera
     */
    public set(eye: any, look: any, up: any): any;
    /**
     * Sets camera look point
     * @public
     * @param {og.Vec3} look - Look point
     * @param {og.Vec3} [up] - Camera up vector otherwise camera current up vector(this._v)
     */
    public look(look: any, up?: any): void;
    /**
     * Slides camera to vector d - (du, dv, dn)
     * @public
     * @param {number} du - delta X
     * @param {number} dv - delta Y
     * @param {number} dn - delta Z
     */
    public slide(du: number, dv: number, dn: number): void;
    /**
     * Roll the camera to the angle in degrees
     * @public
     * @param {number} angle - Delta roll angle in degrees
     */
    public roll(angle: number): void;
    /**
     * Pitch the camera to the angle in degrees
     * @public
     * @param {number} angle - Delta pitch angle in degrees
     */
    public pitch(angle: number): void;
    /**
     * Yaw the camera to the angle in degrees
     * @public
     * @param {number} angle - Delta yaw angle in degrees
     */
    public yaw(angle: number): void;
    /**
     * Returns normal vector direction to to the unprojected screen point from camera eye
     * @public
     * @param {number} x - Scren X coordinate
     * @param {number} y - Scren Y coordinate
     * @returns {og.Vec3} - Direction vector
     */
    public unproject(x: number, y: number): any;
    /**
     * Gets projected 3d point to the 2d screen coordiantes
     * @public
     * @param {og.Vec3} v - Cartesian 3d coordiantes
     * @returns {og.Vec2} - Screen point coordinates
     */
    public project(v: any): any;
    /**
     * Rotates camera around center point
     * @public
     * @param {number} angle - Rotation angle in radians
     * @param {boolean} isArc - If true camera up vector gets from current up vector every frame,
     * otherwise up is always input parameter.
     * @param {og.Vec3} center - Point that the camera rotates around
     * @param {og.math.Vecto3} [up] - Camera up vector
     */
    public rotateAround(angle: number, isArc: boolean, center: any, up?: any): void;
    /**
     * Rotates camera around center point by horizontal.
     * @public
     * @param {number} angle - Rotation angle in radians.
     * @param {boolaen} isArc - If true camera up vector gets from current up vector every frame,
     * otherwise up is always input parameter.
     * @param {og.Vec3} center - Point that the camera rotates around.
     * @param {og.Vec3} [up] - Camera up vector.
     */
    public rotateHorizontal(angle: number, isArc: any, center: any, up?: any): void;
    /**
     * Rotates camera around center point by vecrtical.
     * @param {number} angle - Rotation angle in radians.
     * @param {og.Vec3} center - Point that the camera rotates around.
     */
    rotateVertical(angle: number, center: any): void;
    /**
     * Gets 3d size factor. Uses in LOD distance calculation.
     * @public
     * @param {og.Vec3} p - Far point.
     * @param {og.Vec3} r - Far point.
     * @returns {number} - Size factor.
     */
    public projectedSize(p: any, r: any): number;
    /**
     * Returns normal matrix.
     * @public
     * @returns {og.Mat3} - Normal matrix.
     */
    public getNormalMatrix(): any;
    /**
     * Returns model matrix.
     * @public
     * @returns {og.Mat4} - View matrix.
     */
    public getViewMatrix(): any;
    setCurrentFrustum(k: any): void;
    getCurrentFrustum(): number;
    get frustum(): Frustum;
    /**
     * Returns projection matrix.
     * @public
     * @returns {og.Mat4} - Projection matrix.
     */
    public getProjectionMatrix(): any;
    /**
     * Returns projection and model matrix product.
     * @public
     * @return {og.Mat4} - Projection-view matrix.
     */
    public getProjectionViewMatrix(): any;
    /**
     * Returns inverse projection and model matrix product.
     * @public
     * @returns {og.Mat4} - Inversed projection-view matrix.
     */
    public getInverseProjectionViewMatrix(): any;
    /**
     * Returns inverse projection matrix.
     * @public
     * @returns {og.Mat4} - Inversed projection-view matrix.
     */
    public getInverseProjectionMatrix(): any;
}
import { Frustum } from "./Frustum.js";
