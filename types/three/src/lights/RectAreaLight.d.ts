import { Light } from './Light';
import { ColorRepresentation } from '../math/Color';

/**
 * {@link RectAreaLight} emits light uniformly across the face a rectangular plane
 * @remarks
 * This light type can be used to simulate light sources such as bright windows or strip lighting.
 * Important Notes:
 *  - There is no shadow support.
 *  - Only {@link MeshStandardMaterial | MeshStandardMaterial} and {@link MeshPhysicalMaterial | MeshPhysicalMaterial} are supported.
 *  - You have to include {@link https://threejs.org/examples/jsm/lights/RectAreaLightUniformsLib.js | RectAreaLightUniformsLib} into your scene and call `init()`.
 * @example
 * ```typescript
 * const width = 10;
 * const height = 10;
 * const intensity = 1;
 * const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
 * rectLight.position.set(5, 5, 0);
 * rectLight.lookAt(0, 0, 0);
 * scene.add(rectLight)
 * const rectLightHelper = new RectAreaLightHelper(rectLight);
 * rectLight.add(rectLightHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_rectarealight | WebGL / {@link RectAreaLight} }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/RectAreaLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/RectAreaLight.js | Source}
 */
export class RectAreaLight extends Light<undefined> {
    /**
     * Creates a new {@link RectAreaLight}.
     * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
     * @param intensity The light's intensity, or brightness. Expects a `Float`. Default `1`
     * @param width Width of the light. Expects a `Float`. Default `10`
     * @param height Height of the light. Expects a `Float`. Default `10`
     */
    constructor(color?: ColorRepresentation, intensity?: number, width?: number, height?: number);

    /**
     * Read-only flag to check if a given object is of type {@link RectAreaLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isRectAreaLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `RectAreaLight`
     */
    override readonly type: string | 'RectAreaLight';

    /**
     * The width of the light.
     * @remarks Expects a `Float`
     * @defaultValue `10`
     */
    width: number;

    /**
     * The height of the light.
     * @remarks Expects a `Float`
     * @defaultValue `10`
     */
    height: number;

    /**
     * The light's intensity.
     * @remarks Changing the intensity will also change the light's power.
     * In **{@link WebGLRenderer.physicallyCorrectLights | physically correct} rendering mode** — intensity is the luminance (brightness) of the light measured in nits (cd/m^2).
     * @remarks Expects a `Float`
     * @defaultValue `1`
     */
    intensity: number;

    /**
     * The light's power.
     * @remarks Changing the power will also change the light's intensity.
     * In **{@link WebGLRenderer.physicallyCorrectLights | physically correct} rendering mode** — power is the luminous power of the light measured in lumens (lm).
     * @remarks Expects a `Float`
     */
    power: number;
}
