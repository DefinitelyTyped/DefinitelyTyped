interface MyModel {
    numericProperty: number;
}

function testConstructor(model: PouchDB.Core.Document<MyModel>) {
    const db = new PouchDB<MyModel>('myDb', {
        adapter: 'http',
    });
    db.get('model').then((result) => model);
}
