import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import FeatureFormat, { ReadOptions, WriteOptions } from './Feature';
import FormatType from './FormatType';

export default abstract class TextFeature extends FeatureFormat {
    constructor();
    protected abstract readFeatureFromText(text: string, opt_options?: ReadOptions): Feature<Geometry>;
    protected abstract readFeaturesFromText(text: string, opt_options?: ReadOptions): Feature<Geometry>[];
    protected abstract readGeometryFromText(text: string, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromText(text: string): Projection;
    protected abstract writeFeaturesText(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    protected abstract writeFeatureText(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    protected abstract writeGeometryText(geometry: Geometry, opt_options?: WriteOptions): string;
    getType(): FormatType;
    readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): Feature<Geometry>;
    readFeatures(source: Document | Node | object | string, opt_options?: ReadOptions): Feature<Geometry>[];
    readGeometry(source: Document | Node | object | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: Document | Node | object | string): Projection;
    writeFeature(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
}
