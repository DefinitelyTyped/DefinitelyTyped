import { Term } from "@rdfjs/types";
import TermMap from "./index.js";

export interface TermMapFactory {
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    termMap<T extends Term = Term, V = any>(entries?: Array<[T, V]>): TermMap<T, V>;
}

interface FactoryCtor {
    new(): TermMapFactory;
    exports: ["termMap"];
}
declare const factoryCtor: FactoryCtor;
export default factoryCtor;
