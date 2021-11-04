import { Extent } from '../extent';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { Parser } from '../xml';
import GMLBase, { Options } from './GMLBase';

export default class GML2 extends GMLBase {
    constructor(opt_options?: Options);
    protected FLAT_LINEAR_RINGS_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected GEOMETRY_FLAT_COORDINATES_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected GEOMETRY_PARSERS: { [key: string]: { [key: string]: Parser } };
    writeFeatureElement(node: Element, feature: Feature, objectStack: any[]): void;
    writeGeometryElement(node: Node, geometry: Geometry | Extent, objectStack: any[]): void;
}
