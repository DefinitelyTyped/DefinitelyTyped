function test(testContext: webvis.ContextAPI): void {
    const collectionId0: number = testContext.createCollection();
    const collectionId1: number = testContext.createCollection([3, 7, 34]);

    testContext.removeCollection(84847);

    const collection: webvis.ICollection = testContext.getCollection(84847);

    const searchByVolumePromise: Promise<number> = testContext.searchByVolume(
        testContext.createBoxVolume([0, 0, 0], [1, 1, 1]),
        true,
        0,
    );

    testContext.addToCollection(84847, 5);
    testContext.addToCollection(84847, 5, true);

    testContext.removeFromCollection(84847, 5);
    testContext.removeFromCollection(84847, 5, true);

    const collectionElementsPromise: Promise<number[]> = testContext.getCollectionElements(84847);

    const getCollectionNodeCountPromise: Promise<number> = testContext.getCollectionNodeCount(84847);
}
