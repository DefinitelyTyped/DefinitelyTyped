import * as THREE from "three";
import Coordinates from "./Coordinates";

// export const globalExtentTMS: Map<any, any>;
// export const schemeTiles: Map<any, any>;

export default class Extent {
    static fromBox3(crs: string, box: THREE.Box3): Extent;

    constructor(crs: string, v0: number | number[] | Coordinates, v1?: number | Coordinates, v2?: number, v3?: number);

    readonly isExtent: boolean;

    crs: string;
    zoom: number;
    row: number | undefined;
    col: number | undefined;
    west: number | undefined;
    east: number | undefined;
    south: number | undefined;
    north: number | undefined;

    clone(): Extent;

    tiledCovering(crs: string): Extent[];

    as(crs: string, target: Extent): Extent;

    center(target?: Coordinates): Coordinates;

    dimensions(target?: THREE.Vector2): THREE.Vector2;

    planarDimensions(target?: THREE.Vector2): THREE.Vector2;

    geodeticDimensions(target?: THREE.Vector2): THREE.Vector2;

    spatialEuclideanDimensions(target?: THREE.Vector2): THREE.Vector2;

    isPointInside(coord: Coordinates, epsilon?: number): boolean;

    isInside(extent: Extent, epsilon: number): boolean;

    offsetToParent(extent: Extent, target?: THREE.Vector4): THREE.Vector4;

    tiledExtentParent(levelParent: number): Extent;

    intersectsExtent(extent: Extent): boolean;

    intersect(extent: Extent): Extent;

    set(v0: number | number[] | Coordinates | Extent, v1?: number | Coordinates, v2?: number, v3?: number): Extent;

    copy(extent: Extent): Extent;

    union(extent: Extent): void;

    expandByCoordinates(coordinates: Coordinates): void;

    expandByValuesCoordinates(we: number, sn: number): void;

    toString(separator?: string): string;

    subdivision(): Extent[];

    subdivisionByScheme(scheme?: THREE.Vector2): Extent[];

    applyMatrix4(matrix: THREE.Matrix4): Extent;

    clampSouthNorth(south?: number, north?: number): Extent;

    clampWestEast(west?: number, east?: number): Extent;

    clampByExtent(extent: Extent): Extent;
}
