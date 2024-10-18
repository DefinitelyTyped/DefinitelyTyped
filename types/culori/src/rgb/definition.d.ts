import { fixupAlpha } from "../fixup/alpha";
import { interpolatorLinear } from "../interpolate/linear";
import parseHex from "./parseHex";
import parseNamed from "./parseNamed";
import parseRgb from "./parseRgb";
import parseTransparent from "./parseTransparent";

declare const definition: {
    mode: "rgb";
    channels: ["r", "g", "b", "alpha"];
    parse: [typeof parseHex, typeof parseRgb, typeof parseNamed, typeof parseTransparent, "srgb"];
    serialize: "srgb";

    interpolate: {
        r: typeof interpolatorLinear;
        g: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default definition;
