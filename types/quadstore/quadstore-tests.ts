import QuadStore = require('quadstore');
import { Triple } from 'quadstore';
import { AbstractLevelDOWN } from 'abstract-leveldown';

const triples = [
    {
        subject: 'http://example.org/cartoons#Tom',
        predicate: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
        object: 'http://example.org/cartoons#Cat'
    },
    {
        subject: 'http://example.org/cartoons#Jerry',
        predicate: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
        object: 'http://example.org/cartoons#Mouse'
    },
    {
        subject: 'http://example.org/cartoons#Jerry',
        predicate: 'http://example.org/cartoons#smarterThan',
        object: 'http://example.org/cartoons#Tom'
    }
];

const createQuads = (triples: Triple[], graph: string) => triples.map(t => ({...t, graph}));

const graph = 'http://default.graph/';

// These are equivalent
const createQuadstore1 = (db: AbstractLevelDOWN) => new QuadStore(db);
const createQuadstore2 = (db: AbstractLevelDOWN) => new QuadStore.QuadStore(db);

const defaultQuads = createQuads(triples, 'http://default.graph');

const db: AbstractLevelDOWN = <AbstractLevelDOWN> <unknown> undefined;
const qs: QuadStore = createQuadstore1(db);

qs.put(defaultQuads);

qs.get({subject: 'http://example.org/cartoons#Jerry'});
