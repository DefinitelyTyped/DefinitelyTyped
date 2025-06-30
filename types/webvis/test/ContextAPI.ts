function test(testContext: webvis.ContextAPI): void {
    const name: string = testContext.getName();

    const clearPromise: Promise<void> = testContext.clear();

    const testViewer: webvis.ViewerAPI = testContext.createViewer("testViewer", document.createElement("canvas"));

    const firstViewer: webvis.ViewerAPI = testContext.getViewer();

    const namedViewer: webvis.ViewerAPI = testContext.getViewer("myViewer");

    const viewers: webvis.ViewerAPI[] = testContext.getViewers();

    testContext.removeViewer(testViewer);
}
