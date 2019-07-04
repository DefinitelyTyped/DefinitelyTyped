import { Extent } from 'ol/extent';
import Feature from 'ol/Feature';
import { WriteOptions } from 'ol/format/Feature';
import GMLBase, { Options } from 'ol/format/GMLBase';
import Geometry from 'ol/geom/Geometry';
import { Parser } from 'ol/xml';
export default class GML3 extends GMLBase {
    constructor(opt_options?: Options);
    protected FLAT_LINEAR_RINGS_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected GEOMETRY_FLAT_COORDINATES_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected GEOMETRY_PARSERS: { [key: string]: { [key: string]: Parser } };
    writeEnvelope(node: Element, extent: Extent, objectStack: any[]): void;
    writeFeatureElement(node: Element, feature: Feature, objectStack: any[]): void;
    writeFeatures(features: Feature[], opt_options?: WriteOptions): string;
    writeGeometryElement(node: Node, geometry: Geometry | Extent, objectStack: any[]): void;
}
