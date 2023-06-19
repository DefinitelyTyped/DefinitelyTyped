import type { Vector3D } from '../math';
import type Zone from './Zone';

export default class MeshZone extends Zone {
    /**
     * Uses a three THREE.Geometry to determine the zone parameters.
     * @constructs {MeshZone}
     *
     * @param {THREE.Geometry|Mesh} bounds - the geometry or mesh that will determine the zone bounds
     * @param {THREE.Geometry} ThreeGeometry - the three geometry class
     * @param {number} scale - the zone scale
     * @return void
     */
    constructor(bounds: THREE.BufferGeometry | THREE.Mesh, ThreeGeometry: THREE.BufferGeometry, scale?: number);
    /**
     * Returns true to indicate this is a MeshZone.
     *
     * @return {boolean}
     */
    isMeshZone(): boolean;
    getPosition(): Vector3D | null;
}

// type ThreeGeometryOrMesh = THREE.BufferGeometry | THREE.Mesh
