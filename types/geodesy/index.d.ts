// Type definitions for geodesy 1.2
// Project: https://github.com/chrisveness/geodesy
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// 		   Gilbert Handy <https://github.com/HandyG52>
//         Harry Nicholls <https://github.com/excelulous>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type format = 'd' | 'dm' | 'dms';
export type datum = 'ED50'| 'Irl1975'| 'NAD27'| 'NAD83'| 'NTF'| 'OSGB36'| 'Potsdam'| 'TokyoJapan'| 'WGS72'| 'WGS84';
export type hemisphere = 'N' | 'S';
export type ellipsoid = 'WGS84' | 'Airy1830' | 'AiryModified' | 'Bessel1841' | 'Clarke1866' | 'Clarke1880IGN' | 'GRS80' | 'Intl1924' | 'WGS72';
export type transform = [number, number, number, number, number, number, number];
export type LatLon = LatLonEllipsoidal;

export interface Datum {
    ellipsoid: Ellipsoid;
    transform: [number, number, number, number, number, number, number];
}

export interface Datums {
    ED50: Datum;
    Irl1975: Datum;
    NAD27: Datum;
    NAD83: Datum;
    NTF: Datum;
    OSGB36: Datum;
    Potsdam: Datum;
    TokyoJapan: Datum;
    WGS72: Datum;
    WGS84: Datum;
}

export interface Ellipsoid {
    a: number;
    b: number;
    f: number;
}

export interface Ellipsoids {
    WGS84: Ellipsoid;
    GRS80: Ellipsoid;
    Airy1830: Ellipsoid;
    AiryModified: Ellipsoid;
    Intl1924: Ellipsoid;
    Bessel1841: Ellipsoid;
}

export class Mgrs {
    zone: number;
    band: string;
    e100k: string;
    n100k: string;
    easting: number;
    northing: number;
    datum: datum;
    latBands: string;
    e100kLetters: string;
    n100kLetters: string;
    constructor(
        zone: number,
        band: string,
        e100k: string,
        n100k: string,
        easting: number,
        northing: number,
        datum?: datum
    )
    static parse(mgrsGridRef: string): Mgrs;
    toUtm(): Utm;
    toString(digits?: 2 | 4 | 6 | 8 | 10): string;
}

export class Utm {
    zone: number;
    hemisphere: hemisphere;
    easting: number;
    northing: number;
    datum: Datum;
    convergence: number;
    scale: number;
    constructor(
        zone: number,
        hemisphere: hemisphere,
        easting: number,
        northing: number,
        datum?: datum,
        convergence?: number,
        scale?: number
    );
    static parse(utmCoord: string, datum?: datum): Utm;
    toLatLonE(): LatLon;
    toMgrs(): Mgrs;
    toString(digits?: number): string;
}

export namespace Dms {
    let separator: string;
    function parseDMS(dmsStr: string): number;
    function toDMS(deg: number, format?: format, dp?: 0 | 2 | 4): string;
    function toLat(deg: number, format?: format, dp?: 0 | 2 | 4): string;
    function toLon(deg: number, format?: format, dp?: 0 | 2 | 4): string;
    function toBrng(deg: number, format?: format, dp?: 0 | 2 | 4): string;
    function compassPoint(bearing: number, precision?: 1 | 2 | 3): string;
}

export class Vector3d {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    plus(v: Vector3d): Vector3d;
    minus(v: Vector3d): Vector3d;
    times(x: number): Vector3d;
    dividedBy(x: number): Vector3d;
    dot(v: Vector3d): number;
    cross(v: Vector3d): Vector3d;
    negate(): Vector3d;
    length(): number;
    unit(): Vector3d;
    angleTo(v: Vector3d, n?: Vector3d): number;
    rotateAround(axis: Vector3d, theta: number): Vector3d;
    toString(precision?: number): string;
    toLatLonE(datum: Datum): LatLon;
    applyTransform(t: number[]): Vector3d;
}

