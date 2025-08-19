function test(testContext: webvis.ContextAPI): void {
    const drawingResult: webvis.ViewerDrawingResult = {
        geometries: [{
            positions: [-1, -1, -1, 1, 1, 1],
            color: [1, 0, 0, 1],
            primitiveType: 1,
            volume: [-1, -1, -1, 1, 1, 1],
        }],
        thumbnail: "base64...",
        version: {
            major: 1,
            minor: 0,
            patch: 2,
        },
    };

    const drawingId: number = testContext.createDrawing(drawingResult, {
        enabled: true,
        name: "test drawing",
    });

    testContext.changeDrawing(drawingId, {
        enabled: false,
        name: "changed drawing",
    });

    const drawings: number[] = testContext.getDrawings();

    testContext.requestDrawingData(drawingId).then((data: webvis.DrawingData) => {
        console.log(data);
    });

    testContext.removeDrawing(drawingId, false);

    testContext.registerListener([webvis.EventType.DRAWING_CREATED], (event: webvis.DrawingCreatedEvent) => {
        console.log("Drawing created", event.drawingId);
    });

    testContext.registerListener([webvis.EventType.DRAWING_CHANGED], (event: webvis.DrawingChangedEvent) => {
        console.log("Drawing changed", event.drawingId, event.properties);
    });

    testContext.registerListener([webvis.EventType.DRAWING_REMOVED], (event: webvis.DrawingRemovedEvent) => {
        console.log("Drawing removed", event.drawingId);
    });
}
