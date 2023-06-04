import { PerspectiveCamera } from './../cameras/PerspectiveCamera';
import { Light } from './Light';
import { LightShadow } from './LightShadow';

/**
 * Shadow for {@link THREE.PointLight | PointLight}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js | Source}
 */
export class PointLightShadow extends LightShadow<PerspectiveCamera> {
    /**
     * Read-only flag to check if a given object is of type {@link PointLightShadow}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isPointLightShadow = true;

    /**
     * Update the matrices for the camera and shadow, used internally by the renderer.
     * @param light The light for which the shadow is being rendered.
     */
    override updateMatrices(light: Light, viewportIndex?: number): void;
}
