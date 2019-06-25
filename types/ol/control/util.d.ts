import { Options } from './Attribution';
import { Options as Options_1 } from './Rotate';
import { Options as Options_2 } from './Zoom';

export interface DefaultsOptions {
    attribution?: boolean;
    attributionOptions?: Options;
    rotate?: boolean;
    rotateOptions?: Options_1;
    zoom?: boolean;
    zoomOptions?: Options_2;
}
