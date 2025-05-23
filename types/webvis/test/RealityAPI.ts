function test(testContext: webvis.ContextAPI): void {
    const connectXRPromise: Promise<void> = testContext.connectXR();
    const connectXRConfigPromise: Promise<void> = testContext.connectXR({
        imageSourceConfig: {
            type: webvis.XRImageSource.DEVICE,
        },
        modelTrackingEnabled: true,
        deviceScreenshotsEnabled: false,
        rayCastingEnabled: false,
        autoShowBackgroundFeed: true,
    });

    const disconnectXRPromise: Promise<void> = testContext.disconnectXR();

    const xrCapabilities: webvis.XRCapability[] = testContext.getXRCapabilities();

    const xrState: webvis.XRState | undefined = testContext.getXRState();

    const enterInitModePromise: Promise<void> = testContext.enterXRInitMode();
    const enterInitModeOptionsPromise: Promise<void> = testContext.enterXRInitMode({
        resetHard: false,
        fitView: true,
        resetInitTemplate: false,
    });

    const xrMembers: number[] = testContext.getXRMembers();

    const startXRSpectatePromise: Promise<void> = testContext.startXRSpectate(0);

    testContext.stopXRSpectate();

    const showBackgroundFeedPromise: Promise<void> = testContext.showXRBackgroundFeed();

    const hideBackgroundFeedPromise: Promise<void> = testContext.hideXRBackgroundFeed();

    testContext.anchorXR();
    testContext.anchorXR({
        anchorToSurface: true,
        xrAnchorOffsetTransform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    });

    testContext.unanchorXR();

    const importInitTemplatePromise: Promise<void> = testContext.importXRInitTemplate("test template");

    const exportInitTemplatePromise: Promise<string> = testContext.exportXRInitTemplate();

    const deviceScreenshotPromise: Promise<string> = testContext.requestXRDeviceScreenshot();

    const xrScanshotPromise: Promise<webvis.XRScanshot> = testContext.requestXRScanshot();

    const setPlaybackSourcePromise: Promise<number> = testContext.setXRPlaybackSource("https://playbacks.com/test");

    testContext.startXRPlayback();

    testContext.stopXRPlayback();

    const setPlaybackFrameRangePromise: Promise<number> = testContext.setXRPlaybackFrameRange(10, 300);

    const seekXRPlaybackPromise: Promise<void> = testContext.seekXRPlayback(34);

    const playbackProperties: webvis.XRPlaybackProperties = testContext.getXRPlaybackProperties();

    const playbackState: webvis.XRPlaybackState = testContext.getXRPlaybackState();

    testContext.setXRPlaybackSpeed(2);

    const setPlaybackBoomerangPromise: Promise<void> = testContext.setXRPlaybackBoomerang(true);

    testContext.registerListener([webvis.EventType.XR_MEMBER_ADDED], (event: webvis.XRMemberAddedEvent) => {
        console.log("XR member added", event.xrMemberId);
    });

    testContext.registerListener([webvis.EventType.XR_MEMBER_REMOVED], (event: webvis.XRMemberRemovedEvent) => {
        console.log("XR member removed", event.xrMemberId);
    });

    testContext.registerListener(
        [webvis.EventType.XR_MODELTRACKER_EDGEIMG_RECEIVED],
        (event: webvis.XRModelTrackerEdgeImgReceivedEvent) => {
            console.log("XR edge img received", event.img);
        },
    );

    testContext.registerListener(
        [webvis.EventType.XR_MODELTRACKER_INFO_RECEIVED],
        (event: webvis.XRModelTrackerInfoReceivedEvent) => {
            console.log("XR info received", event.info);
        },
    );

    testContext.registerListener(
        [webvis.EventType.XR_PLAYBACK_STATE_CHANGED],
        (event: webvis.XRPlaybackStateChangedEvent) => {
            console.log("XR playback state changed", event.xrPlaybackState);
        },
    );

    testContext.registerListener([webvis.EventType.XR_SPECTATE_STARTED], (event: webvis.XRSpectateStartedEvent) => {
        console.log("XR spectate started", event.xrMemberId);
    });

    testContext.registerListener([webvis.EventType.XR_SPECTATE_STOPPED], (event: webvis.XRSpectateStoppedEvent) => {
        console.log("XR spectate stopped");
    });

    testContext.registerListener([webvis.EventType.XR_STATE_CHANGED], (event: webvis.XRStateChangedEvent) => {
        console.log("XR state changed", event.xrState);
    });
}
