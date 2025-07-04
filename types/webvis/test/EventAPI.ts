function test(testContext: webvis.ContextAPI): void {
    const eventListenerId: number = testContext.registerListener(
        [webvis.EventType.NODE_CHANGED],
        (event: webvis.NodeChangedEvent) => {
            console.log(event);
        },
        0,
        true,
    );

    testContext.unregisterListener(eventListenerId);
}
