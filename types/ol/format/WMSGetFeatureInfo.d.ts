import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { ReadOptions } from './Feature';
import XMLFeature from './XMLFeature';

export interface Options {
    layers?: string[];
}
export default class WMSGetFeatureInfo extends XMLFeature {
    constructor(opt_options?: Options);
    protected readFeaturesFromNode(node: Node, opt_options?: ReadOptions): Feature<Geometry>[];
    getLayers(): string[];
    setLayers(layers: string[]): void;
}
