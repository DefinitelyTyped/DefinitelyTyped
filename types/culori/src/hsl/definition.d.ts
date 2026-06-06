import { averageAngle } from "../average.js";
import { differenceHueSaturation } from "../difference.js";
import { fixupAlpha } from "../fixup/alpha.js";
import { fixupHueShorter } from "../fixup/hue.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import convertHslToRgb from "./convertHslToRgb.js";
import convertRgbToHsl from "./convertRgbToHsl.js";
import parseHsl from "./parseHsl.js";
import parseHslLegacy from "./parseHslLegacy.js";
import { Hsl } from "./types.js";

declare const modeHsl: {
    mode: "hsl";

    toMode: {
        rgb: typeof convertHslToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToHsl;
    };

    channels: ["h", "s", "l", "alpha"];

    ranges: {
        h: [0, 360];
    };

    gamut: "rgb";

    parse: [typeof parseHsl, typeof parseHslLegacy];
    serialize: (c: Omit<Hsl, "mode">) => string;

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

export default modeHsl;
