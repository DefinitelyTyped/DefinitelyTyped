/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-adapter-fruitdown.d.ts" />

namespace PouchDBAdapterFruitdownTests {
    function testConstructor() {
        type MyModel = { numericProperty: number };
        let model: PouchDB.Core.Document<MyModel>;

        let db = new PouchDB<MyModel>(null, {
            adapter: 'fruitdown',
        });
        db.get('model').then((result) => model);
        db = new PouchDB<MyModel>('myDb', {
            adapter: 'fruitdown',
        });
        db.get('model').then((result) => model);
    }
}
