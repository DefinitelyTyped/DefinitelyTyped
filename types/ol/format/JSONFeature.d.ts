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
    /**
     * Read a feature.  Only works for a single feature. Use readFeatures to
     * read a feature collection.
     */
    readFeature(
        source: ArrayBuffer | Document | Element | object | string,
        opt_options?: ReadOptions,
    ): Feature<Geometry>;
    /**
     * Read all features.  Works with both a single feature and a feature
     * collection.
     */
    readFeatures(
        source: ArrayBuffer | Document | Element | object | string,
        opt_options?: ReadOptions,
    ): Feature<Geometry>[];
    /**
     * Read a geometry.
     */
    readGeometry(source: ArrayBuffer | Document | Element | object | string, opt_options?: ReadOptions): Geometry;
    /**
     * Read the projection.
     */
    readProjection(source: ArrayBuffer | Document | Element | object | string): Projection;
    /**
     * Encode a feature as string.
     */
    writeFeature(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    abstract writeFeatureObject(feature: Feature<Geometry>, opt_options?: WriteOptions): any;
    /**
     * Encode an array of features as string.
     */
    writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    abstract writeFeaturesObject(features: Feature<Geometry>[], opt_options?: WriteOptions): any;
    /**
     * Encode a geometry as string.
     */
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    abstract writeGeometryObject(geometry: Geometry, opt_options?: WriteOptions): any;
}
