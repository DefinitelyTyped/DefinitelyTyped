/**
 * Polylabel returns the pole of inaccessibility coordinate in [x, y] format.
 *
 * @param polygon - Given polygon coordinates in GeoJSON-like format
 * @param precision - Precision (1.0 by default)
 * @param debug - Debugging for Console
 * @example
 * var p = polylabel(polygon, 1.0);
 */
declare function polylabel(polygon: number[][][], precision?: number, debug?: boolean): number[] & { distance: number };
declare namespace polylabel {}
export default polylabel;
