import { Light } from './../lights/Light.js';
import { Matrix4 } from './../math/Matrix4.js';
import { Object3D } from './../core/Object3D.js';
import { LineSegments } from '../objects/LineSegments.js';
import { ColorRepresentation } from '../math/Color.js';

/**
 * This displays a cone shaped helper object for a {@link THREE.SpotLight | SpotLight}.
 * @example
 * ```typescript
 * const spotLight = new THREE.SpotLight(0xffffff);
 * spotLight.position.set(10, 10, 10);
 * scene.add(spotLight);
 * const {@link SpotLightHelper} = new THREE.SpotLightHelper(spotLight);
 * scene.add(spotLightHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lights_spotlights | WebGL/ lights / spotlights }
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SpotLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SpotLightHelper.js | Source}
 */
export class SpotLightHelper extends Object3D {
    /**
     * Create a new instance of {@link SpotLightHelper}
     * @param light The {@link THREE.SpotLight | SpotLight} to be visualized.
     * @param color If this is not the set the helper will take the color of the light. Default `light.color`
     */
    constructor(light: Light, color?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `SpotLightHelper`
     */
    override readonly type: string | 'SpotLightHelper';

    /**
     * {@link THREE.LineSegments | LineSegments} used to visualize the light.
     */
    cone: LineSegments;

    /**
     * Reference to the {@link THREE.SpotLight | SpotLight} being visualized.
     */
    light: Light;

    /**
     * Reference to the spotLight's {@link Object3D.matrixWorld | matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * The color parameter passed in the constructor.
     * If this is changed, the helper's color will update the next time {@link SpotLightHelper.update | update} is called.
     * @defaultValue `undefined`
     */
    color: ColorRepresentation | undefined;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.Light.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * Updates the light helper.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
