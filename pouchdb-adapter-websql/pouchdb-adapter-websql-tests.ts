/// <reference path="../pouchdb-core/pouchdb-core.d.ts" />
/// <reference path="./pouchdb-adapter-websql.d.ts" />

namespace PouchDBAdapterWebSQLTests {
    function isBoolean(someBoolean: boolean) {
    }
    function isNumber(someNumber: number) {
    }
    function isString(someString: string) {
    }

    function testConstructor() {
        type MyModel = { numericProperty: number };

        let db = new PouchDB('basic');
        db = new PouchDB(null, {
            adapter: 'websql'
        });
        db = new PouchDB('sized', {
            adapter: 'websql',
            size: 10
        });

        db.info().then((info) => {
            isBoolean(info.sqlite_plugin);
            isString(info.websql_encoding);
        });
    }
}
