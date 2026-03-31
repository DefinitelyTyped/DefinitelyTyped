import { OrthographicCamera } from "../cameras/OrthographicCamera.js";
import { LightShadow } from "./LightShadow.js";

/**
 * Represents the shadow configuration of directional lights.
 */
export class DirectionalLightShadow extends LightShadow<OrthographicCamera> {
    /**
     * Constructs a new directional light shadow.
     */
    constructor();
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isDirectionalLightShadow: boolean;
}
