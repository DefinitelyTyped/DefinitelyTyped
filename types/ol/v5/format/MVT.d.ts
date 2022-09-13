import { FeatureClass } from '../Feature';
import GeometryType from '../geom/GeometryType';
import FeatureFormat from './Feature';

export interface Options {
    featureClass?: FeatureClass | undefined;
    geometryName?: string | undefined;
    layerName?: string | undefined;
    layers?: string[] | undefined;
}
export default class MVT extends FeatureFormat {
    constructor(opt_options?: Options);
    setLayers(layers: string[]): void;
}
