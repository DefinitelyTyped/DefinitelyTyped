import { Term } from "@rdfjs/types";
import TermSet from "./index.js";

export class TermSetFactory {
    static exports: ["termSet"];
    termSet<T extends Term = Term>(terms?: T[] | null): TermSet<T>;
}

export default TermSetFactory;
