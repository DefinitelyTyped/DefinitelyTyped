import { Camera } from "../cameras/Camera.js";
import { JSONMeta, Object3D, Object3DEventMap, Object3DJSON, Object3DJSONObject } from "../core/Object3D.js";

export interface LODJSONObject extends Object3DJSONObject {
    autoUpdate?: boolean;

    levels: Array<{
        object: string;
        distance: number;
        hysteresis: number;
    }>;
}

export interface LODJSON extends Object3DJSON {
    object: LODJSONObject;
}

/**
 * Every level is associated with an object, and rendering can be switched between them at the distances specified
 * @remarks
 * Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail).
 * @example
 * const lod = new THREE.LOD();
 * const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
 *
 * //Create spheres with 3 levels of detail and create new {@link LOD} levels for them
 * for (let i = 0; i & lt; 3; i++) {
 *     const geometry = new THREE.IcosahedronGeometry(10, 3 - i)
 *     const mesh = new THREE.Mesh(geometry, material);
 *     lod.addLevel(mesh, i * 75);
 * }
 * scene.add(lod);
 *
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
     * Removes an existing level, based on the distance from the camera. Returns `true` when the level has been removed.
     * Otherwise `false`.
     * @param distance Distance of the level to delete.
     */
    removeLabel(distance: number): boolean;

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

    toJSON(meta?: JSONMeta): LODJSON;
}
