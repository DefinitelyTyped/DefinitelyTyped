import TermMap from './index.js';
import { Term } from '@rdfjs/types';

export interface TermMapFactory {
    // eslint-disable-next-line no-unnecessary-generics
    termMap<T extends Term = Term, V = any>(entries?: Array<[T, V]>): TermMap<T, V>;
}

interface FactoryCtor {
    new(): TermMapFactory;
    exports: ['termMap'];
}
declare const factoryCtor: FactoryCtor;
export default factoryCtor;
