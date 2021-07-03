import {
    GeometryCollection,
    GeometryObject,
    LineString,
    MultiLineString,
    MultiPoint,
    MultiPolygon,
    Point,
    Polygon,
    Topology,
} from 'topojson-specification';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { ReadOptions, WriteOptions } from './Feature';
import JSONFeature from './JSONFeature';

export interface Options {
    dataProjection?: ProjectionLike;
    layerName?: string;
    layers?: string[];
}
export type TopoJSONGeometry = GeometryObject;
export type TopoJSONGeometryCollection = GeometryCollection;
export type TopoJSONLineString = LineString;
export type TopoJSONMultiLineString = MultiLineString;
export type TopoJSONMultiPoint = MultiPoint;
export type TopoJSONMultiPolygon = MultiPolygon;
export type TopoJSONPoint = Point;
export type TopoJSONPolygon = Polygon;
export type TopoJSONTopology = Topology;
export default class TopoJSON extends JSONFeature {
    constructor(opt_options?: Options);
    protected readFeatureFromObject(object: any, opt_options?: ReadOptions): Feature<Geometry>;
    protected readFeaturesFromObject(object: any, opt_options?: ReadOptions): Feature<Geometry>[];
    protected readGeometryFromObject(object: any, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromObject(object: any): Projection;
    writeFeatureObject(feature: Feature<Geometry>, opt_options?: WriteOptions): any;
    writeFeaturesObject(features: Feature<Geometry>[], opt_options?: WriteOptions): any;
    writeGeometryObject(geometry: Geometry, opt_options?: WriteOptions): any;
}
