import Quadstore = require('quadstore');
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

const createQuadstore = (db: AbstractLevelDOWN) => new Quadstore(db);

const defaultQuads = createQuads(triples, 'http://default.graph');

const db: AbstractLevelDOWN = <AbstractLevelDOWN> <unknown> undefined;
const quadstore: Quadstore = createQuadstore(db);

quadstore.put(defaultQuads);

quadstore.get({subject: 'http://example.org/cartoons#Jerry'});
