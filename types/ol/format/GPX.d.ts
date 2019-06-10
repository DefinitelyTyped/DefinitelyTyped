import { Coordinate } from 'ol/coordinate';
import Feature from 'ol/Feature';
import XMLFeature from 'ol/format/XMLFeature';
import GeometryLayout from 'ol/geom/GeometryLayout';
import LineString from 'ol/geom/LineString';
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
