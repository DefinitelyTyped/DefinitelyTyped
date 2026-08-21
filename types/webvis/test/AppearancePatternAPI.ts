function test(testContext: webvis.ContextAPI): void {
    const patternId: number | undefined = testContext.createAppearancePattern({
        type: webvis.AppearancePatternType.STRIPES,
        foregroundColor: [1, 0, 0, 1],
        backgroundColor: [0, 0, 0, 0],
        scale: 0.005,
        rotation: 0,
        offset: [0, 0],
        weight: 0.5,
        distortRatio: 0.5,
        distortStrength: 0,
        name: "test pattern",
    });

    testContext.changeAppearancePattern(patternId!, {
        type: webvis.AppearancePatternType.DOTS,
        foregroundColor: [1, 1, 0, 1],
        backgroundColor: [1, 0, 0, 0],
        scale: 0.05,
        rotation: 1.57,
        offset: [0, 0],
        weight: 0.7,
        distortRatio: 0.7,
        distortStrength: 0.1,
        name: "changed pattern",
    });

    testContext.removeAppearancePattern(patternId!);

    testContext.registerListener(
        [webvis.EventType.APPEARANCE_PATTERN_CREATED],
        (event: webvis.AppearancePatternCreatedEvent) => {
            console.log("Pattern created", event.patternId, event.properties);
        },
    );

    testContext.registerListener(
        [webvis.EventType.APPEARANCE_PATTERN_CHANGED],
        (event: webvis.AppearancePatternChangedEvent) => {
            console.log("Pattern changed", event.patternId, event.properties);
        },
    );

    testContext.registerListener(
        [webvis.EventType.APPEARANCE_PATTERN_REMOVED],
        (event: webvis.AppearancePatternRemovedEvent) => {
            console.log("Pattern removed", event.patternId);
        },
    );
}
