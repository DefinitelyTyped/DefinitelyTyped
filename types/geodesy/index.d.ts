// TypeScript Version: 3.6

/*
 * @format
 */

export type Format = "d" | "dm" | "dms";
export type Dp = number;

export interface Plural<T> {
    [itemName: string]: T;
}

export type Transform = [number, number, number, number, number, number, number];

export interface Datum {
    ellipsoid: Ellipsoid;
    transform: Transform;
}

export type Datums = Plural<Datum>;

export interface Ellipsoid {
    a: number;
    b: number;
    f: number;
}

export type Ellipsoids = Plural<Ellipsoid>;

export interface GeoJSON {
    type: string;
    coordinates: [number, number];
}

export type Polygon<T> = T[];

import "./latlon-ellipsoidal-datum";
import "./dms";
import "./latlon-ellipsoidal-referenceframe";
import "./latlon-ellipsoidal-vincenty";
import "./latlon-ellipsoidal";
import "./latlon-nvector-ellipsoidal";
import "./latlon-nvector-spherical";
import "./latlon-spherical";
import "./mgrs";
import "./osgridref";
import "./utm";
import "./vector3d";
