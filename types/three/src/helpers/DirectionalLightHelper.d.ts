import { Object3D } from "../core/Object3D.js";
import { DirectionalLight } from "../lights/DirectionalLight.js";
import { ColorRepresentation } from "../math/Color.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Line } from "../objects/Line.js";

/**
 * Helper object to assist with visualizing a {@link THREE.DirectionalLight | DirectionalLight}'s effect on the scene
 * @remarks
 * This consists of plane and a line representing the light's position and direction.
 * @example
 * ```typescript
 * const light = new THREE.DirectionalLight(0xFFFFFF);
 * scene.add(light);
 *
 * const helper = new THREE.DirectionalLightHelper(light, 5);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/DirectionalLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/DirectionalLightHelper.js | Source}
 */
export class DirectionalLightHelper extends Object3D {
    /**
     * Create a new instance of {@link DirectionalLightHelper}
     * @param light The light to be visualized.
     * @param size Dimensions of the plane. Default `1`
     * @param color If this is not the set the helper will take the color of the light. Default `light.color`
     */
    constructor(light: DirectionalLight, size?: number, color?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `DirectionalLightHelper`
     */
    override readonly type: string | "DirectionalLightHelper";

    /**
     * Contains the line mesh showing the location of the directional light.
     */
    lightPlane: Line;

    /**
     * Reference to the {@link THREE.DirectionalLight | directionalLight} being visualized.
     */
    light: DirectionalLight;

    /**
     * Reference to the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.DirectionalLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    color: ColorRepresentation | undefined;

    targetLine: Line; // TODO: Double check if this need to be exposed or not.

    /**
     * Updates the helper to match the position and direction of the {@link light | DirectionalLight} being visualized.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
