declare module 'ol/format/JSONFeature' {

  import Feature, { FeatureLike } from 'ol/Feature';
  import FeatureFormat, { ReadOptions, WriteOptions } from 'ol/format/Feature';
  import Geometry from 'ol/geom/Geometry';
  import Projection from 'ol/proj/Projection';

  export default class JSONFeature extends FeatureFormat {
    constructor();
    protected readFeatureFromObject(object: any, opt_options?: ReadOptions): Feature;
    protected readFeaturesFromObject(object: any, opt_options?: ReadOptions): Feature[];
    protected readGeometryFromObject(object: any, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromObject(object: any): Projection;
    readFeature(source: ArrayBuffer | Document | Node | any | string, opt_options?: ReadOptions): Feature;
    readFeature(source: Document | Node | any | string, opt_options?: ReadOptions): FeatureLike;
    readFeatures(source: ArrayBuffer | Document | Node | any | string, opt_options?: ReadOptions): Feature[];
    readFeatures(source: Document | Node | ArrayBuffer | any | string, opt_options?: ReadOptions): FeatureLike[];
    readGeometry(source: ArrayBuffer | Document | Node | any | string, opt_options?: ReadOptions): Geometry;
    readGeometry(source: Document | Node | any | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: ArrayBuffer | Document | Node | any | string): Projection;
    readProjection(source: Document | Node | any | string): Projection;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeatureObject(feature: Feature, opt_options?: WriteOptions): any;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeFeaturesObject(features: Feature[], opt_options?: WriteOptions): any;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    writeGeometryObject(geometry: Geometry, opt_options?: WriteOptions): any;
  }

}
