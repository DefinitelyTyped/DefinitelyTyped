import PouchDB = require('pouchdb-core');

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
            isNumber(doc!.foo);
            isString(doc!._id);
            isString(doc!._rev);
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

function testBulkDocs() {
    const db = new PouchDB<MyModel>();
    interface MyModel {
        property: string;
    }
    const model = { property: 'test' };
    const model2 = { property: 'test' };

    const isError = (
        result: PouchDB.Core.Response | PouchDB.Core.Error
    ): result is PouchDB.Core.Error => {
        return !!(<PouchDB.Core.Error> result).error;
    };

    db.bulkDocs([model, model2]).then((result) => {
        result.forEach(result => {
          if (!isError(result)) {
            const { ok, id, rev } = result;
            isString(id);
            isString(rev);
          }
        });
    });

    db.bulkDocs([model, model2], null, (error, response) => {
    });
}

function testBulkGet() {
    const db = new PouchDB();
    db.bulkGet({docs: [{id: 'a', rev: 'b'}, {id: 'b', rev: 'c'}, {id: 'c', rev: 'd'}]}).then((response) => {
        const results = response.results;
        results.forEach((result) => {
            const id = result.id;
            const docs = result.docs;
            docs.map((doc) => doc);
        });
    });
    db.bulkGet({docs: [{id: 'a', rev: 'b'}, {id: 'b', rev: 'c'}, {id: 'c', rev: 'd'}]}, (error, response) => {});
}
function testRevsDiff() {
    const db = new PouchDB();
    db.revsDiff({a: ['1-a', '2-b']}).then((result) => {});
    db.revsDiff({a: ['1-a', '2-b']}, (error, response) => {});
}

function testCompact() {
    const db = new PouchDB();
    // Promise version
    db.compact().then((res: PouchDB.Core.Response) => {});
    // Promise version with optional options
    db.compact({interval: 300}).then((res: PouchDB.Core.Response) => {});
    // Options with a callback
    db.compact({interval: 300}, (res: PouchDB.Core.Response) => {});
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
        property: string;
    }
    let model = { property: 'test' };
    const id = 'model';

    const db = new PouchDB<MyModel>();

    db.on("closed", () => {});

    db.post(model).then((result) => {
        isString(result.id);
    });
    db.post(model, null, (error, response) => {
    });

    db.get(id).then((result) => {
        model = result;
        isString(result._id);
        isString(result._rev);
    });
    db.get(id, null, (error, result) => {
    });

    db.put(model).then((error) => {
    });
    db.put(model, null, (error) => {
    });

    db.info().then((info) => {
    });
    db.info((error, result) => {
    });

    // "Round-trippable": can put back a document from get
    db.get('id').then(doc => db.put(doc));

    PouchDB.debug.enable('*');
}

function testRemove() {
    interface MyModel {
        property: string;
    }
    const id = 'model';
    const rev = 'rev';
    const model = { _id: id, _rev: rev, existingDocProperty: 'any' };

    const db = new PouchDB<MyModel>();

    // Promise version with doc
    db.remove(model).then((res: PouchDB.Core.Response) => {});

    // Promise version with doc and options
    db.remove(model, {}).then((res: PouchDB.Core.Response) => {});

    // Promise version with docId and rev
    db.remove(id, rev).then((res: PouchDB.Core.Response) => {});

    // Promise version with docId and rev and options
    db.remove(id, rev, {}).then((res: PouchDB.Core.Response) => {});

    // Callback version with doc
    db.remove(model, {}, (res: PouchDB.Core.Response) => {});

    // Callback version with docId and rev
    db.remove(id, rev, {}, (res: PouchDB.Core.Response) => {});
}

function testChanges() {
    interface MyModel {
        foo: string;
    }
    const db = new PouchDB<MyModel>();

    db.changes({
        live: true,
        since: 'now',
        timeout: 1,
        include_docs: true,
        limit: 1,
        conflicts: true,
        attachments: true,
        binary: true,
        descending: true,
        heartbeat: 1,
        filter: '',
        doc_ids: [''],
        query_params: {paramName: 'any'},
        view: ''
    })
    .on('change', (change) => {
        const _id: string = change.id;
        const _seq: number = change.seq as number;
        const _seq_couch20: string = change.seq as string;
        const _changes: Array<{ rev: string }> = change.changes;
        const _foo: string = change.doc!.foo;
        const _deleted: boolean | undefined = change.doc!._deleted;
        const _attachments: PouchDB.Core.Attachments | undefined = change.doc!._attachments;
    })
    .on('complete', (info) => {
        const _status: string = info.status;
        const _last_req: number = info.last_seq as number;
        const _last_seq_couch20: string = info.last_seq as string;
        const change = info.results[0];

        const _id: string = change.id;
        const _seq: number = change.seq as number;
        const _seq_couch20: string = change.seq as string;
        const _changes: Array<{ rev: string }> = change.changes;
        const _deleted: boolean | undefined = change.doc!._deleted;
        const _attachments: PouchDB.Core.Attachments | undefined = change.doc!._attachments;
    });

    db.changes({
        since: 1,
        timeout: false,
        limit: false,
        heartbeat: false,
        filter: (doc: any, params: any) => {}
    });

    db.changes({ limit: 50 }).then(() => {});
}

function testRemoteOptions() {
    const db = new PouchDB('http://example.com/dbname', {
        ajax: {
            cache: false,
            timeout: 10000,
            headers: {
                'X-Some-Special-Header': 'foo'
            },
        },
        auth: {
            username: 'mysecretusername',
            password: 'mysecretpassword'
        },
        skip_setup: true
    });
}

function heterogeneousGenericsDatabase(db: PouchDB.Database) {
    interface Cat {
        meow: string;
    }

    interface Boot {
        thud: boolean;
    }

    // Attachment test
    db.put<Cat>({
        _attachments: {
            ['meme.gif']: {
                content_type: 'image/gif',
                data: new Blob(['fake example'])
            }
        },
        meow: 'roar'
    });

    db.allDocs<Cat>({ startkey: 'cat/', endkey: 'cat/\uffff', include_docs: true })
        .then(cats => {
            for (const row of cats.rows) {
                if (row.doc) {
                    row.doc.meow; // $ExpectType string

                    // Round-trip test
                    db.put(row.doc);
                    db.put<Cat>(row.doc);
                    // Generic strictness test
                    db.put<Boot>(row.doc); // $ExpectError
                }
            }
        });
    db.allDocs<Boot>({ startkey: 'boot/', endkey: 'boot/\uffff', include_docs: true })
        .then(boots => {
            for (const row of boots.rows) {
                if (row.doc) {
                    row.doc.thud; // $ExpectType boolean
                }
            }
        });
}
