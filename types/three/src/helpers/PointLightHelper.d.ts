import { PointLight } from './../lights/PointLight';
import { Matrix4 } from './../math/Matrix4';
import { Object3D } from './../core/Object3D';
import { ColorRepresentation } from '../math/Color';

/**
 * This displays a helper object consisting of a spherical {@link THREE.Mesh | Mesh} for visualizing a {@link THREE.PointLight | PointLight}.
 * @example
 * ```typescript
 * const pointLight = new THREE.PointLight(0xff0000, 1, 100);
 * pointLight.position.set(10, 10, 10);
 * scene.add(pointLight);
 * const sphereSize = 1;
 * const {@link PointLightHelper} = new THREE.PointLightHelper(pointLight, sphereSize);
 * scene.add(pointLightHelper);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGL / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PointLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PointLightHelper.js | Source}
 */
export class PointLightHelper extends Object3D {
    /**
     * Create a new instance of {@link PointLightHelper}
     * @param light The light to be visualized.
     * @param sphereSize The size of the sphere helper. Expects a `Float`. Default `1`
     * @param color If this is not the set the helper will take the color of the light.
     */
    constructor(light: PointLight, sphereSize?: number, color?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `PointLightHelper`
     */
    override readonly type: string | 'PointLightHelper';

    /**
     * The {@link THREE.PointLight | PointLight} that is being visualized.
     */
    light: PointLight;

    /**
     * Reference to the {@link THREE.PointLight.matrixWorld | light.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    color: ColorRepresentation | undefined;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.PointLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * Updates the helper to match the position of the {@link THREE..light | .light}.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
