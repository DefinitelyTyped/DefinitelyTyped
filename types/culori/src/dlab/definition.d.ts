import { fixupAlpha } from "../fixup/alpha.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import { Lab65 } from "../lab65/types.js";
import { Rgb } from "../rgb/types.js";
import { Dlab } from "./types.js";

declare const modeDlab: {
    mode: "dlab";

    parse: ["--din99o-lab"];
    serialize: "--din99o-lab";

    toMode: {
        lab65: (c: Omit<Dlab, "mode">) => Lab65;
        rgb: (c: Omit<Dlab, "mode">) => Rgb;
    };

    fromMode: {
        lab65: (c: Omit<Lab65, "mode">) => Dlab;
        rgb: (c: Omit<Rgb, "mode">) => Dlab;
    };

    channels: ["l", "a", "b", "alpha"];

    ranges: {
        l: [0, 100];
        a: [-40.09, 45.501];
        b: [-40.469, 44.344];
    };

    interpolate: {
        l: typeof interpolatorLinear;
        a: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: {
            use: typeof interpolatorLinear;
            fixup: typeof fixupAlpha;
        };
    };
};

export default modeDlab;
