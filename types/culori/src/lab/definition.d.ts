import { fixupAlpha } from "../fixup/alpha";
import { interpolatorLinear } from "../interpolate/linear";
import convertLabToRgb from "./convertLabToRgb";
import convertLabToXyz50 from "./convertLabToXyz50";
import convertRgbToLab from "./convertRgbToLab";
import convertXyz50ToLab from "./convertXyz50ToLab";
import parseLab from "./parseLab";
import { Lab } from "./types";

declare const definition: {
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

export default definition;
