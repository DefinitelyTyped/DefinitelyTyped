function test(testContext: webvis.ContextAPI): void {
    testContext.createExplosion(5);

    testContext.performExplosion(0.5);

    testContext.endExplosion();

    testContext.registerListener([webvis.EventType.EXPLOSION_STARTED], (event: webvis.ExplosionStartedEvent) => {
        console.log("Explosion started", event.center);
    });

    testContext.registerListener([webvis.EventType.EXPLOSION_FINISHED], (event: webvis.ExplosionFinishedEvent) => {
        console.log("Explosion finished");
    });

    testContext.registerListener([webvis.EventType.EXPLOSION_CHANGED], (event: webvis.ExplosionChangedEvent) => {
        console.log("Explosion finished", event.explosionFactor);
    });
}
