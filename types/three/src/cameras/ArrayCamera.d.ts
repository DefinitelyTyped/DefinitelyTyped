import { PerspectiveCamera } from './PerspectiveCamera';

/**
 * {@link ArrayCamera} can be used in order to efficiently render a scene with a predefined set of cameras
 * @remarks
 * This is an important performance aspect for rendering VR scenes.
 * An instance of {@link ArrayCamera} always has an array of sub cameras
 * It's mandatory to define for each sub camera the `viewport` property which determines the part of the viewport that is rendered with this camera.
 * @see Example: {@link https://threejs.org/examples/#webgl_camera_array | camera / array }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/ArrayCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/ArrayCamera.js | Source}
 */
export class ArrayCamera extends PerspectiveCamera {
    /**
     * An array of cameras.
     * @param array. Default `[]`.
     */
    constructor(cameras?: PerspectiveCamera[]);

    /**
     * Read-only flag to check if a given object is of type {@link ArrayCamera}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isArrayCamera: true;

    /**
     * An array of cameras.
     * @defaultValue `[]`
     */
    cameras: PerspectiveCamera[];
}
