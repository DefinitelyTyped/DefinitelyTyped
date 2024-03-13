import { Term } from "@rdfjs/types";

declare function term(term: Term): string;
declare function term(term: unknown): undefined;

export = term;
