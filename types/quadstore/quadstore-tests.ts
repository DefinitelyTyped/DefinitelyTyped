import Quadstore from 'quadstore';
import levelup from 'levelup';
import MemDown from 'memdown';
import {Parser} from 'n3';
import { AbstractLevelDOWN } from 'abstract-leveldown';
import 'mocha'; // https://stackoverflow.com/a/47794385/2487330
import {expect} from 'chai';

const tomAndJerry = `PREFIX c: <http://example.org/cartoons#>
                     c:Tom a c:Cat.
                     c:Jerry a c:Mouse;
                             c:smarterThan c:Tom.`;

async function createStore() {
    const db: AbstractLevelDOWN = await new Promise((resolve, reject) => {
        levelup(new MemDown(), (err, db) => {
            if (err) reject(err);
            resolve(db);
        });
    });
    return new Quadstore(db);
}

async function loadTomAndJerry(store: Quadstore, graph?: string) {
    const parser = new Parser();
    const rdfQuads = parser.parse(tomAndJerry);
    const stringQuads = rdfQuads.map(q => ({
        subject: q.subject.value,
        predicate: q.predicate.value,
        object: q.object.value,
        graph: graph || q.graph.value
    }));
    return store.put(stringQuads);
}

describe('Test basic QuadStore functionality', function() {
    let quadstore: Quadstore;
    const graph = 'http://default.graph/';

    before(async function() {
        quadstore = await createStore();
        await loadTomAndJerry(quadstore, graph);
    });

    it('Should insert and retrieve data', async function() {
        const results = await quadstore.get({});
        expect(results.length).to.eq(3);
    });

    it('Should match records correctly', async function() {
        const results = await quadstore.get({subject: 'http://example.org/cartoons#Jerry'});
        expect(results.length).to.eq(2);
    });

    it('Should insert data only once', async function() {
        await loadTomAndJerry(quadstore, graph);
        const results = await quadstore.get({});
        expect(results.length).to.eq(3);
    });

    it('Should delete specific data', async function() {
        const p = 'http://example.org/cartoons#';
        await quadstore.del([{subject: p + 'Jerry', predicate: p + 'smarterThan', object: p + 'Tom', graph}]);
        const results = await quadstore.get({});
        expect(results.length).to.eq(2);
    });

    it('Should delete matching data', async function() {
        const p = 'http://example.org/cartoons#';
        await quadstore.del({subject: p + 'Jerry'});
        const results = await quadstore.get({});
        expect(results.length).to.eq(1);
    });
});