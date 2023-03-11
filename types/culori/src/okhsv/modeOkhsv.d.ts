import convertOklabToOkhsv from './convertOklabToOkhsv';
import convertOkhsvToOklab from './convertOkhsvToOklab';

import modeHsv from '../hsv/definition';
import { Okhsv } from './types';
import { Rgb } from '../rgb/types';

interface OkhsvDefinitionMixin {
    mode: 'okhsv';
    channels: ['h', 's', 'v', 'alpha'];
    parse: ['--okhsv'];
    serialize: '--okhsv';
    fromMode: {
        oklab: typeof convertOklabToOkhsv;
        rgb: (color: Omit<Rgb, 'mode'>) => Okhsv;
    };
    toMode: {
        oklab: typeof convertOkhsvToOklab;
        rgb: (color: Omit<Okhsv, 'mode'>) => Rgb;
    };
}

declare const modeOkhsv: Omit<typeof modeHsv, keyof OkhsvDefinitionMixin> & OkhsvDefinitionMixin;

export default modeOkhsv;
