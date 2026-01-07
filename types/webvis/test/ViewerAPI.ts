function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const relatedContext: webvis.ContextAPI = testViewer.getContext();

    const viewerId: string = testViewer.getID();

    const settingChanged: boolean = testViewer.changeSetting(webvis.ViewerSettingStrings.AA_SETTING_ENABLED, true);

    const booleanSetting: boolean = testViewer.readSetting(webvis.ViewerSettingStrings.AA_SETTING_ENABLED);
    const numberSetting: number = testViewer.readSetting(webvis.ViewerSettingStrings.CAMERA_FIELD_OF_VIEW);

    testViewer.resetSetting(webvis.ViewerSettingStrings.AA_SETTING_ENABLED);

    const fitPromise: Promise<void> = testViewer.fitView();

    const fitViewUpPromise: Promise<void> = testViewer.fitView(
        [0, 0, -1],
        [0, 1, 0],
    );

    const fitViewUpTransitionPromise: Promise<void> = testViewer.fitView(
        [0, 0, -1],
        [0, 1, 0],
        100,
    );

    const fitNodePromise: Promise<void> = testViewer.fitViewToNode(
        2,
    );

    const fitNodeViewUpPromise: Promise<void> = testViewer.fitViewToNode(
        2,
        [0, 0, -1],
        [0, 1, 0],
    );

    const fitNodeViewUpTransitionPromise: Promise<void> = testViewer.fitViewToNode(
        2,
        [0, 0, -1],
        [0, 1, 0],
        100,
    );

    const fitAuxPromise: Promise<void> = testViewer.fitViewToAuxNode(
        23,
    );

    const fitAuxTransitionPromise: Promise<void> = testViewer.fitViewToAuxNode(
        23,
        100,
    );

    const fitVolumePromise: Promise<void> = testViewer.fitViewToVolume(
        testContext.createBoxVolume([0, 0, 0], [1, 1, 1]),
    );

    const fitVolumeViewUpPromise: Promise<void> = testViewer.fitViewToVolume(
        testContext.createBoxVolume([0, 0, 0], [1, 1, 1]),
        [0, 0, -1],
        [0, 1, 0],
    );

    const fitVolumeViewUpTransitionPromise: Promise<void> = testViewer.fitViewToVolume(
        testContext.createBoxVolume([0, 0, 0], [1, 1, 1]),
        [0, 0, -1],
        [0, 1, 0],
        100,
    );

    const fitRectPromise: Promise<void> = testViewer.fitViewToRectangle(
        50,
        50,
        300,
        300,
    );

    const fitRectTransitionPromise: Promise<void> = testViewer.fitViewToRectangle(
        50,
        50,
        300,
        300,
        100,
    );

    const fitDirPromise: Promise<void> = testViewer.fitViewToDirection(webvis.ViewDirection.LEFT_BOTTOM);
    const fitDirTransitionPromise: Promise<void> = testViewer.fitViewToDirection(webvis.ViewDirection.LEFT_BOTTOM, 100);

    const fitVolumeDirPromise: Promise<void> = testViewer.fitViewToVolumeFromDirection(
        testContext.createBoxVolume([0, 0, 0], [1, 1, 1]),
        webvis.ViewDirection.LEFT_BOTTOM,
    );

    const fitVolumeDirTransitionPromise: Promise<void> = testViewer.fitViewToVolumeFromDirection(
        testContext.createBoxVolume([0, 0, 0], [1, 1, 1]),
        webvis.ViewDirection.LEFT_BOTTOM,
        100,
    );

    const cor: [number, number, number] | Float32Array = testViewer.getCenterOfRotation();

    const setCORPromise: Promise<void> = testViewer.setCenterOfRotation([0, 0, 0]);

    testViewer.restoreInitView();

    const setViewPromise: Promise<void> = testViewer.setView([0, 0, 2], [0, 0, 0]);
    const setViewUpPromise: Promise<void> = testViewer.setView([0, 0, 2], [0, 0, 0], [0, 1, 0]);
    const setViewUpTransitionPromise: Promise<void> = testViewer.setView([0, 0, 2], [0, 0, 0], [0, 1, 0], 100);

    const setViewMatPromise: Promise<void> = testViewer.setViewMatrix([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    const setViewMatTransitionPromise: Promise<void> = testViewer.setViewMatrix([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
    ], 100);

    const animViewMatPromise: Promise<void> = testViewer.animateViewToViewmatrix([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
    ]);
    const animViewMatTransitionPromise: Promise<void> = testViewer.animateViewToViewmatrix([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
    ], 100);

    const camPos: [number, number, number] | Float32Array = testViewer.getCameraPosition();

    const projectionType: webvis.CameraProjectionType = testViewer.getCameraProjectionType();

    const viewMatrix: [
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
    ] | Float32Array = testViewer.getViewMatrix();

    testViewer.setProjectionMatrix([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

    const projectionMatrix: [
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
    ] | Float32Array = testViewer.getProjectionMatrix();

    testViewer.flipAuxToView();

    testViewer.enableNavigation();
    testViewer.enableNavigation(false);

    const topoHandlesInRect: Promise<webvis.TopologyHandle[]> = testViewer.requestTopologyHandlesByRect(
        50,
        50,
        100,
        100,
    );

    const nodesInRect: Promise<number[]> = testViewer.requestNodeIdsByRect(
        50,
        50,
        100,
        100,
    );

    const nodesInRectWithOverlap: Promise<number[]> = testViewer.requestNodeIdsByRect(
        50,
        50,
        100,
        100,
        true,
    );

    const screenshot: Promise<string> = testViewer.requestScreenshot();

    const screenshotSize: Promise<string> = testViewer.requestScreenshot(
        100,
        100,
    );

    const screenshotSizeMime: Promise<string> = testViewer.requestScreenshot(
        100,
        100,
        "image/png",
    );

    const screenshotSizeMimeReset: Promise<string> = testViewer.requestScreenshot(
        100,
        100,
        "image/png",
        true,
    );

    testViewer.enterColorCompareMode();

    testViewer.leaveColorCompareMode();

    testViewer.forceRenderMode(webvis.RenderMode.FacesTopology);

    testContext.registerListener([webvis.EventType.MODEL_RENDERED], (event: webvis.ModelRenderedEvent) => {
        console.log("Model rendered");
    });

    testContext.registerListener([webvis.EventType.PROGRESS_CHANGED], (event: webvis.ProgressChangedEvent) => {
        console.log("Progress changed", event.progressState);
    });

    testContext.registerListener([webvis.EventType.VIEW_CHANGED], (event: webvis.ViewChangedEvent) => {
        console.log("View changed", event.matrix);
    });

    testContext.registerListener([webvis.EventType.VIEWER_CREATED], (event: webvis.ViewerCreatedEvent) => {
        console.log("Viewer created", event.viewerId);
    });

    testContext.registerListener(
        [webvis.EventType.VIEWER_NAVIGATION_ENDED],
        (event: webvis.ViewerNavigationEndedEvent) => {
            console.log("Navigation ended", event.viewerId);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_NAVIGATION_STARTED],
        (event: webvis.ViewerNavigationStartedEvent) => {
            console.log("Navigation started", event.viewerId);
        },
    );

    testContext.registerListener([webvis.EventType.VIEWER_REMOVED], (event: webvis.ViewerRemovedEvent) => {
        console.log("Viewer removed", event.viewerId);
    });

    testContext.registerListener([webvis.EventType.VIEWPORT_CHANGED], (event: webvis.ViewportChangedEvent) => {
        console.log("Viewport changed", event.width, event.height);
    });
}
