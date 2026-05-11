import { averageAngle } from "../average.js";
import { differenceHueChroma } from "../difference.js";
import { fixupAlpha } from "../fixup/alpha.js";
import { fixupHueShorter } from "../fixup/hue.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import { Rgb } from "../rgb/types.js";
import convertLabToLch from "./convertLabToLch.js";
import convertLchToLab from "./convertLchToLab.js";
import parseLch from "./parseLch.js";
import { Lch } from "./types.js";

declare const modeLch: {
    mode: "lch";

    toMode: {
        lab: typeof convertLchToLab;
        rgb: (c: Omit<Lch, "mode">) => Rgb;
    };

    fromMode: {
        rgb: (c: Omit<Rgb, "mode">) => Lch;
        lab: typeof convertLabToLch;
    };

    channels: ["l", "c", "h", "alpha"];

    ranges: {
        l: [0, 100];
        c: [0, 131.207];
        h: [0, 360];
    };

    parse: [typeof parseLch];
    serialize: (c: Omit<Lch, "mode">) => string;

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

export default modeLch;
