import { PerspectiveCamera } from "../cameras/PerspectiveCamera.js";
import { LightShadow } from "./LightShadow.js";

/**
 * Represents the shadow configuration of directional lights.
 */
export class SpotLightShadow extends LightShadow<PerspectiveCamera> {
    /**
     * Constructs a new spot light shadow.
     */
    constructor();
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isSpotLightShadow: boolean;
    /**
     * Used to focus the shadow camera. The camera's field of view is set as a
     * percentage of the spotlight's field-of-view. Range is `[0, 1]`.
     *
     * @default 1
     */
    focus: number;
    /**
     * Texture aspect ratio.
     *
     * @default 1
     */
    aspect: number;
    copy(source: SpotLightShadow): this;
}
