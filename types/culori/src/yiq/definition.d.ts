import { fixupAlpha } from "../fixup/alpha";
import { interpolatorLinear } from "../interpolate/linear";
import convertRgbToYiq from "./convertRgbToYiq";
import convertYiqToRgb from "./convertYiqToRgb";

declare const definition: {
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

export default definition;
