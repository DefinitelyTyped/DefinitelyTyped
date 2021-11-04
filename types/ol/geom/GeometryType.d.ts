/**
 * The geometry type. One of 'Point', 'LineString', 'LinearRing',
 * 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon',
 * 'GeometryCollection', 'Circle'.
 */
declare enum GeometryType {
    POINT = 'Point',
    LINE_STRING = 'LineString',
    LINEAR_RING = 'LinearRing',
    POLYGON = 'Polygon',
    MULTI_POINT = 'MultiPoint',
    MULTI_LINE_STRING = 'MultiLineString',
    MULTI_POLYGON = 'MultiPolygon',
    GEOMETRY_COLLECTION = 'GeometryCollection',
    CIRCLE = 'Circle',
}

export default GeometryType;
