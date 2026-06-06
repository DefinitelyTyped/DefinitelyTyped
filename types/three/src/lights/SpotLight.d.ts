import { JSONMeta, Object3D } from "../core/Object3D.js";
import { ColorRepresentation } from "../math/Color.js";
import { Texture } from "../textures/Texture.js";
import { Light, LightJSON } from "./Light.js";
import { LightShadowJSON } from "./LightShadow.js";
import { SpotLightShadow } from "./SpotLightShadow.js";

export interface SpotLightJSON extends LightJSON {
    distance: number;
    angle: number;
    decay: number;
    penumbra: number;

    target: string;
    map?: string | undefined;

    shadow: LightShadowJSON;
}

/**
 * This light gets emitted from a single point in one direction, along a cone
 * that increases in size the further from the light it gets.
 *
 * This light can cast shadows - see the {@link SpotLightShadow} for details.
 *
 * ```js
 * // white spotlight shining from the side, modulated by a texture
 * const spotLight = new THREE.SpotLight( 0xffffff );
 * spotLight.position.set( 100, 1000, 100 );
 * spotLight.map = new THREE.TextureLoader().load( url );
 *
 * spotLight.castShadow = true;
 * spotLight.shadow.mapSize.width = 1024;
 * spotLight.shadow.mapSize.height = 1024;
 * spotLight.shadow.camera.near = 500;
 * spotLight.shadow.camera.far = 4000;
 * spotLight.shadow.camera.fov = 30;s
 * ```
 */
export class SpotLight extends Light {
    /**
     * Constructs a new spot light.
     *
     * @param {(number|Color|string)} [color=0xffffff] - The light's color.
     * @param {number} [intensity=1] - The light's strength/intensity measured in candela (cd).
     * @param {number} [distance=0] - Maximum range of the light. `0` means no limit.
     * @param {number} [angle=Math.PI/3] - Maximum angle of light dispersion from its direction whose upper bound is `Math.PI/2`.
     * @param {number} [penumbra=0] - Percent of the spotlight cone that is attenuated due to penumbra. Value range is `[0,1]`.
     * @param {number} [decay=2] - The amount the light dims along the distance of the light.
     */
    constructor(
        color?: ColorRepresentation,
        intensity?: number,
        distance?: number,
        angle?: number,
        penumbra?: number,
        decay?: number,
    );
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isSpotLight: boolean;
    /**
     * The spot light points from its position to the
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
     * Maximum range of the light. `0` means no limit.
     *
     * @default 0
     */
    distance: number;
    /**
     * Maximum angle of light dispersion from its direction whose upper bound is `Math.PI/2`.
     *
     * @default Math.PI/3
     */
    angle: number;
    /**
     * Percent of the spotlight cone that is attenuated due to penumbra.
     * Value range is `[0,1]`.
     *
     * @default 0
     */
    penumbra: number;
    /**
     * The amount the light dims along the distance of the light. In context of
     * physically-correct rendering the default value should not be changed.
     *
     * @default 2
     */
    decay: number;
    /**
     * A texture used to modulate the color of the light. The spot light
     * color is mixed with the RGB value of this texture, with a ratio
     * corresponding to its alpha value. The cookie-like masking effect is
     * reproduced using pixel values (0, 0, 0, 1-cookie_value).
     *
     * *Warning*: This property is disabled if {@link Object3D#castShadow} is set to `false`.
     *
     * @default null
     */
    map: Texture | null;
    /**
     * This property holds the light's shadow configuration.
     */
    shadow: SpotLightShadow;
    set power(power: number);
    /**
     * The light's power. Power is the luminous power of the light measured in lumens (lm).
     *  Changing the power will also change the light's intensity.
     */
    get power(): number;
    copy(source: SpotLight, recursive?: boolean): this;
    toJSON(meta?: JSONMeta): SpotLightJSON;
}
