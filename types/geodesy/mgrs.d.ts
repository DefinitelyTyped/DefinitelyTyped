/*
 * @format
 */

import { Datum } from '.';

import Utm, { LatLon as LatLonEllipsoidal, Dms } from './utm';

declare class Mgrs {
    zone: number;
    band: string;
    e100k: string;
    n100k: string;
    easting: number;
    northing: number;
    datum: Datum;
    constructor(
        zone: number,
        band: string,
        e100k: string,
        n100k: string,
        easting: number,
        northing: number,
        datum?: Datum,
    );
    static parse(mgrsGridRef: string): Mgrs;
    toUtm(): Utm_Mgrs;
    toString(digits?: 2 | 4 | 6 | 8 | 10): string;
}

declare class Utm_Mgrs extends Utm {
    toMgrs(): Mgrs;
}
declare class Latlon_Utm_Mgrs extends LatLonEllipsoidal {
    toUtm(zoneOverride?: number): Utm_Mgrs;
}

export { Mgrs as default, Utm_Mgrs as Utm, Latlon_Utm_Mgrs as LatLon, Dms };
