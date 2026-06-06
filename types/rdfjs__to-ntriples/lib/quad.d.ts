import { Quad, Term } from "@rdfjs/types";

export default function quad(quad: Quad, toNT: (term: Term) => string): string;
