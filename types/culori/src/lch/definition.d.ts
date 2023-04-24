import convertLabToLch from './convertLabToLch';
import convertLchToLab from './convertLchToLab';
import parseLch from './parseLch';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueChroma } from '../difference';
import { averageAngle } from '../average';
import { Lch } from './types';
import { Rgb } from '../rgb/types';

declare const definition: {
    mode: 'lch';

    toMode: {
        lab: typeof convertLchToLab;
        rgb: (c: Omit<Lch, 'mode'>) => Rgb;
    };

    fromMode: {
        rgb: (c: Omit<Rgb, 'mode'>) => Lch;
        lab: typeof convertLabToLch;
    };

    channels: ['l', 'c', 'h', 'alpha'];

    ranges: {
        l: [0, 100];
        c: [0, 131.207];
        h: [0, 360];
    };

    parse: [typeof parseLch];
    serialize: (c: Omit<Lch, 'mode'>) => string;

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        c: typeof interpolatorLinear;
        l: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueChroma;
    };

    average: {
        h: typeof averageAngle;
    };
};

export default definition;
