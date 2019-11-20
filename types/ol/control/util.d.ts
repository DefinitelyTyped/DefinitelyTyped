import Collection from '../Collection';
import { Options } from './Attribution';
import Control from './Control';
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
export function defaults(opt_options?: DefaultsOptions): Collection<Control>;
