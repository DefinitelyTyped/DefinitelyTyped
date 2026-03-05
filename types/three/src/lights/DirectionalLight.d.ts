import { JSONMeta, Object3D } from "../core/Object3D.js";
import { ColorRepresentation } from "../math/Color.js";
import { DirectionalLightShadow } from "./DirectionalLightShadow.js";
import { Light, LightJSON } from "./Light.js";
import { LightShadowJSON } from "./LightShadow.js";

export interface DirectionalLightJSON extends LightJSON {
    shadow: LightShadowJSON;
    target: string;
}

/**
 * A light that gets emitted in a specific direction. This light will behave
 * as though it is infinitely far away and the rays produced from it are all
 * parallel. The common use case for this is to simulate daylight; the sun is
 * far enough away that its position can be considered to be infinite, and
 * all light rays coming from it are parallel.
 *
 * A common point of confusion for directional lights is that setting the
 * rotation has no effect. This is because three.js's DirectionalLight is the
 * equivalent to what is often called a 'Target Direct Light' in other
 * applications.
 *
 * This means that its direction is calculated as pointing from the light's
 * {@link Object3D#position} to the {@link DirectionalLight#target} position
 * (as opposed to a 'Free Direct Light' that just has a rotation
 * component).
 *
 * This light can cast shadows - see the {@link DirectionalLightShadow} for details.
 *
 * ```js
 * // White directional light at half intensity shining from the top.
 * const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
 * scene.add( directionalLight );
 * ```
 */
export class DirectionalLight extends Light {
    /**
     * Constructs a new directional light.
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
    readonly isDirectionalLight: boolean;
    /**
     * The directional light points from its position to the
     * target's position.
     *
     * For the target's position to be changed to anything other
     * than the default, it must be added to the scene.
     *
     * It is also possible to set the target to be another 3D object
     * in the scene. The light will now track the target object.
     */
    target: Object3D;
    /**
     * This property holds the light's shadow configuration.
     */
    shadow: DirectionalLightShadow;
    copy(source: DirectionalLight): this;
    toJSON(meta?: JSONMeta): DirectionalLightJSON;
}
