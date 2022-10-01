import ColorSpace, { Options } from './space';

export interface RGBOptions extends Options {
    toXYZ_M?: number[][] | undefined;
    fromXYZ_M?: number[][] | undefined;
}

export default class RGBColorSpace extends ColorSpace {
    constructor(options: RGBOptions);
}
