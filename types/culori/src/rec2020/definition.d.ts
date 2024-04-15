import rgb from "../rgb/definition";

import convertRec2020ToXyz65 from "./convertRec2020ToXyz65";
import convertXyz65ToRec2020 from "./convertXyz65ToRec2020";

import { Rgb } from "../rgb/types";
import { Rec2020 } from "./types";

interface Rec2020DefinitionMixin {
    mode: "rec2020";

    fromMode: {
        xyz65: typeof convertXyz65ToRec2020;
        rgb: (color: Rgb) => Rec2020;
    };

    toMode: {
        xyz65: typeof convertRec2020ToXyz65;
        rgb: (color: Omit<Rec2020, "mode">) => Rgb;
    };

    parse: ["rec2020"];
    serialize: "rec2020";
}

declare const definition: Omit<typeof rgb, keyof Rec2020DefinitionMixin> & Rec2020DefinitionMixin;

export default definition;
