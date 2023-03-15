import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import convertRgbToCubehelix from './convertRgbToCubehelix';
import convertCubehelixToRgb from './convertCubehelixToRgb';
import { differenceHueSaturation } from '../difference';
import { averageAngle } from '../average';

declare const definition: {
    mode: 'cubehelix';
    channels: ['h', 's', 'l', 'alpha'];
    parse: ['--cubehelix'];
    serialize: '--cubehelix';

    ranges: {
        h: [0, 360];
        s: [0, 4.614];
        l: [0, 1];
    };

    fromMode: {
        rgb: typeof convertRgbToCubehelix;
    };

    toMode: {
        rgb: typeof convertCubehelixToRgb;
    };

    interpolate: {
        h: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupHueShorter;
        };
        s: typeof interpolatorLinear;
        l: typeof interpolatorLinear;
        alpha: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupAlpha;
        };
    };

    difference: {
        h: typeof differenceHueSaturation;
    };

    average: {
        h: typeof averageAngle;
    };
};

export default definition;
