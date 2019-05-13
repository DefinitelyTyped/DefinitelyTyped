declare module 'ol/format/filter/Intersects' {

  import Spatial from 'ol/format/filter/Spatial';
  import Geometry from 'ol/geom/Geometry';

  export default class Intersects extends Spatial {
    constructor(geometryName: string, geometry: Geometry, opt_srsName?: string);
  }

}
