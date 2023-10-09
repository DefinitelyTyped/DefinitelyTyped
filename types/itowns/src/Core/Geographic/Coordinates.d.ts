import * as THREE from "three";

declare class Coordinates {
    constructor(crs: string, v0?: number | THREE.Vector3 | Coordinates | number[], v1?: number, v2?: number);

    readonly isCoordinates: boolean;

    crs: string;
    x: number;
    y: number;
    z: number;

    setCrs(crs: string): void;

    setFromValues(v0?: number, v1?: number, v2?: number): Coordinates;

    setFromArray(array: number[], offset?: number): Coordinates;

    setFromVector3(v0: THREE.Vector3 | Coordinates): Coordinates;

    clone(): Coordinates;

    copy(src: Coordinates): Coordinates;

    get longitude(): number;

    get latitude(): number;

    get altitude(): number;

    set altitude(value: number);

    get geodesicNormal(): THREE.Vector3;

    toVector3(target?: THREE.Vector3): THREE.Vector3;

    planarDistanceTo(coord: Coordinates): number;

    geodeticDistanceTo(coord: Coordinates): number;

    spatialEuclideanDistanceTo(coord: Coordinates): number;

    applyMatrix4(mat: THREE.Matrix4): Coordinates;

    as(crs: string, target?: Coordinates): Coordinates;
}

export default Coordinates;
