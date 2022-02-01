import Feature from '../Feature';
import Geometry from '../geom/Geometry';
import { WriteOptions } from './Feature';
import { Options } from './GMLBase';

/**
 * Feature format for reading and writing data in the GML format
 * version 3.1.1.
 * Currently only supports GML 3.1.1 Simple Features profile.
 */
export default class GML {
    constructor(opt_options?: Options);
    /**
     * Encode an array of features in GML 3.1.1 Simple Features.
     */
    writeFeatures(features: Feature<Geometry>[], opt_options?: WriteOptions): string;
    /**
     * Encode an array of features in the GML 3.1.1 format as an XML node.
     */
    writeFeaturesNode(features: Feature<Geometry>[], opt_options?: WriteOptions): Node;
}
