import electron = require('electron');
import storage = require('electron-json-storage');

const DATA_PATH = '~/Downloads';
const NEW_DATA_PATH = `${DATA_PATH}/new-data-path`;

console.log(storage.getDefaultDataPath().length);

storage.setDataPath(DATA_PATH);
console.log(DATA_PATH.length);

console.log(storage.getDataPath().length);

storage.set('foo', { foo: 'bar' }, (err: any) => { });
storage.set('bar', { foo: 'bar' }, (err: any) => { });
storage.set('baz', { foo: 'bar' }, {dataPath: NEW_DATA_PATH}, (err: any) => { });

storage.get('foo', (err: any, data: object) => {
    console.log(JSON.stringify(data));
});

storage.get('baz', {dataPath: NEW_DATA_PATH}, (err: any, data: object) => {
    console.log(JSON.stringify(data));
});

storage.getMany(['foo', 'bar'], (err: any, data: object) => {
    console.log(JSON.stringify(data));
});
storage.getMany(['baz'], {dataPath: NEW_DATA_PATH}, (err: any, data: object) => {
    console.log(JSON.stringify(data));
});

storage.getAll((err: any, data: object) => {
    console.log(JSON.stringify(data));
});

storage.getAll({dataPath: NEW_DATA_PATH}, (err: any, data: object) => {
    console.log(JSON.stringify(data));
});

storage.has('foo', (err: any, hasKey: boolean) => {
    console.log("hasKey?: %s", hasKey);
});

storage.has('baz', {dataPath: NEW_DATA_PATH}, (err: any, hasKey: boolean) => {
    console.log("hasKey?: %s", hasKey);
});

storage.keys((err: any, keys: string[]) => {
    console.log(keys);
});

storage.keys({dataPath: NEW_DATA_PATH}, (err: any, keys: string[]) => {
    console.log(keys);
});

storage.remove("foo", (err: any) => {
    console.log(err);
});

storage.remove("baz", {dataPath: NEW_DATA_PATH}, (err: any) => {
    console.log(err);
});

storage.clear((err: any) => {
    console.log(err);
});

storage.clear({dataPath: NEW_DATA_PATH}, (err: any) => {
    console.log(err);
});
