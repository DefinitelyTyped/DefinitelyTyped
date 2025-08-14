function test(testContext: webvis.ContextAPI): void {
    testContext.waitFor("renderingFinished").then(() => {
        console.log("renderingFinished");
    });
}
