import { averageAngle } from "../average";
import { differenceHueSaturation } from "../difference";
import { fixupAlpha } from "../fixup/alpha";
import { fixupHueShorter } from "../fixup/hue";
import { interpolatorLinear } from "../interpolate/linear";
import convertHsiToRgb from "./convertHsiToRgb";
import convertRgbToHsi from "./convertRgbToHsi";

declare const definition: {
    mode: "hsi";

    toMode: {
        rgb: typeof convertHsiToRgb;
    };

    parse: ["--hsi"];
    serialize: "--hsi";

    fromMode: {
        rgb: typeof convertRgbToHsi;
    };

    channels: ["h", "s", "i", "alpha"];

    ranges: {
        h: [0, 360];
    };

    interpolate: {
        h: { use: typeof interpolatorLinear; fixup: typeof fixupHueShorter };
        s: typeof interpolatorLinear;
        i: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };

    difference: {
        h: typeof differenceHueSaturation;
    };

    average: {
        h: typeof averageAngle;
    };
};

export default definition;
