import { Object3D } from "../core/Object3D.js";
import { SpotLight } from "../lights/SpotLight.js";
import { ColorRepresentation } from "../math/Color.js";
import { LineSegments } from "../objects/LineSegments.js";

/**
 * This displays a cone shaped helper object for a {@link SpotLight}.
 *
 * When the spot light or its target are transformed or light properties are
 * changed, it's necessary to call the `update()` method of the respective helper.
 *
 * ```js
 * const spotLight = new THREE.SpotLight( 0xffffff );
 * spotLight.position.set( 10, 10, 10 );
 * scene.add( spotLight );
 *
 * const spotLightHelper = new THREE.SpotLightHelper( spotLight );
 * scene.add( spotLightHelper );
 * ```
 */
export class SpotLightHelper extends Object3D {
    /**
     * Constructs a new spot light helper.
     *
     * @param {HemisphereLight} light - The light to be visualized.
     * @param {number|Color|string} [color] - The helper's color. If not set, the helper will take
     * the color of the light.
     */
    constructor(light: SpotLight, color?: ColorRepresentation);
    /**
     * The light being visualized.
     */
    light: SpotLight;
    /**
     * The color parameter passed in the constructor.
     * If not set, the helper will take the color of the light.
     */
    color: ColorRepresentation | undefined;
    cone: LineSegments;
    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose(): void;
    /**
     * Updates the helper to match the position and direction of the
     * light being visualized.
     */
    update(): void;
}
