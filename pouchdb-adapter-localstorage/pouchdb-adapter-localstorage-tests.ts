/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-adapter-localstorage.d.ts" />

namespace PouchDBAdapterLocalStorageyTests {
    function testConstructor() {
        type MyModel = { numericProperty: number };

        let db = new PouchDB<MyModel>(null, {
            adapter: 'localstorage',
        });
        db = new PouchDB<MyModel>('myDb', {
            adapter: 'localstorage',
        });
    }
}
