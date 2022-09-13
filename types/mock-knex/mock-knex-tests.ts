import * as mockDb from 'mock-knex';

interface Knex {
    client: any;
}

interface KnexOptions {
    client: string;
}

function knex(opt: KnexOptions): Knex {
    return { client: {} };
}

const db = knex({
    client: 'sqlite'
});

mockDb.mock(db);

const tracker = mockDb.getTracker();
tracker.install();
tracker.on('query', (query, step) => {
    if (query.method === 'first' || step === 1) {
        query.response([{
            a: 1
        }, {
            a: 2
        }, {
            a: 3
        }], {
            stream: false
        });
    } else {
        query.reject(new Error('bad query'));
    }
});

const queries = tracker.queries;
if (tracker !== queries.tracker) {
    throw new Error('unexpected query tracker');
}
if (queries.count() > 0) {
    // $ExpectType string
    queries.first().method;
    // $ExpectType string
    queries.last().sql;

    queries.track({ query: 'SELECT * FROM table' }, (query) => {
        // $ExpectType { query: string; }
        query;
    }, (error) => {
        // $ExpectType Error
        error;
    });
    queries.reset();
}

tracker.uninstall();

mockDb.unmock(db);
