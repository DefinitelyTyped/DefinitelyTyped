import { Quad, Term } from "rdf-js";

declare function quad(quad: Quad, toNT: (term: Term) => string): string;

export = quad;
