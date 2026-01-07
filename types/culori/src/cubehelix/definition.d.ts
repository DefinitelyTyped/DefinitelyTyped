import { averageAngle } from "../average.js";
import { differenceHueSaturation } from "../difference.js";
import { fixupAlpha } from "../fixup/alpha.js";
import { fixupHueShorter } from "../fixup/hue.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import convertCubehelixToRgb from "./convertCubehelixToRgb.js";
import convertRgbToCubehelix from "./convertRgbToCubehelix.js";

declare const modeCubehelix: {
    mode: "cubehelix";
    channels: ["h", "s", "l", "alpha"];
    parse: ["--cubehelix"];
    serialize: "--cubehelix";

    ranges: {
        h: [0, 360];
        s: [0, 4.614];
        l: [0, 1];
    };

    fromMode: {
        rgb: typeof convertRgbToCubehelix;
    };

    toMode: {
        rgb: typeof convertCubehelixToRgb;
    };

    interpolate: {
        h: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupHueShorter;
        };
        s: typeof interpolatorLinear;
        l: typeof interpolatorLinear;
        alpha: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupAlpha;
        };
    };

    difference: {
        h: typeof differenceHueSaturation;
    };

    average: {
        h: typeof averageAngle;
    };
};

export default modeCubehelix;
