/*
 * @format
 */

import { Polygon, GeoJSON, Format, Dp } from '.';
import Dms from './dms';

declare class LatLonSpherical {
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
    static parse(lat: number | string | object, lon?: number): LatLonSpherical;
    distanceTo(point: LatLonSpherical, radius?: number): number;
    initialBearingTo(point: LatLonSpherical): number;
    finalBearingTo(point: LatLonSpherical): number;
    midpointTo(point: LatLonSpherical): LatLonSpherical;
    intermediatePointTo(point: LatLonSpherical, fraction: number): LatLonSpherical;
    destinationPoint(distance: number, bearing: number, radius?: number): LatLonSpherical;
    static intersection(p1: LatLonSpherical, brng1: number, p2: LatLonSpherical, brng2: number): LatLonSpherical | null;
    crossTrackDistanceTo(pathStart: LatLonSpherical, pathEnd: LatLonSpherical, radius?: number): number;
    alongTrackDistanceTo(pathStart: LatLonSpherical, pathEnd: LatLonSpherical, radius?: number): number;
    maxLatitude(bearing: number): number;
    static crossingParallels(
        point1: LatLonSpherical,
        point2: LatLonSpherical,
        latitude: number,
    ): {
        lon1: number;
        lon2: number;
    } | null;
    rhumbDistanceTo(point: LatLonSpherical, radius?: number): number;
    rhumbBearingTo(point: LatLonSpherical): number;
    rhumbDestinationPoint(distance: number, bearing: number, radius?: number): LatLonSpherical;
    rhumbMidpointTo(point: LatLonSpherical): LatLonSpherical;
    static areaOf(polygon: Polygon<LatLonSpherical>, radius?: number): number;
    equals(point: LatLonSpherical): boolean;
    toGeoJSON(): GeoJSON;
    toString(format?: Format, dp?: Dp): string;
}

export { LatLonSpherical as default, Dms };
