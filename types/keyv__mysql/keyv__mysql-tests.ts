import Keyv = require('keyv');
import KeyvMysql = require('@keyv/mysql');

new Keyv('mysql://user:pass@localhost:3306/dbname', { table: 'cache' });

new KeyvMysql('mysql://user:pass@localhost:3306/dbname');
new KeyvMysql({ uri: 'mysql://user:pass@localhost:3306/dbname' });
new KeyvMysql({ table: 'cache' });
new KeyvMysql({ keySize: 100 });

const mysql = new KeyvMysql({ uri: 'mysql://user:pass@localhost:3306/dbname' });
new Keyv({ store: mysql });
