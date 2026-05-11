import { fixupAlpha } from "../fixup/alpha.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import convertLabToXyz50 from "../lab/convertLabToXyz50.js";
import convertXyz50ToLab from "../lab/convertXyz50ToLab.js";
import convertRgbToXyz50 from "./convertRgbToXyz50.js";
import convertXyz50ToRgb from "./convertXyz50ToRgb.js";

declare const modeXyz50: {
    mode: "xyz50";
    parse: ["xyz-d50", "--xyz-d50"];
    serialize: "xyz-d50";

    toMode: {
        rgb: typeof convertXyz50ToRgb;
        lab: typeof convertXyz50ToLab;
    };

    fromMode: {
        rgb: typeof convertRgbToXyz50;
        lab: typeof convertLabToXyz50;
    };

    channels: ["x", "y", "z", "alpha"];

    ranges: {
        x: [0, 0.964];
        y: [0, 0.999];
        z: [0, 0.825];
    };

    interpolate: {
        x: typeof interpolatorLinear;
        y: typeof interpolatorLinear;
        z: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default modeXyz50;
