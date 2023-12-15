import { DatasetCore, Term } from "rdf-js";

declare function toNT(term: Term | DatasetCore): string;

export = toNT;
