import { JSONMeta } from "../core/Object3D.js";
import { Color, ColorRepresentation } from "../math/Color.js";
import { Light, LightJSON } from "./Light.js";

export interface HemisphereLightJSON extends LightJSON {
    groundColor: number;
}

/**
 * A light source positioned directly above the scene, with color fading from
 * the sky color to the ground color.
 *
 * This light cannot be used to cast shadows.
 *
 * ```js
 * const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
 * scene.add( light );
 * ```
 */
export class HemisphereLight extends Light {
    /**
     * Constructs a new hemisphere light.
     *
     * @param {(number|Color|string)} [skyColor=0xffffff] - The light's sky color.
     * @param {(number|Color|string)} [groundColor=0xffffff] - The light's ground color.
     * @param {number} [intensity=1] - The light's strength/intensity.
     */
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isHemisphereLight: boolean;
    /**
     * The light's ground color.
     */
    groundColor: Color;
    copy(source: HemisphereLight, recursive?: boolean): this;
    toJSON(meta?: JSONMeta): HemisphereLightJSON;
}
