import TermSet from '.';
import { Term } from 'rdf-js';

export interface TermSetFactory {
    exports: ['termSet'];
    termSet<T extends Term = Term>(terms?: T[] | null): TermSet<T>;
}

declare const factory: TermSetFactory;
export default factory;
