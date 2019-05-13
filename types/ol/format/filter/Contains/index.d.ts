declare module 'ol/format/filter/Contains' {

  import Spatial from 'ol/format/filter/Spatial';
  import Geometry from 'ol/geom/Geometry';

  export default class Contains extends Spatial {
    constructor(geometryName: string, geometry: Geometry, opt_srsName?: string);
  }

}
