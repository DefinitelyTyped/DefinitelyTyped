import convertLuvToXyz50 from "./convertLuvToXyz50.js";
import convertXyz50ToLuv from "./convertXyz50ToLuv.js";

import { fixupAlpha } from "../fixup/alpha.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import { Rgb } from "../rgb/types.js";
import { Luv } from "./types.js";

declare const modeLuv: {
    mode: "luv";

    toMode: {
        xyz50: typeof convertLuvToXyz50;
        rgb: (c: Omit<Luv, "mode">) => Rgb;
    };

    fromMode: {
        xyz50: typeof convertXyz50ToLuv;
        rgb: (c: Omit<Rgb, "mode">) => Luv;
    };

    channels: ["l", "u", "v", "alpha"];

    parse: ["--luv"];
    serialize: "--luv";

    ranges: {
        l: [0, 100];
        u: [-84.936, 175.042];
        v: [-125.882, 87.243];
    };

    interpolate: {
        l: typeof interpolatorLinear;
        u: typeof interpolatorLinear;
        v: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default modeLuv;
