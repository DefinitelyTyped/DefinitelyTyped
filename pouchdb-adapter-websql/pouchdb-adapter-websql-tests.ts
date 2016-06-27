/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-adapter-websql.d.ts" />

function testDbCreation() {
  const basicDB = new PouchDB('basic');
  const persistentDb = new PouchDB('unsized', {
    adapter: 'websql'
  });
  const temporaryDb = new PouchDB('sized', {
    adapter: 'websql',
    size: 10
  });
}
