namespace PouchDBBrowserTests {
    function testConstructor() {
        type MyModel = { numericProperty: number };
        let model: PouchDB.Core.Document<MyModel>;

        let db = new PouchDB<MyModel>('mydb');
        db.viewCleanup().catch((error) => {
        });
    }
}
