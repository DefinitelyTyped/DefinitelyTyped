// Type definitions for polylabel 1.0
// Project: https://github.com/mapbox/polylabel
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Polylabel returns the pole of inaccessibility coordinate in [x, y] format.
 *
 * @param {Array<number>} polygon - Given polygon coordinates in GeoJSON-like format
 * @param {number} precision - Precision (1.0 by default)
 * @param {boolean} debug - Debugging for Console
 * @return {Array<number>}
 * @example
 * var p = polylabel(polygon, 1.0);
 */
declare function polylabel(polygon: number[][][], precision?: number, debug?: boolean): number[];
declare namespace polylabel {}
export default polylabel;
