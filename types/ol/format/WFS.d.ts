import { Extent } from 'ol/extent';
import Feature from 'ol/Feature';
import Bbox from 'ol/format/filter/Bbox';
import ComparisonBinary from 'ol/format/filter/ComparisonBinary';
import Contains from 'ol/format/filter/Contains';
import During from 'ol/format/filter/During';
import Filter from 'ol/format/filter/Filter';
import Intersects from 'ol/format/filter/Intersects';
import IsBetween from 'ol/format/filter/IsBetween';
import IsLike from 'ol/format/filter/IsLike';
import IsNull from 'ol/format/filter/IsNull';
import LogicalNary from 'ol/format/filter/LogicalNary';
import Not from 'ol/format/filter/Not';
import Within from 'ol/format/filter/Within';
import GMLBase, { Options as Options_1 } from 'ol/format/GMLBase';
import XMLFeature from 'ol/format/XMLFeature';
export function writeFilter(filter: Filter): Node;
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
export default class WFS extends XMLFeature {
    constructor(opt_options?: Options);
    getFeatureType(): string[] | string;
    readFeatureCollectionMetadata(source: Document | Element | { [key: string]: any } | string): FeatureCollectionMetadata;
    readFeatureCollectionMetadataFromDocument(doc: Document): FeatureCollectionMetadata;
    readFeatureCollectionMetadataFromNode(node: Element): FeatureCollectionMetadata;
    readTransactionResponse(source: Document | Element | { [key: string]: any } | string): TransactionResponse;
    readTransactionResponseFromDocument(doc: Document): TransactionResponse;
    readTransactionResponseFromNode(node: Element): TransactionResponse;
    setFeatureType(featureType: string[] | string): void;
    writeGetFeature(options: WriteGetFeatureOptions): Node;
    writeTransaction(inserts: Feature[], updates: Feature[], deletes: Feature[], options: WriteTransactionOptions): Node;
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
    nativeElements: { [key: string]: any }[];
    gmlOptions?: Options_1;
    version?: string;
}
