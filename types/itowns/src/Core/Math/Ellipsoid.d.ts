import * as THREE from "three";
import Coordinates from "../Geographic/Coordinates";

export const ellipsoidSizes: THREE.Vector3;

declare class Ellipsoid {
    constructor(size?: THREE.Vector3);

    size: THREE.Vector3;
    eccentricity: number;

    geodeticSurfaceNormal(
        cartesian: Coordinates,
        target?: THREE.Vector3,
    ): THREE.Vector3;

    geodeticSurfaceNormalCartographic(
        coordCarto: Coordinates,
        target?: THREE.Vector3,
    ): THREE.Vector3;

    setSize(size: { x: number; y: number; z: number }): void;

    cartographicToCartesian(
        coordCarto: Coordinates,
        target?: THREE.Vector3,
    ): THREE.Vector3;

    cartesianToCartographic(
        position: { x: number; y: number; z: number },
        target?: Coordinates,
    ): Coordinates;

    cartographicToCartesianArray(
        coordCartoArray: Coordinates[],
    ): THREE.Vector3[];

    intersection(ray: THREE.Ray): THREE.Vector3 | false;

    geodesicDistance(
        coordCarto1: Coordinates,
        coordCarto2: Coordinates,
    ): number;
}

export default Ellipsoid;
