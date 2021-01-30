import { Vector3 } from './../math/Vector3';
import { Object3D } from './Object3D';
import { Vector2 } from './../math/Vector2';
import { Ray } from './../math/Ray';
import { Camera } from './../cameras/Camera';
import { Layers } from './Layers';

export interface Face {
    a: number;
    b: number;
    c: number;
    normal: Vector3;
    materialIndex: number;
}

export interface Intersection {
    distance: number;
    distanceToRay?: number;
    point: Vector3;
    index?: number;
    face?: Face | null;
    faceIndex?: number;
    object: Object3D;
    uv?: Vector2;
    instanceId?: number;
}

export interface RaycasterParameters {
    Mesh?: any;
    Line?: { threshold: number };
    LOD?: any;
    Points?: { threshold: number };
    Sprite?: any;
}

export class Raycaster {
    /**
     * This creates a new raycaster object.
     * @param origin The origin vector where the ray casts from.
     * @param direction The direction vector that gives direction to the ray. Should be normalized.
     * @param near All results returned are further away than near. Near can't be negative. Default value is 0.
     * @param far All results returned are closer then far. Far can't be lower then near . Default value is Infinity.
     */
    constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);

    /** The Ray used for the raycasting. */
    ray: Ray;

    /**
     * The near factor of the raycaster. This value indicates which objects can be discarded based on the
     * distance. This value shouldn't be negative and should be smaller than the far property.
     * @default 0
     */
    near: number;

    /**
     * The far factor of the raycaster. This value indicates which objects can be discarded based on the
     * distance. This value shouldn't be negative and should be larger than the near property.
     * @default Infinity
     */
    far: number;

    /**
     * The camera to use when raycasting against view-dependent objects such as billboarded objects like Sprites. This field
     * can be set manually or is set when calling "setFromCamera".
     */
    camera: Camera;

    /**
     * Used by Raycaster to selectively ignore 3D objects when performing intersection tests.
     * @default new THREE.Layers()
     */
    layers: Layers;

    /**
     * @default { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} }
     */
    params: RaycasterParameters;

    /**
     * Updates the ray with a new origin and direction.
     * @param origin The origin vector where the ray casts from.
     * @param direction The normalized direction vector that gives direction to the ray.
     */
    set(origin: Vector3, direction: Vector3): void;

    /**
     * Updates the ray with a new origin and direction.
     * @param coords 2D coordinates of the mouse, in normalized device coordinates (NDC)---X and Y components should be between -1 and 1.
     * @param camera camera from which the ray should originate
     */
    setFromCamera(coords: { x: number; y: number }, camera: Camera): void;

    /**
     * Checks all intersection between the ray and the object with or without the descendants. Intersections are returned sorted by distance, closest first.
     * @param object The object to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants. Otherwise it only checks intersecton with the object. Default is false.
     * @param optionalTarget (optional) target to set the result. Otherwise a new Array is instantiated. If set, you must clear this array prior to each call (i.e., array.length = 0;).
     */
    intersectObject(object: Object3D, recursive?: boolean, optionalTarget?: Intersection[]): Intersection[];

    /**
     * Checks all intersection between the ray and the objects with or without the descendants.
     * Intersections are returned sorted by distance, closest first.
     * Intersections are of the same form as those returned by .intersectObject.
     * @param objects The objects to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants of the objects. Otherwise it only checks intersecton with the objects. Default is false.
     * @param optionalTarget (optional) target to set the result. Otherwise a new Array is instantiated. If set, you must clear this array prior to each call (i.e., array.length = 0;).
     */
    intersectObjects(objects: Object3D[], recursive?: boolean, optionalTarget?: Intersection[]): Intersection[];
}
