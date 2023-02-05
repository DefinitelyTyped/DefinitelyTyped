import { Term } from 'rdf-js';
import { ScoreFn } from '.';

interface SubjectExists {
    subject: Term;
}

interface ObjectExists {
    object: Term;
}

interface GraphExists {
    graph: Term;
}

interface PredicateExists {
    predicate: Term;
}

type ExistsCriteria = SubjectExists | GraphExists | PredicateExists | ObjectExists;

declare const exists: ScoreFn<[ExistsCriteria]>;
export default exists;
