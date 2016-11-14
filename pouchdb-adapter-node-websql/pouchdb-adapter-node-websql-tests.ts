/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-adapter-node-websql.d.ts" />

namespace PouchDBAdapterNodeWebSQLTests {
    function isBoolean(someBoolean: boolean) {
    }
    function isNumber(someNumber: number) {
    }
    function isString(someString: string) {
    }

    function testConstructor() {
        type MyModel = { numericProperty: number };

        let db = new PouchDB<MyModel>(null, {
            adapter: 'websql',
            size: 5,
        });
        db = new PouchDB<MyModel>('myDb', {
            adapter: 'websql',
        });

        db.info().then((info) => {
            isBoolean(info.sqlite_plugin);
            isString(info.websql_encoding);
        });
    }
}
