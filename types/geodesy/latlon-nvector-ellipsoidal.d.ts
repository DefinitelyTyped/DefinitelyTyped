/*
 * @format
 */

import { Datum } from '.';

import LatLonEllipsoidal, { Cartesian, Vector3d, Dms } from './latlon-ellipsoidal';

declare class LatLon_NvectorEllipsoidal extends LatLonEllipsoidal {
    deltaTo(point: LatLon_NvectorEllipsoidal): Ned;
    destinationPoint(delta: Ned): LatLon_NvectorEllipsoidal;
    toNvector(): NvectorEllipsoidal;
    toCartesian(): Cartesian_Nvector;
}

declare class NvectorEllipsoidal extends Vector3d {
    constructor(x: number, y: number, z: number, h?: number, datum?: Datum);
    toLatLon(): LatLon_NvectorEllipsoidal;
    toCartesian(): Cartesian_Nvector;
    toString(dp?: number, dpHeight?: number): string;
}

declare class Cartesian_Nvector extends Cartesian {
    toNvector(datum: Datum): NvectorEllipsoidal;
}

declare class Ned {
    constructor(north: number, east: number, down: number);
    get length(): number;
    get bearing(): number;
    get elevation(): number;
    static fromDistanceBearingElevation(dist: number, brng: number, elev: number): Ned;
    toString(dp?: number): string;
}

export {
    LatLon_NvectorEllipsoidal as default,
    NvectorEllipsoidal as Nvector,
    Cartesian_Nvector as Cartesian,
    Ned,
    Dms,
};
