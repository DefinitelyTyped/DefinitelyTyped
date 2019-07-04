import { Color } from 'ol/color';
import Feature from 'ol/Feature';
import XMLFeature from 'ol/format/XMLFeature';
import Geometry from 'ol/geom/Geometry';
import LinearRing from 'ol/geom/LinearRing';
import LineString from 'ol/geom/LineString';
import MultiLineString from 'ol/geom/MultiLineString';
import MultiPoint from 'ol/geom/MultiPoint';
import MultiPolygon from 'ol/geom/MultiPolygon';
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import Fill from 'ol/style/Fill';
import Icon from 'ol/style/Icon';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import IconOrigin from 'ol/style/IconOrigin';
import ImageStyle from 'ol/style/Image';
import Stroke from 'ol/style/Stroke';
import Style, { StyleFunction } from 'ol/style/Style';
import Text from 'ol/style/Text';
export function getDefaultFillStyle(): Fill;
export function getDefaultImageStyle(): ImageStyle;
export function getDefaultStrokeStyle(): Stroke;
export function getDefaultStyle(): Style;
export function getDefaultStyleArray(): Style[];
export function getDefaultTextStyle(): Text;
export function readFlatCoordinates(node: Node): number[];
export interface GxTrackObject {
    flatCoordinates: number[];
    whens: number[];
}
export default class KML extends XMLFeature {
    constructor(opt_options?: Options);
    readName(source: Document | Element | string): string;
    readNameFromDocument(doc: Document): string;
    readNameFromNode(node: Element): string;
    readNetworkLinks(source: Document | Element | string): { [key: string]: any }[];
    readNetworkLinksFromDocument(doc: Document): { [key: string]: any }[];
    readNetworkLinksFromNode(node: Element): { [key: string]: any }[];
    readRegion(source: Document | Element | string): { [key: string]: any }[];
    readRegionFromDocument(doc: Document): { [key: string]: any }[];
    readRegionFromNode(node: Element): { [key: string]: any }[];
}
export interface Options {
    extractStyles?: boolean;
    showPointNames?: boolean;
    defaultStyle?: Style[];
    writeStyles?: boolean;
}
export interface Vec2 {
    x: number;
    xunits: IconAnchorUnits;
    y: number;
    yunits: IconAnchorUnits;
    origin: IconOrigin;
}
