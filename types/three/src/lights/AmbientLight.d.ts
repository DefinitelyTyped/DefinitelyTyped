import { ColorRepresentation } from "../math/Color.js";
import { Light } from "./Light.js";

/**
 * This light globally illuminates all objects in the scene equally.
 *
 * It cannot be used to cast shadows as it does not have a direction.
 *
 * ```js
 * const light = new THREE.AmbientLight( 0x404040 ); // soft white light
 * scene.add( light );
 * ```
 */
export class AmbientLight extends Light {
    /**
     * Constructs a new ambient light.
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
    readonly isAmbientLight: boolean;
}
