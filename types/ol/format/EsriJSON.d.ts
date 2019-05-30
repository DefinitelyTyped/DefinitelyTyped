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
    SpatialReferenceWkid
} from 'arcgis-rest-api';
import { ReadOptions, WriteOptions } from 'ol/format/Feature';
import JSONFeature from 'ol/format/JSONFeature';
import Geometry_1 from 'ol/geom/Geometry';
import GeometryLayout from 'ol/geom/GeometryLayout';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
export default class EsriJSON extends JSONFeature {
    constructor(opt_options?: Options);
}
export type EsriJSONFeature = Feature;
export type EsriJSONFeatureSet = FeatureSet;
export type EsriJSONGeometry = Geometry;
export type EsriJSONHasZM = HasZM;
export type EsriJSONMultipoint = Multipoint;
export interface EsriJSONMultiPolygon {
    rings: number[][][][];
    hasM?: boolean;
    hasZ?: boolean;
    spatialReference?: EsriJSONSpatialReferenceWkid;
}
export type EsriJSONPoint = Point;
export type EsriJSONPolygon = Polygon;
export type EsriJSONPolyline = Polyline;
export type EsriJSONPosition = Position;
export type EsriJSONSpatialReferenceWkid = SpatialReferenceWkid;
export interface Options {
    geometryName?: string;
}
