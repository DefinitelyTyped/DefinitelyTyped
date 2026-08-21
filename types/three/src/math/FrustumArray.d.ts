import { ArrayCamera } from "../cameras/ArrayCamera.js";
import { CoordinateSystem } from "../constants.js";
import { Object3D } from "../core/Object3D.js";
import { Sprite } from "../objects/Sprite.js";
import { Box3 } from "./Box3.js";
import { Sphere } from "./Sphere.js";
import { Vector3 } from "./Vector3.js";

/**
 * FrustumArray is used to determine if an object is visible in at least one camera
 * from an array of cameras. This is particularly useful for multi-view renderers.
 */
export class FrustumArray {
    /**
     * The coordinate system to use.
     *
     * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
     * @default WebGLCoordinateSystem
     */
    coordinateSystem: CoordinateSystem;
    /**
     * Computes and caches a frustum for each camera of the given array camera.
     *
     * @param {ArrayCamera} cameraArray - The array camera whose sub-cameras define the frustums.
     * @return {FrustumArray} A reference to this frustum array.
     */
    setFromArrayCamera(cameraArray: ArrayCamera): FrustumArray;
    /**
     * Returns `true` if the 3D object's bounding sphere is intersecting any cached frustum.
     *
     * {@link FrustumArray#setFromArrayCamera} must be called once per render before this method.
     *
     * @param {Object3D} object - The 3D object to test.
     * @return {boolean} Whether the 3D object is visible in any camera.
     */
    intersectsObject(object: Object3D): boolean;
    /**
     * Returns `true` if the given sprite is intersecting any cached frustum.
     *
     * {@link FrustumArray#setFromArrayCamera} must be called once per render before this method.
     *
     * @param {Sprite} sprite - The sprite to test.
     * @return {boolean} Whether the sprite is visible in any camera.
     */
    intersectsSprite(sprite: Sprite): boolean;
    /**
     * Returns `true` if the given bounding sphere is intersecting any cached frustum.
     *
     * {@link FrustumArray#setFromArrayCamera} must be called once per render before this method.
     *
     * @param {Sphere} sphere - The bounding sphere to test.
     * @return {boolean} Whether the sphere is visible in any camera.
     */
    intersectsSphere(sphere: Sphere): boolean;
    /**
     * Returns `true` if the given bounding box is intersecting any cached frustum.
     *
     * {@link FrustumArray#setFromArrayCamera} must be called once per render before this method.
     *
     * @param {Box3} box - The bounding box to test.
     * @return {boolean} Whether the box is visible in any camera.
     */
    intersectsBox(box: Box3): boolean;
    /**
     * Returns `true` if the given point lies within any cached frustum.
     *
     * {@link FrustumArray#setFromArrayCamera} must be called once per render before this method.
     *
     * @param {Vector3} point - The point to test.
     * @return {boolean} Whether the point is visible in any camera.
     */
    containsPoint(point: Vector3): boolean;
    /**
     * Copies the values of the given frustum array to this instance.
     *
     * @param {FrustumArray} frustumArray - The frustum array to copy.
     * @return {FrustumArray} A reference to this frustum array.
     */
    copy(source: FrustumArray): this;
    /**
     * Returns a new frustum array with copied values from this instance.
     *
     * @return {FrustumArray} A clone of this instance.
     */
    clone(): FrustumArray;
}
