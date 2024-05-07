import rgb from "../rgb/definition";
import { Rgb } from "../rgb/types";
import convertA98ToXyz65 from "./convertA98ToXyz65";
import convertXyz65ToA98 from "./convertXyz65ToA98";
import { A98 } from "./types";

interface A98DefinitionMixin {
    mode: "a98";
    parse: ["a98-rgb"];
    serialize: "a98-rgb";

    fromMode: {
        rgb: (color: Omit<Rgb, "mode">) => A98;
        xyz65: typeof convertXyz65ToA98;
    };

    toMode: {
        rgb: (color: Omit<A98, "mode">) => Rgb;
        xyz65: typeof convertA98ToXyz65;
    };
}

declare const definition: Omit<typeof rgb, keyof A98DefinitionMixin> & A98DefinitionMixin;

export default definition;
