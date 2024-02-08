import { Literal } from "@rdfjs/types";
import { FilterCallback } from "./index.js";

declare function taggedLiteral(language: string | string[]): FilterCallback<any, any, Literal | Literal[]>;

declare const filters: {
    taggedLiteral: typeof taggedLiteral;
};

export default filters;
