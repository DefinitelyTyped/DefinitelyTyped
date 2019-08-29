import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import LinearRing from '../geom/LinearRing';
import LineString from '../geom/LineString';
import MultiLineString from '../geom/MultiLineString';
import MultiPoint from '../geom/MultiPoint';
import MultiPolygon from '../geom/MultiPolygon';
import Point from '../geom/Point';
import Polygon from '../geom/Polygon';
import { Parser } from '../xml';
import XMLFeature from './XMLFeature';

export interface Options {
    featureNS?: { [key: string]: string } | string;
    featureType?: string[] | string;
    srsName: string;
    surface?: boolean;
    curve?: boolean;
    multiCurve?: boolean;
    multiSurface?: boolean;
    schemaLocation?: string;
    hasZ?: boolean;
}
export const GMLNS: string;
export default class GMLBase extends XMLFeature {
    constructor(opt_options?: Options);
    protected featureNS: { [key: string]: string } | string;
    protected featureType: string[] | string;
    protected schemaLocation: string;
    protected srsName: string;
    protected FLAT_LINEAR_RINGS_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected GEOMETRY_FLAT_COORDINATES_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected GEOMETRY_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected RING_PARSERS: { [key: string]: { [key: string]: Parser } };
    readFeatureElement(node: Element, objectStack: any[]): Feature;
    readFeatureElementInternal(node: Element, objectStack: any[], asFeature: boolean): Feature | object;
    readFeaturesInternal(node: Element, objectStack: any[]): Feature[] | undefined;
    readGeometryElement(node: Element, objectStack: any[]): Geometry | undefined;
    readLinearRing(node: Element, objectStack: any[]): LinearRing | undefined;
    readLineString(node: Element, objectStack: any[]): LineString | undefined;
    readMultiLineString(node: Element, objectStack: any[]): MultiLineString | undefined;
    readMultiPoint(node: Element, objectStack: any[]): MultiPoint | undefined;
    readMultiPolygon(node: Element, objectStack: any[]): MultiPolygon | undefined;
    readPoint(node: Element, objectStack: any[]): Point | undefined;
    readPolygon(node: Element, objectStack: any[]): Polygon | undefined;
}
