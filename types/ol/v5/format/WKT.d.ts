import Geometry from '../geom/Geometry';
import GeometryCollection from '../geom/GeometryCollection';
import LinearRing from '../geom/LinearRing';
import LineString from '../geom/LineString';
import MultiLineString from '../geom/MultiLineString';
import MultiPoint from '../geom/MultiPoint';
import MultiPolygon from '../geom/MultiPolygon';
import Point from '../geom/Point';
import Polygon from '../geom/Polygon';
import SimpleGeometry from '../geom/SimpleGeometry';
import TextFeature from './TextFeature';

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
