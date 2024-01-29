import rgb from "../rgb/definition";

import convertProphotoToXyz50 from "./convertProphotoToXyz50";
import convertXyz50ToProphoto from "./convertXyz50ToProphoto";

import { Rgb } from "../rgb/types";
import { Prophoto } from "./types";

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

declare const definition: Omit<typeof rgb, keyof ProphotoDefinitionMixin> & ProphotoDefinitionMixin;

export default definition;
