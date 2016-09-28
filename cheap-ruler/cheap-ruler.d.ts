// Type definitions for cheap-ruler 2.4.1
// Project: https://github.com/mapbox/cheap-ruler
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "cheap-ruler" {
    interface TemplateUnits {
        kilometers: number
        miles: number
        nauticalmiles: number
        meters: number
        metres: number
        yards: number
        feet: number
        inches: number
    }
    interface InterfacePointOnLine {
        point: Array<number>
        index: number
        t: number
    }
    class CheapRuler {
        /**
         * Given two points of the form [longitude, latitude], returns the distance.
         *
         * @name distance
         * @param {Array<number>} a point [longitude, latitude]
         * @param {Array<number>} b point [longitude, latitude]
         * @returns {number} distance
         * @example
         * var distance = ruler.distance([30.5, 50.5], [30.51, 50.49]);
         * //=distance
         */
        distance(a: Array<number>, b: Array<number>): number;

        /**
         * Returns the bearing between two points in angles.
         *
         * @name bearing
         * @param {Array<number>} a point [longitude, latitude]
         * @param {Array<number>} b point [longitude, latitude]
         * @returns {number} bearing
         * @example
         * var bearing = ruler.bearing([30.5, 50.5], [30.51, 50.49]);
         * //=bearing
         */
        bearing(a: Array<number>, b: Array<number>): number;

        /**
         * Returns a new point given distance and bearing from the starting point.
         *
         * @name destination
         * @param {Array<number>} p point [longitude, latitude]
         * @param {number} dist distance
         * @param {number} bearing
         * @returns {Array<number>} point [longitude, latitude]
         * @example
         * var point = ruler.destination([30.5, 50.5], 0.1, 90);
         * //=point
         */
        destination(p: Array<number>, dist: number, bearing: number): Array<number>;

        /**
         * Given a line (an array of points), returns the total line distance.
         *
         * @name lineDistance
         * @param {Array<Array<number>>} points [longitude, latitude]
         * @returns {number} total line distance
         * @example
         * var length = ruler.lineDistance([
         *     [-67.031, 50.458], [-67.031, 50.534],
         *     [-66.929, 50.534], [-66.929, 50.458]
         * ]);
         * //=length
         */
        lineDistance(points: Array<Array<number>>): number;

        /**
         * Given a polygon (an array of rings, where each ring is an array of points), returns the area.
         *
         * @name area
         * @param {Array<Array<Array<number>>>} polygon
         * @returns {number} area value in the specified units (square kilometers by default)
         * @example
         * var area = ruler.area([[
         *     [-67.031, 50.458], [-67.031, 50.534], [-66.929, 50.534],
         *     [-66.929, 50.458], [-67.031, 50.458]
         * ]]);
         * //=area
         */
        area(polygon: Array<Array<Array<number>>>): number;

        /**
         * Returns the point at a specified distance along the line.
         *
         * @name along
         * @param {Array<Array<number>>} line
         * @param {number} dist distance
         * @returns {Array<number>} point [longitude, latitude]
         * @example
         * var point = ruler.along(line, 2.5);
         * //=point
         */
        along(line: Array<Array<number>>, dist: number): Array<number>

        /**
         * Returns an object of the form {point, index} where point is closest point on the line from the given point, and index is the start index of the segment with the closest point.
         *
         * @pointOnLine
         * @param {Array<Array<number>>} line
         * @param {Array<number>} p point [longitude, latitude]
         * @returns {Object} {point, index}
         * @example
         * var point = ruler.pointOnLine(line, [-67.04, 50.5]).point;
         * //=point
         */
        pointOnLine(line: Array<Array<number>>, p: Array<number>): InterfacePointOnLine

        /**
         * Returns a part of the given line between the start and the stop points (or their closest points on the line).
         *
         * @name lineSlice
         * @param {Array<number>} start point [longitude, latitude]
         * @param {Array<number>} stop point [longitude, latitude]
         * @param {Array<Array<number>>} line
         * @returns {Array<Array<number>>} line part of a line
         * @example
         * var line2 = ruler.lineSlice([-67.04, 50.5], [-67.05, 50.56], line1);
         * //=line2
         */
        lineSlice(start: Array<number>, stop: Array<number>, line: Array<Array<number>>): Array<Array<number>>

        /**
         * Returns a part of the given line between the start and the stop points indicated by distance along the line.
         *
         * @name lineSliceAlong
         * @param {number} start distance
         * @param {number} stop distance
         * @param {Array<Array<number>>} line
         * @returns {Array<Array<number>>} line part of a line
         * @example
         * var line2 = ruler.lineSliceAlong(10, 20, line1);
         * //=line2
         */
        lineSliceAlong(start: number, stop: number, line: Array<Array<number>>): Array<Array<number>>

        /**
         * Given a point, returns a bounding box object ([w, s, e, n]) created from the given point buffered by a given distance.
         *
         * @name bufferPoint
         * @param {Array<number>} p point [longitude, latitude]
         * @param {number} buffer
         * @returns {Array<number>} box object ([w, s, e, n])
         * @example
         * var bbox = ruler.bufferPoint([30.5, 50.5], 0.01);
         * //=bbox
         */
        bufferPoint(p: Array<number>, buffer: number): Array<number>

        /**
         * Given a bounding box, returns the box buffered by a given distance.
         *
         * @name bufferBBox
         * @param {Array<number>} box object ([w, s, e, n])
         * @param {number} buffer
         * @returns {Array<number>} box object ([w, s, e, n])
         * @example
         * var bbox = ruler.bufferBBox([30.5, 50.5, 31, 51], 0.2);
         * //=bbox
         */
        bufferBBox(bbox: Array<number>, buffer: number): Array<number>

        /**
         * Returns true if the given point is inside in the given bounding box, otherwise false.
         *
         * @name insideBBox
         * @param {Array<number>} p point [longitude, latitude]
         * @param {Array<number>} box object ([w, s, e, n])
         * @returns {boolean}
         * @example
         * var inside = ruler.insideBBox([30.5, 50.5], [30, 50, 31, 51]);
         * //=inside
         */
        insideBBox(p: Array<number>, bbox: Array<number>): boolean
    }
    /**
     * A collection of very fast approximations to common geodesic measurements. Useful for performance-sensitive code that measures things on a city scale.
     *
     * @name cheapRuler
     * @param {number} lat latitude
     * @param {string} [units='kilometers']
     * @returns {Object} CheapRuler
     * @example
     * var ruler = cheapRuler(35.05, 'miles');
     * //=ruler
     */
    function cheapRuler(lat: number, units?: string): CheapRuler;
    namespace cheapRuler {
        /**
         * Multipliers for converting between units.
         *
         * @name units
         * @example
         * // convert 50 meters to yards
         * 50 * cheapRuler.units.yards / cheapRuler.units.meters;
         */
        const units: TemplateUnits

        /**
         * Creates a ruler object from tile coordinates (y and z). Convenient in tile-reduce scripts.
         *
         * @name fromTile
         * @param {number} y
         * @param {number} z
         * @param {string} [units='kilometers']
         * @returns {Object} CheapRuler
         * @example
         * var ruler = cheapRuler.fromTile(1567, 12);
         * //=ruler
         */
        function fromTile(y: number, z: number, units?: string)
    }
    export = cheapRuler
}