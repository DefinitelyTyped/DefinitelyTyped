import { Feature, FeatureCollection, GeoJSON as GeoJSON_1, Geometry, GeometryCollection, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon } from 'geojson';
import Geometry_1 from '../geom/Geometry';
import GeometryCollection_1 from '../geom/GeometryCollection';
import LineString_1 from '../geom/LineString';
import MultiLineString_1 from '../geom/MultiLineString';
import MultiPoint_1 from '../geom/MultiPoint';
import MultiPolygon_1 from '../geom/MultiPolygon';
import Point_1 from '../geom/Point';
import Polygon_1 from '../geom/Polygon';
import { ProjectionLike } from '../proj';
import { ReadOptions, WriteOptions } from './Feature';
import JSONFeature from './JSONFeature';

export type GeoJSONFeature = Feature;
export type GeoJSONFeatureCollection = FeatureCollection;
export type GeoJSONGeometry = Geometry;
export type GeoJSONGeometryCollection = GeometryCollection;
export type GeoJSONLineString = LineString;
export type GeoJSONMultiLineString = MultiLineString;
export type GeoJSONMultiPoint = MultiPoint;
export type GeoJSONMultiPolygon = MultiPolygon;
export type GeoJSONObject = GeoJSON_1;
export type GeoJSONPoint = Point;
export type GeoJSONPolygon = Polygon;
export interface Options {
    dataProjection?: ProjectionLike;
    featureProjection?: ProjectionLike;
    geometryName?: string;
    extractGeometryName?: boolean;
}
export default class GeoJSON extends JSONFeature {
    constructor(opt_options?: Options);
}
