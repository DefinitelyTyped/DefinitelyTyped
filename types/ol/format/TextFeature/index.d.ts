declare module 'ol/format/TextFeature' {

  import Feature, { FeatureLike } from 'ol/Feature';
  import FeatureFormat, { ReadOptions, WriteOptions } from 'ol/format/Feature';
  import Geometry from 'ol/geom/Geometry';
  import Projection from 'ol/proj/Projection';

  export default class TextFeature extends FeatureFormat {
    constructor();
    protected readFeatureFromText(text: string, opt_options?: ReadOptions): Feature;
    protected readFeaturesFromText(text: string, opt_options?: ReadOptions): Feature[];
    protected readGeometryFromText(text: string, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromText(text: string): Projection;
    protected writeFeaturesText(features: Feature[], opt_options?: WriteOptions): string;
    protected writeFeatureText(feature: Feature, opt_options?: WriteOptions): string;
    protected writeGeometryText(geometry: Geometry, opt_options?: WriteOptions): string;
    readFeature(source: Document | Node | any | string, opt_options?: ReadOptions): Feature;
    readFeature(source: Document | Node | any | string, opt_options?: ReadOptions): FeatureLike;
    readFeatures(source: Document | Node | any | string, opt_options?: ReadOptions): Feature[];
    readFeatures(source: Document | Node | ArrayBuffer | any | string, opt_options?: ReadOptions): FeatureLike[];
    readGeometry(source: Document | Node | any | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: Document | Node | any | string): Projection;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
  }

}
