import lch from "../lch/definition.js";
import { Oklab } from "../oklab/types.js";
import { Rgb } from "../rgb/types.js";
import parseOklch from "./parseOklch.js";
import { Oklch } from "./types.js";

interface OklchDefinitionMixin {
    mode: "oklch";

    toMode: {
        oklab: (c: Omit<Oklch, "mode">) => Oklab;
        rgb: (c: Omit<Oklch, "mode">) => Rgb;
    };

    fromMode: {
        rgb: (c: Omit<Rgb, "mode">) => Oklch;
        oklab: (c: Omit<Oklab, "mode">) => Oklch;
    };

    parse: [typeof parseOklch];
    serialize: (c: Omit<Oklch, "mode">) => string;

    ranges: {
        l: [0, 1];
        c: [0, 0.4];
        h: [0, 360];
    };
}

declare const modeOklch: Omit<typeof lch, keyof OklchDefinitionMixin> & OklchDefinitionMixin;

export default modeOklch;
