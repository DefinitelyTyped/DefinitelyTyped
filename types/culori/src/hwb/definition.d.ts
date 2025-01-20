import { averageAngle } from "../average";
import { differenceHueNaive } from "../difference";
import { fixupAlpha } from "../fixup/alpha";
import { fixupHueShorter } from "../fixup/hue";
import { interpolatorLinear } from "../interpolate/linear";
import convertHwbToRgb from "./convertHwbToRgb";
import convertRgbToHwb from "./convertRgbToHwb";
import parseHwb from "./parseHwb";
import { Hwb } from "./types";

declare const definition: {
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

export default definition;
