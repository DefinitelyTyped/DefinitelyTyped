import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import Fill from '../style/Fill';

import IconAnchorUnits from '../style/IconAnchorUnits';
import IconOrigin from '../style/IconOrigin';
import ImageStyle from '../style/Image';
import Stroke from '../style/Stroke';
import Style from '../style/Style';
import Text from '../style/Text';
import { ReadOptions, WriteOptions } from './Feature';
import XMLFeature from './XMLFeature';

export interface GxTrackObject {
    flatCoordinates: number[];
    whens: number[];
}
export interface Options {
    extractStyles?: boolean;
    showPointNames?: boolean;
    defaultStyle?: Style[];
    writeStyles?: boolean;
    crossOrigin?: string;
}
export interface Vec2 {
    x: number;
    xunits: IconAnchorUnits;
    y: number;
    yunits: IconAnchorUnits;
    origin: IconOrigin;
}
export default class KML extends XMLFeature {
    constructor(opt_options?: Options);
    protected readFeaturesFromNode(node: Element, opt_options?: ReadOptions): Feature<Geometry>[];
    readFeatureFromNode(node: Element, opt_options?: ReadOptions): Feature<Geometry>;
    /**
     * Read the name of the KML.
     */
    readName(source: Document | Element | string): string | undefined;
    readNameFromDocument(doc: Document): string | undefined;
    readNameFromNode(node: Element): string | undefined;
    /**
     * Read the network links of the KML.
     */
    readNetworkLinks(source: Document | Element | string): object[];
    readNetworkLinksFromDocument(doc: Document): object[];
    readNetworkLinksFromNode(node: Element): object[];
    /**
     * Read the regions of the KML.
     */
    readRegion(source: Document | Element | string): object[];
    readRegionFromDocument(doc: Document): object[];
    readRegionFromNode(node: Element): object[];
    /**
     * Encode an array of features in the KML format as an XML node. GeometryCollections,
     * MultiPoints, MultiLineStrings, and MultiPolygons are output as MultiGeometries.
     */
    writeFeaturesNode(features: Feature<Geometry>[], opt_options?: WriteOptions): Node;
}
/**
 * Get the default fill style (or null if not yet set).
 */
export function getDefaultFillStyle(): Fill;
/**
 * Get the default image style (or null if not yet set).
 */
export function getDefaultImageStyle(): ImageStyle;
/**
 * Get the default stroke style (or null if not yet set).
 */
export function getDefaultStrokeStyle(): Stroke;
/**
 * Get the default style (or null if not yet set).
 */
export function getDefaultStyle(): Style;
/**
 * Get the default style array (or null if not yet set).
 */
export function getDefaultStyleArray(): Style[];
/**
 * Get the default text style (or null if not yet set).
 */
export function getDefaultTextStyle(): Text;
export function readFlatCoordinates(node: Node): number[] | undefined;
