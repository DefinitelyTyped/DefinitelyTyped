function test(testContext: webvis.ContextAPI): void {
    const drawingPlaneId: number = testContext.createDrawingPlane({
        enabled: true,
        invisible: false,
        name: "test drawing plane",
        normal: [0, 0, 1],
        position: [0, 0, 0],
        tangent: [1, 0, 0],
    });

    testContext.changeDrawingPlane(drawingPlaneId, {
        enabled: false,
        invisible: true,
        name: "changed drawing plane",
        normal: [1, 0, 0],
        position: [1, 0, 0],
        tangent: [0, 0, 1],
    });

    const drawingPlaneData: webvis.DrawingPlaneProperties = testContext.getDrawingPlaneData(drawingPlaneId);

    const drawingPlanes: number[] = testContext.getDrawingPlanes();

    testContext.removeDrawingPlane(drawingPlaneId);

    testContext.registerListener([webvis.EventType.DRAWING_PLANE_CREATED], (event: webvis.DrawingPlaneCreatedEvent) => {
        console.log("Drawing created", event.drawingPlaneId, event.properties);
    });

    testContext.registerListener([webvis.EventType.DRAWING_PLANE_CHANGED], (event: webvis.DrawingPlaneChangedEvent) => {
        console.log("Drawing changed", event.drawingPlaneId, event.properties);
    });

    testContext.registerListener([webvis.EventType.DRAWING_PLANE_REMOVED], (event: webvis.DrawingPlaneRemovedEvent) => {
        console.log("Drawing removed", event.drawingPlaneId);
    });
}
