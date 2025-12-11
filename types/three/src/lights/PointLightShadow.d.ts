import { PerspectiveCamera } from "../cameras/PerspectiveCamera.js";
import { LightShadow } from "./LightShadow.js";

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
    readonly isPointLightShadow: true;
}
