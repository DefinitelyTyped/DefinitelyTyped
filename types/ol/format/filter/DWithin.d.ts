import Geometry from '../../geom/Geometry';
import Spatial from './Spatial';

export default class DWithin extends Spatial {
    constructor(geometryName: string, geometry: Geometry, distance: number, unit: string, opt_srsName?: string);
}
