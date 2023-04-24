import { Color } from '../math/Color';
import { Matrix4 } from '../math/Matrix4';
import { Camera } from './../cameras/Camera';
import { LineSegments } from './../objects/LineSegments';

/**
 * This helps with visualizing what a camera contains in its frustum.
 * It visualizes the frustum of a camera using a {@link LineSegments}.
 *
 * CameraHelper must be a child of the scene.
 */
export class CameraHelper extends LineSegments {
    /**
     * This create a new CameraHelper for the specified camera.
     *
     * @param camera - The camera to visualize.
     */
    constructor(camera: Camera);

    /**
     * The camera being visualized.
     */
    camera: Camera;

    /**
     * This contains the points used to visualize the camera.
     */
    pointMap: { [id: string]: number[] };

    /**
     * Reference to the {@link Camera.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * See {@link Object3D.matrixAutoUpdate}.
     * Set to `false` here as the helper is using the camera's {@link Camera.matrixWorld}.
     */
    matrixAutoUpdate: boolean;

    /**
     * @default 'CameraHelper'
     */
    type: string;

    /**
     * Updates the helper based on the projectionMatrix of the camera.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance.
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;

    /**
     * Defines the colors of the helper.
     */
    setColors(frustum: Color, cone: Color, up: Color, target: Color, cross: Color): this;
}
