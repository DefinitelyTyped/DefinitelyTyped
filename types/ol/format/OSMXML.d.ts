import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { ReadOptions } from './Feature';
import XMLFeature from './XMLFeature';

export default class OSMXML extends XMLFeature {
    constructor();
    protected readFeaturesFromNode(node: Element, opt_options?: ReadOptions): Feature<Geometry>[];
}
