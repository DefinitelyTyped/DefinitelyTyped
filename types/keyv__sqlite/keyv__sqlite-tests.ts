import Keyv = require('keyv');
import KeyvSqlite = require('@keyv/sqlite');

new Keyv('sqlite://path/to/database.sqlite', { table: 'cache' });

new KeyvSqlite({ uri: 'sqlite://path/to/database.sqlite' });
new KeyvSqlite({ busyTimeout: 10000 });
new KeyvSqlite({ table: 'cache' });
new KeyvSqlite({ keySize: 100 });

const sqlite = new KeyvSqlite({ uri: 'sqlite://path/to/database.sqlite' });
new Keyv({ store: sqlite });
