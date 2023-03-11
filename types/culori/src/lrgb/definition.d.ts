import rgb from '../rgb/definition';
import convertRgbToLrgb from './convertRgbToLrgb';
import convertLrgbToRgb from './convertLrgbToRgb';

interface LrgbDefinitionMixin {
    mode: 'lrgb';

    toMode: {
        rgb: typeof convertLrgbToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToLrgb;
    };

    parse: ['--srgb-linear'];
    serialize: '--srgb-linear';
}

declare const definition: Omit<typeof rgb, keyof LrgbDefinitionMixin> & LrgbDefinitionMixin;

export default definition;
