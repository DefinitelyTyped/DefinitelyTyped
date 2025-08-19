function test(testContext: webvis.ContextAPI): void {
    const topoHandle0: webvis.TopologyHandle = {
        shapeInstanceID: 1,
        entityID: 1,
        entityType: webvis.EntityType.EDGE,
    };

    const topoHandle1: webvis.TopologyHandle = {
        shapeInstanceID: 1,
        entityID: 3,
        entityType: webvis.EntityType.EDGE,
    };

    const origHandle0: webvis.OriginalTopologyHandle = {
        entityID: 3002,
    };

    const origHandle1: webvis.OriginalTopologyHandle = {
        entityID: 2345,
    };

    const addTopoToSelectionPromise: Promise<void> = testContext.addTopologyToSelection(
        topoHandle0,
    );

    const addToposToSelectionPromise: Promise<void> = testContext.addTopologyToSelection(
        [topoHandle0, topoHandle1],
    );

    const clearTopoSelectionPromise: Promise<void> = testContext.clearTopologySelection();

    const arcDescriptor: webvis.TopologyDescriptor<webvis.TopologySubType.CIRCULAR_ARC> = testContext
        .createCircularArcDescriptor(
            [0, 0, 0],
            [1, 1, 1],
            [2, 2, 2],
        );

    const pointDescriptor: webvis.TopologyDescriptor<webvis.TopologySubType.POINT> = testContext.createPointDescriptor(
        [1, 1, 1],
    );

    const selectedTopos: webvis.TopologyHandle[] = testContext.getSelectedTopologyHandles();

    const topoType: webvis.TopologyType = testContext.getTopologyType(topoHandle0);

    const shapeHandle: webvis.TopologyHandle = testContext.getShapeHandle(topoHandle0);

    const isTopoSelected: boolean = testContext.isTopologySelected(topoHandle1);

    const internalHandles: Promise<Array<webvis.TopologyHandle | undefined>> = testContext
        .mapOriginalToInternalTopologyHandles(
            1,
            [origHandle0, origHandle1],
        );

    const origHandles: Promise<Array<webvis.OriginalTopologyHandle | undefined>> = testContext
        .mapInternalToOriginalTopologyHandles(
            [topoHandle0, topoHandle1],
        );

    const removeTopoFromSelectionPromise: Promise<void> = testContext.removeTopologyFromSelection(topoHandle0);
    const removeToposFromSelectionPromise: Promise<void> = testContext.removeTopologyFromSelection([
        topoHandle0,
        topoHandle1,
    ]);

    const topoDescriptor: Promise<webvis.TopologyDescriptor> = testContext.requestTopologyDescriptor(
        topoHandle0,
    );

    const boxDescriptor: Promise<webvis.TopologyDescriptor<webvis.TopologySubType.BOX>> = testContext
        .requestBoxDescriptor(
            [2, 3, 4],
        );

    const setTopoPropPromise: Promise<PromiseSettledResult<void>[]> = testContext.setTopologyProperty(
        topoHandle0,
        webvis.TopologyProperty.COLOR,
        [1, 0, 0, 1],
    );

    const setToposPropPromise: Promise<PromiseSettledResult<void>[]> = testContext.setTopologyProperty(
        [topoHandle0, topoHandle1],
        webvis.TopologyProperty.HIGHLIGHTED,
        true,
    );

    const setTopoSelectionPromise: Promise<void> = testContext.setTopologySelection(topoHandle0);
    const setToposSelectionPromise: Promise<void> = testContext.setTopologySelection([topoHandle0, topoHandle1]);
}
