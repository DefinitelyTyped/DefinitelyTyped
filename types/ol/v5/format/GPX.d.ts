import { Coordinate } from '../coordinate';
import Feature from '../Feature';
import GeometryLayout from '../geom/GeometryLayout';
import LineString from '../geom/LineString';
import XMLFeature from './XMLFeature';

export interface LayoutOptions {
    hasZ?: boolean | undefined;
    hasM?: boolean | undefined;
}
export interface Options {
    readExtensions?: ((p0: Feature, p1: Node) => void) | undefined;
}
export default class GPX extends XMLFeature {
    constructor(opt_options?: Options);
}
