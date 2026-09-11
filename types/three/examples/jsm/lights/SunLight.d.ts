import { ColorRepresentation, JSONMeta, Light, LightJSON, LightShadowJSON } from "three";
import { SunLightShadow } from "./SunLightShadow.js";

export interface SunLightJSON extends LightJSON {
    shadow: LightShadowJSON;
}

/**
 * A sun-like light that gets emitted in a specific direction, with rays that
 * are all parallel, and casts cascaded shadow maps via {@link SunLightShadow},
 * suited for lighting large scenes.
 *
 * Unlike {@link DirectionalLight}, the light has no target: like
 * {@link HemisphereLight}, its direction is defined by its position. The
 * light shines from its position towards the origin and points straight
 * down by default.
 *
 * ```js
 * const sun = new SunLight( 0xfff2e3, 3 );
 * sun.position.set( 1, 1, 1 );
 * sun.castShadow = true;
 * scene.add( sun );
 * ```
 *
 * When used with `WebGPURenderer`, the light must be registered with the
 * renderer's node library first:
 * ```js
 * renderer.library.addLight( SunLightNode, SunLight );
 * ```
 *
 * @three_import import { SunLight } from 'three/addons/lights/SunLight.js';
 */
export class SunLight extends Light {
    /**
     * Constructs a new sun light.
     *
     * @param {(number|Color|string)} [color=0xffffff] - The light's color.
     * @param {number} [intensity=1] - The light's strength/intensity.
     */
    constructor(color?: ColorRepresentation, intensity?: number);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isSunLight: boolean;
    /**
     * This property holds the light's shadow configuration.
     */
    shadow: SunLightShadow;
    copy(source: SunLight): this;
    toJSON(meta?: JSONMeta): SunLightJSON;
}
