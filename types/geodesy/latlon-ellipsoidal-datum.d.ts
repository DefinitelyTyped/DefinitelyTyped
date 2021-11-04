/*
 * @format
 */

import { Datum, Datums, Ellipsoids } from '.';

import LatLonEllipsoidal, { Cartesian, Dms } from './latlon-ellipsoidal';

declare const datums: Datums;

declare class LatLonEllipsoidal_Datum extends LatLonEllipsoidal {
    constructor(lat: number, lon: number, height?: number, datum?: Datum);
    get datum(): Datum;
    static get ellipsoids(): Ellipsoids;
    static get datums(): Datums;
    static parse(
        lat: number | string | object,
        lon?: number,
        height?: number,
        datum?: Datum,
    ): LatLonEllipsoidal_Datum;
    convertDatum(toDatum: Datum): LatLonEllipsoidal_Datum;
    toCartesian(): Cartesian_Datum;
}

declare class Cartesian_Datum extends Cartesian {
    constructor(x: number, y: number, z: number, datum?: Datum);
    get datum(): Datum;
    set datum(datum: Datum);
    toLatLon(): LatLonEllipsoidal_Datum;
    convertDatum(toDatum: Datum): Cartesian_Datum;
}

export {
    LatLonEllipsoidal_Datum as default,
    Cartesian_Datum as Cartesian,
    datums,
    Dms,
};
