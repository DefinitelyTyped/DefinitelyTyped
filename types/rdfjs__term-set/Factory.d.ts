import TermSet from './index.js';
import { Term } from '@rdfjs/types';

export class TermSetFactory {
    static exports: ['termSet'];
    termSet<T extends Term = Term>(terms?: T[] | null): TermSet<T>;
}

export default TermSetFactory;
