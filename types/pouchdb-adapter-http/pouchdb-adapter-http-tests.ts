function testHttpDbCreation() {
    const basicDB = new PouchDB('basic', {
        adapter: 'http'
    });
}
