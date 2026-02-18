import { ColorRepresentation } from "../math/Color.js";
import { Light } from "./Light.js";

/**
 * This class emits light uniformly across the face a rectangular plane.
 * This light type can be used to simulate light sources such as bright
 * windows or strip lighting.
 *
 * Important Notes:
 *
 * - There is no shadow support.
 * - Only PBR materials are supported.
 * - You have to include `RectAreaLightUniformsLib` (`WebGLRenderer`) or `RectAreaLightTexturesLib` (`WebGPURenderer`)
 * into your app and init the uniforms/textures.
 *
 * ```js
 * RectAreaLightUniformsLib.init(); // only relevant for WebGLRenderer
 * THREE.RectAreaLightNode.setLTC( RectAreaLightTexturesLib.init() ); //  only relevant for WebGPURenderer
 *
 * const intensity = 1; const width = 10; const height = 10;
 * const rectLight = new THREE.RectAreaLight( 0xffffff, intensity, width, height );
 * rectLight.position.set( 5, 5, 0 );
 * rectLight.lookAt( 0, 0, 0 );
 * scene.add( rectLight )
 * ```
 */
export class RectAreaLight extends Light {
    /**
     * Constructs a new area light.
     *
     * @param {(number|Color|string)} [color=0xffffff] - The light's color.
     * @param {number} [intensity=1] - The light's strength/intensity.
     * @param {number} [width=10] - The width of the light.
     * @param {number} [height=10] - The height of the light.
     */
    constructor(color?: ColorRepresentation, intensity?: number, width?: number, height?: number);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isRectAreaLight: boolean;
    /**
     * The width of the light.
     *
     * @default 10
     */
    width: number;
    /**
     * The height of the light.
     *
     * @default 10
     */
    height: number;
    set power(power: number);
    /**
     * The light's power. Power is the luminous power of the light measured in lumens (lm).
     * Changing the power will also change the light's intensity.
     */
    get power(): number;
    copy(source: RectAreaLight): this;
}
