import { clean } from 'knex-cleaner';
import { knex, Knex } from 'knex';

const knexInstance: Knex = knex({ dialect: 'pg' });

clean(knexInstance); // $ExpectType Promise<void>
clean(knexInstance, {}); // $ExpectType Promise<void>
clean(knexInstance, { mode: 'delete', restartIdentity: false, ignoreTables: ['table1', 'table2'] }); // $ExpectType Promise<void>
clean(knexInstance, { mode: 'delete' }); // $ExpectType Promise<void>
clean(knexInstance, { restartIdentity: false }); // $ExpectType Promise<void>
clean(knexInstance, { ignoreTables: ['table1', 'table2'] }); // $ExpectType Promise<void>
clean(knexInstance, { restartIdentity: false, ignoreTables: ['table1', 'table2'] }); // $ExpectType Promise<void>
clean(knexInstance, { mode: 'delete', ignoreTables: ['table1', 'table2'] }); // $ExpectType Promise<void>
clean(knexInstance, { mode: 'delete', restartIdentity: false }); // $ExpectType Promise<void>
// @ts-expect-error
clean(knexInstance, { unknown: 1 });
