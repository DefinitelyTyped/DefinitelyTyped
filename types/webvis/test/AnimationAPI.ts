function test(testContext: webvis.ContextAPI): void {
    testContext.createAnimationFrames("rotate", [
        { rotation: [0, 0, 0] },
        { rotation: [0, 180, 0] },
        { rotation: [0, 360, 0] },
    ]);

    testContext.removeAnimationFrames("rotate");

    testContext.registerListener(
        [webvis.EventType.ANIMATION_FRAMES_CREATED],
        (event: webvis.AnimationFramesCreatedEvent) => {
            console.log("Animation frames created", event.name, event.frames);
        },
    );

    testContext.registerListener(
        [webvis.EventType.ANIMATION_FRAMES_REMOVED],
        (event: webvis.AnimationFramesRemovedEvent) => {
            console.log("Animation frames removed", event.name);
        },
    );

    testContext.registerListener([webvis.EventType.ANIMATION_STARTED], (event: webvis.AnimationStartedEvent) => {
        console.log("Animation started", event.animationName, event.targetNodeID, event.targetType, event.options);
    });

    testContext.registerListener([webvis.EventType.ANIMATION_ENDED], (event: webvis.AnimationEndedEvent) => {
        console.log("Animation ended", event.animationName, event.targetNodeID, event.targetType, event.options);
    });

    testContext.registerListener([webvis.EventType.ANIMATION_ITERATION], (event: webvis.AnimationIterationEvent) => {
        console.log("Animation iteration", event.animationName, event.targetNodeID, event.targetType, event.iteration);
    });
}
