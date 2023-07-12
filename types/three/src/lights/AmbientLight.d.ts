import { ColorRepresentation } from '../math/Color.js';
import { Light } from './Light.js';

/**
 * This light globally illuminates all objects in the scene equally.
 * @remarks This light cannot be used to cast shadows as it does not have a direction.
 * @example
 * ```typescript
 * const light = new THREE.AmbientLight(0x404040); // soft white light
 * scene.add(light);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/AmbientLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js | Source}
 */
export class AmbientLight extends Light<undefined> {
    /**
     * Creates a new {@link AmbientLight}.
     * @param color Numeric value of the RGB component of the color. Default `0xffffff`
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`
     */
    constructor(color?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link AmbientLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isAmbientLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `AmbientLight`
     */
    override readonly type: string | 'AmbientLight';
}
