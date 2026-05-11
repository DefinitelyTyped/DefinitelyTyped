import { Texture } from "../../textures/Texture.js";
import { SpotLight } from "../SpotLight.js";

/**
 * A IES version of {@link SpotLight}. Can only be used with {@link WebGPURenderer}.
 */
declare class IESSpotLight extends SpotLight {
    /**
     * The IES map. It's a lookup table that stores normalized attenuation factors
     * (0.0 to 1.0) that represent the light's intensity at a specific angle.
     *
     * @default null
     */
    iesMap: Texture | null;
    copy(source: IESSpotLight, recursive?: boolean): this;
}

export default IESSpotLight;
