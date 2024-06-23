declare namespace Geohash {
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

    interface Bounds {
        sw: Point;
        ne: Point;
    }

    interface Point {
        lat: number;
        lon: number;
    }

    /**
     * Encodes latitude/longitude to geohash, either to specified precision or to automatically
     * evaluated precision.
     *
     * @param   lat - Latitude in degrees.
     * @param   lon - Longitude in degrees.
     * @param   [precision] - Number of characters in resulting geohash.
     * @returns Geohash of supplied latitude/longitude.
     * @throws  Invalid geohash.
     *
     * @example
     *     var geohash = Geohash.encode(52.205, 0.119, 7); // geohash: 'u120fxw'
     */
    function encode(
        latitude: number,
        longitude: number,
        precision?: number,
    ): string;

    /**
     * Decode geohash to latitude/longitude (location is approximate centre of geohash cell,
     *     to reasonable precision).
     *
     * @param   geohash - Geohash string to be converted to latitude/longitude.
     * @returns (Center of) geohashed location.
     * @throws  Invalid geohash.
     *
     * @example
     *     var latlon = Geohash.decode('u120fxw'); // latlon: { lat: 52.205, lon: 0.1188 }
     */
    function decode(geohash: string): Point;

    /**
     * Returns SW/NE latitude/longitude bounds of specified geohash.
     *
     * @param   geohash - Cell that bounds are required of.
     * @returns The Bounds
     * @throws  Invalid geohash.
     */
    function bounds(geohash: string): Bounds;

    /**
     * Determines adjacent cell in given direction.
     *
     * @param   geohash - Cell to which adjacent cell is required.
     * @param   direction - Direction from geohash (N/S/E/W).
     * @returns Geocode of adjacent cell.
     * @throws  Invalid geohash.
     */
    function adjacent(geohash: string, direction: Direction | string): string;

    /**
     * Returns all 8 adjacent cells to specified geohash.
     *
     * @param   geohash - Geohash neighbours are required of.
     * @returns The neighbours
     * @throws  Invalid geohash.
     */
    function neighbours(geohash: string): Neighbours;
}

export default Geohash;
