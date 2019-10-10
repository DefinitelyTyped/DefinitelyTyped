import levelup from 'levelup';
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
    valueEncoding: stringEncoding
});

db.open();
db.close();
db.open((error) => {
});

db.close((error) => {
});

db.put("key", {});
db.put("key", {}, (error) => {});
db.put("key", {}, { sync: true}, (error) => {});

db.get("key", {keyEncoding: "json"}, (error, val) => {});
db.get("key", {fillCache: true}, (error, val) => {});
db.get("key", (error, val) => {});

db.del("key");
db.del("key", (error) => {});
db.del("key", {keyEncoding: "json"}, (error) => {});
db.del("key", {sync: true}, (error) => {});

db.batch([{
    type          : 'put'
    , key           : ([1, 2, 3])
    , value         : { some: 'json' }
}], (error: Error | undefined) => {});

db.batch()
    .del('father')
    .put('name', 'Yuri Irsenovich Kim')
    .put('dob', '16 February 1941')
    .put('spouse', 'Kim Young-sook')
    .put('occupation', 'Clown')
    .write(() => { console.log('Done!'); });

// $ExpectType boolean
db.isOpen();
// $ExpectType boolean
db.isClosed();

db.createReadStream()
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
