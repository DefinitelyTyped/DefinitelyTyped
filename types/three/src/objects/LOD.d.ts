import { Camera } from "../cameras/Camera.js";
import { Object3D, Object3DEventMap } from "../core/Object3D.js";

/**
 * Every level is associated with an object, and rendering can be switched between them at the distances specified
 * @remarks
 * Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail).
 * @example
 * ```typescript
 * const {@link LOD} = new THREE.LOD();
 * //Create spheres with 3 levels of detail and create new {@link LOD} levels for them
 * for (let i = 0; i & lt; 3; i++) {
 *     const geometry = new THREE.IcosahedronGeometry(10, 3 - i)
 *     const mesh = new THREE.Mesh(geometry, material);
 *     lod.addLevel(mesh, i * 75);
 * }
 * scene.add(lod);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lod | webgl / {@link LOD} }
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LOD | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LOD.js | Source}
 */
export class LOD<TEventMap extends Object3DEventMap = Object3DEventMap> extends Object3D<TEventMap> {
    /**
     * Creates a new {@link LOD}.
     */
    constructor();

    /**
     * Read-only flag to check if a given object is of type {@link LOD}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLOD: true;

    /**
     * @override
     * @defaultValue `LOD`
     */
    override readonly type: string | "LOD";

    /**
     * An array of level objects
     */
    levels: Array<{
        /** The Object3D to display at this level. */
        object: Object3D;
        /** The distance at which to display this level of detail. Expects a `Float`. */
        distance: number;
        /** Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Expects a `Float`. */
        hysteresis: number;
    }>;

    /**
     * Whether the {@link LOD} object is updated automatically by the renderer per frame or not.
     * If set to `false`, you have to call {@link update | .update()} in the render loop by yourself.
     * @defaultValue `true`
     */
    autoUpdate: boolean;

    /**
     * Adds a mesh that will display at a certain distance and greater. Typically the further away the distance, the lower the detail on the mesh.
     *
     * @param object The Object3D to display at this level.
     * @param distance The distance at which to display this level of detail. Expects a `Float`. Default `0.0`.
     * @param hysteresis Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Expects a `Float`. Default `0.0`.
     */
    addLevel(object: Object3D, distance?: number, hysteresis?: number): this;

    /**
     * Get the currently active {@link LOD} level
     * @remarks
     * As index of the levels array.
     */
    getCurrentLevel(): number;

    /**
     * Get a reference to the first {@link THREE.Object3D | Object3D} (mesh) that is greater than {@link distance}.
     * @param distance Expects a `Float`
     */
    getObjectForDistance(distance: number): Object3D | null;

    /**
     * Set the visibility of each {@link levels | level}'s {@link THREE.Object3D | object} based on distance from the {@link THREE.Camera | camera}.
     * @param camera
     */
    update(camera: Camera): void;
}
