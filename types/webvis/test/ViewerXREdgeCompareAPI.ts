function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const props: webvis.XREdgeCompareProperties = testViewer.getXREdgeCompareProperties();

    const changedProps: webvis.XREdgeCompareProperties = testViewer.changeXREdgeCompare({
        edgeDetectionThreshold: 0.5,
        forceEdgesBetweenParts: true,
        matchColor: [1, 0, 0, 1],
        noMatchColor: [0, 1, 0, 1],
        mode: webvis.XREdgeCompareMode.CAMERA_WITH_SCENE,
        searchRadius: 0.5,
    });

    const detectScore: Promise<webvis.XRAutoDetectScore[]> = testViewer.requestXRAutoDetectScores([3, 6, 9]);

    testContext.registerListener(
        [webvis.EventType.VIEWER_XR_EDGE_COMPARE_CHANGED],
        (event: webvis.ViewerXREdgeCompareChangedEvent) => {
            console.log("Edge compare changed", event.properties, event.viewer);
        },
    );
}
