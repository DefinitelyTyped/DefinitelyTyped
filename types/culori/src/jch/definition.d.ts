import convertJabToJch from "./convertJabToJch";
import convertJchToJab from "./convertJchToJab";

import { averageAngle } from "../average";
import { differenceHueChroma } from "../difference";
import { fixupAlpha } from "../fixup/alpha";
import { fixupHueShorter } from "../fixup/hue";
import { interpolatorLinear } from "../interpolate/linear";
import { Rgb } from "../rgb/types";
import { Jch } from "./types";

declare const definition: {
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

export default definition;
