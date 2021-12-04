import { databaseManagerFactory } from 'knex-db-manager';

const factory = databaseManagerFactory({ knex: 'abc', dbManager: {} }); // $ExpectType KnexDbManager

const knexInstance = factory.knexInstance();

// Should be able to destroy an knex instance
knexInstance.destroy();
