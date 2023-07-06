import convertHsvToRgb from './convertHsvToRgb';
import convertRgbToHsv from './convertRgbToHsv';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueSaturation } from '../difference';
import { averageAngle } from '../average';

declare const definition: {
    mode: 'hsv';

    toMode: {
        rgb: typeof convertHsvToRgb;
    };

    parse: ['--hsv'];
    serialize: '--hsv';

    fromMode: {
        rgb: typeof convertRgbToHsv;
    };

    channels: ['h', 's', 'v', 'alpha'];

    ranges: {
        h: [0, 360];
    };

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        s: typeof interpolatorLinear;
        v: typeof interpolatorLinear;
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
