/*
 * @format
 */

import { Ellipsoid, Ellipsoids, Format, Dp, Plural } from '.';

import LatLonEllipsoidal, { Cartesian, Dms } from './latlon-ellipsoidal';

interface TxParam {
    epoch: string;
    params: [number, number, number, number, number, number];
    rates: [number, number, number, number, number, number];
}

type TxParams = Plural<TxParam>;

interface ReferenceFrame {
    name: string;
    epoch: number;
    ellipsoid: Ellipsoid;
}

type ReferenceFrames = Plural<ReferenceFrame>;

declare class LatLonEllipsoidal_ReferenceFrame extends LatLonEllipsoidal {
    constructor(lat: number, lon: number, height?: number, referenceFrame?: ReferenceFrame, epoch?: number);
    get referenceFrame(): ReferenceFrame;
    get epoch(): number;
    static get ellipsoids(): Ellipsoids;
    static get referenceFrames(): ReferenceFrames;
    static get transformParameters(): TxParams;
    static parse(
        lat: number | string | object,
        lon?: number,
        height?: number,
        referenceFrame?: ReferenceFrame,
        epoch?: number,
    ): LatLonEllipsoidal_ReferenceFrame;
    convertReferenceFrame(toReferenceFrame: ReferenceFrame): LatLonEllipsoidal_ReferenceFrame;
    toCartesian(): Cartesian_ReferenceFrame;
    toString(format: Format, dp?: Dp, dpHeight?: number, referenceFrame?: ReferenceFrame): string;
}

declare class Cartesian_ReferenceFrame extends Cartesian {
    constructor(x: number, y: number, z: number, referenceFrame?: ReferenceFrame, epoch?: number);
    get referenceFrame(): ReferenceFrame;
    get epoch(): number;
    toLatLon(): LatLonEllipsoidal_ReferenceFrame;
    convertReferenceFrame(toReferenceFrame: ReferenceFrame): Cartesian_ReferenceFrame;
    toString(dp?: number): string;
}

export { LatLonEllipsoidal_ReferenceFrame as default, Cartesian_ReferenceFrame as Cartesian, Dms };
