function testConstructor() {
    let db = new PouchDB('basic');
    db = new PouchDB(null, {
        adapter: 'cordova-sqlite'
    });
    db = new PouchDB('location', {
        adapter: 'cordova-sqlite',
        location: 'default'
    });
    db = new PouchDB('ioslocation', {
        adapter: 'cordova-sqlite',
        iosDatabaseLocation: 'default'
    });
    db = new PouchDB('androidDatabaseImplementation', {
        adapter: 'cordova-sqlite',
        location: 'default',
        androidDatabaseImplementation: 2
    });
    db = new PouchDB('auto_compaction', {
        adapter: 'cordova-sqlite',
        location: 'default',
        auto_compaction: true
    });
}
