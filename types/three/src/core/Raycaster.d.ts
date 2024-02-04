import { Camera } from "../cameras/Camera.js";
import { Ray } from "../math/Ray.js";
import { Vector2 } from "../math/Vector2.js";
import { Vector3 } from "../math/Vector3.js";
import { Layers } from "./Layers.js";
import { Object3D } from "./Object3D.js";

export interface Face {
    a: number;
    b: number;
    c: number;
    normal: Vector3;
    materialIndex: number;
}

export interface Intersection<TIntersected extends Object3D = Object3D> {
    /** Distance between the origin of the ray and the intersection */
    distance: number;
    distanceToRay?: number | undefined;
    /** Point of intersection, in world coordinates */
    point: Vector3;
    index?: number | undefined;
    /** Intersected face */
    face?: Face | null | undefined;
    /** Index of the intersected face */
    faceIndex?: number | undefined;
    /** The intersected object */
    object: TIntersected;
    uv?: Vector2 | undefined;
    uv1?: Vector2 | undefined;
    normal?: Vector3;
    /** The index number of the instance where the ray intersects the {@link THREE.InstancedMesh | InstancedMesh } */
    instanceId?: number | undefined;
    pointOnLine?: Vector3;
    batchId?: number;
}

export interface RaycasterParameters {
    Mesh: any;
    Line: { threshold: number };
    Line2?: { threshold: number };
    LOD: any;
    Points: { threshold: number };
    Sprite: any;
}

/**
 * This class is designed to assist with {@link https://en.wikipedia.org/wiki/Ray_casting | raycasting}
 * @remarks
 * Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.
 * @example
 * ```typescript
 * const raycaster = new THREE.Raycaster();
 * const pointer = new THREE.Vector2();
 *
 * function onPointerMove(event) {
 *     // calculate pointer position in normalized device coordinates (-1 to +1) for both components
 *     pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
 *     pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
 * }
 *
 * function render() {
 *     // update the picking ray with the camera and pointer position
 *     raycaster.setFromCamera(pointer, camera);
 *     // calculate objects intersecting the picking ray
 *     const intersects = raycaster.intersectObjects(scene.children);
 *     for (let i = 0; i & lt; intersects.length; i++) {
 *         intersects[i].object.material.color.set(0xff0000);
 *     }
 *     renderer.render(scene, camera);
 * }
 * window.addEventListener('pointermove', onPointerMove);
 * window.requestAnimationFrame(render);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes | Raycasting to a Mesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho | Raycasting to a Mesh in using an OrthographicCamera}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_buffergeometry | Raycasting to a Mesh with BufferGeometry}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | Raycasting to a InstancedMesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_lines | Raycasting to a Line}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_raycasting_points | Raycasting to Points}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain_raycast | Terrain raycasting}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_voxelpainter | Raycasting to paint voxels}
 * @see Example: {@link https://threejs.org/examples/#webgl_raycaster_texture | Raycast to a Texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Raycaster | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Raycaster.js | Source}
 */
