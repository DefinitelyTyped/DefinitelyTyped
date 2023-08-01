import { PerspectiveCamera } from './PerspectiveCamera.js';
import { Camera } from './Camera.js';

/**
 * Dual {@link PerspectiveCamera | PerspectiveCamera}s used for effects such as
 * {@link https://en.wikipedia.org/wiki/Anaglyph_3D | 3D Anaglyph} or
 * {@link https://en.wikipedia.org/wiki/parallax_barrier | Parallax Barrier}.
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_anaglyph | effects / anaglyph }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_parallaxbarrier | effects / parallaxbarrier }
 * @see Example: {@link https://threejs.org/examples/#webgl_effects_stereo | effects / stereo }
 * @see {@link https://threejs.org/docs/index.html#api/en/cameras/StereoCamera | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js | Source}
 */
export class StereoCamera extends Camera {
    constructor();

    type: 'StereoCamera';

    /**
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    aspect: number;

    /**
     * @remarks Expects a `Float`
     * @defaultValue `0.064`
     */
    eyeSep: number;

    /**
     * The Left camera.
     * A {@link PerspectiveCamera } added to {@link THREE.PerspectiveCamera.layers | layer 1}
     * @remarks Objects to be rendered by the **left** camera must also be added to this layer.
     */
    cameraL: PerspectiveCamera;

    /**
     * The Right camera.
     * A {@link PerspectiveCamera } added to {@link THREE.PerspectiveCamera.layers | layer 2}
     * @remarks Objects to be rendered by the **right** camera must also be added to this layer.
     */
    cameraR: PerspectiveCamera;

    /**
     * Update the stereo cameras based on the camera passed in.
     * @param camera
     */
    update(camera: PerspectiveCamera): void;
}
