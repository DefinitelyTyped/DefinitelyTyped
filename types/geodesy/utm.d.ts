/*
 * @format
 */

import { Datum } from '.';

import LatLonEllipsoidal, { Dms } from './latlon-ellipsoidal-datum';

type Hemisphere = 'N' | 'S';

declare class Utm {
    zone: number;
    hemisphere: Hemisphere;
    easting: number;
    northing: number;
    datum: Datum;
    convergence: number | null;
    scale: number | null;
    constructor(
        zone: number,
        hemisphere: Hemisphere,
        easting: number,
        northing: number,
        datum?: Datum,
        convergence?: number,
        scale?: number,
    );
    static parse(utmCoord: string, datum?: Datum): Utm;
    toLatLon(): LatLon_Utm;
    toString(digits?: number): string;
}

declare class LatLon_Utm extends LatLonEllipsoidal {
    toUtm(zoneOverride?: number): Utm;
}

export { Utm as default, LatLon_Utm as LatLon, Dms };