export class Raycaster {
    /**
     * This creates a new {@link Raycaster} object.
     * @param origin The origin vector where the ray casts from. Default `new Vector3()`
     * @param direction The direction vector that gives direction to the ray. Should be normalized. Default `new Vector3(0, 0, -1)`
     * @param near All results returned are further away than near. Near can't be negative. Expects a `Float`. Default `0`
     * @param far All results returned are closer than far. Far can't be lower than near. Expects a `Float`. Default `Infinity`
     */
    constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);

    /**
     * The {@link THREE.RaycasterRay | Ray} used for the raycasting.
     */
    ray: Ray;

    /**
     * The near factor of the raycaster. This value indicates which objects can be discarded based on the distance.
     * This value shouldn't be negative and should be smaller than the far property.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    near: number;

    /**
     * The far factor of the raycaster. This value indicates which objects can be discarded based on the distance.
     * This value shouldn't be negative and should be larger than the near property.
     * @remarks Expects a `Float`
     * @defaultValue `Infinity`
     */
    far: number;

    /**
     * The camera to use when raycasting against view-dependent objects such as billboarded objects like {@link THREE.Sprites | Sprites}.
     * This field can be set manually or is set when calling  {@link setFromCamera}.
     * @defaultValue `null`
     */
    camera: Camera;

    /**
     * Used by {@link Raycaster} to selectively ignore 3D objects when performing intersection tests.
     * The following code example ensures that only 3D objects on layer `1` will be honored by the instance of Raycaster.
     * ```
     * raycaster.layers.set( 1 );
     * object.layers.enable( 1 );
     * ```
     * @defaultValue `new THREE.Layers()` - See {@link THREE.Layers | Layers}.
     */
    layers: Layers;

    /**
     * An data object where threshold is the precision of the {@link Raycaster} when intersecting objects, in world units.
     * @defaultValue `{ Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} }`
     */
    params: RaycasterParameters;

    /**
     * Updates the ray with a new origin and direction
     * @remarks
     * Please note that this method only copies the values from the arguments.
     * @param origin The origin vector where the ray casts from.
     * @param direction The normalized direction vector that gives direction to the ray.
     */
    set(origin: Vector3, direction: Vector3): void;

    /**
     * Updates the ray with a new origin and direction.
     * @param coords 2D coordinates of the mouse, in normalized device coordinates (NDC)---X and Y components should be between -1 and 1.
     * @param camera camera from which the ray should originate
     */
    setFromCamera(coords: Vector2, camera: Camera): void;

    /**
     * Checks all intersection between the ray and the object with or without the descendants
     * @remarks Intersections are returned sorted by distance, closest first
     * @remarks {@link Raycaster} delegates to the {@link Object3D.raycast | raycast} method of the passed object, when evaluating whether the ray intersects the object or not
     * This allows {@link THREE.Mesh | meshes} to respond differently to ray casting than {@link THREE.Line | lines} and {@link THREE.Points | pointclouds}.
     * **Note** that for meshes, faces must be pointed towards the origin of the {@link Raycaster.ray | ray} in order to be detected;
     * intersections of the ray passing through the back of a face will not be detected
     * To raycast against both faces of an object, you'll want to set the {@link Mesh.material | material}'s {@link Material.side | side} property to `THREE.DoubleSide`.
     * @see {@link intersectObjects | .intersectObjects()}.
     * @param object The object to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants. Otherwise it only checks intersection with the object. Default `true`
     * @param optionalTarget Target to set the result. Otherwise a new {@link Array | Array} is instantiated.
     * If set, you must clear this array prior to each call (i.e., array.length = 0;). Default `[]`
     * @returns An array of intersections is returned.
     */
    intersectObject<TIntersected extends Object3D>(
        object: Object3D,
        recursive?: boolean,
        optionalTarget?: Array<Intersection<TIntersected>>,
    ): Array<Intersection<TIntersected>>;

    /**
     * Checks all intersection between the ray and the objects with or without the descendants
     * @remarks Intersections are returned sorted by distance, closest first
     * @remarks Intersections are of the same form as those returned by {@link intersectObject | .intersectObject()}.
     * @remarks {@link Raycaster} delegates to the {@link Object3D.raycast | raycast} method of the passed object, when evaluating whether the ray intersects the object or not
     * This allows {@link THREE.Mesh | meshes} to respond differently to ray casting than {@link THREE.Line | lines} and {@link THREE.Points | pointclouds}.
     * **Note** that for meshes, faces must be pointed towards the origin of the {@link Raycaster.ray | ray} in order to be detected;
     * intersections of the ray passing through the back of a face will not be detected
     * To raycast against both faces of an object, you'll want to set the {@link Mesh.material | material}'s {@link Material.side | side} property to `THREE.DoubleSide`.
     * @see {@link intersectObject | .intersectObject()}.
     * @param objects The objects to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants of the objects. Otherwise it only checks intersection with the objects. Default `true`
     * @param optionalTarget Target to set the result. Otherwise a new {@link Array | Array} is instantiated.
     * If set, you must clear this array prior to each call (i.e., array.length = 0;). Default `[]`
     * @returns An array of intersections is returned.
     */
    intersectObjects<TIntersected extends Object3D>(
        objects: Object3D[],
        recursive?: boolean,
        optionalTarget?: Array<Intersection<TIntersected>>,
    ): Array<Intersection<TIntersected>>;
}
