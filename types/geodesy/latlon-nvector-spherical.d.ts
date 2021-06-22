/*
 * @format
 */

import { GeoJSON, Format, Dp, Polygon } from '.';
import Vector3d from './vector3d';
import Dms from './dms';

type PathBrngEnd = LatLonNvectorSpherical | number;

declare class LatLonNvectorSpherical {
    constructor(lat: number, lon: number);
    get lat(): number;
    set lat(lat: number);
    get latitude(): number;
    set latitude(lat: number);
    get lon(): number;
    set lon(lon: number);
    get lng(): number;
    set lng(lon: number);
    get longitude(): number;
    set longitude(lon: number);
    static get metresToKm(): number;
    static get metresToMiles(): number;
    static get metresToNauticalMiles(): number;
    toNvector(): NvectorSpherical;
    greatCircle(bearing: number): Vector3d;
    distanceTo(point: LatLonNvectorSpherical, radius?: number): number;
    initialBearingTo(point: LatLonNvectorSpherical): number;
    finalBearingTo(point: LatLonNvectorSpherical): number;
    midpointTo(point: LatLonNvectorSpherical): LatLonNvectorSpherical;
    intermediatePointTo(point: LatLonNvectorSpherical, fraction: number): LatLonNvectorSpherical;
    destinationPoint(distance: number, bearing: number, radius?: number): LatLonNvectorSpherical;
    static intersection(
        path1start: LatLonNvectorSpherical,
        path1brngEnd: PathBrngEnd,
        path2start: LatLonNvectorSpherical,
        path2brngEnd: PathBrngEnd,
    ): LatLonNvectorSpherical;
    crossTrackDistanceTo(pathStart: LatLonNvectorSpherical, pathBrngEnd: PathBrngEnd, radius?: number): number;
    alongTrackDistanceTo(pathStart: LatLonNvectorSpherical, pathBrngEnd: PathBrngEnd, radius?: number): number;
    nearestPointOnSegment(point1: LatLonNvectorSpherical, point2: LatLonNvectorSpherical): LatLonNvectorSpherical;
    isWithinExtent(point1: LatLonNvectorSpherical, point2: LatLonNvectorSpherical): boolean;
    static triangulate(
        point1: LatLonNvectorSpherical,
        bearing1: number,
        point2: LatLonNvectorSpherical,
        bearing2: number,
    ): LatLonNvectorSpherical;
    static trilaterate(
        point1: LatLonNvectorSpherical,
        distance1: number,
        point2: LatLonNvectorSpherical,
        distance2: number,
        point3: LatLonNvectorSpherical,
        distance3: number,
        radius?: number,
    ): LatLonNvectorSpherical;
    isEnclosedBy(polygon: Polygon<LatLonNvectorSpherical>): boolean;
    static areaOf(polygon: Polygon<LatLonNvectorSpherical>, radius?: number): number;
    static meanOf(points: Polygon<LatLonNvectorSpherical>): LatLonNvectorSpherical;
    equals(point: LatLonNvectorSpherical): boolean;
    toGeoJSON(): GeoJSON;
    toString(format?: Format, dp?: Dp): string;
}

declare class NvectorSpherical extends Vector3d {
    constructor(x: number, y: number, z: number);
    toLatLon(): LatLonNvectorSpherical;
    greatCircle(bearing: number): Vector3d;
    toString(dp?: number): string;
}

export { LatLonNvectorSpherical as default, NvectorSpherical as Nvector, Dms };
