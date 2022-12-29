import { Object3D } from './../core/Object3D';
import { Raycaster } from './../core/Raycaster';
import { Camera } from './../cameras/Camera';
import { Intersection } from '../core/Raycaster';

export class LOD extends Object3D {
    constructor();

    type: 'LOD';

    /**
     *
     * An array of level objects
     *
     * Each level is an object with the following properties:
     *
     * - object - The Object3D to display at this level.
     * - distance - The distance at which to display this level of detail.
     * - hysteresis - Threshold used to avoid flickering at LOD boundaries, as a fraction of distance.
     */
    levels: Array<{ distance: number; hysteresis: number; object: Object3D }>;

    autoUpdate: boolean;
    readonly isLOD: true;

    /**
     * Adds a mesh that will display at a certain distance and greater. Typically the further away the distance, the lower the detail on the mesh.
     *
     * @param object The Object3D to display at this level.
     * @param distance The distance at which to display this level of detail. Default 0.0.
     * @param hysteresis Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Default 0.0.
     */
    addLevel(object: Object3D, distance?: number, hysteresis?: number): this;

    getCurrentLevel(): number;
    getObjectForDistance(distance: number): Object3D | null;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    update(camera: Camera): void;
    toJSON(meta: any): any;

    // TODO: Remove this
    /**
     * @deprecated Use {@link LOD#levels .levels} instead.
     */
    objects: any[];
}
