import Geometry from '../../geom/Geometry';
import Spatial from './Spatial';

export default class Intersects extends Spatial {
    constructor(geometryName: string, geometry: Geometry, opt_srsName?: string);
}
