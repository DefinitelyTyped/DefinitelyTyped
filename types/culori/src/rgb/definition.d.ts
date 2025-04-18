import { fixupAlpha } from "../fixup/alpha.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import parseHex from "./parseHex.js";
import parseNamed from "./parseNamed.js";
import parseRgb from "./parseRgb.js";
import parseRgbLegacy from "./parseRgbLegacy.js";
import parseTransparent from "./parseTransparent.js";

declare const modeRgb: {
    mode: "rgb";
    channels: ["r", "g", "b", "alpha"];
    parse: [
        typeof parseRgb,
        typeof parseHex,
        typeof parseRgbLegacy,
        typeof parseNamed,
        typeof parseTransparent,
        "srgb",
    ];
    serialize: "srgb";

    interpolate: {
        r: typeof interpolatorLinear;
        g: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default modeRgb;
