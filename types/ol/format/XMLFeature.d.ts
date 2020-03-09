import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import FeatureFormat, { ReadOptions, WriteOptions } from './Feature';
import FormatType from './FormatType';

export default abstract class XMLFeature extends FeatureFormat {
    constructor();
    protected readFeaturesFromDocument(doc: Document, opt_options?: ReadOptions): Feature<Geometry>[];
    protected abstract readFeaturesFromNode(node: Node, opt_options?: ReadOptions): Feature<Geometry>[];
    protected readGeometryFromDocument(doc: Document, opt_options?: ReadOptions): Geometry;
    protected readGeometryFromNode(node: Node, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromDocument(doc: Document): Projection;
    protected readProjectionFromNode(node: Node): Projection;
    protected writeFeatureNode(feature: Feature<Geometry>, opt_options?: WriteOptions): Node;
    getType(): FormatType;
    readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): Feature<Geometry>;
    readFeatureFromDocument(doc: Document, opt_options?: ReadOptions): Feature<Geometry>;
    readFeatureFromNode(node: Node, opt_options?: ReadOptions): Feature<Geometry>;
    readFeatures(source: Document | Node | object | string, opt_options?: ReadOptions): Feature<Geometry>[];
    readGeometry(source: Document | Node | object | string, opt_options?: ReadOptions): Geometry;
    readProjection(source: Document | Node | object | string): Projection;
    writeFeature(feature: Feature<Geometry>, opt_options?: WriteOptions): string;
    writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    writeFeaturesNode(features: Feature<Geometry>[], opt_options?: WriteOptions): Node;
    writeGeometry(geometry: Geometry, opt_options?: WriteOptions): string;
    writeGeometryNode(geometry: Geometry, opt_options?: WriteOptions): Node;
}
