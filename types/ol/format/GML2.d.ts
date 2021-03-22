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
import GMLBase, { Options } from './GMLBase';

export default class GML2 extends GMLBase {
    constructor(opt_options?: Options);
    innerBoundaryIsParser(node: Element, objectStack: any[]): void;
    outerBoundaryIsParser(node: Element, objectStack: any[]): void;
    readBox(node: Element, objectStack: any[]): Extent | undefined;
    readFlatCoordinates(node: Node, objectStack: any[]): number[] | undefined;
    writeCurveOrLineString(node: Element, geometry: LineString, objectStack: any[]): void;
    writeEnvelope(node: Element, extent: Extent, objectStack: any[]): void;
    writeFeatureElement(node: Element, feature: Feature<Geometry>, objectStack: any[]): void;
    writeGeometryElement(node: Node, geometry: Geometry | Extent, objectStack: any[]): void;
    writeLinearRing(node: Element, geometry: LinearRing, objectStack: any[]): void;
    writeLineStringOrCurveMember(node: Element, line: LineString, objectStack: any[]): void;
    writeMultiCurveOrLineString(node: Element, geometry: MultiLineString, objectStack: any[]): void;
    writeMultiPoint(node: Element, geometry: MultiPoint, objectStack: any[]): void;
    writeMultiSurfaceOrPolygon(node: Element, geometry: MultiPolygon, objectStack: any[]): void;
    writePoint(node: Element, geometry: Point, objectStack: any[]): void;
    writePointMember(node: Node, point: Point, objectStack: any[]): void;
    writeRing(node: Node, ring: LinearRing, objectStack: any[]): void;
    writeSurfaceOrPolygon(node: Element, geometry: Polygon, objectStack: any[]): void;
    writeSurfaceOrPolygonMember(node: Node, polygon: Polygon, objectStack: any[]): void;
}
