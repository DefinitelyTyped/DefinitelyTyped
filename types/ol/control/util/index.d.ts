declare module 'ol/control/util' {

  import { Options } from 'ol/control/Attribution';
  import { Options as Options_1 } from 'ol/control/Rotate';
  import { Options as Options_2 } from 'ol/control/Zoom';

  export interface DefaultsOptions {
    attribution?: boolean;
    attributionOptions?: Options;
    rotate?: boolean;
    rotateOptions?: Options_1;
    zoom?: boolean;
    zoomOptions?: Options_2;
  }

}
