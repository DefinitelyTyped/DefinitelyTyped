function test(testContext: webvis.ContextAPI): void {
    testContext.registerListener(
        [webvis.EventType.LOG_EVENT],
        (event: webvis.LogEvent) => {
            if (event.level === webvis.LogLevel.WARNING) {
                console.warn(event.message);
            }
        },
    );
}
