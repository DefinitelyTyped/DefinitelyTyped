function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const changedProps: webvis.ViewerMagnifierProperties = testViewer.changeMagnifier({
        roundness: 0.5,
        enabled: true,
        position: [200, 200],
        size: [50, 50],
        zoomLevel: 2,
    });

    const props: webvis.ViewerMagnifierProperties = testViewer.getMagnifierProperties();

    testContext.registerListener(
        [webvis.EventType.VIEWER_MAGNIFIER_CHANGED],
        (event: webvis.ViewerMagnifierChangedEvent) => {
            console.log("Magnifier changed", event.properties, event.viewer);
        },
    );
}
