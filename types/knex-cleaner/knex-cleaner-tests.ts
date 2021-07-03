import { clean } from 'knex-cleaner';
import * as Knex from 'knex';

const knex: Knex = Knex({ dialect: 'pg' });

clean(knex); // $ExpectType Promise<void>
clean(knex, {}); // $ExpectType Promise<void>
clean(knex, { mode: 'delete', restartIdentity: false, ignoreTables: ['table1', 'table2'] }); // $ExpectType Promise<void>
clean(knex, { mode: 'delete' }); // $ExpectType Promise<void>
clean(knex, { restartIdentity: false }); // $ExpectType Promise<void>
clean(knex, { ignoreTables: ['table1', 'table2'] }); // $ExpectType Promise<void>
clean(knex, { restartIdentity: false, ignoreTables: ['table1', 'table2'] }); // $ExpectType Promise<void>
clean(knex, { mode: 'delete', ignoreTables: ['table1', 'table2'] }); // $ExpectType Promise<void>
clean(knex, { mode: 'delete', restartIdentity: false }); // $ExpectType Promise<void>
clean(knex, { unknown: 1 }); // $ExpectError
