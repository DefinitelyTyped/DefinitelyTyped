function test(testContext: webvis.ContextAPI): void {
    const clipPlaneId: number = testContext.createClipPlane({
        animation: null,
        clippedNodes: [],
        enabled: true,
        excludedNodes: [],
        invisible: false,
        normal: [0, 1, 0],
        position: [0, 0, 0],
        name: "test clip plane",
        tangent: undefined,
        thickness: 0,
        transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    });

    const changedClipPlaneProps: webvis.ClipPlaneProperties = testContext.changeClipPlane(clipPlaneId, {
        animation: null,
        clippedNodes: [],
        enabled: true,
        excludedNodes: [],
        invisible: false,
        normal: [0, 1, 0],
        position: [0, 0, 0],
        name: "changed clip plane",
        tangent: undefined,
        thickness: 0,
        transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    });

    const clipPlanes: number[] = testContext.getClipPlanes();

    const clipPlaneProps: Promise<webvis.ClipPlaneProperties> = testContext.requestClipPlaneData(clipPlaneId);

    const clipPlaneRemoveState: webvis.RemoveState = testContext.removeClipPlane(clipPlaneId, false);

    const clipRoomId = testContext.createClippingRoom({
        enabled: true,
        invisible: false,
        name: undefined,
        size: [1, 1, 1],
        transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    });

    const changedClipRoomProps: webvis.ClipRoomProperties = testContext.changeClippingRoom({
        enabled: true,
        invisible: false,
        name: undefined,
        size: [1, 1, 1],
        transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    });

    const clipRoomRemoveState: webvis.RemoveState = testContext.removeClippingRoom(false);

    const clipRoomId2: number | undefined = testContext.getClipRoom();

    const clipRoomProps: Promise<webvis.ClipRoomProperties> = testContext.requestClipRoomData();

    testContext.clipOtherParts(1);
    testContext.clipOtherParts([5, 6, 7]);

    testContext.createCapping(clipPlaneId);

    testContext.enableCapping(clipPlaneId);

    testContext.disableCapping(clipPlaneId);

    testContext.removeCapping(clipPlaneId);

    testContext.registerListener([webvis.EventType.CLIPPLANE_CREATED], (event: webvis.ClipPlaneCreatedEvent) => {
        console.log("ClipPlane created", event.clipPlaneID, event.properties);
    });

    testContext.registerListener([webvis.EventType.CLIPPLANE_CHANGED], (event: webvis.ClipPlaneChangedEvent) => {
        console.log("ClipPlane changed", event.clipPlaneID, event.properties);
    });

    testContext.registerListener([webvis.EventType.CLIPPLANE_REMOVED], (event: webvis.ClipPlaneRemovedEvent) => {
        console.log("ClipPlane removed", event.clipPlaneID);
    });

    testContext.registerListener([webvis.EventType.CLIPPING_ROOM_CREATED], (event: webvis.ClippingRoomCreatedEvent) => {
        console.log("ClipRoom created", event.clipRoomID, event.properties);
    });

    testContext.registerListener([webvis.EventType.CLIPPING_ROOM_CHANGED], (event: webvis.ClippingRoomChangedEvent) => {
        console.log("ClipRoom changed", event.clipRoomID, event.properties);
    });

    testContext.registerListener([webvis.EventType.CLIPPING_ROOM_REMOVED], (event: webvis.ClippingRoomRemovedEvent) => {
        console.log("ClipRoom removed", event.clipRoomID);
    });
}
