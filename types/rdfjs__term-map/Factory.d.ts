import TermMap from '.';
import { Term } from 'rdf-js';

export default class Factory {
    static readonly exports: ['termMap'];
    // tslint:disable-next-line:no-unnecessary-generics
    termMap<T extends Term = Term, V = any>(entries?: Array<[Term, V]>): TermMap<T, V>;
}
