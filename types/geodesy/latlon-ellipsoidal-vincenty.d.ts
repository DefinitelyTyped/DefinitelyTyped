/*
 * @format
 */

import LatLonEllipsoidal, { Dms } from './latlon-ellipsoidal';

declare class LatLonEllipsoidal_Vincenty extends LatLonEllipsoidal {
    distanceTo(point: LatLonEllipsoidal_Vincenty): number;
    initialBearingTo(point: LatLonEllipsoidal_Vincenty): number;
    finalBearingTo(point: LatLonEllipsoidal_Vincenty): number;
    destinationPoint(distance: number, initialBearing: number): LatLonEllipsoidal_Vincenty;
    finalBearingOn(distance: number, initialBearing: number): number;
    direct(
        distance: number,
        initialBearing: number,
    ): {
        point: LatLonEllipsoidal_Vincenty;
        finalBearing: number;
        iterations: number;
    };
    inverse(
        point: LatLonEllipsoidal_Vincenty,
    ): {
        distance: number;
        initialBearing: number;
        finalBearing: number;
        iterations: number;
    };
}

export { LatLonEllipsoidal_Vincenty as default, Dms };
