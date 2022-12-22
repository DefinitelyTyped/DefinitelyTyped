// Type definitions for distance-from 1.1
// Project: https://github.com/rickyplouis/distance-from#readme
// Definitions by: Patrick Lienau <https://github.com/patrick-lienau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace distanceFrom {
    type Position = [latitude: number, longitude: number];
    type Unit = (
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
    class DistanceFrom {
        distanceInKm(lat1: number, lon1: number, lat2: number, lon2: number): number;
        to(destination: Position): this;
        validUnits(unit: Unit): boolean;
        in(units: Unit): number;
        unitList(): Unit[];
        degreeToRadians(degree: number): number;
    }
}

declare function distanceFrom(location: distanceFrom.Position): distanceFrom.DistanceFrom;
export = distanceFrom;
