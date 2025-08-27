import { fixupAlpha } from "../fixup/alpha.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import convertRgbToYiq from "./convertRgbToYiq.js";
import convertYiqToRgb from "./convertYiqToRgb.js";

declare const modeYiq: {
    mode: "yiq";

    toMode: {
        rgb: typeof convertYiqToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToYiq;
    };

    channels: ["y", "i", "q", "alpha"];

    parse: ["--yiq"];
    serialize: "--yiq";

    ranges: {
        i: [-0.595, 0.595];
        q: [-0.522, 0.522];
    };

    interpolate: {
        y: typeof interpolatorLinear;
        i: typeof interpolatorLinear;
        q: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default modeYiq;
