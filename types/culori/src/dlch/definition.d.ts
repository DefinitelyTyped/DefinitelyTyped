import convertDlchToLab65 from "./convertDlchToLab65.js";
import convertLab65ToDlch from "./convertLab65ToDlch.js";

import { averageAngle } from "../average.js";
import { differenceHueChroma } from "../difference.js";
import { Dlab } from "../dlab/types.js";
import { fixupAlpha } from "../fixup/alpha.js";
import { fixupHueShorter } from "../fixup/hue.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import { Rgb } from "../rgb/types.js";
import { Dlch } from "./types.js";

declare const modeDlch: {
    mode: "dlch";

    parse: ["--din99o-lch"];
    serialize: "--din99o-lch";

    toMode: {
        lab65: typeof convertDlchToLab65;
        dlab: (c: Omit<Dlch, "mode">) => Dlab;
        rgb: (c: Omit<Dlch, "mode">) => Rgb;
    };

    fromMode: {
        lab65: typeof convertLab65ToDlch;
        dlab: (c: Omit<Dlab, "mode">) => Dlch;
        rgb: (c: Omit<Rgb, "mode">) => Dlch;
    };

    channels: ["l", "c", "h", "alpha"];

    ranges: {
        l: [0, 100];
        c: [0, 51.484];
        h: [0, 360];
    };

    interpolate: {
        l: typeof interpolatorLinear;
        c: typeof interpolatorLinear;
        h: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupHueShorter;
        };
        alpha: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupAlpha;
        };
    };

    difference: {
        h: typeof differenceHueChroma;
    };

    average: {
        h: typeof averageAngle;
    };
};

export default modeDlch;
