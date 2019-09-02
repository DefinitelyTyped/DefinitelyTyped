import Geometry from '../../geom/Geometry';
import Filter from './Filter';

export default class Spatial extends Filter {
    constructor(tagName: string, geometryName: string, geometry: Geometry, opt_srsName?: string);
}
