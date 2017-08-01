function testConstructor() {
    interface MyModel {
        numericProperty: number;
    }
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
