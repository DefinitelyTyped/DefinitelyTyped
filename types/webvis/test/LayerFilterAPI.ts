function test(testContext: webvis.ContextAPI): void {
    const registeredLayerFilters: { [key: string]: boolean } = testContext.getRegisteredLayerFilters();

    const enabledLayerFilters: string[] = testContext.getEnabledLayerFilters();

    const setLayerFilterResults: webvis.SetLayerFilterEnabledResult = testContext.setLayerFilterEnabled(
        "test-layer-filter",
        true,
    );

    const isPartOfEnabledLayerFilter: Promise<boolean> = testContext.isNodePartOfEnabledLayers(1);

    testContext.registerListener([webvis.EventType.LAYERFILTER_CHANGED], (event: webvis.LayerFilterChangedEvent) => {
        console.log("LayerFilter changed", event.name, event.enabled);
    });

    testContext.registerListener(
        [webvis.EventType.LAYERFILTER_REGISTERED],
        (event: webvis.LayerFilterRegisteredEvent) => {
            console.log("LayerFilter registered", event.name, event.enabled);
        },
    );

    testContext.registerListener(
        [webvis.EventType.LAYERFILTER_UNREGISTERED],
        (event: webvis.LayerFilterUnregisteredEvent) => {
            console.log("LayerFilter unregistered", event.name);
        },
    );
}
