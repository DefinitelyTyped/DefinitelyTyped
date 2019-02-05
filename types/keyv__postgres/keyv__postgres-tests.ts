import Keyv = require('keyv');
import KeyvPostgres = require('@keyv/postgres');

new Keyv('postgresql://user:pass@localhost:5432/dbname', { table: 'cache' });

new KeyvPostgres({ uri: 'postgresql://user:pass@localhost:5432/dbname' });
new KeyvPostgres({ table: 'cache' });
new KeyvPostgres({ keySize: 100 });

const postgres = new KeyvPostgres({ uri: 'postgresql://user:pass@localhost:5432/dbname' });
new Keyv({ store: postgres });
