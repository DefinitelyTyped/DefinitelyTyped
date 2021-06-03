import { Extent } from '../extent';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import LinearRing from '../geom/LinearRing';
import LineString from '../geom/LineString';
import MultiLineString from '../geom/MultiLineString';
import MultiPoint from '../geom/MultiPoint';
import MultiPolygon from '../geom/MultiPolygon';
import Point from '../geom/Point';
import Polygon from '../geom/Polygon';
import Projection from '../proj/Projection';
import { ReadOptions } from './Feature';
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
export default abstract class GMLBase extends XMLFeature {
    constructor(opt_options?: Options);
    protected featureNS: { [key: string]: string } | string;
    protected featureType: string[] | string;
    protected schemaLocation: string;
    protected srsName: string;
    protected readGeometryFromNode(node: Element, opt_options?: ReadOptions): Geometry | Extent;
    lineStringMemberParser(node: Element, objectStack: any[]): void;
    pointMemberParser(node: Element, objectStack: any[]): void;
    polygonMemberParser(node: Element, objectStack: any[]): void;
    readFeatureElement(node: Element, objectStack: any[]): Feature<Geometry>;
    readFeatureElementInternal(node: Element, objectStack: any[], asFeature: boolean): Feature<Geometry> | object;
    readFeaturesFromNode(node: Element, opt_options?: ReadOptions): Feature<Geometry>[];
    readFeaturesInternal(node: Element, objectStack: any[]): Feature<Geometry>[] | undefined;
    readFlatCoordinatesFromNode(node: Element, objectStack: any[]): number[];
    readFlatLinearRing(node: Element, objectStack: any[]): number[] | undefined;
    readGeometryElement(node: Element, objectStack: any[]): Geometry | Extent | undefined;
    readLinearRing(node: Element, objectStack: any[]): LinearRing | undefined;
    readLineString(node: Element, objectStack: any[]): LineString | undefined;
    readMultiLineString(node: Element, objectStack: any[]): MultiLineString | undefined;
    readMultiPoint(node: Element, objectStack: any[]): MultiPoint | undefined;
    readMultiPolygon(node: Element, objectStack: any[]): MultiPolygon | undefined;
    readPoint(node: Element, objectStack: any[]): Point | undefined;
    readPolygon(node: Element, objectStack: any[]): Polygon | undefined;
    readProjectionFromNode(node: Element): Projection;
    protected readGeometryFromNode(node: Element, opt_options?: ReadOptions): Geometry;
}
