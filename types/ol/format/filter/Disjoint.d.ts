import Geometry from '../../geom/Geometry';
import Spatial from './Spatial';

export default class Disjoint extends Spatial {
    constructor(geometryName: string, geometry: Geometry, opt_srsName?: string);
}