export class OsGridRef {
    easting: number;
    northing: number;
    constructor(easting: number, northing: number);
    static latLonToOsGrid(p: LatLon): OsGridRef;
    static osGridToLatLon(gridref: OsGridRef, datum?: Datum): LatLon;
    static parse(gridref: string): OsGridRef;
    toString(digits?: number): string;
}

export class LatLonEllipsoidal {
    lat: number;
    lon: number;
    datum: Datum;
    constructor(lat: number, lon: number, datum?: Datum);
    toUtm(): Utm;
    convertDatum(toDatum: Datum): LatLon;
    toCartesian(): Vector3d;
    toString(format?: format, dp?: 0 | 2 | 4): string;
    static datum: Datums;
    static ellipsoid: Ellipsoids;
}

export class LatLonSpherical {
    lat: number;
    lon: number;
    constructor(lat: number, lon: number)
    distanceTo(point: LatLonSpherical, radius?: number): number;
    bearingTo(point: LatLonSpherical): number;
    finalBearingTo(point: LatLonSpherical): number;
    midpointTo(point: LatLonSpherical): number;
    intermediatePointTo(point: LatLonSpherical, fraction: number): LatLonSpherical;
    destinationPoint(distance: number, bearing: number, radius?: number): LatLonSpherical;
    static intersection(point1: LatLonSpherical, bearing1: number, point2: LatLonSpherical, bearing2: number): LatLonSpherical;
    crossTrackDistanceTo(pathStart: LatLonSpherical, pathEnd: LatLonSpherical, radius?: number): number;
    maxLatitude(bearing: number): number;
    static crossingParallels(point1: LatLonSpherical, point2: LatLonSpherical, latitude: number): any;
    rhumbDistanceTo(point: LatLonSpherical, radius?: number): number;
    rhumbBearingTo(point: LatLonSpherical): number;
    rhumbDestinationPoint(distance: number, bearing: number, radius?: number): LatLonSpherical;
    rhumbMidpointTo(point: LatLonSpherical): LatLonSpherical;
    equals(point: LatLonSpherical): boolean;
    static areaOf(polygon: LatLonSpherical[], radius?: number): number;
    toString(format?: string, dp?: number): string;
}

export class LatLonVectors {
    lat: number;
    lon: number;
    constructor(lat: number, lon: number);
    toVector(): Vector3d;
    greatCircle(bearing: number): Vector3d;
    distanceTo(point: LatLonVectors, radius?: number): number;
    bearingTo(point: LatLonVectors): number;
    midpointTo(point: LatLonVectors): number;
    intermediatePointTo(point: LatLonVectors, fraction: number): LatLonVectors;
    intermediatePointOnChordTo(point: LatLonVectors, fraction: number): LatLonVectors;
    destinationPoint(distance: number, bearing: number, radius?: number): LatLonVectors;
    static intersection(path1start: LatLonVectors, path1brngEnd: LatLonVectors | number, path2start: LatLonVectors, path2brngEnd: LatLonVectors | number): LatLonVectors;
    crossTrackDistanceTo(pathStart: LatLonVectors, pathBrngEnd: LatLonVectors | number, radius?: number): number;
    alongTrackDistanceTo(pathStart: LatLonVectors, pathBrngEnd: LatLonVectors | number, radius?: number): number;
    nearestPointOnSegment(point1: LatLonVectors, point2: LatLonVectors): LatLonVectors;
    isBetween(point1: LatLonVectors, point2: LatLonVectors): boolean;
    enclosedBy(polygon: LatLonVectors[]): boolean;
    static areaOf(polygon: LatLonVectors[], radius?: number): number;
    static meanOf(points: ReadonlyArray<LatLonVectors>): LatLonVectors;
    equals(point: LatLonVectors): boolean;
    toString(format?: string, dp?: number): string;
  }
