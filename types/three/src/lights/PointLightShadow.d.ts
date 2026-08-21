import { PerspectiveCamera } from "../cameras/PerspectiveCamera.js";
import { LightShadow } from "./LightShadow.js";

/**
 * Represents the shadow configuration of point lights.
 */
export class PointLightShadow extends LightShadow<PerspectiveCamera> {
    /**
     * Constructs a new point light shadow.
     */
    constructor();
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isPointLightShadow: boolean;
}
