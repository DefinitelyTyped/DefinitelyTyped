// Type definitions for distance-from 1.1
// Project: https://github.com/rickyplouis/distance-from#readme
// Definitions by: Patrick Lienau <https://github.com/patrick-lienau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Position = [latitude: number, longitude: number];
export type Units = (
    | 'km'
    | 'kilometer'
    | 'kilometers'
    | 'm'
    | 'meters'
    | 'meter'
    | 'metre'
    | 'cm'
    | 'centimeter'
    | 'centimeters'
    | 'mi'
    | 'mile'
    | 'miles'
    | 'feet'
    | 'ft'
    | 'in'
    | 'inch'
    | 'inches'
    | 'yd'
    | 'yard'
    | 'yards'
);

export interface DistanceFrom {
    distanceInKm(lat1: number, lon1: number, lat2: number, lon2: number): number;
    to(destination: Position): this;
    validUnits(unit: Units): boolean;
    in(units: Units): number;
    unitList(): Units[];
    degreeToRadians(degree: number): number;
}

export default function(location: Position): DistanceFrom;
