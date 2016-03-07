declare module goog {
    function require(name: 'goog.math.paths'): typeof goog.math.paths;
}

declare module goog.math.paths {

    /**
     * Defines a regular n-gon by specifing the center, a vertex, and the total
     * number of vertices.
     * @param {goog.math.Coordinate} center The center point.
     * @param {goog.math.Coordinate} vertex The vertex, which implicitly defines
     *     a radius as well.
     * @param {number} n The number of vertices.
     * @return {!goog.math.Path} The path.
     */
    function createRegularNGon(center: goog.math.Coordinate, vertex: goog.math.Coordinate, n: number): goog.math.Path;

    /**
     * Defines an arrow.
     * @param {goog.math.Coordinate} a Point A.
     * @param {goog.math.Coordinate} b Point B.
     * @param {?number} aHead The size of the arrow head at point A.
     *     0 omits the head.
     * @param {?number} bHead The size of the arrow head at point B.
     *     0 omits the head.
     * @return {!goog.math.Path} The path.
     */
    function createArrow(a: goog.math.Coordinate, b: goog.math.Coordinate, aHead: number, bHead: number): goog.math.Path;
}
