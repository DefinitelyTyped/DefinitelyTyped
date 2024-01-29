import { Quad, Term } from "@rdfjs/types";

declare function quad(quad: Quad, toNT: (term: Term) => string): string;

export = quad;
