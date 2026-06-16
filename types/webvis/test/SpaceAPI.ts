function test(testContext: webvis.ContextAPI): void {
    const emptySpacePromise: Promise<void> = testContext.openSpace();
    const existingSpacePromise: Promise<void> = testContext.openSpace("default/1bb548e6-383d-47a5-ad10-cb7ddb9cbbcc");

    const cloneSpacePromise: Promise<void> = testContext.cloneIntoNewSpace();

    const spaceHandle: Promise<webvis.SpaceHandle> = testContext.requestSpaceHandle(webvis.MemberRole.OWNER);

    testContext.registerListener([webvis.EventType.SPACE_CHANGED], (event: webvis.SpaceChangedEvent) => {
        console.log("Space changed", event.spaceId);
    });
}
