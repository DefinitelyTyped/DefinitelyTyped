import { databaseManagerFactory } from 'knex-db-manager';

databaseManagerFactory({ knex: 'abc', dbManager: {} }); // $ExpectType KnexDbManager
