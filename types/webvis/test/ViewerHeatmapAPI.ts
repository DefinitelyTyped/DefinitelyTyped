function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const heatmapId: number = testViewer.createHeatmap({
        enabled: true,
        position: [0, 0, 0, 0, 2, 0],
        size: [5, 5],
        strength: [1, 1],
        transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1],
        name: "Test heatmap",
    });

    testViewer.changeHeatmap(2, {
        enabled: false,
        position: [0, 0, 0, 0, 2, 0],
        size: [5, 5],
        strength: [2, 2],
        transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1],
        name: "Changed heatmap",
    });

    testViewer.removeHeatmap(3);

    const heatmapProps: webvis.HeatmapProperties = testViewer.getHeatmapData(1);

    const heatmaps: number[] = testViewer.getHeatmaps();

    testViewer.changeGlobalHeatmapConfig({
        colorScheme: webvis.HeatmapColorScheme.BLACKBODY,
        maxValue: 100,
        colorBands: true,
        colorResolution: 5,
        kernel: webvis.HeatmapKernel.LINEAR,
        sizeFactor: 2,
        strengthFactor: 1.5,
    });

    const heatmapConfig: webvis.HeatmapConfig = testViewer.getGlobalHeatmapConfig();

    const heatmapLegend: number[] = testViewer.getHeatmapColorSchemeLegend();

    testContext.registerListener(
        [webvis.EventType.VIEWER_HEATMAP_CREATED],
        (event: webvis.ViewerHeatmapCreatedEvent) => {
            console.log("Heatmap created", event.heatmapId, event.properties);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_HEATMAP_CHANGED],
        (event: webvis.ViewerHeatmapChangedEvent) => {
            console.log("Heatmap changed", event.heatmapId, event.properties);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_HEATMAP_REMOVED],
        (event: webvis.ViewerHeatmapRemovedEvent) => {
            console.log("Heatmap removed", event.heatmapId);
        },
    );

    testContext.registerListener(
        [webvis.EventType.VIEWER_HEATMAP_CONFIG_CHANGED],
        (event: webvis.ViewerHeatmapConfigChangedEvent) => {
            console.log("Heatmap config changed", event.configuration);
        },
    );
}
