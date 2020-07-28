import { Coordinate } from '../coordinate';
import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import GeometryLayout from '../geom/GeometryLayout';
import LineString from '../geom/LineString';
import { ReadOptions } from './Feature';
import XMLFeature from './XMLFeature';

export interface LayoutOptions {
    hasZ?: boolean;
    hasM?: boolean;
}
export interface Options {
    readExtensions?: (p0: Feature<Geometry>, p1: Node) => void;
}
export default class GPX extends XMLFeature {
    constructor(opt_options?: Options);
    protected readFeaturesFromNode(node: Node, opt_options?: ReadOptions): Feature<Geometry>[];
}
