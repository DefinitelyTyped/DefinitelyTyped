import { FeatureClass } from '../Feature';
import GeometryType from '../geom/GeometryType';
import FeatureFormat from './Feature';

export interface Options {
    featureClass?: FeatureClass;
    geometryName?: string;
    layerName?: string;
    layers?: string[];
}
export default class MVT extends FeatureFormat {
    constructor(opt_options?: Options);
    setLayers(layers: string[]): void;
}
