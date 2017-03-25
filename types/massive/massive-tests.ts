import * as Massive from 'massive';

Massive.connect({connectionString: 'foo'}, (err: Error, db: Massive.Massive) => {});

Massive.run('foo', 123, (err: Error, db: Massive.Massive) => {});