import * as mockDb from "mock-knex";

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
    if (query.method === "first" || step === 1) {
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
        query.reject(new Error("bad query"));
    }
});
tracker.uninstall();

mockDb.unmock(db);
