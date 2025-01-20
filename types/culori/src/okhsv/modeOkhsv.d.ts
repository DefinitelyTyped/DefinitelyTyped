import convertOkhsvToOklab from "./convertOkhsvToOklab";
import convertOklabToOkhsv from "./convertOklabToOkhsv";

import modeHsv from "../hsv/definition";
import { Rgb } from "../rgb/types";
import { Okhsv } from "./types";

interface OkhsvDefinitionMixin {
    mode: "okhsv";
    channels: ["h", "s", "v", "alpha"];
    parse: ["--okhsv"];
    serialize: "--okhsv";
    fromMode: {
        oklab: typeof convertOklabToOkhsv;
        rgb: (color: Omit<Rgb, "mode">) => Okhsv;
    };
    toMode: {
        oklab: typeof convertOkhsvToOklab;
        rgb: (color: Omit<Okhsv, "mode">) => Rgb;
    };
}

declare const modeOkhsv: Omit<typeof modeHsv, keyof OkhsvDefinitionMixin> & OkhsvDefinitionMixin;

export default modeOkhsv;
