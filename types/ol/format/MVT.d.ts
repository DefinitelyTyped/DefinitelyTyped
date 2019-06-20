import { FeatureClass } from 'ol/Feature';
import FeatureFormat from 'ol/format/Feature';
import GeometryType from 'ol/geom/GeometryType';
export default class MVT extends FeatureFormat {
    constructor(opt_options?: Options);
    setLayers(layers: string[]): void;
}
export interface Options {
    featureClass?: FeatureClass;
    geometryName?: string;
    layerName?: string;
    layers?: string[];
}
