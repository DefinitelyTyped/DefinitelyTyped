import { JSONMeta } from "../core/Object3D.js";
import { ColorRepresentation } from "../math/Color.js";
import { Light, LightJSON } from "./Light.js";
import { LightShadowJSON } from "./LightShadow.js";
import { PointLightShadow } from "./PointLightShadow.js";

export interface PointLightJSON extends LightJSON {
    distance: number;
    decay: number;

    shadow: LightShadowJSON;
}

/**
 * A light that gets emitted from a single point in all directions. A common
 * use case for this is to replicate the light emitted from a bare
 * lightbulb.
 *
 * This light can cast shadows - see the {@link PointLightShadow} for details.
 *
 * ```js
 * const light = new THREE.PointLight( 0xff0000, 1, 100 );
 * light.position.set( 50, 50, 50 );
 * scene.add( light );
 * ```
 */
export class PointLight extends Light {
    /**
     * Constructs a new point light.
     *
     * @param {(number|Color|string)} [color=0xffffff] - The light's color.
     * @param {number} [intensity=1] - The light's strength/intensity measured in candela (cd).
     * @param {number} [distance=0] - Maximum range of the light. `0` means no limit.
     * @param {number} [decay=2] - The amount the light dims along the distance of the light.
     */
    constructor(color?: ColorRepresentation, intensity?: number, distance?: number, decay?: number);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isPointLight: boolean;
    /**
     * When distance is zero, light will attenuate according to inverse-square
     * law to infinite distance. When distance is non-zero, light will attenuate
     * according to inverse-square law until near the distance cutoff, where it
     * will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not
     * physically correct.
     *
     * @default 0
     */
    distance: number;
    /**
     * The amount the light dims along the distance of the light. In context of
     * physically-correct rendering the default value should not be changed.
     *
     * @default 2
     */
    decay: number;
    /**
     * This property holds the light's shadow configuration.
     */
    shadow: PointLightShadow;
    set power(power: number);
    /**
     * The light's power. Power is the luminous power of the light measured in lumens (lm).
     * Changing the power will also change the light's intensity.
     */
    get power(): number;
    copy(source: PointLight, recursive?: boolean): this;
    toJSON(meta?: JSONMeta): PointLightJSON;
}
