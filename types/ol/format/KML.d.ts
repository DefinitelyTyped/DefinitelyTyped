import { Color } from '../color';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import LinearRing from '../geom/LinearRing';
import LineString from '../geom/LineString';
import MultiLineString from '../geom/MultiLineString';
import MultiPoint from '../geom/MultiPoint';
import MultiPolygon from '../geom/MultiPolygon';
import Point from '../geom/Point';
import Polygon from '../geom/Polygon';
import SimpleGeometry from '../geom/SimpleGeometry';
import Fill from '../style/Fill';
import Icon from '../style/Icon';
import IconAnchorUnits from '../style/IconAnchorUnits';
import IconOrigin from '../style/IconOrigin';
import ImageStyle from '../style/Image';
import Stroke from '../style/Stroke';
import Style, { StyleFunction } from '../style/Style';
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
    readName(source: Document | Element | string): string;
    readNameFromDocument(doc: Document): string;
    readNameFromNode(node: Element): string;
    readNetworkLinks(source: Document | Element | string): object[];
    readNetworkLinksFromDocument(doc: Document): object[];
    readNetworkLinksFromNode(node: Element): object[];
    readRegion(source: Document | Element | string): object[];
    readRegionFromDocument(doc: Document): object[];
    readRegionFromNode(node: Element): object[];
    writeFeaturesNode(features: Feature<Geometry>[], opt_options?: WriteOptions): Node;
}
export function getDefaultFillStyle(): Fill;
export function getDefaultImageStyle(): ImageStyle;
export function getDefaultStrokeStyle(): Stroke;
export function getDefaultStyle(): Style;
export function getDefaultStyleArray(): Style[];
export function getDefaultTextStyle(): Text;
export function readFlatCoordinates(node: Node): number[];
