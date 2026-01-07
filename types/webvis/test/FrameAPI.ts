function test(testContext: webvis.ContextAPI): void {
    const frameListener: webvis.FrameListener = (time: number, elapsed: number) => {
        console.log(time, elapsed);
    };

    testContext.registerFrameListener(frameListener);
    testContext.unregisterFrameListener(frameListener);
}
