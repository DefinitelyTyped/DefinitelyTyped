import {
    GeometryObject,
    GeometryCollection,
    LineString as LineString_1,
    MultiLineString as MultiLineString_1,
    MultiPoint as MultiPoint_1,
    MultiPolygon as MultiPolygon_1,
    Point as Point_1,
    Polygon as Polygon_1,
    Topology
} from 'topojson-specification';
import { Coordinate } from '../coordinate';
import Feature from '../Feature';
import LineString from '../geom/LineString';
import MultiLineString from '../geom/MultiLineString';
import MultiPoint from '../geom/MultiPoint';
import MultiPolygon from '../geom/MultiPolygon';
import Point from '../geom/Point';
import Polygon from '../geom/Polygon';
import { ProjectionLike } from '../proj';
import { ReadOptions } from './Feature';
import JSONFeature from './JSONFeature';

export interface Options {
    dataProjection?: ProjectionLike;
    layerName?: string;
    layers?: string[];
}
export default class TopoJSON extends JSONFeature {
    constructor(opt_options?: Options);
}
export type TopoJSONGeometry = GeometryObject;
export type TopoJSONGeometryCollection = GeometryCollection;
export type TopoJSONLineString = LineString_1;
export type TopoJSONMultiLineString = MultiLineString_1;
export type TopoJSONMultiPoint = MultiPoint_1;
export type TopoJSONMultiPolygon = MultiPolygon_1;
export type TopoJSONPoint = Point_1;
export type TopoJSONPolygon = Polygon_1;
export type TopoJSONTopology = Topology;
