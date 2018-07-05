function testConstructor() {
    interface MyModel {
        numericProperty: number;
    }

    let db = new PouchDB<MyModel>(null, {
        adapter: 'localstorage',
    });
    db = new PouchDB<MyModel>('myDb', {
        adapter: 'localstorage',
    });
}
