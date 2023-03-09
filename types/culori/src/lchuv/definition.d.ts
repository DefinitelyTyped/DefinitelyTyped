import convertLuvToLchuv from './convertLuvToLchuv';
import convertLchuvToLuv from './convertLchuvToLuv';
import convertXyz50ToRgb from '../xyz50/convertXyz50ToRgb';
import convertRgbToXyz50 from '../xyz50/convertRgbToXyz50';

import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueChroma } from '../difference';
import { averageAngle } from '../average';

declare const definition: {
    mode: 'lchuv';

    toMode: {
        luv: typeof convertLchuvToLuv;
        rgb: (c: Parameters<typeof convertLchuvToLuv>[0]) => ReturnType<typeof convertXyz50ToRgb>;
    };

    fromMode: {
        rgb: (c: Parameters<typeof convertRgbToXyz50>[0]) => ReturnType<typeof convertLuvToLchuv>;
        luv: typeof convertLuvToLchuv;
    };

    channels: ['l', 'c', 'h', 'alpha'];

    parse: ['--lchuv'];
    serialize: '--lchuv';

    ranges: {
        l: [0, 100];
        c: [0, 176.956];
        h: [0, 360];
    };

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
