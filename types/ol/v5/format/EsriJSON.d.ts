import { Feature, FeatureSet, Geometry, HasZM, Multipoint, Point, Polygon, Polyline, Position, SpatialReferenceWkid } from 'arcgis-rest-api';
import Geometry_1 from '../geom/Geometry';
import GeometryLayout from '../geom/GeometryLayout';
import SimpleGeometry from '../geom/SimpleGeometry';
import { ReadOptions, WriteOptions } from './Feature';
import JSONFeature from './JSONFeature';

export type EsriJSONFeature = Feature;
export type EsriJSONFeatureSet = FeatureSet;
export type EsriJSONGeometry = Geometry;
export type EsriJSONHasZM = HasZM;
export interface EsriJSONMultiPolygon {
    rings: number[][][][];
    hasM?: boolean | undefined;
    hasZ?: boolean | undefined;
    spatialReference?: EsriJSONSpatialReferenceWkid | undefined;
}
export type EsriJSONMultipoint = Multipoint;
export type EsriJSONPoint = Point;
export type EsriJSONPolygon = Polygon;
export type EsriJSONPolyline = Polyline;
export type EsriJSONPosition = Position;
export type EsriJSONSpatialReferenceWkid = SpatialReferenceWkid;
export interface Options {
    geometryName?: string | undefined;
}
export default class EsriJSON extends JSONFeature {
    constructor(opt_options?: Options);
}
