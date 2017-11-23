// Type definitions for concaveman 1.1.0
// Project: https://github.com/mapbox/concaveman
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "concaveman" {
    /**
     * A very fast 2D concave hull algorithm in JavaScript (generates a general outline of a point set).
     *
     * @name concaveman
     * @param {Array<Array<number>>} points is an array of [x, y] points.
     * @param {number} [concavity=2] is a relative measure of concavity. 1 results in a relatively detailed shape, Infinity results in a convex hull. You can use values lower than 1, but they can produce pretty crazy shapes.
     * @param {number} [lengthThreshold=0] when a segment length is under this threshold, it stops being considered for further detalization. Higher values result in simpler shapes.
     * @return {Array<Array<number>>}
     * @example
     * var points = [[10, 20], [30, 12.5], ...];
     * var polygon = concaveman(points);
     *
     * //=hull
     */
    function concaveman(points: number[][], concavity?: number, lengthThreshold?: number): number[][];
    namespace concaveman {}
    export = concaveman;
}
