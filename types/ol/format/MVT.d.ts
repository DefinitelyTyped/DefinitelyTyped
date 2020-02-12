import Feature, { FeatureClass, FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import GeometryType from '../geom/GeometryType';
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
    readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): FeatureLike;
    readFeatures(source: ArrayBuffer, opt_options?: ReadOptions): FeatureLike[];
    readGeometry(source: Document | Node | object | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: Document | Node | object | string): Projection;
    setLayers(layers: string[]): void;
    writeFeature(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
}
