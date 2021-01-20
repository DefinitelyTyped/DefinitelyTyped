import Feature, { FeatureClass, FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import FeatureFormat, { ReadOptions, WriteOptions } from './Feature';
import FormatType from './FormatType';

export interface Options {
    featureClass?: FeatureClass;
    geometryName?: string;
    layerName?: string;
    layers?: string[];
    idProperty?: string;
}
export default class MVT extends FeatureFormat {
    constructor(opt_options?: Options);
    getType(): FormatType;
    /**
     * Read a single feature from a source.
     */
    readFeature(source: Document | Element | object | string, opt_options?: ReadOptions): FeatureLike;
    /**
     * Read all features.
     */
    readFeatures(source: ArrayBuffer, opt_options?: ReadOptions): FeatureLike[];
    /**
     * Read a single geometry from a source.
     */
    readGeometry(source: Document | Element | object | string, opt_options?: ReadOptions): Geometry;
    /**
     * Read the projection from the source.
     */
    readProjection(source: Document | Element | object | string): Projection;
    /**
     * Sets the layers that features will be read from.
     */
    setLayers(layers: string[]): void;
    /**
     * Encode a feature in this format.
     */
    writeFeature(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    /**
     * Encode an array of features in this format.
     */
    writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    /**
     * Write a single geometry in this format.
     */
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
}
