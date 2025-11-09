function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const state: webvis.ViewerState = testViewer.getState();

    testContext.registerListener([webvis.EventType.VIEWER_ERROR], (event: webvis.ViewerErrorEvent) => {
        console.log("Viewer error", event.state, event.viewer);
    });

    testContext.registerListener([webvis.EventType.VIEWER_STATE_CHANGED], (event: webvis.ViewerStateChangedEvent) => {
        console.log("Viewer error", event.state, event.viewer);
    });
}
