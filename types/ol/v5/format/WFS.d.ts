import { Extent } from '../extent';
import Feature from '../Feature';
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
    featureNS?: { [key: string]: string } | string | undefined;
    featureType?: string[] | string | undefined;
    gmlFormat?: GMLBase | undefined;
    schemaLocation?: string | undefined;
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
    srsName?: string | undefined;
    handle?: string | undefined;
    outputFormat?: string | undefined;
    maxFeatures?: number | undefined;
    geometryName?: string | undefined;
    propertyNames?: string[] | undefined;
    viewParams?: string | undefined;
    startIndex?: number | undefined;
    count?: number | undefined;
    bbox?: Extent | undefined;
    filter?: Filter | undefined;
    resultType?: string | undefined;
}
export interface WriteTransactionOptions {
    featureNS: string;
    featurePrefix: string;
    featureType: string;
    srsName?: string | undefined;
    handle?: string | undefined;
    hasZ?: boolean | undefined;
    nativeElements: object[];
    gmlOptions?: Options_1 | undefined;
    version?: string | undefined;
}
export default class WFS extends XMLFeature {
    constructor(opt_options?: Options);
    getFeatureType(): string[] | string | undefined;
    readFeatureCollectionMetadata(source: Document | Element | object | string): FeatureCollectionMetadata | undefined;
    readFeatureCollectionMetadataFromDocument(doc: Document): FeatureCollectionMetadata | undefined;
    readFeatureCollectionMetadataFromNode(node: Element): FeatureCollectionMetadata | undefined;
    readTransactionResponse(source: Document | Element | object | string): TransactionResponse | undefined;
    readTransactionResponseFromDocument(doc: Document): TransactionResponse | undefined;
    readTransactionResponseFromNode(node: Element): TransactionResponse | undefined;
    setFeatureType(featureType: string[] | string | undefined): void;
    writeGetFeature(options: WriteGetFeatureOptions): Node;
    writeTransaction(inserts: Feature[], updates: Feature[], deletes: Feature[], options: WriteTransactionOptions): Node;
}
export function writeFilter(filter: Filter): Node;
