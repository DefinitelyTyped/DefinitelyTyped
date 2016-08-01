/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-adapter-http.d.ts" />

function testHttpDbCreation() {
    const basicDB = new PouchDB('basic', {
        adapter: 'http'
    });
}
