function isBoolean(someBoolean: boolean) {
}
function isNumber(someNumber: number) {
}
function isString(someString: string) {
}

function testConstructor() {
    interface MyModel {
        numericProperty: number;
    }

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
