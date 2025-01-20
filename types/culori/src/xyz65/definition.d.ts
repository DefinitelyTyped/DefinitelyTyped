import convertRgbToXyz65 from "./convertRgbToXyz65";
import convertXyz65ToRgb from "./convertXyz65ToRgb";

import convertXyz50ToXyz65 from "./convertXyz50ToXyz65";
import convertXyz65ToXyz50 from "./convertXyz65ToXyz50";

import { fixupAlpha } from "../fixup/alpha";
import { interpolatorLinear } from "../interpolate/linear";

declare const definition: {
    mode: "xyz65";

    toMode: {
        rgb: typeof convertXyz65ToRgb;
        xyz50: typeof convertXyz65ToXyz50;
    };

    fromMode: {
        rgb: typeof convertRgbToXyz65;
        xyz50: typeof convertXyz50ToXyz65;
    };

    ranges: {
        x: [0, 0.95];
        y: [0, 1];
        z: [0, 1.088];
    };

    channels: ["x", "y", "z", "alpha"];

    parse: ["xyz", "xyz-d65", "--xyz-d65"];
    serialize: "xyz-d65";

    interpolate: {
        x: typeof interpolatorLinear;
        y: typeof interpolatorLinear;
        z: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default definition;
