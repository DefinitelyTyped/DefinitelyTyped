import { DatasetCore, Term } from 'rdf-js';
import { ScoreCb } from '.';

interface SortArgs<T> {
    dataset: DatasetCore;
    objects: T[];
    score: ScoreCb;
}

declare function sortObjects(arg: SortArgs<{ term: Term }>): Array<{ term: Term }>;
declare function sortObjects<T>(arg: SortArgs<T> & {
    termCallback: (obj: T) => Term
}): T[];

export default sortObjects;
