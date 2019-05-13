declare module 'ol/format/Feature' {

  import { Extent } from 'ol/extent';
  import Feature, { FeatureLike } from 'ol/Feature';
  import FormatType from 'ol/format/FormatType';
  import Geometry from 'ol/geom/Geometry';
  import { ProjectionLike } from 'ol/proj';
  import Projection from 'ol/proj/Projection';

  export function transformWithOptions(geometry: Geometry | Extent, write: boolean, opt_options?: WriteOptions | ReadOptions): Geometry | Extent;

  export default class FeatureFormat {
    constructor();
    protected dataProjection: Projection;
    protected defaultFeatureProjection: Projection;
    protected adaptOptions(options: WriteOptions | ReadOptions): WriteOptions | ReadOptions;
    protected getReadOptions(source: Document | Node | any | string, opt_options?: ReadOptions): ReadOptions;
    getLastExtent(): Extent;
    getType(): FormatType;
    readFeature(source: Document | Node | any | string, opt_options?: ReadOptions): FeatureLike;
    readFeatures(source: Document | Node | ArrayBuffer | any | string, opt_options?: ReadOptions): FeatureLike[];
    readGeometry(source: Document | Node | any | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: Document | Node | any | string): Projection;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
  }

  export interface ReadOptions {
    dataProjection?: ProjectionLike;
    extent?: Extent;
    featureProjection?: ProjectionLike;
  }

  export interface WriteOptions {
    dataProjection?: ProjectionLike;
    featureProjection?: ProjectionLike;
    rightHanded?: boolean;
    decimals?: number;
  }

}
