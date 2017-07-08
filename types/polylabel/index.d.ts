// Type definitions for polylabel 1.0.0
// Project: https://github.com/mapbox/polylabel
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * polylabel
 * 
 * A fast algorithm for finding polygon pole of inaccessibility, the most distant internal point from
 * the polygon outline (not to be confused with centroid), implemented as a JavaScript library.
 * Useful for optimal placement of a text label on a polygon.
 * It's an iterative grid algorithm, inspired by paper by Garcia-Castellanos & Lombardo, 2007.
 * Unlike the one in the paper, this algorithm:
 *
 * - guarantees finding global optimum within the given precision
 * - is many times faster (10-40x)
 */
declare module "polylabel" {
    /**
     * Polylabel returns the pole of inaccessibility coordinate in [x, y] format.
     * 
     * @name polylabel
     * @function
     * @param {Array<number>} polygon - Given polygon coordinates in GeoJSON-like format
     * @param {number} precision - Precision (1.0 by default)
     * @param {boolean} debug - Debugging for Console 
     * @return {Array<number>}
     * @example
     * var p = polylabel(polygon, 1.0);
     */
    function polylabel(polygon: number[][][], precision?: number, debug?: boolean): number[];
    namespace polylabel {}
    export = polylabel;
}
