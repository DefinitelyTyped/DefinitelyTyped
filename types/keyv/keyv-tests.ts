import Keyv = require("keyv");

new Keyv({
    uri: 'redis://user:pass@localhost:6379',
    namespace: "redis"
});

new Keyv('mongodb://user:pass@localhost:27017/dbname');
new Keyv('redis://user:pass@localhost:6379');
new Keyv('sqlite://path/to/database.sqlite');
new Keyv('postgresql://user:pass@localhost:5432/dbname');
new Keyv('mysql://user:pass@localhost:3306/dbname');
new Keyv();

(async () => {
    const keyv = new Keyv();

    keyv.on('error', err => console.log('Connection Error', err));

    await keyv.set('foo', 'expires in 1 second', 1000); // true
    await keyv.set('foo', 'never expires'); // true
    await keyv.get('foo'); // 'never expires'
    await keyv.delete('foo'); // true
    await keyv.clear(); // undefined
})();
