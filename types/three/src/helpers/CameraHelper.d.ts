import { Camera } from "../cameras/Camera.js";
import { Color } from "../math/Color.js";
import { LineSegments } from "../objects/LineSegments.js";

/**
 * This helps with visualizing what a camera contains in its frustum. It
 * visualizes the frustum of a camera using a line segments.
 *
 * Based on frustum visualization in [lightgl.js shadowmap example](https://github.com/evanw/lightgl.js/blob/master/tests/shadowmap.html).
 *
 * `CameraHelper` must be a child of the scene.
 *
 * When the camera is transformed or its projection matrix is changed, it's necessary
 * to call the `update()` method of the respective helper.
 *
 * ```js
 * const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
 * const helper = new THREE.CameraHelper( camera );
 * scene.add( helper );
 * ```
 */
export class CameraHelper extends LineSegments {
    /**
     * Constructs a new arrow helper.
     *
     * @param {Camera} camera - The camera to visualize.
     */
    constructor(camera: Camera);
    /**
     * The camera being visualized.
     */
    camera: Camera;
    /**
     * This contains the points used to visualize the camera.
     */
    pointMap: {
        [x: string]: number[];
    };
    /**
     * Defines the colors of the helper.
     *
     * @param {Color} frustum - The frustum line color.
     * @param {Color} cone - The cone line color.
     * @param {Color} up - The up line color.
     * @param {Color} target - The target line color.
     * @param {Color} cross - The cross line color.
     * @return {CameraHelper} A reference to this helper.
     */
    setColors(frustum: Color, cone: Color, up: Color, target: Color, cross: Color): CameraHelper;
    /**
     * Updates the helper based on the projection matrix of the camera.
     */
    update(): void;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
