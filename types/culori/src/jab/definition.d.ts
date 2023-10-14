import convertJabToRgb from "./convertJabToRgb";
import convertJabToXyz65 from "./convertJabToXyz65";
import convertRgbToJab from "./convertRgbToJab";
import convertXyz65ToJab from "./convertXyz65ToJab";

import { fixupAlpha } from "../fixup/alpha";
import { interpolatorLinear } from "../interpolate/linear";

declare const definition: {
    mode: "jab";
    channels: ["j", "a", "b", "alpha"];

    parse: ["--jzazbz"];
    serialize: "--jzazbz";

    fromMode: {
        rgb: typeof convertRgbToJab;
        xyz65: typeof convertXyz65ToJab;
    };

    toMode: {
        rgb: typeof convertJabToRgb;
        xyz65: typeof convertJabToXyz65;
    };

    ranges: {
        j: [0, 0.222];
        a: [-0.109, 0.129];
        b: [-0.185, 0.134];
    };

    interpolate: {
        j: typeof interpolatorLinear;
        a: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default definition;
