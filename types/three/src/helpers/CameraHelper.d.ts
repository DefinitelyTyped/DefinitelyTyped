import { Color } from '../math/Color.js';
import { Matrix4 } from '../math/Matrix4.js';
import { Camera } from './../cameras/Camera.js';
import { LineSegments } from './../objects/LineSegments.js';

/**
 * This helps with visualizing what a camera contains in its frustum
 * @remarks
 * It visualizes the frustum of a camera using a {@link THREE.LineSegments | LineSegments}.
 * @remarks {@link CameraHelper} must be a child of the scene.
 * @example
 * ```typescript
 * const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 * const helper = new THREE.CameraHelper(camera);
 * scene.add(helper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_camera | WebGL / camera}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGL / extrude / splines}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/CameraHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/CameraHelper.js | Source}
 */
export class CameraHelper extends LineSegments {
    /**
     * This create a new {@link CameraHelper} for the specified camera.
     * @param camera The camera to visualize.
     */
    constructor(camera: Camera);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `CameraHelper`
     */
    override readonly type: string | 'CameraHelper';

    /**
     * The camera being visualized.
     */
    camera: Camera;

    /**
     * This contains the points used to visualize the camera.
     */
    pointMap: { [id: string]: number[] };

    /**
     * Reference to the {@link THREE.Camera.matrixWorld | camera.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.Camera.matrixWorld | camera.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * Defines the colors of the helper.
     * @param frustum
     * @param cone
     * @param up
     * @param target
     * @param cross
     */
    setColors(frustum: Color, cone: Color, up: Color, target: Color, cross: Color): this;

    /**
     * Updates the helper based on the projectionMatrix of the camera.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
