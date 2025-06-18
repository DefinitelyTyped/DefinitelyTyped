import convertJabToJch from "./convertJabToJch.js";
import convertJchToJab from "./convertJchToJab.js";

import { averageAngle } from "../average.js";
import { differenceHueChroma } from "../difference.js";
import { fixupAlpha } from "../fixup/alpha.js";
import { fixupHueShorter } from "../fixup/hue.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import { Rgb } from "../rgb/types.js";
import { Jch } from "./types.js";

declare const modeJch: {
    mode: "jch";

    parse: ["--jzczhz"];
    serialize: "--jzczhz";

    toMode: {
        jab: typeof convertJchToJab;
        rgb: (c: Omit<Jch, "mode">) => Rgb;
    };

    fromMode: {
        rgb: (c: Omit<Rgb, "mode">) => Jch;
        jab: typeof convertJabToJch;
    };

    channels: ["j", "c", "h", "alpha"];

    ranges: {
        j: [0, 0.221];
        c: [0, 0.19];
        h: [0, 360];
    };

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        c: typeof interpolatorLinear;
        j: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueChroma;
    };

    average: {
        h: typeof averageAngle;
    };
};

export default modeJch;
