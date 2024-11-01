function testIndexedDBDbCreation() {
    const indexedDB = new PouchDB("indexeddb", {
        adapter: "indexeddb",
    });

    indexedDB.purge("docId", "rev");
}
