import electron = require('electron');
import storage = require('electron-json-storage');

const DATA_PATH = '~/Downloads';

console.log(storage.DEFAULT_DATA_PATH.length);

storage.setDataPath(DATA_PATH);
console.log(DATA_PATH.length);

console.log(storage.getDataPath().length);

storage.set('foo', { foo: 'bar' }, (err: any) => { });
storage.set('bar', { foo: 'bar' }, (err: any) => { });

storage.get('foo', (err: any, data: object) => {
    console.log(JSON.stringify(data));
});

storage.getMany(['foo', 'bar'], (err: any, data: object) => {
    console.log(JSON.stringify(data));
});

storage.getAll((err: any, data: object) => {
    console.log(JSON.stringify(data));
});

storage.has('foo', (err: any, hasKey: boolean) => {
    console.log("hasKey?: %s", hasKey);
});

storage.keys((err: any, keys: string[]) => {
    console.log(keys);
});

storage.remove("foo", (err: any) => {
    console.log(err);
});

storage.clear((err: any) => {
    console.log(err);
});
