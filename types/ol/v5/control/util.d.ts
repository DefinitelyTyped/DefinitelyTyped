import Collection from '../Collection';
import { Options } from './Attribution';
import Control from './Control';
import { Options as Options_1 } from './Rotate';
import { Options as Options_2 } from './Zoom';

export interface DefaultsOptions {
    attribution?: boolean | undefined;
    attributionOptions?: Options | undefined;
    rotate?: boolean | undefined;
    rotateOptions?: Options_1 | undefined;
    zoom?: boolean | undefined;
    zoomOptions?: Options_2 | undefined;
}
export function defaults(opt_options?: DefaultsOptions): Collection<Control>;
