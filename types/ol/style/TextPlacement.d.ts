/**
 * Text placement. One of 'point', 'line'. Default is 'point'. Note that
 * 'line' requires the underlying geometry to be a {@link module:ol/geom/LineString~LineString},
 * {@link module:ol/geom/Polygon~Polygon}, {@link module:ol/geom/MultiLineString~MultiLineString} or
 * {@link module:ol/geom/MultiPolygon~MultiPolygon}.
 */
declare enum TextPlacement {
    POINT = 'point',
    LINE = 'line',
}

export default TextPlacement;
