function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    testViewer.enableSnapping(true);

    const isSnappingEnabled: boolean = testViewer.isSnappingEnabled();

    testViewer.setInteractionLevel(webvis.ViewerInteractionLevel.NODE);
    testViewer.setInteractionLevel(webvis.ViewerInteractionLevel.TOPOLOGY);

    const interactionLevel: webvis.ViewerInteractionLevel = testViewer.getInteractionLevel();

    testContext.registerListener([webvis.EventType.BACKGROUND_CLICKED], (event: webvis.BackgroundClickedEvent) => {
        console.log("Background clicked", event.pointerInfo, event.originalEvent);
    });

    testContext.registerListener([webvis.EventType.NODE_CLICKED], (event: webvis.NodeClickedEvent) => {
        console.log("Node clicked", event.targetNodeID, event.pointerInfo, event.originalEvent);
    });

    testContext.registerListener([webvis.EventType.NODE_POINTER_ENTER], (event: webvis.NodePointerEnterEvent) => {
        console.log("Node pointer enter", event.targetNodeID, event.pointerInfo, event.originalEvent);
    });

    testContext.registerListener([webvis.EventType.NODE_POINTER_OUT], (event: webvis.NodePointerOutEvent) => {
        console.log("Node pointer out", event.targetNodeID, event.pointerInfo, event.originalEvent);
    });

    testContext.registerListener([webvis.EventType.NODE_POINTER_OVER], (event: webvis.NodePointerOverEvent) => {
        console.log("Node pointer over", event.targetNodeID, event.pointerInfo, event.originalEvent);
    });

    testContext.registerListener(
        [webvis.EventType.TOPOLOGY_POINTER_ENTER],
        (event: webvis.TopologyPointerEnterEvent) => {
            console.log("Topo pointer enter", event.topologyHandle, event.pointerInfo);
        },
    );

    testContext.registerListener([webvis.EventType.TOPOLOGY_POINTER_OUT], (event: webvis.TopologyPointerOutEvent) => {
        console.log("Topo pointer out", event.topologyHandle, event.pointerInfo);
    });
}
