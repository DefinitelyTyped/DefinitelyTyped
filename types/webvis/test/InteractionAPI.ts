function test(testContext: webvis.ContextAPI) {
    testContext.setInteractionMode(webvis.InteractionMode.AUX, false);

    const interactionMode: webvis.InteractionMode = testContext.getInteractionMode();

    const isColorComparisonActive: boolean = testContext.isColorComparisonActive();

    testContext.processInteractionInput({
        targetID: 1,
        type: webvis.InteractionType.PICKING,
        modifier: webvis.InteractionModifier.ADD,
    });

    testContext.resetInteractionMode();
    testContext.resetInteractionMode(true);

    testContext.registerListener(
        [webvis.EventType.INTERACTION_MODE_CHANGED],
        (event: webvis.InteractionModeChangedEvent) => {
            console.log("InteractionMode changed", event.mode, event.keepColorCompareActive);
        },
    );
}
