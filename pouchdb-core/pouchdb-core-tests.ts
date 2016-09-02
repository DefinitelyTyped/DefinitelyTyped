/// <reference path="./pouchdb-core.d.ts" />

namespace PouchDBCoreTests {
    function isString(someString: string) {
    }
    function isNumber(someNumber: number) {
    }

    function testAllDocs() {
        const db = new PouchDB<{ foo: number }>();

        db.allDocs().then(({ offset, total_rows, rows }) => {
            isNumber(offset);
            isNumber(total_rows);

            rows.forEach(({ id, key, value, doc }) => {
                isString(id);
                isString(key);
                isString(value.rev);

                // check document property
                isNumber(doc.foo);
            })
        });

        db.allDocs({ startkey: "a", endkey: "b" });
        db.allDocs({ startkey: "a", endkey: "b", inclusive_end: true });
        db.allDocs({ keys: ["a", "b", "c" ]});
        db.allDocs({ key: "a" });
        db.allDocs({
            attachments: true,
            binary: true,
            conflicts: true,
            descending: true,
            include_docs: true,
            limit: 5,
            skip: 1
        });
    }

    function testDestroy() {
        const db = new PouchDB<{}>();

        db.destroy({}, (error) => {
        });
        db.destroy().then(() => {
                }).catch((error) => {
                });
    }

    function testBasics() {
        type MyModel = { property: 'someProperty '};
        let model: PouchDB.Core.Document<MyModel>;
        const id = 'model';

        const db = new PouchDB<MyModel>();

        db.post(model).then((result) => {
            isString(result.id);
        });
        db.post(model, null, (error, response) => {
        });

        db.get(id).then((result) => model = result);
        db.get(id, null, (error, result) => {
        });

        db.put(model).then((error) => {
        });
        db.put(model, null, null, null, (error) => {
        });

        db.info().then((info) => {
        });
        db.info({ ajax: { cache: true }}, (error, result) => {
        });
    }
}
