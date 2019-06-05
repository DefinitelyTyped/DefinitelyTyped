import { Extent } from 'ol/extent';
import Feature, { FeatureLike } from 'ol/Feature';
import FormatType from 'ol/format/FormatType';
import Geometry from 'ol/geom/Geometry';
import { ProjectionLike } from 'ol/proj';
import Projection from 'ol/proj/Projection';
export function transformWithOptions(geometry: Geometry | Extent, write: boolean, opt_options?: WriteOptions | ReadOptions): Geometry | Extent;
export default class FeatureFormat {
    constructor();
    protected defaultFeatureProjection: Projection;
    protected dataProjection: Projection;
    protected adaptOptions(options: WriteOptions | ReadOptions): WriteOptions | ReadOptions;
    protected getReadOptions(source: Document | Node | { [key: string]: any } | string, opt_options?: ReadOptions): ReadOptions;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    getType(): FormatType;
    getLastExtent(): Extent;
    readFeatures(source: Document | Node | ArrayBuffer | { [key: string]: any } | string, opt_options?: ReadOptions): FeatureLike[];
    readGeometry(source: Document | Node | { [key: string]: any } | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: Document | Node | { [key: string]: any } | string): Projection;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    readFeature(source: Document | Node | { [key: string]: any } | string, opt_options?: ReadOptions): FeatureLike;
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
