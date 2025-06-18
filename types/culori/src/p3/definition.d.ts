import rgb from "../rgb/definition.js";
import { Rgb } from "../rgb/types.js";
import convertP3ToXyz65 from "./convertP3ToXyz65.js";
import convertXyz65ToP3 from "./convertXyz65ToP3.js";
import { P3 } from "./types.js";

interface P3DefinitionMixin {
    mode: "p3";
    parse: ["display-p3"];
    serialize: "display-p3";

    fromMode: {
        rgb: (color: Omit<Rgb, "mode">) => P3;
        xyz65: typeof convertXyz65ToP3;
    };

    toMode: {
        rgb: (color: Omit<P3, "mode">) => Rgb;
        xyz65: typeof convertP3ToXyz65;
    };
}

declare const modeP3: Omit<typeof rgb, keyof P3DefinitionMixin> & P3DefinitionMixin;

export default modeP3;
