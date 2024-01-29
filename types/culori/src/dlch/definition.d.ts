import convertDlchToLab65 from "./convertDlchToLab65";
import convertLab65ToDlch from "./convertLab65ToDlch";

import { averageAngle } from "../average";
import { differenceHueChroma } from "../difference";
import { Dlab } from "../dlab/types";
import { fixupAlpha } from "../fixup/alpha";
import { fixupHueShorter } from "../fixup/hue";
import { interpolatorLinear } from "../interpolate/linear";
import { Rgb } from "../rgb/types";
import { Dlch } from "./types";

declare const definition: {
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

export default definition;
