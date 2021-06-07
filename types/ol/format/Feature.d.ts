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
    /**
     * Sets the dataProjection on the options, if no dataProjection
     * is set.
     */
    protected adaptOptions(options: WriteOptions | ReadOptions | undefined): WriteOptions | ReadOptions | undefined;
    /**
     * Adds the data projection to the read options.
     */
    protected getReadOptions(
        source: Document | Element | object | string,
        opt_options?: ReadOptions,
    ): ReadOptions | undefined;
    abstract getType(): FormatType;
    /**
     * Read a single feature from a source.
     */
    abstract readFeature(source: Document | Element | object | string, opt_options?: ReadOptions): FeatureLike;
    /**
     * Read all features from a source.
     */
    abstract readFeatures(
        source: Document | Element | ArrayBuffer | object | string,
        opt_options?: ReadOptions,
    ): FeatureLike[];
    /**
     * Read a single geometry from a source.
     */
    abstract readGeometry(source: Document | Element | object | string, opt_options?: ReadOptions): Geometry;
    /**
     * Read the projection from a source.
     */
    abstract readProjection(source: Document | Element | object | string): Projection;
    /**
     * Encode a feature in this format.
     */
    abstract writeFeature(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    /**
     * Encode an array of features in this format.
     */
    abstract writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    /**
     * Write a single geometry in this format.
     */
    abstract writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
}
export function transformExtentWithOptions(extent: Extent, opt_options?: ReadOptions): Extent;
export function transformGeometryWithOptions(
    geometry: Geometry,
    write: boolean,
    opt_options?: WriteOptions | ReadOptions,
): Geometry;
