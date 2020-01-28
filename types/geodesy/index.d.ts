// Type definitions for geodesy 2.2
// Project: https://github.com/chrisveness/geodesy, http://www.movable-type.co.uk/scripts/geodesy-library.html
// Definitions by:  Denis Carriere <https://github.com/DenisCarriere>
// 		              Gilbert Handy <https://github.com/HandyG52>
//                  Harry Nicholls <https://github.com/excelulous>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 3.6

/*
 * @format
 */

export type Format = 'd' | 'dm' | 'dms';
export type Dp = 0 | 2 | 4;

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

import './latlon-ellipsoidal-datum';
import './dms';
import './latlon-ellipsoidal-referenceframe';
import './latlon-ellipsoidal-vincenty';
import './latlon-ellipsoidal';
import './latlon-nvector-ellipsoidal';
import './latlon-nvector-spherical';
import './latlon-spherical';
import './mgrs';
import './osgridref';
import './utm';
import './vector3d';
