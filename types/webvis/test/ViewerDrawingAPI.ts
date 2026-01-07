function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    testViewer.cancelDrawingMode();

    testViewer.enterDrawingMode();

    const drawingResult: Promise<webvis.ViewerDrawingResult | undefined> = testViewer.leaveDrawingMode({
        thumbnail: true,
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        brushPrimitiveType: "triangleStrip",
        penPrimitiveType: "triangleStrip",
        shapePrimitiveType: "triangleStrip",
        subDivisions: 50,
    });
}
