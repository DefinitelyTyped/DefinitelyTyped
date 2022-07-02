import { LoggerOptions, Migrations } from 'meteor/percolate:migrations';

// $ExpectType void
Migrations.add({
  version: 1,
  up() {}
});

// $ExpectType void
Migrations.add({
  version: 1,
  name: 'More pandas',
  up() {}
});

// $ExpectType void
Migrations.add({
  version: 2,
  name: 'Less pandas',
  up() {},
  down() {}
});

// @ts-expect-error
Migrations.add({});

// @ts-expect-error
Migrations.add({
  version: 1
});

// @ts-expect-error
Migrations.add({
  up() {}
});

function logger(options: LoggerOptions) {
  // $ExpectType "info" | "warn" | "error" | "debug"
  options.level;
  // $ExpectType string
  options.message;
  // $ExpectType "Migrations"
  options.tag;
}

// $ExpectType void
Migrations.config({
  collectionName: 'pandas',
  log: true,
  logger,
  logIfLatest: true
});

// $ExpectType void
Migrations.config({
  log: true,
  logger,
  logIfLatest: true
});

// $ExpectType void
Migrations.config({
  logger,
  logIfLatest: true,
});

// $ExpectType void
Migrations.config({logIfLatest: true});

// $ExpectType void
Migrations.config({});

// $ExpectType void
Migrations.config({ logger: null });

// @ts-expect-error
Migrations.config();

// $ExpectType number
Migrations.getVersion();

// $ExpectType void
Migrations.migrateTo(1);

// $ExpectType void
Migrations.migrateTo('latest');

// $ExpectType void
Migrations.migrateTo('3,rerun');

// $ExpectType void
Migrations.start();

// $ExpectType void
Migrations.unlock();
