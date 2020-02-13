import { Extent } from '../extent';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { ReadOptions } from './Feature';
import Bbox from './filter/Bbox';
import ComparisonBinary from './filter/ComparisonBinary';
import Contains from './filter/Contains';
import During from './filter/During';
import Filter from './filter/Filter';
import Intersects from './filter/Intersects';
import IsBetween from './filter/IsBetween';
import IsLike from './filter/IsLike';
import IsNull from './filter/IsNull';
import LogicalNary from './filter/LogicalNary';
import Not from './filter/Not';
import Within from './filter/Within';
import GMLBase, { Options as Options_1 } from './GMLBase';
import XMLFeature from './XMLFeature';

export interface FeatureCollectionMetadata {
    numberOfFeatures: number;
    bounds: Extent;
}
export interface Options {
    featureNS?: { [key: string]: string } | string;
    featureType?: string[] | string;
    gmlFormat?: GMLBase;
    schemaLocation?: string;
}
export interface TransactionResponse {
    totalDeleted: number;
    totalInserted: number;
    totalUpdated: number;
    insertIds: string[];
}
export interface WriteGetFeatureOptions {
    featureNS: string;
    featurePrefix: string;
    featureTypes: string[];
    srsName?: string;
    handle?: string;
    outputFormat?: string;
    maxFeatures?: number;
    geometryName?: string;
    propertyNames?: string[];
    viewParams?: string;
    startIndex?: number;
    count?: number;
    bbox?: Extent;
    filter?: Filter;
    resultType?: string;
}
export interface WriteTransactionOptions {
    featureNS: string;
    featurePrefix: string;
    featureType: string;
    srsName?: string;
    handle?: string;
    hasZ?: boolean;
    nativeElements: object[];
    gmlOptions?: Options_1;
    version?: string;
}
export default class WFS extends XMLFeature {
    constructor(opt_options?: Options);
    protected readFeaturesFromNode(node: Node, opt_options?: ReadOptions): Feature<Geometry>[];
    getFeatureType(): string[] | string;
    readFeatureCollectionMetadata(source: Document | Element | object | string): FeatureCollectionMetadata;
    readFeatureCollectionMetadataFromDocument(doc: Document): FeatureCollectionMetadata;
    readFeatureCollectionMetadataFromNode(node: Element): FeatureCollectionMetadata;
    readTransactionResponse(source: Document | Element | object | string): TransactionResponse;
    readTransactionResponseFromDocument(doc: Document): TransactionResponse;
    readTransactionResponseFromNode(node: Element): TransactionResponse;
    setFeatureType(featureType: string[] | string | undefined): void;
    writeGetFeature(options: WriteGetFeatureOptions): Node;
    writeTransaction(
        inserts: Feature<Geometry>[],
        updates: Feature<Geometry>[],
        deletes: Feature<Geometry>[],
        options: WriteTransactionOptions,
    ): Node;
}
export function writeFilter(filter: Filter): Node;
