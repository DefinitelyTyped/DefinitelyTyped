import convertLrgbToOklab from "./convertLrgbToOklab";
import convertOklabToLrgb from "./convertOklabToLrgb";
import convertOklabToRgb from "./convertOklabToRgb";
import convertRgbToOklab from "./convertRgbToOklab";

import lab from "../lab/definition";

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
        l: [0, 0.999];
        a: [-0.233, 0.276];
        b: [-0.311, 0.198];
    };

    parse: ["--oklab"];
    serialize: "--oklab";
}

declare const definition: Omit<typeof lab, keyof OklabDefinitionMixin> & OklabDefinitionMixin;

export default definition;
