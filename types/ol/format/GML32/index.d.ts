declare module 'ol/format/GML32' {

  import GML3 from 'ol/format/GML3';
  import { Options } from 'ol/format/GMLBase';
  import { Parser } from 'ol/xml';

  export default class GML32 extends GML3 {
    constructor(opt_options?: Options);
    protected FLAT_LINEAR_RINGS_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected GEOMETRY_FLAT_COORDINATES_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected GEOMETRY_PARSERS: { [key: string]: { [key: string]: Parser } };
    protected RING_PARSERS: { [key: string]: { [key: string]: Parser } };
  }

}
