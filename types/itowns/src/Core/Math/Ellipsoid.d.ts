import * as THREE from "three";
import Coordinates from "../Geographic/Coordinates";

export const ellipsoidSizes: THREE.Vector3;

declare class Ellipsoid {
    // TODO: Not documented in API
    constructor(size?: THREE.Vector3);

    // TODO: Not documented in API
    size: THREE.Vector3;
    // TODO: Not documented in API
    eccentricity: number;

    // TODO: Not documented in API
    // geodeticSurfaceNormal(
    //     cartesian: Coordinates,
    //     target?: THREE.Vector3,
    // ): THREE.Vector3;

    // TODO: Not documented in API
    // geodeticSurfaceNormalCartographic(
    //     coordCarto: Coordinates,
    //     target?: THREE.Vector3,
    // ): THREE.Vector3;

    // TODO: Not documented in API
    setSize(size: THREE.Vector3Like): void;

    // TODO: Not documented in API
    cartographicToCartesian(
        coordCarto: Coordinates,
        target?: THREE.Vector3,
    ): THREE.Vector3;

    cartesianToCartographic(
        position: THREE.Vector3Like,
        target?: Coordinates,
    ): Coordinates;

    // TODO: Not documented in API
    // cartographicToCartesianArray(
    //     coordCartoArray: Coordinates[],
    // ): THREE.Vector3[];

    // TODO: Not documented in API
    // intersection(ray: THREE.Ray): THREE.Vector3 | false;

    geodesicDistance(
        coordCarto1: Coordinates,
        coordCarto2: Coordinates,
    ): number;
}

export default Ellipsoid;
