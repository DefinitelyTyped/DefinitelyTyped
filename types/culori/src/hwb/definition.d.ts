import { averageAngle } from "../average.js";
import { differenceHueNaive } from "../difference.js";
import { fixupAlpha } from "../fixup/alpha.js";
import { fixupHueShorter } from "../fixup/hue.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import convertHwbToRgb from "./convertHwbToRgb.js";
import convertRgbToHwb from "./convertRgbToHwb.js";
import parseHwb from "./parseHwb.js";
import { Hwb } from "./types.js";

declare const modeHwb: {
    mode: "hwb";

    toMode: {
        rgb: typeof convertHwbToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToHwb;
    };

    channels: ["h", "w", "b", "alpha"];

    ranges: {
        h: [0, 360];
    };

    parse: [typeof parseHwb];
    serialize: (c: Omit<Hwb, "mode">) => string;

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        w: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueNaive;
    };

    average: {
        h: typeof averageAngle;
    };
};

export default modeHwb;
