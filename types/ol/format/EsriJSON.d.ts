import {
    Feature,
    FeatureSet,
    Geometry,
    HasZM,
    Multipoint,
    Point,
    Polygon,
    Polyline,
    Position,
    SpatialReferenceWkid,
} from 'arcgis-rest-api';
import Feature_1 from '../Feature';
import Geometry_1 from '../geom/Geometry';
import GeometryLayout from '../geom/GeometryLayout';
import LineString from '../geom/LineString';
import MultiLineString from '../geom/MultiLineString';
import MultiPoint from '../geom/MultiPoint';
import MultiPolygon from '../geom/MultiPolygon';
import Point_1 from '../geom/Point';
import Polygon_1 from '../geom/Polygon';
import SimpleGeometry from '../geom/SimpleGeometry';
import Projection from '../proj/Projection';
import { ReadOptions, WriteOptions } from './Feature';
import JSONFeature from './JSONFeature';

export type EsriJSONFeature = Feature;
export type EsriJSONFeatureSet = FeatureSet;
export type EsriJSONGeometry = Geometry;
export type EsriJSONHasZM = HasZM;
export interface EsriJSONMultiPolygon {
    rings: number[][][][];
    hasM?: boolean;
    hasZ?: boolean;
    spatialReference?: EsriJSONSpatialReferenceWkid;
}
export type EsriJSONMultipoint = Multipoint;
export type EsriJSONPoint = Point;
export type EsriJSONPolygon = Polygon;
export type EsriJSONPolyline = Polyline;
export type EsriJSONPosition = Position;
export type EsriJSONSpatialReferenceWkid = SpatialReferenceWkid;
export interface Options {
    geometryName?: string;
}
export default class EsriJSON extends JSONFeature {
    constructor(opt_options?: Options);
    protected readFeatureFromObject(object: any, opt_options?: ReadOptions): Feature_1<Geometry_1>;
    protected readFeaturesFromObject(object: any, opt_options?: ReadOptions): Feature_1<Geometry_1>[];
    protected readGeometryFromObject(object: any, opt_options?: ReadOptions): Geometry_1;
    protected readProjectionFromObject(object: any): Projection;
    writeFeatureObject(feature: Feature_1<Geometry_1>, opt_options?: WriteOptions): any;
    writeFeaturesObject(features: Feature_1<Geometry_1>[], opt_options?: WriteOptions): EsriJSONFeatureSet;
    writeGeometryObject(geometry: Geometry_1, opt_options?: WriteOptions): EsriJSONGeometry;
}
