import TermSet from '.';
import { Term } from 'rdf-js';

export default class Factory {
    static readonly exports: ['termSet'];
    termSet<T extends Term = Term>(terms?: T[] | null): TermSet<T>;
}
