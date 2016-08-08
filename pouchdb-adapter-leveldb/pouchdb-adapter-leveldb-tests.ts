/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-adapter-leveldb.d.ts" />

namespace PouchDBAdapterLevelDBTests {
    function testConstructor() {
        type MyModel = { numericProperty: number };

        let db = new PouchDB<MyModel>(null, {
            adapter: 'leveldb',
        });
        db = new PouchDB<MyModel>('myDb', {
            adapter: 'leveldb',
        });
    }
}
