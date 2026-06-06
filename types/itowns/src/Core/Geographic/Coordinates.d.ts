import * as THREE from "three";

declare class Coordinates {
    // TODO: Reformulate type
    constructor(crs: string, v0?: number | THREE.Vector3 | Coordinates | number[], v1?: number, v2?: number);

    readonly isCoordinates: true;

    crs: string;
    x: number;
    y: number;
    z: number;

    setCrs(crs: string): void;
    setFromValues(x?: number, y?: number, z?: number): this;
    setFromArray(array: ArrayLike<number>, offset?: number): this;
    setFromVector3(v0: THREE.Vector3Like): this;

    clone(): this;
    copy(src: Coordinates): this;

    get longitude(): number;
    get latitude(): number;
    get altitude(): number;

    set altitude(value: number);

    get geodesicNormal(): THREE.Vector3;

    toVector3(target?: THREE.Vector3): THREE.Vector3;
    toArray(target?: number[], offset?: number): number[];

    planarDistanceTo(coord: Coordinates): number;
    geodeticDistanceTo(coord: Coordinates): number;
    spatialEuclideanDistanceTo(coord: Coordinates): number;

    applyMatrix4(mat: THREE.Matrix4): this;

    as(crs: string, target?: Coordinates): this;
}

export default Coordinates;
