/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-adapter-idb.d.ts" />

function testIdbDbCreation() {
    const basicDB = new PouchDB('basic', {
        adapter: 'idb'
    });
    const persistentDb = new PouchDB('persistent', {
        adapter: 'idb',
        storage: 'persistent'
    });
    const temporaryDb = new PouchDB('temporary', {
        adapter: 'idb',
        storage: 'temporary'
    });
}
