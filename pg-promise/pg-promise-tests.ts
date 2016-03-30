/// <reference path="./pg-promise.d.ts" />

import * as pgpromise from "pg-promise";

let db: pgpromise.PromiseClient;
let pgp: pgpromise.PgPromise;

db.one('sql', { 'values': 'values' });
db.oneOrNone('sql', { 'values': 'values' });
db.many('sql', { 'values': 'values' });
db.many('sql', { 'values': 'values' }, { 'optional': 'optional' });

// All functions
db.none('sql');
db.one('sql');
db.many('sql');
db.query('sql');


db.any('sql');
db.oneOrNone('sql');
db.manyOrNone('sql');

db.func('sql');
db.proc('sql');

db.task(() => {});
db.tx(() => {});

// Optional values
db.none('sql', { 'values': 'values' });

// QRM parameter
db.none('sql', { 'values': 'values' }, { 'QRM': 'QRM' });
