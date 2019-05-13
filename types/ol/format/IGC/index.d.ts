declare module 'ol/format/IGC' {

  import TextFeature from 'ol/format/TextFeature';

  export default class IGC extends TextFeature {
    constructor(opt_options?: Options);
  }

  export enum IGCZ {
    BAROMETRIC = 'barometric',
    GPS = 'gps',
    NONE = 'none',
  }

  export interface Options {
    altitudeMode?: IGCZ | string;
  }

}
