function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const polylineId: number = testViewer.createPolyline([0, 0, 0, 0, 2, 0], {
        color: [1, 0, 0, 1],
        width: 2,
        transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    });

    testViewer.changePolyline(polylineId, {
        color: [0, 1, 0, 1],
        width: 4,
        transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1],
    });

    testViewer.removePolyline(polylineId);
}
