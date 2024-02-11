import { Object3D } from "../core/Object3D.js";
import { HemisphereLight } from "../lights/HemisphereLight.js";
import { MeshBasicMaterial } from "../materials/MeshBasicMaterial.js";
import { ColorRepresentation } from "../math/Color.js";
import { Matrix4 } from "../math/Matrix4.js";

/**
 * Creates a visual aid consisting of a spherical {@link THREE.Mesh | Mesh} for a {@link THREE.HemisphereLight | HemisphereLight}.
 * @example
 * ```typescript
 * const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
 * const helper = new THREE.HemisphereLightHelper(light, 5);
 * scene.add(helper);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/HemisphereLightHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/HemisphereLightHelper.js | Source}
 */
export class HemisphereLightHelper extends Object3D {
    /**
     *  Create a new instance of {@link HemisphereLightHelper}
     * @param light The light being visualized.
     * @param size Thr sphere size
     * @param color If this is not the set the helper will take the color of the light.
     */
    constructor(light: HemisphereLight, size: number, color?: ColorRepresentation);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @override
     * @defaultValue `HemisphereLightHelper`
     */
    override readonly type: string | "HemisphereLightHelper";

    /**
     * Reference to the HemisphereLight being visualized.
     */
    light: HemisphereLight;

    /**
     * Reference to the {@link THREE.HemisphereLight.matrixWorld | light.matrixWorld}.
     */
    matrix: Matrix4;

    /**
     * Is set to `false`, as the helper is using the {@link THREE.HemisphereLight.matrixWorld | light.matrixWorld}.
     * @see {@link THREE.Object3D.matrixAutoUpdate | Object3D.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    override matrixAutoUpdate: boolean;

    material: MeshBasicMaterial; // TODO: Double check if this need to be exposed or not.

    /**
     * The color parameter passed in the constructor.
     * @remarks If this is changed, the helper's color will update the next time {@link update} is called.
     * @defaultValue `undefined`
     */
    color: ColorRepresentation | undefined;

    /**
     * Updates the helper to match the position and direction of the {@link .light | HemisphereLight}.
     */
    update(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
