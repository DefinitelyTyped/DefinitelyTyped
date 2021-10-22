import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import FeatureFormat, { ReadOptions, WriteOptions } from './Feature';
import FormatType from './FormatType';

export default abstract class XMLFeature extends FeatureFormat {
    constructor();
    protected readFeaturesFromDocument(doc: Document, opt_options?: ReadOptions): Feature<Geometry>[];
    protected abstract readFeaturesFromNode(node: Element, opt_options?: ReadOptions): Feature<Geometry>[];
    protected readGeometryFromDocument(doc: Document, opt_options?: ReadOptions): Geometry;
    protected readGeometryFromNode(node: Element, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromDocument(doc: Document): Projection;
    protected readProjectionFromNode(node: Element): Projection;
    protected writeFeatureNode(feature: Feature<Geometry>, opt_options?: WriteOptions): Node;
    getType(): FormatType;
    /**
     * Read a single feature.
     */
    readFeature(source: Document | Element | object | string, opt_options?: ReadOptions): Feature<Geometry>;
    readFeatureFromDocument(doc: Document, opt_options?: ReadOptions): Feature<Geometry>;
    readFeatureFromNode(node: Element, opt_options?: ReadOptions): Feature<Geometry>;
    /**
     * Read all features from a feature collection.
     */
    readFeatures(source: Document | Element | object | string, opt_options?: ReadOptions): Feature<Geometry>[];
    /**
     * Read a single geometry from a source.
     */
    readGeometry(source: Document | Element | object | string, opt_options?: ReadOptions): Geometry;
    /**
     * Read the projection from the source.
     */
    readProjection(source: Document | Element | object | string): Projection;
    /**
     * Encode a feature as string.
     */
    writeFeature(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    /**
     * Encode an array of features as string.
     */
    writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    writeFeaturesNode(features: Feature<Geometry>[], opt_options?: WriteOptions): Node;
    /**
     * Encode a geometry as string.
     */
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    writeGeometryNode(geometry: Geometry, opt_options?: WriteOptions): Node;
}
