import { fixupAlpha } from "../fixup/alpha.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import convertRgbToXyb from "./convertRgbToXyb.js";
import convertXybToRgb from "./convertXybToRgb.js";

declare const modeXyb: {
    mode: "xyb";
    parse: ["xyz-d50", "--xyz-d50"];
    serialize: "xyz-d50";

    toMode: {
        rgb: typeof convertXybToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToXyb;
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
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default modeXyb;
