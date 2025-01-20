import rgb from "../rgb/definition";
import convertLrgbToRgb from "./convertLrgbToRgb";
import convertRgbToLrgb from "./convertRgbToLrgb";

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

declare const definition: Omit<typeof rgb, keyof LrgbDefinitionMixin> & LrgbDefinitionMixin;

export default definition;
