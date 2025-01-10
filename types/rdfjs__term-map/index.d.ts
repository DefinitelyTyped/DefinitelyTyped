import { Term } from "@rdfjs/types";

export default class TermMap<T extends Term = Term, V = any> extends Map<T, V> {
    constructor(entries?: Array<[Term, V]>);
    get(term: Term): V | undefined;
    has(term: Term): boolean;
}
