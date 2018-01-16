import * as PouchDB from 'pouchdb';

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
        });
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
    const db = new PouchDB();

    db.destroy({}, (error) => {
    });
    db.destroy().then(() => {
            }).catch((error) => {
            });
}

function testBasics() {
    interface MyModel {
        property: 'someProperty ';
    }
    let model: PouchDB.Core.Document<MyModel>;
    const id = 'model';

    let db = new PouchDB<MyModel>();
    db = new PouchDB<MyModel>(null, {
        adapter: 'fruitdown'
    });
    db = new PouchDB<MyModel>(null, {
        adapter: 'http'
    });
    db = new PouchDB<MyModel>(null, {
        adapter: 'idb'
    });
    db = new PouchDB<MyModel>(null, {
        adapter: 'leveldb'
    });
    db = new PouchDB<MyModel>(null, {
        adapter: 'localstorage'
    });
    db = new PouchDB<MyModel>(null, {
        adapter: 'memory'
    });
    db = new PouchDB<MyModel>(null, {
        adapter: 'websql'
    });
    db = new PouchDB<MyModel>(null, {
        adapter: 'websql',
        size: 100
    });

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
    db.put(model,  null, (error) => {
    });

    db.info().then((info) => {
    });
    db.info((error, result) => {
    });

    db.viewCleanup().catch((error) => {
    });
}
