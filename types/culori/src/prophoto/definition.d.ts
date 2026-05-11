import rgb from "../rgb/definition.js";

import convertProphotoToXyz50 from "./convertProphotoToXyz50.js";
import convertXyz50ToProphoto from "./convertXyz50ToProphoto.js";

import { Rgb } from "../rgb/types.js";
import { Prophoto } from "./types.js";

interface ProphotoDefinitionMixin {
    mode: "prophoto";
    parse: ["prophoto-rgb"];
    serialize: "prophoto-rgb";

    fromMode: {
        xyz50: typeof convertXyz50ToProphoto;
        rgb: (rgb: Omit<Rgb, "mode">) => Prophoto;
    };

    toMode: {
        xyz50: typeof convertProphotoToXyz50;
        rgb: (rgb: Omit<Prophoto, "mode">) => Rgb;
    };
}

declare const modeProphoto: Omit<typeof rgb, keyof ProphotoDefinitionMixin> & ProphotoDefinitionMixin;

export default modeProphoto;
