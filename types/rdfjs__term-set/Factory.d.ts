import TermSet from '.';
import { Term } from 'rdf-js';

export class TermSetFactory {
    static exports: ['termSet'];
    termSet<T extends Term = Term>(terms?: T[] | null): TermSet<T>;
}

export default TermSetFactory;
