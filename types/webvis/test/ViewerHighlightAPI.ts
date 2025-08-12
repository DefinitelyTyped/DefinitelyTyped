function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const topoHandle0: webvis.TopologyHandle = {
        shapeInstanceID: 1,
        entityID: 1,
        entityType: webvis.EntityType.EDGE,
    };

    const entityHighlightId: Promise<number> = testViewer.highlightEntity(topoHandle0, {
        color: [1, 0, 0, 1],
        clipHighlight: true,
        facesHighlightOnTop: true,
        exclusiveClipplanes: [1, 3],
    });

    testViewer.dehighlightEntity();
    testViewer.dehighlightEntity(3);

    const arcHighlightId: number = testViewer.highlightCircularArc(
        testContext.createCircularArcDescriptor([0, 0, 0], [1, 1, 1], [2, 2, 2]).descriptor,
    );

    const boxHighlightId: number = testViewer.highlightBBox([0, 0, 0], [5, 5, 5]);

    const pointHighlightId = testViewer.highlightPoint([0, 0, 0], 0);

    testViewer.highlightLine([0, 0, 0, 0, 2, 0], 1, 0);
}
