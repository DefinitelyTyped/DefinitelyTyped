import lab from "../lab/definition";
import convertLab65ToRgb from "./convertLab65ToRgb";
import convertLab65ToXyz65 from "./convertLab65ToXyz65";
import convertRgbToLab65 from "./convertRgbToLab65";
import convertXyz65ToLab65 from "./convertXyz65ToLab65";

interface Lab65DefinitionMixin {
    mode: "lab65";

    parse: ["--lab-d65"];
    serialize: "--lab-d65";

    toMode: {
        xyz65: typeof convertLab65ToXyz65;
        rgb: typeof convertLab65ToRgb;
    };

    fromMode: {
        xyz65: typeof convertXyz65ToLab65;
        rgb: typeof convertRgbToLab65;
    };

    ranges: {
        l: [0, 100];
        a: [-86.182, 98.234];
        b: [-107.86, 94.477];
    };
}

declare const definition: Omit<typeof lab, keyof Lab65DefinitionMixin> & Lab65DefinitionMixin;

export default definition;
