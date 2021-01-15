// Type definitions for geopoint 1.0
// Project: https://github.com/davidwood/node-geopoint
// Definitions by: Varg Industries <https://github.com/vargind>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = GeoPoint;

declare class GeoPoint {
    constructor(lat: number, lon: number, inRadians?: boolean);

    boundingCoordinates(distance: number, radius?: number, inKilometers?: boolean): [GeoPoint, GeoPoint];

    distanceTo(point: GeoPoint, inKilometers?: boolean): number;

    latitude(inRadians?: boolean): number;

    longitude(inRadians?: boolean): number;

    static degreesToRadians(value: number): number;

    static kilometersToMiles(value: number): number;

    static milesToKilometers(value: number): number;

    static radiansToDegrees(value: number): number;
}
