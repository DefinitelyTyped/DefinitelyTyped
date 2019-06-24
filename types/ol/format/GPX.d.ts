import { Coordinate } from '../coordinate';
import Feature from '../Feature';
import GeometryLayout from '../geom/GeometryLayout';
import LineString from '../geom/LineString';
import XMLFeature from './XMLFeature';

export default class GPX extends XMLFeature {
    constructor(opt_options?: Options);
}
export interface LayoutOptions {
    hasZ?: boolean;
    hasM?: boolean;
}
export interface Options {
    readExtensions?: ((param0: Feature, param1: Node) => void);
}
