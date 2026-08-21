import rgb from "../rgb/definition.js";
import convertLrgbToRgb from "./convertLrgbToRgb.js";
import convertRgbToLrgb from "./convertRgbToLrgb.js";

interface LrgbDefinitionMixin {
    mode: "lrgb";

    toMode: {
        rgb: typeof convertLrgbToRgb;
    };

    fromMode: {
        rgb: typeof convertRgbToLrgb;
    };

    parse: ["--srgb-linear"];
    serialize: "--srgb-linear";
}

declare const modeLrgb: Omit<typeof rgb, keyof LrgbDefinitionMixin> & LrgbDefinitionMixin;

export default modeLrgb;
