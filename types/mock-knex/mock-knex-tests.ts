import * as knex from "knex";
import * as mockDb from "mock-knex";

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
