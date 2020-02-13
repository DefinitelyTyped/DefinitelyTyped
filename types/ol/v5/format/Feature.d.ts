import { Extent } from '../extent';
import Feature, { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import FormatType from './FormatType';

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
export default class FeatureFormat {
    constructor();
    protected dataProjection: Projection;
    protected defaultFeatureProjection: Projection;
    protected adaptOptions(options: WriteOptions | ReadOptions | undefined): WriteOptions | ReadOptions | undefined;
    protected getReadOptions(source: Document | Node | object | string, opt_options?: ReadOptions): ReadOptions | undefined;
    getLastExtent(): Extent;
    getType(): FormatType;
    readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): FeatureLike;
    readFeatures(source: Document | Node | ArrayBuffer | object | string, opt_options?: ReadOptions): FeatureLike[];
    readGeometry(source: Document | Node | object | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: Document | Node | object | string): Projection;
    writeFeature(feature: Feature, opt_options?: WriteOptions): string;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
}
export function transformWithOptions(geometry: Geometry | Extent, write: boolean, opt_options?: WriteOptions | ReadOptions): Geometry | Extent;
