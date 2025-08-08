function test(testContext: webvis.ContextAPI): void {
    const snapshotId: Promise<number> = testContext.createSnapshot("test snapshot", {
        thumbnail: true,
        thumbnailHeight: 100,
        thumbnailWidth: 100,
    });

    const restoreSnapshotPromise: Promise<void> = testContext.restoreSnapshot(3);

    const changedProperties: webvis.SnapshotProperties = testContext.changeSnapshot(3, {
        name: "changed snapshot",
        order: 2,
    });

    testContext.removeSnapshot(1);

    const exportedSession: webvis.SessionStore = testContext.exportSession();

    const importSessionPromise: Promise<any> = testContext.importSession({});
    const importScenarioPromise: Promise<any> = testContext.importSession({}, "xscn");

    const storeSessionPromise: Promise<string | undefined> = testContext.storeSession();

    const transferSessionPromise: Promise<string | undefined> = testContext.transferSession();

    const restoreSessionPromise: Promise<void> = testContext.restoreSession("store-handle");

    const snapshots: number[] = testContext.getSnapshots();

    const snapshotData: Promise<webvis.SnapshotProperties | undefined> = testContext.requestSnapshotData(1);
}
