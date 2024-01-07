import { DatasetCore, Term } from "@rdfjs/types";

declare function toNT(term: Term | DatasetCore): string;

export = toNT;
