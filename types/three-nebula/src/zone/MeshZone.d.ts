import type { Vector3D } from "../math";
import type Zone from "./Zone";

export default class MeshZone extends Zone {
    /**
     * Uses a three THREE.Geometry to determine the zone parameters.
     */
    constructor(bounds: THREE.BufferGeometry | THREE.Mesh, ThreeGeometry: THREE.BufferGeometry, scale?: number);
    /**
     * Returns true to indicate this is a MeshZone.
     */
    isMeshZone(): boolean;
    getPosition(): Vector3D | null;
}
