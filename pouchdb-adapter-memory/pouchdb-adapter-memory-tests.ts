namespace PouchDBAdapterMemoryTests {
    function testConstructor() {
        type MyModel = { numericProperty: number };

        let db = new PouchDB<MyModel>(null, {
            adapter: 'memory',
        });
        db = new PouchDB<MyModel>('myDb', {
            adapter: 'memory',
        });
    }
}
