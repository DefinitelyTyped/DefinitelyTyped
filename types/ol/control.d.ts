import Collection from './Collection';
import { Options } from './control/Attribution';
import Control from './control/Control';
import { Options as Options_1 } from './control/Rotate';
import { Options as Options_2 } from './control/Zoom';

export { default as Attribution } from './control/Attribution';
export { default as Control } from './control/Control';
export { default as FullScreen } from './control/FullScreen';
export { default as MousePosition } from './control/MousePosition';
export { default as OverviewMap } from './control/OverviewMap';
export { default as Rotate } from './control/Rotate';
export { default as ScaleLine } from './control/ScaleLine';
export { default as Zoom } from './control/Zoom';
export { default as ZoomSlider } from './control/ZoomSlider';
export { default as ZoomToExtent } from './control/ZoomToExtent';

export interface DefaultsOptions {
    attribution?: boolean;
    attributionOptions?: Options;
    rotate?: boolean;
    rotateOptions?: Options_1;
    zoom?: boolean;
    zoomOptions?: Options_2;
}
export function defaults(opt_options?: DefaultsOptions): Collection<Control>;
