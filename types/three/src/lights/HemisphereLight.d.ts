import { Color, ColorRepresentation } from './../math/Color.js';
import { Vector3 } from '../math/Vector3.js';
import { Light } from './Light.js';

/**
 * A light source positioned directly above the scene, with color fading from the sky color to the ground color.
 * @remarks This light cannot be used to cast shadows.
 * @example
 * ```typescript
 * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
 * scene.add(light);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | animation / skinning / blending }
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_hemisphere | lights / hemisphere }
 * @see Example: {@link https://threejs.org/examples/#misc_controls_pointerlock | controls / pointerlock }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_collada_kinematics | loader / collada / kinematics }
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_stl | loader / stl }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/HemisphereLight | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLight.js | Source}
 */
export class HemisphereLight extends Light<undefined> {
    /**
     * Creates a new {@link HemisphereLight}.
     * @param skyColor Hexadecimal color of the sky. Expects a `Integer`. Default `0xffffff` _(white)_.
     * @param groundColor Hexadecimal color of the ground. Expects a `Integer`. Default `0xffffff` _(white)_.
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
     */
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link HemisphereLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isHemisphereLight: true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `HemisphereLight`
     */
    override readonly type: string | 'HemisphereLight';

    /**
     * This is set equal to {@link THREE.Object3D.DEFAULT_UP}, so that the light shines from the top down.
     * @defaultValue {@link Object3D.DEFAULT_UP} _(0, 1, 0)_
     */
    override readonly position: Vector3;

    /**
     * The light's sky color, as passed in the constructor.
     * @defaultValue `new THREE.Color()` set to white _(0xffffff)_.
     */
    override color: Color;

    /**
     * The light's ground color, as passed in the constructor.
     * @defaultValue `new THREE.Color()` set to white _(0xffffff)_.
     */
    groundColor: Color;
}
