import convertHslToRgb from './convertHslToRgb';
import convertRgbToHsl from './convertRgbToHsl';
import parseHsl from './parseHsl';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueSaturation } from '../difference';
import { averageAngle } from '../average';
import { Hsl } from './types';

declare const definition: {
    mode: 'hsl';

    toMode: {
        rgb: typeof convertHslToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToHsl;
    };

    channels: ['h', 's', 'l', 'alpha'];

    ranges: {
        h: [0, 360];
    };

    parse: [typeof parseHsl];
    serialize: (c: Omit<Hsl, 'mode'>) => string;

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        s: typeof interpolatorLinear;
        l: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueSaturation;
    };

    average: {
        h: typeof averageAngle;
    };
};

export default definition;
