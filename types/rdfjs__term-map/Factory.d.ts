import TermMap from '.';
import { Term } from 'rdf-js';

export interface TermMapFactory {
    exports: ['termMap'];
    // eslint-disable-next-line no-unnecessary-generics
    termMap<T extends Term = Term, V = any>(entries?: Array<[Term, V]>): TermMap<T, V>;
}

declare const factory: TermMapFactory;
export default factory;
