import Feature, { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import FeatureFormat, { ReadOptions, WriteOptions } from './Feature';

export default class XMLFeature extends FeatureFormat {
    constructor();
    protected readFeaturesFromDocument(doc: Document, opt_options?: ReadOptions): Feature[];
    protected readFeaturesFromNode(node: Node, opt_options?: ReadOptions): Feature[];
    protected readGeometryFromDocument(doc: Document, opt_options?: ReadOptions): Geometry;
    protected readGeometryFromNode(node: Node, opt_options?: ReadOptions): Geometry;
    protected readProjectionFromDocument(doc: Document): Projection;
    protected readProjectionFromNode(node: Node): Projection;
    protected writeFeatureNode(feature: Feature, opt_options?: WriteOptions): Node;
    readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): Feature;
    readFeature(source: Document | Node | object | string, opt_options?: ReadOptions): FeatureLike;
    readFeatureFromDocument(doc: Document, opt_options?: ReadOptions): Feature;
    readFeatureFromNode(node: Node, opt_options?: ReadOptions): Feature;
    readFeatures(source: Document | Node | object | string, opt_options?: ReadOptions): Feature[];
    readFeatures(source: Document | Node | ArrayBuffer | object | string, opt_options?: ReadOptions): FeatureLike[];
    readProjection(source: Document | Node | object | string): Projection;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeFeaturesNode(features: Feature[], opt_options?: WriteOptions): Node;
    writeGeometryNode(geometry: Geometry, opt_options?: WriteOptions): Node;
}
