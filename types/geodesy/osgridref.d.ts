/*
 * @format
 */

import { Datum } from ".";

import LatLonEllipsoidal, { Dms } from "./latlon-ellipsoidal-datum";

declare class OsGridRef {
    easting: number;
    northing: number;
    constructor(easting: number, northing: number);
    toLatLon(datum?: Datum): LatLon_OsGridRef;
    static parse(gridref: string): OsGridRef;
    toString(digits?: number): string;
}

declare class LatLon_OsGridRef extends LatLonEllipsoidal {
    toOsGrid(): OsGridRef;
}

export { Dms, LatLon_OsGridRef as LatLon, OsGridRef as default };
