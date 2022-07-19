import { Migration, DbConfig, MigrationStep } from 'mongration';

const dbConfig: DbConfig = {
  hosts: 'localhost:27017',
  db: 'testdb',
  migrationCollection: 'migrationversions'
};

const migration = new Migration(dbConfig);
migration.add('1-add-foo.js');
migration.add(['2-add-bar.js', '3-add-foobar.js']);
migration.addAllFromPath('migrations');
migration.migrate((err, response) => {
  if (!err) {
    return response;
  }
});

// from https://github.com/awapps/mongration#creating-migration-steps
const step: MigrationStep = {
  id: '1-step',
  up: (db, cb) => {
    // $ExpectType Db
    db;
    // $ExpectType (err?: Error | undefined) => void
    cb;
  },
  down: (db, cb) => {
    // $ExpectType Db
    db;
    // $ExpectType (err?: Error | undefined) => void
    cb;
  }
};
