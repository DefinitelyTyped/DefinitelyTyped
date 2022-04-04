import levelup = require('levelup');
import { AbstractLevelDOWN } from 'abstract-leveldown';
import ttl, { LevelTTL, LevelTTLOptions } from 'level-ttl';

const db = levelup(new AbstractLevelDOWN('here'));

const opts: LevelTTLOptions = { defaultTTL: 1000, checkFrequency: 100 };
const example: LevelTTL = ttl(db, opts);

example.open();
example.close();
example.open(error => { });

example.close(error => { });

example.stop();
example.stop(error => { });

example.put('key', { ttl: 500 });
example.put('key', {}, error => { });
example.put('key', { ttl: 500 }, { sync: true }, error => { });

example.put('hello', 'world', () => {
});

example.get('key', { keyEncoding: 'json' }, (error, val) => { });
example.get('key', { fillCache: true }, (error, val) => { });
example.get('key', (error, val) => { });

example.ttl('key', 500);
example.ttl('key', 500, err => { });

example.del('key');
example.del('key', error => { });
example.del('key', { keyEncoding: 'json' }, error => { });
example.del('key', { sync: true }, error => { });

example.batch(
    [
        {
            type: 'put',
            key: [1, 2, 3],
            value: { some: 'json' },
        },
    ],
    { ttl: 500 },
    (error: Error | undefined) => { },
);

example
    .batch() // Not supported by level-ttl
    .del('father')
    .put('name', 'Yuri Irsenovich Kim')
    .put('dob', '16 February 1941')
    .put('spouse', 'Kim Young-sook')
    .put('occupation', 'Clown')
    .write(() => {
        console.log('Done!');
    });

// $ExpectType boolean
example.isOpen();
// $ExpectType boolean
example.isClosed();

example
    .createReadStream()
    .on('data', (data: any) => {
        console.log(data.key, '=', data.value);
    })
    .on('error', (err: any) => {
        console.log('Oh my!', err);
    })
    .on('close', () => {
        console.log('Stream closed');
    })
    .on('end', () => {
        console.log('Stream closed');
    });
