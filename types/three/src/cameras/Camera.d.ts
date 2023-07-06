import { Matrix4 } from './../math/Matrix4';
import { Vector3 } from './../math/Vector3';
import { Object3D } from './../core/Object3D';
import { Layers } from '../Three';

/**
 * Abstract base class for cameras
 * @remarks
 * This class should always be inherited when you build a new camera.
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/Camera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/Camera.js | Source}
 */
export abstract class Camera extends Object3D {
    /**
     * @remarks
     * Note that this class is not intended to be called directly; you probably want a
     * {@link THREE.PerspectiveCamera | PerspectiveCamera} or
     * {@link THREE.OrthographicCamera | OrthographicCamera} instead.
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link Camera}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCamera: true;

    /**
     * @override
     * @defaultValue `Camera`
     */
    override readonly type: string | 'Camera';

    /**
     * @override
     * The {@link THREE.Layers | layers} that the {@link Camera} is a member of.
     * @remarks Objects must share at least one layer with the {@link Camera} to be n when the camera's viewpoint is rendered.
     * @defaultValue `new THREE.Layers()`
     */
    override layers: Layers;

    /**
     * This is the inverse of matrixWorld.
     * @remarks MatrixWorld contains the Matrix which has the world transform of the {@link Camera} .
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    matrixWorldInverse: Matrix4;

    /**
     * This is the matrix which contains the projection.
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    projectionMatrix: Matrix4;

    /**
     * This is the inverse of projectionMatrix.
     * @defaultValue {@link THREE.Matrix4 | `new THREE.Matrix4()`}
     */
    projectionMatrixInverse: Matrix4;

    /**
     * Returns a {@link THREE.Vector3 | Vector3} representing the world space direction in which the {@link Camera} is looking.
     * @remarks Note: A {@link Camera} looks down its local, negative z-axis.
     * @param target The result will be copied into this Vector3.
     */
    getWorldDirection(target: Vector3): Vector3;
}
