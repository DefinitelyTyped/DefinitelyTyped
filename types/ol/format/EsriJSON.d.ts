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
    protected readFeatureFromObject(
        object: any,
        opt_options?: ReadOptions,
        opt_idField?: string,
    ): Feature_1<Geometry_1>;
    protected readFeaturesFromObject(object: any, opt_options?: ReadOptions): Feature_1<Geometry_1>[];
    protected readGeometryFromObject(object: EsriJSONGeometry, opt_options?: ReadOptions): Geometry_1;
    protected readProjectionFromObject(object: any): Projection;
    /**
     * Encode a feature as a esriJSON Feature object.
     */
    writeFeatureObject(feature: Feature_1<Geometry_1>, opt_options?: WriteOptions): any;
    /**
     * Encode an array of features as a EsriJSON object.
     */
    writeFeaturesObject(features: Feature_1<Geometry_1>[], opt_options?: WriteOptions): EsriJSONFeatureSet;
    /**
     * Encode a geometry as a EsriJSON object.
     */
    writeGeometryObject(geometry: Geometry_1, opt_options?: WriteOptions): EsriJSONGeometry;
}
