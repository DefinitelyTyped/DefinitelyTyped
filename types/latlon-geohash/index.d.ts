// Type definitions for latlon-geohash 1.1
// Project: https://github.com/chrisveness/latlon-geohash
// Definitions by: Robert Imig <https://github.com/rimig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "latlon-geohash" {
    enum Direction {
        North = "N",
        South = "S",
        East = "E",
        West = "W",
    }

    interface Neighbours {
        n: string;
        ne: string;
        e: string;
        se: string;
        s: string;
        sw: string;
        w: string;
        nw: string;
    }

    /*
    * Encode latitude/longitude point to geohash of given precision (number of characters in resulting geohash).
    * If precision is not specified, it is inferred from precision of latitude/longitude values.
    */
    function encode(latitude: number, longitude: number, precision?: number): string;

    /*
    * return { lat, lon } of centre of given geohash, to appropriate precision.
    */
    function decode(geohash: string): number[];

    /*
    * return { sw, ne } bounds of given geohash.
    */
    function bounds(geohash: string): number[];

    /*
    * return adjacent cell to given geohash in specified direction (N/S/E/W).
    */
    function adjacent(geohash: string, direction: (Direction | string)): string;

    /*
    * return all 8 adjacent cells (n/ne/e/se/s/sw/w/nw) to given geohash.
    */
    function neighbours(geohash: string): Neighbours;
}
