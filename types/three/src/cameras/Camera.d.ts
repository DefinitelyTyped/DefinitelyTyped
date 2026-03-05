import { CoordinateSystem } from "../constants.js";
import { Object3D } from "../core/Object3D.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Vector4 } from "../math/Vector4.js";

/**
 * Abstract base class for cameras. This class should always be inherited
 * when you build a new camera.
 */
export class Camera extends Object3D {
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isCamera: boolean;
    /**
     * The inverse of the camera's world matrix.
     */
    matrixWorldInverse: Matrix4;
    /**
     * The camera's projection matrix.
     */
    projectionMatrix: Matrix4;
    /**
     * The inverse of the camera's projection matrix.
     */
    projectionMatrixInverse: Matrix4;
    /**
     * The coordinate system in which the camera is used.
     */
    coordinateSystem: CoordinateSystem;
    viewport?: Vector4;
    /**
     * The flag that indicates whether the camera uses a reversed depth buffer.
     *
     * @default false
     */
    get reversedDepth(): boolean;
    copy(source: Camera, recursive?: boolean): this;
    clone(): this;
}
