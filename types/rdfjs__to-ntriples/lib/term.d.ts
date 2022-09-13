import { Term } from 'rdf-js';

declare function term(term: Term): string;
declare function term(term: unknown): undefined;

export = term;
