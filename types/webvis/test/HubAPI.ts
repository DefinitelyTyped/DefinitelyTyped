function test(testContext: webvis.ContextAPI): void {
    const contentTypes: Promise<webvis.ContentType[]> = testContext.requestSupportedContentTypes();

    const renderSetups: Promise<{ name: string; value: string }[]> = testContext.requestSupportedRenderSetups();

    const serviceStates: Promise<Map<webvis.ServiceType, webvis.ServiceState>> = testContext.requestServiceStates();

    const hubVersion: Promise<string | undefined> = testContext.requestHubVersion();

    testContext.registerListener([webvis.EventType.SERVICE_ERROR], (event: webvis.ServiceErrorEvent) => {
        console.log("Service error", event.service, event.state);
    });

    testContext.registerListener([webvis.EventType.SERVICE_STATE_CHANGED], (event: webvis.ServiceStateChangedEvent) => {
        console.log("Service state changed", event.service, event.state);
    });
}
