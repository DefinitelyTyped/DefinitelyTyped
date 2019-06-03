import TextFeature from 'ol/format/TextFeature';
import Geometry from 'ol/geom/Geometry';
import GeometryCollection from 'ol/geom/GeometryCollection';
import LinearRing from 'ol/geom/LinearRing';
import LineString from 'ol/geom/LineString';
import MultiLineString from 'ol/geom/MultiLineString';
import MultiPoint from 'ol/geom/MultiPoint';
import MultiPolygon from 'ol/geom/MultiPolygon';
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
export interface Options {
    splitCollection?: boolean;
}
export interface Token {
    type: number;
    value?: number | string;
    position: number;
}
export default class WKT extends TextFeature {
    constructor(opt_options?: Options);
}
