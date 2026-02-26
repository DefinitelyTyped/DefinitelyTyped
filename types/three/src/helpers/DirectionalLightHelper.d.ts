import { Object3D } from "../core/Object3D.js";
import { DirectionalLight } from "../lights/DirectionalLight.js";
import { ColorRepresentation } from "../math/Color.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Line } from "../objects/Line.js";

/**
 * Helper object to assist with visualizing a {@link DirectionalLight}'s
 * effect on the scene. This consists of a plane and a line representing the
 * light's position and direction.
 *
 * When the directional light or its target are transformed or light properties
 * are changed, it's necessary to call the `update()` method of the respective helper.
 *
 * ```js
 * const light = new THREE.DirectionalLight( 0xFFFFFF );
 * scene.add( light );
 *
 * const helper = new THREE.DirectionalLightHelper( light, 5 );
 * scene.add( helper );
 * ```
 */
export class DirectionalLightHelper extends Object3D {
    /**
     * Constructs a new directional light helper.
     *
     * @param {DirectionalLight} light - The light to be visualized.
     * @param {number} [size=1] - The dimensions of the plane.
     * @param {number|Color|string} [color] - The helper's color. If not set, the helper will take
     * the color of the light.
     */
    constructor(light: DirectionalLight, size?: number, color?: ColorRepresentation);
    /**
     * The light being visualized.
     */
    light: DirectionalLight;
    /**
     * The color parameter passed in the constructor.
     * If not set, the helper will take the color of the light.
     */
    color: ColorRepresentation | undefined;
    /**
     * Contains the line showing the location of the directional light.
     */
    lightPlane: Line;
    /**
     * Represents the target line of the directional light.
     */
    targetLine: Line;
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
