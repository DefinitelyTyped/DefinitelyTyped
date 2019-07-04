import Feature, { FeatureLike } from 'ol/Feature';
import FeatureFormat, { ReadOptions, WriteOptions } from 'ol/format/Feature';
import Geometry from 'ol/geom/Geometry';
import Projection from 'ol/proj/Projection';
export default class JSONFeature extends FeatureFormat {
    constructor();
    protected readProjectionFromObject(object: { [key: string]: any }): Projection;
    protected readFeaturesFromObject(object: { [key: string]: any }, opt_options?: ReadOptions): Feature[];
    protected readGeometryFromObject(object: { [key: string]: any }, opt_options?: ReadOptions): Geometry;
    protected readFeatureFromObject(object: { [key: string]: any }, opt_options?: ReadOptions): Feature;
    readGeometry(source: ArrayBuffer | Document | Node | { [key: string]: any } | string, opt_options?: ReadOptions): Geometry;
    readGeometry(source: Document | Node | { [key: string]: any } | string, opt_options?: ReadOptions): Geometry;
    readFeatures(source: ArrayBuffer | Document | Node | { [key: string]: any } | string, opt_options?: ReadOptions): Feature[];
    readFeatures(source: Document | Node | ArrayBuffer | { [key: string]: any } | string, opt_options?: ReadOptions): FeatureLike[];
    readProjection(source: ArrayBuffer | Document | Node | { [key: string]: any } | string): Projection;
    readProjection(source: Document | Node | { [key: string]: any } | string): Projection;
    readFeature(source: ArrayBuffer | Document | Node | { [key: string]: any } | string, opt_options?: ReadOptions): Feature;
    readFeature(source: Document | Node | { [key: string]: any } | string, opt_options?: ReadOptions): FeatureLike;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeatureObject(feature: Feature, opt_options?: WriteOptions): { [key: string]: any };
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeFeaturesObject(features: Feature[], opt_options?: WriteOptions): { [key: string]: any };
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    writeGeometryObject(geometry: Geometry, opt_options?: WriteOptions): { [key: string]: any };
}
