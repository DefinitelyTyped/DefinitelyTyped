import { Extent } from '../extent';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import { ReadOptions } from './Feature';
import Filter from './filter/Filter';
import GMLBase, { Options as Options_1 } from './GMLBase';
import XMLFeature from './XMLFeature';

/**
 * Number of features; bounds/extent.
 */
export interface FeatureCollectionMetadata {
    numberOfFeatures: number;
    bounds: Extent;
}
export interface FeatureType {
    name: string;
    bbox: Extent;
    geometryName: string;
}
export interface Options {
    featureNS?: { [key: string]: string } | string | undefined;
    featureType?: string[] | string | undefined;
    gmlFormat?: GMLBase | undefined;
    schemaLocation?: string | undefined;
    version?: string | undefined;
}
/**
 * Total deleted; total inserted; total updated; array of insert ids.
 */
export interface TransactionResponse {
    totalDeleted: number;
    totalInserted: number;
    totalUpdated: number;
    insertIds: string[];
}
export interface WriteGetFeatureOptions {
    featureNS: string;
    featurePrefix: string;
    featureTypes: (string | FeatureType)[];
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
    nativeElements?: object[] | undefined;
    gmlOptions?: Options_1 | undefined;
    version?: string | undefined;
}
export default class WFS extends XMLFeature {
    constructor(opt_options?: Options);
    protected readFeaturesFromNode(node: Element, opt_options?: ReadOptions): Feature<Geometry>[];
    /**
     * Create a bbox filter and combine it with another optional filter.
     */
    combineBboxAndFilter(geometryName: string, extent: Extent, opt_srsName?: string, opt_filter?: Filter): Filter;
    getFeatureType(): string[] | string | undefined;
    /**
     * Read feature collection metadata of the source.
     */
    readFeatureCollectionMetadata(source: Document | Element | object | string): FeatureCollectionMetadata | undefined;
    readFeatureCollectionMetadataFromDocument(doc: Document): FeatureCollectionMetadata | undefined;
    readFeatureCollectionMetadataFromNode(node: Element): FeatureCollectionMetadata | undefined;
    readProjectionFromDocument(doc: Document): Projection;
    readProjectionFromNode(node: Element): Projection;
    /**
     * Read transaction response of the source.
     */
    readTransactionResponse(source: Document | Element | object | string): TransactionResponse | undefined;
    readTransactionResponseFromDocument(doc: Document): TransactionResponse | undefined;
    readTransactionResponseFromNode(node: Element): TransactionResponse | undefined;
    setFeatureType(featureType: string[] | string | undefined): void;
    /**
     * Encode format as WFS GetFeature and return the Node.
     */
    writeGetFeature(options: WriteGetFeatureOptions): Node;
    /**
     * Encode format as WFS Transaction and return the Node.
     */
    writeTransaction(
        inserts: Feature<Geometry>[],
        updates: Feature<Geometry>[],
        deletes: Feature<Geometry>[],
        options: WriteTransactionOptions,
    ): Node;
}
/**
 * Encode filter as WFS Filter and return the Node.
 */
export function writeFilter(filter: Filter, version: string): Node;
