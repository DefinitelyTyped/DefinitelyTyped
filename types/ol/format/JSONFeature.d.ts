import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import FeatureFormat, { ReadOptions, WriteOptions } from './Feature';
import FormatType from './FormatType';

export default abstract class JSONFeature extends FeatureFormat {
    constructor();
    protected abstract readFeatureFromObject(object: any, opt_options?: ReadOptions): Feature<Geometry>;
    protected abstract readFeaturesFromObject(object: any, opt_options?: ReadOptions): Feature<Geometry>[];
    protected abstract readGeometryFromObject(object: any, opt_options?: ReadOptions): Geometry;
    protected abstract readProjectionFromObject(object: any): Projection;
    getType(): FormatType;
    readFeature(source: ArrayBuffer | Document | Node | object | string, opt_options?: ReadOptions): Feature<Geometry>;
    readFeatures(
        source: ArrayBuffer | Document | Node | object | string,
        opt_options?: ReadOptions,
    ): Feature<Geometry>[];
    readGeometry(source: ArrayBuffer | Document | Node | object | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: ArrayBuffer | Document | Node | object | string): Projection;
    writeFeature(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    abstract writeFeatureObject(feature: Feature<Geometry>, opt_options?: WriteOptions): any;
    writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    abstract writeFeaturesObject(features: Feature<Geometry>[], opt_options?: WriteOptions): any;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    abstract writeGeometryObject(geometry: Geometry, opt_options?: WriteOptions): any;
}
