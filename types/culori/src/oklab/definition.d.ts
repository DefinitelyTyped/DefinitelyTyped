import convertLrgbToOklab from "./convertLrgbToOklab.js";
import convertOklabToLrgb from "./convertOklabToLrgb.js";
import convertOklabToRgb from "./convertOklabToRgb.js";
import convertRgbToOklab from "./convertRgbToOklab.js";

import lab from "../lab/definition.js";
import parseOklab from "./parseOklab.js";
import { Oklab } from "./types.js";

interface OklabDefinitionMixin {
    mode: "oklab";

    toMode: {
        lrgb: typeof convertOklabToLrgb;
        rgb: typeof convertOklabToRgb;
    };

    fromMode: {
        lrgb: typeof convertLrgbToOklab;
        rgb: typeof convertRgbToOklab;
    };

    ranges: {
        l: [0, 1];
        a: [-0.4, 0.4];
        b: [-0.4, 0.4];
    };

    parse: [typeof parseOklab];
    serialize: (c: Omit<Oklab, "mode">) => string;
}

/**
	Oklab, a perceptual color space for image processing by Björn Ottosson
	Reference: https://bottosson.github.io/posts/oklab/
 */
declare const modeOklab: Omit<typeof lab, keyof OklabDefinitionMixin> & OklabDefinitionMixin;

export default modeOklab;
