import levelup = require('levelup');
import sub from 'subleveldown';
import { AbstractLevelDOWN } from 'abstract-leveldown';

interface StringEncoding {
    encode(val: any): string;
    decode(val: string): any;
    buffer: boolean;
    type: string;
}

declare const stringEncoding: StringEncoding;

const db = levelup(new AbstractLevelDOWN('here'), {
    keyEncoding: stringEncoding,
    valueEncoding: stringEncoding,
});

const example = sub<string>(db, 'example', { separator: '!' });
const nested = sub<string, number>(example, 'nested');

example.open();
example.close();
example.open(error => {});

example.close(error => {});

example.put('key', {});
example.put('key', {}, error => {});
example.put('key', {}, { sync: true }, error => {});

example.put('hello', 'world', () => {
    nested.put('hi', 1, () => {
        example.createReadStream().on('data', console.log);
    });
});

example.get('key', { keyEncoding: 'json' }, (error, val) => {});
example.get('key', { fillCache: true }, (error, val) => {});
example.get('key', (error, val) => {});

example.del('key');
example.del('key', error => {});
example.del('key', { keyEncoding: 'json' }, error => {});
example.del('key', { sync: true }, error => {});

example.batch(
    [
        {
            type: 'put',
            key: [1, 2, 3],
            value: { some: 'json' },
        },
    ],
    (error: Error | undefined) => {},
);

example
    .batch()
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
