/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-http.d.ts" />

namespace PouchDBHttpTests {
    function testConstructor() {
        type MyModel = { numericProperty: number };
        let model: PouchDB.Core.Document<MyModel>;

        let db = new PouchDB<MyModel>('myDb', {
            adapter: 'http',
        });
        db.get('model').then((result) => model);
    }
}
