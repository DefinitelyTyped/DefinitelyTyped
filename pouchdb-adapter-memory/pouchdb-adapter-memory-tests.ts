/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-adapter-memory.d.ts" />

namespace PouchDBAdapterMemoryTests {
    function testConstructor() {
        type MyModel = { numericProperty: number };

        let db = new PouchDB<MyModel>(null, {
            adapter: 'memory',
        });
        db = new PouchDB<MyModel>('myDb', {
            adapter: 'memory',
        });
    }
}
