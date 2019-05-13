declare module 'ol/format/filter/Spatial' {

  import Filter from 'ol/format/filter/Filter';
  import Geometry from 'ol/geom/Geometry';

  export default class Spatial extends Filter {
    constructor(tagName: string, geometryName: string, geometry: Geometry, opt_srsName?: string);
  }

}
