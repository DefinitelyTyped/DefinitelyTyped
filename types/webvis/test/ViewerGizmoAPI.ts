function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const currentGizmoType: webvis.GizmoType = testViewer.getCurrentGizmoType();

    const availableTrafoModes: number = testViewer.getAvailableGizmoTransformationModes();

    testViewer.setGizmoTransformationMode(webvis.GizmoTransformationMode.TRANSLATION);
    testViewer.setGizmoTransformationMode(webvis.GizmoTransformationMode.ROTATION);
    testViewer.setGizmoTransformationMode(webvis.GizmoTransformationMode.SCALING);

    const trafoMode: webvis.GizmoTransformationMode = testViewer.getGizmoTransformationMode();

    testViewer.showSelectionBoxGizmo();
    testViewer.showSelectionBoxGizmo([1, 1, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

    testViewer.showSelectionBoxGizmoFromVolume();
    testViewer.showSelectionBoxGizmoFromVolume(testContext.createBoxVolume([0, 0, 0], [1, 1, 1]));

    testViewer.showSelectionTransformationGizmo([4, 9]);

    testViewer.showClippingBoxGizmo(0);

    testViewer.hideGizmo();

    const collectionId: Promise<number> = testViewer.createCollectionFromGizmo(false);

    const gizmoSize: [number, number, number] | Float32Array = testViewer.getGizmoSize();

    const gizmoTrafo: [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
    ] | Float32Array = testViewer.getGizmoTransform();

    testViewer.setCORGizmoVisible(true);

    testViewer.showPointMarker([0, 0, 0]);
    testViewer.showPointMarker([0, 0, 0], 2);

    testViewer.showAxisMarker([0, 0, 0, 0, 1, 0]);
    testViewer.showAxisMarker([0, 0, 0, 0, 1, 0], 2);
    testViewer.showAxisMarker([0, 0, 0, 0, 1, 0], 2, 0);

    testViewer.hidePointMarker();
    testViewer.hidePointMarker(2);

    testViewer.hideAllPointMarkers();

    testViewer.hideAllLineMarkers();

    testViewer.hideAllMarkers();

    const activeItem: webvis.ActiveItemInfo = testViewer.getActiveItem();

    testViewer.setActiveItem(1, webvis.ActiveItemType.CLIP_PLANE);
    testViewer.setActiveItem(1, webvis.ActiveItemType.CLIP_ROOM);

    testViewer.showBoxGizmo({
        size: [1, 1, 1],
        color: [1, 0, 0, 1],
        borderColor: [0, 1, 0, 1],
        transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    });

    const boxGizmoProps: webvis.BoxGizmoProperties = testViewer.getBoxGizmoProperties();

    testContext.registerListener([webvis.EventType.ACTIVE_ITEM], (event: webvis.ActiveItemEvent) => {
        console.log("Active item changed", event.itemID, event.itemType);
    });

    testContext.registerListener([webvis.EventType.VIEWER_GIZMO_CHANGED], (event: webvis.ViewerGizmoChangedEvent) => {
        console.log("Gizmo changed", event.gizmoType);
    });

    testContext.registerListener(
        [webvis.EventType.VIEWER_GIZMO_MODE_CHANGED],
        (event: webvis.ViewerGizmoModeChangedEvent) => {
            console.log("Gizmo mode changed", event.gizmoMode);
        },
    );
}
