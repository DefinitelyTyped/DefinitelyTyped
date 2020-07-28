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
export default abstract class FeatureFormat {
    constructor();
    protected dataProjection: Projection;
    protected defaultFeatureProjection: Projection;
    protected adaptOptions(options: WriteOptions | ReadOptions | undefined): WriteOptions | ReadOptions;
    protected getReadOptions(source: Document | Node | object | string, opt_options?: ReadOptions): ReadOptions;
    abstract getType(): FormatType;
    abstract readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): FeatureLike;
    abstract readFeatures(
        source: Document | Node | ArrayBuffer | object | string,
        opt_options?: ReadOptions,
    ): FeatureLike[];
    abstract readGeometry(source: Document | Node | object | string, opt_options?: ReadOptions): Geometry;
    abstract readProjection(source: Document | Node | object | string): Projection;
    abstract writeFeature(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    abstract writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    abstract writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
}
export function transformExtentWithOptions(extent: Extent, opt_options?: ReadOptions): Extent;
export function transformGeometryWithOptions(
    geometry: Geometry,
    write: boolean,
    opt_options?: WriteOptions | ReadOptions,
): Geometry;
