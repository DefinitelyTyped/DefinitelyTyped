// Type definitions for geodesy 1.1
// Project: https://github.com/chrisveness/geodesy
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
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
}

export class Dms {
    static parseDMS(dmsStr: string): number;
    static toDMS(deg: number, format?: format, dp?: 0 | 2 | 4): string;
    static toLat(deg: number, format?: format, dp?: 0 | 2 | 4): string;
    static toLon(deg: number, format?: format, dp?: 0 | 2 | 4): string;
    static toBrng(deg: number, format?: format, dp?: 0 | 2 | 4): string;
    static compassPoint(bearing: number, precision?: 1 | 2 | 3): string;
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
