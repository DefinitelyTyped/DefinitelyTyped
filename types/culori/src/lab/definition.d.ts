import { fixupAlpha } from "../fixup/alpha.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import convertLabToRgb from "./convertLabToRgb.js";
import convertLabToXyz50 from "./convertLabToXyz50.js";
import convertRgbToLab from "./convertRgbToLab.js";
import convertXyz50ToLab from "./convertXyz50ToLab.js";
import parseLab from "./parseLab.js";
import { Lab } from "./types.js";

declare const modeLab: {
    mode: "lab";

    toMode: {
        xyz50: typeof convertLabToXyz50;
        rgb: typeof convertLabToRgb;
    };

    fromMode: {
        xyz50: typeof convertXyz50ToLab;
        rgb: typeof convertRgbToLab;
    };

    channels: ["l", "a", "b", "alpha"];

    ranges: {
        l: [0, 100];
        a: [-79.287, 93.55];
        b: [-112.029, 93.388];
    };

    parse: [typeof parseLab];
    serialize: (c: Omit<Lab, "mode">) => string;

    interpolate: {
        l: typeof interpolatorLinear;
        a: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default modeLab;
