import { PointLight } from "../lights/PointLight.js";
import { ColorRepresentation } from "../math/Color.js";
import { Mesh } from "../objects/Mesh.js";

/**
 * This displays a helper object consisting of a spherical mesh for
 * visualizing an instance of {@link PointLight}.
 *
 * ```js
 * const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
 * pointLight.position.set( 10, 10, 10 );
 * scene.add( pointLight );
 *
 * const sphereSize = 1;
 * const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
 * scene.add( pointLightHelper );
 * ```
 */
export class PointLightHelper extends Mesh {
    /**
     * Constructs a new point light helper.
     *
     * @param {PointLight} light - The light to be visualized.
     * @param {number} [sphereSize=1] - The size of the sphere helper.
     * @param {number|Color|string} [color] - The helper's color. If not set, the helper will take
     * the color of the light.
     */
    constructor(light: PointLight, sphereSize?: number, color?: ColorRepresentation);
    /**
     * The light being visualized.
     */
    light: PointLight;
    /**
     * The color parameter passed in the constructor.
     * If not set, the helper will take the color of the light.
     */
    color: ColorRepresentation | undefined;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
    /**
     * Updates the helper to match the position of the
     * light being visualized.
     */
    update(): void;
}
