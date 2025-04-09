import { convertXyz65ToRgb, fixupAlpha, interpolatorLinear } from "../index-fn.js";
import convertItpToXyz65 from "./convertItpToXyz65.js";
import convertXyz65ToItp from "./convertXyz65ToItp.js";

declare const modeItp: {
    mode: "itp";
    channels: ["i", "t", "p", "alpha"];

    parse: ["--ictcp"];
    serialize: "--ictcp";

    toMode: {
        xyz65: typeof convertItpToXyz65;
        rgb: typeof convertXyz65ToRgb;
    };

    fromMode: {
        xyz65: typeof convertXyz65ToItp;
        rgb: typeof convertXyz65ToItp;
    };

    ranges: {
        i: [0, 0.581];
        t: [-0.369, 0.272];
        p: [-0.164, 0.331];
    };

    interpolate: {
        i: typeof interpolatorLinear;
        t: typeof interpolatorLinear;
        p: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default modeItp;
